// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://praveendias1180.web.app/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Praveen Dias/);
});

test('link test', async ({ page }) => {
  await page.goto('https://praveendias1180.web.app/');

  // Click the get started link.
  await page.getByRole('link', { name: 'View Certificate' }).first().click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/drive.google.com/);
});
