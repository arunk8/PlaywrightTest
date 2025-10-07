const { test, expect } = require('@playwright/test');
const {LoginPage} = require("./../pages/login");



test('Should verify login with valid credentials', async ({ page }) => {
  let login = new LoginPage(page);
  await page.goto('https://elevate-healthforce-f6h23.flutterflow.app/loginPage');
  await login.enableAccessibility();

  await page.locator("//input[@type='text']").fill("a001@a.com");
  console.log("abc.com")
  // await action.sendkeys("xpath","abc.com")

  await page.locator("//input[@type='password']").fill("1qaz1qaz");
  await page.locator("//flt-semantics[text()='Login to Account']").click();
  await page.waitForTimeout();
});