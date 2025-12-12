# Team Warp Prompts

This directory contains custom Warp prompts for the team. These prompts help automate common workflows using Warp's Agent Mode.

## Available Prompts

### 1. Analyze Changeset for @filecoin-foundation/ui-filecoin

**File:** `changeset-analyze.yaml`

Analyzes code changes to determine the appropriate version bump and generate a changeset summary.

**Arguments:**

- `changes` - Describe or paste the git diff
- `current_version` - Current version of the package
- `breaking` - Yes/No for breaking changes
- `new_features` - Yes/No for new features
- `bug_fixes` - Yes/No for bug fixes

### 2. Create Changeset

**File:** `changeset-create.yaml`

Runs `npm run changeset` with the bump type and summary already determined from analysis.

**Arguments:**

- `bump_type` - major/minor/patch
- `summary` - Changeset summary text

## How to Add These Prompts to Your Warp

Since Warp doesn't currently support automatic import from version control, each team member needs to manually add these prompts to their Warp Drive:

### Option 1: Manual Creation (Recommended)

1. Open Warp Drive (CMD+D or click the Warp Drive icon)
2. Click the + button and select "Prompt"
3. Copy the fields from the YAML files above:
   - Name
   - Description
   - Query (the text under `query:`)
   - Arguments (name, description, type, values, default)
4. **Share with team**: Make sure to share the prompt with your team so everyone has access
5. Repeat for each prompt

### Option 2: Export/Import (if available)

1. One team member creates all prompts in Warp Drive
2. Export them using Warp Drive's export feature
3. Share the exported files with the team
4. Team members import into their Warp Drive

## Usage

Once installed, you can access these prompts:

- Via Command Palette (CMD+P) - search for the prompt name
- Via Command Search (CTRL+R) - type "prompts:"
- From Warp Drive directly

### Typical Workflow

1. Make changes to `@filecoin-foundation/ui-filecoin`
2. Run the "Analyze Changeset" prompt with your changes
3. Agent Mode will tell you the recommended bump type and summary
4. Run the "Create Changeset" prompt with those values
5. Agent Mode will execute `npm run changeset` with the correct inputs

## Notes

- These YAML files serve as documentation and reference for the team
- Updates to prompts should be made in Warp Drive (they sync automatically for team members)
- Consider updating these YAML files when prompts are significantly changed
