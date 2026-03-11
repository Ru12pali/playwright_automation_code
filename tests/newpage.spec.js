const{test,expect}=require('@playwright/test')
test('Open new page',async({context})=>{

    const page1=await context.newPage();
    await page1.goto("https://www.google.com/");
    await page1.waitForTimeout(3000);

})