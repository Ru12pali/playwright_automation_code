const{test,expect}=require('@playwright/test')
test('Screen shot',async({page})=>{

    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(3000);
    await page.screenshot({path:'tests/screenshot/' + 'HomePage.png'})
})

test ('full page',async({page})=>{

    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(3000);
    await page.screenshot({path:'tests/screenshot/' + 'fullpage.png', fullPage:true});
})

test('Element',async({page})=>{

    await page.goto("https://www.amazon.in/");
    const element=await page.locator("//h2[contains(text(),'Appliances for your home')]")
    await page.waitForTimeout(3000);
    
    await element.screenshot({path:'tests/screenshot/' + 'Element.png'});
})

