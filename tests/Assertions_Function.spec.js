const {test}=require('@playwright/test')
let {Assertions} = require("./../utils/Assertions");


let assert = new Assertions();

test('AssertionsTest',async ({page})=>{
    
    //open app url
    await page.goto('https://demoqa.com/') // load issue
    // await assert.hardAssertToHaveURL();
    //click elemnts -> text box //unable to find
    //assertion 1
    let actual =await page.locator("//qwerty").innerText(); // we will get it from application
    let expected = "abc"; //expectation 
    // console.log("actual value is: "+actual)
    // console.log("expected value is: "+expected)
    // await expect(actual).toBe(expected); //pass 
    // if(actual==expected){
    //     //pass
    // }else{
    //     //fail
    // }

    // await softAssert("abc","abc");
    await assert.softAssertToBe("abc","abc");

    //assertion 2
    // let actualName = "elements";// application 
    // let expectedName= "elements";
    // console.log("actual value is: "+actualName)
    // console.log("expected value is: "+expectedName)
    // await expect(actualName).toBe(expectedName); //pass

    // await softAssert("elements","elements");
    await assert.softAssertToBe("elements","elements");


    //assertion 3
    // let actualName = "text box";// application 
    // let expectedName= "text box";
    // console.log("actual value is: "+actualName)
    // console.log("expected value is: "+expectedName)
    // await expect(actualName).toBe(expectedName); //pass

    // await expect.soft(actualName).toBe(expectedName); 

    // await hardAssert("text box","text box123");
    await assert.hardAssert("text box","text box");

    console.log("entering data");

    await page.goto('https://demoqa.com/')
    // await expect(page).toHaveURL('https://demoqa.com/')
    await assert.softAssertToHaveURL(page,'https://demoqa.com/')
    await page.waitForTimeout(3000);
    // await assert.switchToWindow("demoQA")
});

// async function softAssert(actual,expected) {
//     console.log("actual value is: "+actual)
//     console.log("expected value is: "+expected)
//     await expect.soft(actual).toBe(expected); 
// }

// async function hardAssert(actual,expected) {
//     console.log("actual value is: "+actual)
//     console.log("expected value is: "+expected)
//     await expect(actual).toBe(expected); 
// }