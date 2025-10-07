const {test, expect} =require('@playwright/test')


test("Soft assertions",async ({page})=>{

    await page.goto("https://www.demoblaze.com/index.html")

    //Hard assertions - stop
    await expect(page).toHaveTitle('STORE123');
    await expect(actual).toBe(expected); 
    await expect(page).toHaveURL("https://www.demoblaze.com/index.html");
    await expect(page.locator('.navbar-brand')).toBeVisible();

    await expect(actual).toBe(expected); //pass
    await expect(10).toBeGreaterThan(6); // pass
    await expect('').toBeFalsy() //pass
    await expect('124').toBeFalsy() //fail -- stop next steps
    await expect(123).toBeTruthy() //pass
    await expect('').toBeTruthy() //fail 


    //Soft assertions - continue
    await expect.soft(actual).toBe(expected); 
    await expect.soft(page).toHaveTitle('STORE123');
    await expect.soft(page).toHaveURL("https://www.demoblaze.com/index.html");
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();

    await expect.soft(actual).toBe(expected); //pass
    await expect.soft(10).toBeGreaterThan(6); // pass
    await expect.soft('').toBeFalsy() //pass
    await expect.soft('124').toBeFalsy() //fail --continue next validation
    await expect.soft(123).toBeTruthy() //pass
    await expect.soft('').toBeTruthy() //fail 

})