const { test, expect } = require('@playwright/test');

test('Open Bagisto site and handle alert', async ({ page }) => {

  // Open website
  await page.goto('https://demo.bagisto.com/bagisto-common/');

  page.on('dialog', async dialog => {
    console.log('Alert message:', dialog.message());
    await dialog.accept();
  });
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Accept' }).click();
 //await page.getByRole('button', { name: 'Profile' }).click();
 //await page.locator("//span[contains(@class,'icon-users')]/parent::a").click();




  await page.locator("//span[contains(@class,'icon-users')]/parent::a").click();



  //await page.locator("//a[@aria-label='Account']//span[contains(@class,'icon-users')]").click();
    

await page.locator("//div[contains(@class,'flex gap-4')]//a[normalize-space()='Sign In']").click();
  await page.waitForTimeout(3000);

});