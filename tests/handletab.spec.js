const{test}=require('@playwright/test');
test("Open multiple tab",async({context})=>{

    const page1=await context.newPage()
    await page1.goto("https://www.google.com/?zx=1773212981062&no_sw_cr=1");

    const page2=await context.newPage()
    await page2.goto("https://www.google.com/?zx=1773212981062&no_sw_cr=1");




});