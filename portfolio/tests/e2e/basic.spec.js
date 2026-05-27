import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'mobile', width: 360, height: 800 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1280, height: 800 },
];

for (const vp of viewports) {
  test.describe(`${vp.name} layout`, () => {
    test(`no horizontal overflow and skip link works - ${vp.name}`, async ({
      page,
    }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/');

      // Ensure main target is present
      const main = await page.$('main#app');
      expect(main).toBeTruthy();

      // Check for skip link and that it becomes focusable/visible
      const skip = await page.$('a[href="#app"][data-skip]');
      expect(skip).toBeTruthy();
      await skip.focus();
      await expect(skip).toBeVisible();

      // Check no horizontal overflow
      const fits = await page.evaluate(() => {
        const doc = document.documentElement;
        return doc.scrollWidth <= window.innerWidth + 1;
      });
      expect(fits).toBeTruthy();
    });
  });
}
