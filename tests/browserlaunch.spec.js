const{tes,expect, chromium}=require('@playwright/test')
const test = require('node:test')
test("Browser Launch",async()=>{

    const browser=await chromium.launch();
    const page=await browser.newPage();
    await page.goto("https://www.flipkart.com/");
})