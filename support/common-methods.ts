
export async function user1Login(browser: { newContext: () => any; }) {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('/login');
  await page.fill('[data-testid=mr-form-login-email-1]', 'nabilshaikh26+t1@gmail.com');
  await page.fill('[data-testid="mr-form-login-password-1"]', 'Test@123');
  await page.locator('[data-testid="mr-form-login-btn-signin-1"]').click();
  await page.locator('[aria-label="Switch to Dev team team"]').click();
  return page
}
  
export async function user2Login(browser: { newContext: () => any; }) {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('/login');
  await page.fill('[data-testid=mr-form-login-email-1]', 'nabilshaikh26+t2@gmail.com');
  await page.fill('[data-testid="mr-form-login-password-1"]', 'Test@123');
  await page.locator('[data-testid="mr-form-login-btn-signin-1"]').click();
  await page.locator('[aria-label="Switch to Dev team team"]').click();
  return page
}
