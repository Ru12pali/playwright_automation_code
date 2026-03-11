// const{test,expect}=require('@playwright/test');
// test("Simple alert",async({page})=>{

//     await page.goto("https://testautomationpractice.blogspot.com/");
//     const simplealert_scroll=await page.locator("//button[@id='alertBtn']")
//     await page.waitForTimeout(3000);
//     await simplealert_scroll.scrollIntoViewIfNeeded();

//     page.on('dialog',async dialog=>{

//         expect(dialog.type()).toContain('alert');
//         expect(dialog.message()).toContain('I am an alert box!')
//         await page.waitForTimeout(3000);
//         await dialog.accept()
//     })
//     await page.locator("//button[@id='alertBtn']").click();
//     await page.waitForTimeout(3000);
// })


const{test,expect}=require('@playwright/test');
test("Simple alert",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    const page_scroll=await page.locator("//h2[text()='Alerts & Popups']")
    await page.waitForTimeout(3000);
    await page_scroll.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);

    page.on('dialog',async dialog=>{

        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain("I am an alert box!");
        await page.waitForTimeout(3000);
        await dialog.accept();
        await page.waitForTimeout(3000);
    })
    await page.locator("//button[@onclick='myFunctionAlert()']").click
    await page.waitForTimeout(3000);
})