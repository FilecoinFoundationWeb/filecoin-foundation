## 📝 Description

This PR moves the `SlideOver` component from the `filecoin-site` app to the `ui-filecoin` package to make it reusable across the monorepo.

- **Type:** Refactor

## 🛠️ Key Changes

- Moved `SlideOver` component to `packages/ui-filecoin/src/`
- Updated import in `MobileNavigation.tsx` to reference the new location
- Exported component from `ui-filecoin` package

## 📌 To-Do Before Merging

- [ ] Run tests to ensure no regressions
- [ ] Verify mobile navigation functionality

## 🧪 How to Test

- **Setup:** Run `npm install` in the root directory
- **Steps to Test:**
  1. Start the development server for filecoin-site
  2. Open the site in mobile view or narrow your browser window
  3. Click the menu button to open the mobile navigation
  4. Verify the slide-over panel opens and closes correctly
  5. Check that no console errors appear
- **Expected Results:** SlideOver should function as before, with smooth open/close animations
- **Additional Notes:** Test on various screen sizes to ensure responsive behavior

## 📸 Screenshots

N/A - No visual changes expected

## 🔖 Resources

- Part of ongoing UI component extraction effort to make components reusable across the monorepo
