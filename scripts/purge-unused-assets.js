const fs = require('fs')
const path = require('path')
const glob = require('glob')

const CONFIG = {
  APPS_DIR: path.join(__dirname, '..', 'apps'),
  ASSET_EXTENSIONS: ['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp', 'ico'],
  SOURCE_EXTENSIONS: ['js', 'jsx', 'ts', 'tsx', 'md', 'css', 'scss'],
  OUTPUT_FILE: path.join(__dirname, 'unused-assets-report.txt'),
  ASSETS_SUBDIR: 'public/assets',
  SRC_SUBDIR: 'src',
  DRY_RUN: false,
}

class AssetCleaner {
  constructor(config = CONFIG) {
    this.config = config
  }

  isAssetUsed(assetFile, srcFiles, appDir) {
    const assetPath = path.relative(appDir, assetFile)
    const assetName = path.basename(assetFile)
    const assetNameNoExt = path.basename(assetFile, path.extname(assetFile))

    const searchTerms = [
      assetName,
      assetNameNoExt,
      assetPath,
      assetPath.replace(/\\/g, '/'),
    ]

    return srcFiles.some((srcFile) => {
      const content = this.readFileContent(srcFile)
      return searchTerms.some((term) => {
        return (
          content.includes(`"${term}"`) ||
          content.includes(`'${term}'`) ||
          content.includes(`\`${term}\``) ||
          content.includes(`(${term})`) ||
          content.includes(`/${term}`)
        )
      })
    })
  }

  readFileContent(filePath) {
    try {
      return fs.readFileSync(filePath, 'utf-8')
    } catch (error) {
      console.warn(`⚠️  Could not read ${filePath}: ${error.message}`)
      return ''
    }
  }

  discoverApps() {
    try {
      if (!fs.existsSync(this.config.APPS_DIR)) {
        console.error(`❌ Apps directory not found: ${this.config.APPS_DIR}`)
        return []
      }

      const appNames = fs
        .readdirSync(this.config.APPS_DIR, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name)

      const validApps = appNames
        .map((name) => this.createAppConfig(name))
        .filter((app) => this.validateApp(app))

      console.log(
        `Found ${validApps.length} valid apps: ${validApps.map((a) => a.name).join(', ')}`,
      )
      return validApps
    } catch (error) {
      console.error(`❌ Error discovering apps: ${error.message}`)
      return []
    }
  }

  createAppConfig(appName) {
    const appDir = path.join(this.config.APPS_DIR, appName)
    return {
      name: appName,
      dir: appDir,
      assetsDir: path.join(appDir, this.config.ASSETS_SUBDIR),
      srcDir: path.join(appDir, this.config.SRC_SUBDIR),
    }
  }

  validateApp(app) {
    const hasAssets = fs.existsSync(app.assetsDir)
    const hasSrc = fs.existsSync(app.srcDir)

    if (!hasAssets) console.warn(`⚠️  ${app.name}: No assets directory`)
    if (!hasSrc) console.warn(`⚠️  ${app.name}: No src directory`)

    return hasAssets && hasSrc
  }

  getFiles(dir, extensions) {
    try {
      const pattern = `${dir}/**/*.{${extensions.join(',')}}`
      return glob.sync(pattern)
    } catch (error) {
      console.error(`❌ Error scanning ${dir}: ${error.message}`)
      return []
    }
  }

  scanApp(app) {
    console.log(`\n🔍 Scanning ${app.name}...`)

    const assetFiles = this.getFiles(
      app.assetsDir,
      this.config.ASSET_EXTENSIONS,
    )
    const srcFiles = this.getFiles(app.srcDir, this.config.SOURCE_EXTENSIONS)

    console.log(
      `  Assets: ${assetFiles.length}, Source files: ${srcFiles.length}`,
    )

    if (assetFiles.length === 0) {
      console.log(`  No assets to check`)
      return []
    }

    const unusedAssets = assetFiles
      .filter((asset) => !this.isAssetUsed(asset, srcFiles, app.dir))
      .map((asset) => path.relative(app.dir, asset))

    console.log(`  Unused assets: ${unusedAssets.length}`)
    return unusedAssets
  }

  deleteAssets(unusedAssets, appDir) {
    let deletedCount = 0

    if (this.config.DRY_RUN) {
      console.log(`🔍 DRY RUN - Would delete ${unusedAssets.length} files:`)
      unusedAssets.forEach((asset) => {
        console.log(`  Would delete: ${asset}`)
      })
      return 0
    }

    unusedAssets.forEach((asset) => {
      const fullPath = path.join(appDir, asset)
      try {
        fs.unlinkSync(fullPath)
        console.log(`  ✅ Deleted: ${asset}`)
        deletedCount++
      } catch (error) {
        console.error(`  ❌ Failed to delete ${asset}: ${error.message}`)
      }
    })

    return deletedCount
  }

  generateReport(results) {
    const totalUnused = results.reduce(
      (sum, r) => sum + r.unusedAssets.length,
      0,
    )
    const totalDeleted = results.reduce((sum, r) => sum + r.deletedCount, 0)

    const content = [
      'UNUSED ASSETS REPORT',
      '===================',
      '',
      ...results.map((result) =>
        [
          `${result.appName}:`,
          ...result.unusedAssets.map((asset) => `  ${asset}`),
          `  Total: ${result.unusedAssets.length}`,
          '',
        ].join('\n'),
      ),
      `Total unused: ${totalUnused}`,
      `Total deleted: ${totalDeleted}`,
      `Generated: ${new Date().toISOString()}`,
    ].join('\n')

    try {
      fs.writeFileSync(this.config.OUTPUT_FILE, content)
      console.log(`\n📄 Report saved: ${this.config.OUTPUT_FILE}`)
    } catch (error) {
      console.error(`❌ Failed to save report: ${error.message}`)
    }

    return { totalUnused, totalDeleted }
  }

  run() {
    console.log('🚀 Starting asset cleanup...')
    console.log(`Mode: ${this.config.DRY_RUN ? 'DRY RUN' : 'DELETE'}`)

    const apps = this.discoverApps()
    if (apps.length === 0) {
      console.log('❌ No valid apps found')
      return
    }

    const results = apps.map((app) => {
      const unusedAssets = this.scanApp(app)
      const deletedCount =
        unusedAssets.length > 0 ? this.deleteAssets(unusedAssets, app.dir) : 0

      return {
        appName: app.name,
        unusedAssets,
        deletedCount,
      }
    })

    const summary = this.generateReport(results)

    console.log('\n📊 Summary:')
    console.log(`  Unused assets: ${summary.totalUnused}`)
    console.log(`  Deleted: ${summary.totalDeleted}`)
    console.log('✅ Done!')
  }
}

function main() {
  const config = {
    ...CONFIG,
    DRY_RUN:
      process.argv.includes('--dry-run') || process.env.DRY_RUN === 'true',
  }

  const cleaner = new AssetCleaner(config)
  cleaner.run()
}

if (require.main === module) {
  main()
}

module.exports = AssetCleaner
