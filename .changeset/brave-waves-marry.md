---
"@filecoin-foundation/ui-filecoin": patch
---

This PR refactors the `NavigationMainLink` component to properly differentiate between external and internal links, ensuring consistent link behavior across the navigation system. Previously, `NavigationMainLink` used `SmartTextLink` for all links, while `NavigationMenuLink` already had logic to distinguish between external and internal links.
