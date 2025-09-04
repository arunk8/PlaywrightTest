const {test, expect}=require('@playwright/test')

test('AssertionsTest',async ({page})=>{
    
    //open app url
    await page.goto('https://demoqa.com/')
    let actual = "abc"; // we will get it from application
    let expected = "abc"; //expectation 

    await expect(actual).toBe(expected); //pass
    await expect(10).toBeGreaterThan(6); // pass
    await expect('').toBeFalsy() //pass
    await expect('124').toBeFalsy() //fail
    await expect(123).toBeTruthy() //pass
    await expect('').toBeTruthy() //fail 
asdasada
    //id -123 -> name - arun
    //expected: arun //acutal - get it from app  --two
    //create a process - generates some id - ID
    //expected: some value but not empty, actual: get it from app --one


    //let actualURL =driver.getUrl()
    //if(actualurl == "expectedurl"){}

    //1) expect(page).toHaveURL()				Page has URL
    await expect(page).toHaveURL('https://demoqa.com/')

    //2) expect(page).toHaveTitle()			Page has title
    await expect(page).toHaveTitle('DEMOQA')

    //3) expect(locator).toBeVisible()		Element is visible
    const Element=await page.locator("//*[text()='Elements']")
    await expect(Element).toBeVisible()

    await expect(page.locator("//*[text()='Elements']")).toBeVisible();
    await expect(page.locator("//*[text()='Elements']")).toBeHidden();



    //4) expect(locator).toBeEnabled()		Control is enabled
    const searchStoreBox=await page.locator("//*[text()='Elements']")
    await expect(searchStoreBox).toBeEnabled();
    await expect(searchStoreBox).toBeDisabled();

    //5) expect(locator).toBeChecked()		Radio/Checkbox is checked
    
    //radio button
    const maleRadioButton=await page.locator('#gender-male')
    await maleRadioButton.click()  // select radio button
    await expect(maleRadioButton).toBeChecked() //to check wether element is checked
    await expect(maleRadioButton).toBeEmpty() //to check wether input element has some text 


    //check box
    const newsletterCheckbox=await page.locator('#Newsletter')
    await expect(newsletterCheckbox).toBeChecked()

    //dom level validation
    //6) expect(locator).toHaveAttribute()	Element has attribute
    const element2=await page.locator("(//*[@name='like'])[1]")
    await expect(element2).toHaveAttribute('id','yesRadio') //pass

    //  7) expect(locator).toHaveText()			Element matches text
        let element3 = await page.locator('.page-title h1');
       await expect(element3).toHaveText('Register')  //full text  == 

       
    // 8) expect(locator).toContainText()		Element contains text
    await expect(await page.locator('.page-title h1')).toContainText('Reg') //partial text


    //9) expect(locator).toHaveValue(value)	Input has a value
    const emailInput=await page.locator('#Email')
    await emailInput.fill('test@demo.com');
    await expect(emailInput).toHaveValue('test@demo.com')
    //or
    await expect(element2).toHaveAttribute('value','test@demo.com') //pass

   // 10) expect(locator).toHaveCount()		List of elements has given length
    const linkscount= await page.locator('//a')
    await expect(linkscount).toHaveCount(13)
})
