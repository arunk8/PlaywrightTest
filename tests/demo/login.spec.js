import { test, expect } from '@playwright/test';
// import { LoginPage } from '../../pages/login'

test('testname: demo1', async ({page}) => {

  

  await page.goto("https://demoqa.com/");
  await page.locator("(//div[@class='card-body'])[1]").click();
  //driver.findElement(By.xpath("(//div[@class='card-body'])[1]")).click()
  await page.locator("//span[normalize-space()='Text Box']").click();
  //driver.findElement(By.xpath("(//div[@class='card-body'])[1]")).sendkeys("arun")
  await page.locator("//input[@id='userName']").fill("arun kumar");
  await page.locator("//input[@id='userEmail']").fill("Arun@gmaail.com");
  await page.locator("//textarea[@id='currentAddress']").fill("address ");
  await page.locator("//textarea[@id='permanentAddress']").fill("permanant address");
  await page.locator("//button[@id='submit']").click();
  // await page.pause();


  


  // await page.goto('https://the-internet.herokuapp.com/login');
  // await page.getByLabel('Username').click();
  // await page.getByLabel('Username').fill('tomsmith');
  // await page.getByLabel('Password').click();
  // await page.getByLabel('Password').fill('SuperSecretPassword!');
  // await page.getByRole('button', { name: ' Login' }).click();
});

test('First test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://demoqa.com/');

  await page.getByRole('heading', { name: 'Elements' }).click();
  await page.getByText('Text Box').click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Arun Kumar');
  console.log("Giving name input: Arun Kumar")
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('arun@gmail.com');
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Current Address');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('permanant address');
  await page.getByRole('button', { name: 'Submit' }).click();
  //validation??

  let expectedName= "Name:Arun Kumar"
  let actualName = await page.locator("//p[@id='name']").innerText();
  console.log("actualName is:"+actualName);
  if(actualName == expectedName){
    console.log("Pass");
  }else{
    console.log("fail")
  }

  let expectedEmail= "awertyuo";
  let actualEmail = await page.locator("//p[@id='email']").innerText();
  console.log("actualEmail is:"+actualEmail);
  if(actualEmail == expectedEmail){
    console.log("Pass");
  }else{
    console.log("fail")
  }

  let actualCurrentAddress = await page.locator("//p[@id='currentAddress']").innerText();
  console.log("actualCurrentAddress is:"+actualCurrentAddress);

  let actualPermanentAddress = await page.locator("//p[@id='permanentAddress']").innerText();
  console.log("actualPermanentAddress is:"+actualPermanentAddress);

  
});