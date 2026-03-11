const{test,expect}=require('@playwright/test')
test('Dropdown',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const scroll_country=await page.locator("//label[text()='Country:']");
    await scroll_country.scrollIntoViewIfNeeded();
    //await page.locator("//select[@id='country']").selectOption({label:"India"});
    await page.selectOption("//select[@id='country']","India")
    await page.waitForTimeout(3000);
})