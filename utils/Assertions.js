const {expect}=require('@playwright/test')

export class Assertions{
    async softAssertToBe(actual,expected) {
        console.log("actual value is: "+actual)
        console.log("expected value is: "+expected)
        await expect.soft(actual).toBe(expected); 

    }
    async hardAssert(actual,expected) {
        console.log("actual value is: "+actual)
        console.log("expected value is: "+expected)
        await expect(actual).toBe(expected); 
    }
    async softAssertToHaveURL(page,url){
        console.log("expected url is: "+url)
        await expect.soft(page).toHaveURL(url);
        //scrent 
        
        //logger
        //try catch
        //multi 
    }

}