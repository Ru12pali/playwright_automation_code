const{test,expect}=require('@playwright/test')
test('Login test script',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForTimeout(3000);
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@placeholder='Password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();
    await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();
    await page.waitForTimeout(3000);
   
    
    // await page.locator("//p[@class='oxd-text oxd-text--p orangehrm-login-forgot-header']").click();
    // await page.locator("//input[@name='username']").fill("Admin");
    // await page.locator("//button[text()=' Reset Password ']").click();
    

});