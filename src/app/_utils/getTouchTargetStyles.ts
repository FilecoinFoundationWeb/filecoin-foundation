type TouchTargetConfig = {
  touchAreaPadding?: string
  touchAreaOffset?: string
  visibleElementSize?: string
}

const TOUCH_TARGETS = {
  categorySidebar: {
    touchAreaPadding: 'px-4',
    touchAreaOffset: '-ml-4',
  },
  copyToClipboard: {
    touchAreaPadding: 'p-2',
  },
  desktopNavigation: {
    touchAreaOffset: '-mr-4',
  },
  formCheckbox: {
    visibleElementSize: 'size-5',
    touchAreaPadding: 'p-3.5',
    touchAreaOffset: '-m-3.5',
  },
  mainNavItem: {
    touchAreaPadding: 'px-4',
  },
  shareArticle: {
    touchAreaPadding: 'p-2',
    touchAreaOffset: '-m-2',
  },
  social: {
    touchAreaPadding: 'p-2',
    touchAreaOffset: '-m-2 sm:mx-0',
  },
  tooltipHeader: {
    touchAreaPadding: 'p-2',
    touchAreaOffset: '-m-2',
  },
  tooltipHeaderIcon: {
    touchAreaPadding: 'p-1.5',
  },
} as const

export function getTouchTargetStyles(
  key: keyof typeof TOUCH_TARGETS,
): TouchTargetConfig {
  return TOUCH_TARGETS[key]
}
