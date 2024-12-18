const TOUCH_TARGET_STYLES = {
  categorySidebar: { touchAreaPadding: 'px-4', touchAreaOffset: '-ml-4' },
  copyToClipboard: { touchAreaPadding: 'p-2' },
  desktopNavigation: { touchAreaOffset: '-mr-4' },
  formCheckbox: {
    visibleElementSize: 'size-5',
    touchAreaPadding: 'p-3.5',
    touchAreaOffset: '-m-3.5',
  },
  mainNavItem: { touchAreaPadding: 'px-4' },
  shareArticle: { touchAreaPadding: 'p-2', touchAreaOffset: '-m-2' },
  social: { touchAreaPadding: 'p-2', touchAreaOffset: '-m-2 sm:mx-0' },
  tooltipHeader: { touchAreaPadding: 'p-2', touchAreaOffset: '-m-2' },
  tooltipHeaderIcon: { touchAreaPadding: 'p-1.5' },
} as const

type TouchTargetStyleKey = keyof typeof TOUCH_TARGET_STYLES

export function getTouchTargetStyles<T extends TouchTargetStyleKey>(
  key: T,
): (typeof TOUCH_TARGET_STYLES)[T] {
  return TOUCH_TARGET_STYLES[key]
}
