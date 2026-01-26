export interface NavLinkItem {
  label: string
  href: string
}

export function getActiveLink(
  links: readonly NavLinkItem[],
  pathname: string
): NavLinkItem | undefined {
  return links
    .slice()
    .sort((a, b) => b.href.length - a.href.length)
    .find((link) => {
      if (link.href === '/') {
        return pathname === '/'
      }
      return pathname.startsWith(link.href)
    })
}
