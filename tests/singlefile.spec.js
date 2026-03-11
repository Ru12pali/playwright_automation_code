const{test,expect}=require('@playwright/test')
test('Single file upload',async({page})=>{

    await page.goto("https://www.automationtesting.co.uk/fileupload.html");
    await page.waitForTimeout(3000);
    await page.locator("//input[@name='fileToUpload']").setInputFiles
    ("tests/fileupload/Rupali_Mulje_Playwright_QA_Resume.pdf")
     await page.waitForTimeout(3000);
})