const { test, expect } = require('@playwright/test');


  test('User should login successfully and validate dashboard', async ({ page }) => {

    // Navigate to login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Wait for login form to be visible (dynamic load handling)
    //await expect(page.getByRole('textbox', { name: /username/i })).toBeVisible();
    await expect(page.locator("//input[@name='username']").toBeVisible()).fill("Admin")

    // Enter username using stable locator
    //await page.getByRole('textbox', { name: /username/i }).fill('Admin');
    

    // Enter password using stable locator
    //await page.getByRole('textbox', { name: /password/i }).fill('admin123');
    await expect(page.locator("//input[@placeholder='Password']")).fill('admin123');

    // Click Login button using role
    //await page.getByRole('button', { name: /login/i }).click();
    await expect(page.locator("//button[@type='submit']")).click()

    // Validate URL contains dashboard (handles redirect timing automatically)
    //await expect(page).toHaveURL(/dashboard/);
    await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();


    // Validate Dashboard heading using partial text match
    //await expect(page.getByRole('heading', { name: /dashboard/i })).toBeVisible();

    // Example: Handle dynamic sidebar menu and click Admin
    //await page.locator('.oxd-sidepanel-body').locator('a', { hasText: 'Admin' }).click();
    await expect(page.locator("//span[@class='oxd-userdropdown-tab']")).click();

    // Validate Admin page loaded
    await expect(page).toHaveURL(/admin/);
    await expect(page.getByRole('heading', { name: /admin/i })).toBeVisible();

    // Example: Handle dynamic dropdown
    const userDropdown = page.locator('.oxd-userdropdown-name');
    await expect(userDropdown).toBeVisible();
    await userDropdown.click();

    // Click Logout using text match (dynamic element)
    //await page.locator('a', { hasText: 'Logout' }).click();
    await expect(page.locator("(//a[@role='menuitem'])[4]")).click();

    // Validate user redirected back to login page
    await expect(page).toHaveURL(/login/);
  });
