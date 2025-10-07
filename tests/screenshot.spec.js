import { test, expect } from '@playwright/test';

test('page screenshot', async ({ page }) => {
 await page.goto('https://demoqa.com/')
//  await page.waitForTimeout(1000);
 console.log(Date.now());
//  await page.screenshot({ path:'reports/screenshots/'+'HomePage.png'})
//  await page.screenshot({path:'Playwright_POM/reports/screenshots'})
});

test('Full page screenshot', async ({ page }) => {
    await page.goto('https://demo.opencart.com/')
    await page.screenshot({ path:'reports/screenshots/'+Date.now()+'FullPage.png',fullPage:true})
});

test.only('Element screenshot', async ({ page }) => {
    await page.goto('https://demo.opencart.com/')
    await page.locator('//*[@id="content"]/div[2]/div[1]/form/div').screenshot({ path:'tests/screenshots/'+Date.now()+'Macbook.png'})
});