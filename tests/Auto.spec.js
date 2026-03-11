const{test,execute}=require('@playwright/test')
test("Automation practice",async({page})=>{

    await page.goto("https://automationexercise.com/");
    await page.locator("//a[text()=' Signup / Login']").click();
    await page.locator("//input[@type='text']").fill("Rupali");
    await page.locator("//input[@data-qa='signup-email']").fill("abc@gmail.com");
    await page.locator("//button[text()='Signup']").click()

})