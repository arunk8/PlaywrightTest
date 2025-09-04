// // @ts-check
const { test, expect } = require('@playwright/test');
let {logger} = require('./../utils/logger');
let log =new logger();
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await log.info("");
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.devadadadad/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).dblclick()  ;

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
