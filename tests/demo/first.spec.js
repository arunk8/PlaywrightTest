import { test, expect } from '@playwright/test';
import path from 'path';

test('First test', async ({ page }) => {
  // await page.locator('body').click();
  console.log("Env details");
  console.log("Env baseUrl", testEnv.baseUrl);
  console.log("Env username", testEnv.username);
  console.log("Env password", testEnv.password);
  await page.goto('https://demoqa.com/');
  console.log("launched demo qa site")
  await page.getByRole('heading', { name: 'Elements' }).click();
  console.log("clicked on elements button")
  await page.getByText('Text Box').click();
  console.log("clicked on text box")
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Arun Kumar');
  console.log("entered name as Arun kuamar")
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('arun@gmail.com');
  console.log("entered gmail as arun@a.com")
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Current Address');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('permanant address');
  await page.getByRole('button', { name: 'Submit' }).click();
  console.log("clicked on submit")
  
  //validition - if else -> expect(actual).toBe(ExpectedValue);
  
  // takescreenshot("filename")
  // let screenshotPath = "some dynamic path"; // can be any folder 
  // await page.screenshot({path:screenshotPath}); //custom screenshot - can add anywhere in the test steps

});


