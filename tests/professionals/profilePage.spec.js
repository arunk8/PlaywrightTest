import { test, expect } from '@playwright/test';

test.describe('CaresLink Profile Page', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to the Profile Page (update to actual route)
    await page.goto('https://elevate-healthforce-f6h23.flutterflow.app/profilePage');
  });

  test('Should display profile user info', async ({ page }) => {
    // Profile picture, name
    await expect(page.locator("//flt-semantics[@id='flt-semantic-node-5']")).toBeVisible();
    await expect(page.locator("//flt-semantics[span[text()='ca c']]")).toBeVisible();
  });

  test('Should have action buttons', async ({ page }) => {
    await expect(page.locator("//flt-semantics[@role='button' and text()='Send Resume']")).toBeVisible();
    await expect(page.locator("//flt-semantics[@role='button' and text()='Job Preferences']")).toBeVisible();
    await expect(page.locator("//flt-semantics[@role='button' and text()='My Learning']")).toBeVisible();
    await expect(page.locator("//flt-semantics[@role='button' and text()='Purchase History']")).toBeVisible();
  });

  test('Referral and share link is present', async ({ page }) => {
    await expect(page.locator("//flt-semantics[span[contains(text(),'https://elevate-healthforce')]]")).toBeVisible();
    await expect(page.locator("//flt-semantics[@role='button' and text()='Refer & Earn']")).toBeVisible();
    await expect(page.locator("//flt-semantics[span[contains(text(),'Invite a friend')]]")).toBeVisible();
  });

  test('Progress bar and sections show correctly', async ({ page }) => {
    await expect(page.locator("//flt-semantics[span[text()='0%']]")).toBeVisible();
    await expect(page.locator("//flt-semantics[span[text()='Education']]")).toBeVisible();
    await expect(page.locator("//flt-semantics[span[text()='Certifications']]")).toBeVisible();
    await expect(page.locator("//flt-semantics[span[text()='Experience']]")).toBeVisible();
  });

  test('Increment details for sections', async ({ page }) => {
    await expect(page.locator("//flt-semantics[span[text()='10%']]")).toBeVisible();
    await expect(page.locator("//flt-semantics[span[text()='35%']]")).toBeVisible();
    await expect(page.locator("//flt-semantics[span[text()='30%']]")).toBeVisible();
  });

  test('Add Details button clickable', async ({ page }) => {
    await page.locator("(//flt-semantics[@role='button' and text()='Add Details'])[1]").click();
    await page.locator("(//flt-semantics[@role='button' and text()='Add Details'])[2]").click();
    await page.locator("(//flt-semantics[@role='button' and text()='Add Details'])").click();
  });

  test('Navigation tabs are visible', async ({ page }) => {
    await expect(page.locator("//flt-semantics[@role='button' and text()='Feeds']")).toBeVisible();
    await expect(page.locator("//flt-semantics[@role='button' and text()='Jobs']")).toBeVisible();
    await expect(page.locator("//flt-semantics[@role='button' and text()='Learnings']")).toBeVisible();
    await expect(page.locator("//flt-semantics[@role='button' and text()='GoGlobal']")).toBeVisible();
    await expect(page.locator("//flt-semantics[@role='button' and text()='Alerts']")).toBeVisible();
    await expect(page.locator("//flt-semantics[@role='button' and text()='Profile']")).toBeVisible();
  });

  test('Sign out button works', async ({ page }) => {
    await expect(page.locator("//flt-semantics[@role='button' and text()='Sign out']")).toBeVisible();
    await page.locator("//flt-semantics[@role='button' and text()='Sign out']").click();
    // Insert actual redirection/check logic if desired
  });

  test('Footer links and copyright present', async ({ page }) => {
    await expect(page.locator("//flt-semantics[span[text()='Resources']]")).toBeVisible();
    await expect(page.locator("//flt-semantics[@role='button' and text()='Online Library']")).toBeVisible();
    await expect(page.locator("//flt-semantics[@role='button' and text()='FAQ']")).toBeVisible();
    await expect(page.locator("//flt-semantics[@role='button' and text()='Privacy Policy']")).toBeVisible();
    await expect(page.locator("//flt-semantics[@role='button' and text()='Terms of Use']")).toBeVisible();
    await expect(page.locator("//flt-semantics[@role='button' and text()='Cookie Policy']")).toBeVisible();
    await expect(page.locator("//flt-semantics[@role='button' and text()='Delete Account']")).toBeVisible();
    await expect(page.locator("//flt-semantics[span[contains(text(),'Copyright CaresLink')]]")).toBeVisible();
    await expect(page.locator("//flt-semantics[span[text()='2025']]")).toBeVisible();
  });

});
