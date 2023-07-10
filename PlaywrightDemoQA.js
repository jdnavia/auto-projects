const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  await page.locator('a').filter({ hasText: '1' }).click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').press('CapsLock');
  await page.locator('[data-test="firstName"]').fill('N');
  await page.locator('[data-test="firstName"]').press('CapsLock');
  await page.locator('[data-test="firstName"]').fill('Naruto');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').press('Tab');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').press('CapsLock');
  await page.locator('[data-test="lastName"]').fill('U');
  await page.locator('[data-test="lastName"]').press('CapsLock');
  await page.locator('[data-test="lastName"]').fill('Uzumaki');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('1234567');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await page.getByRole('heading', { name: 'Thank you for your order!' }).click();
  await page.getByText('Your order has been dispatched, and will arrive just as fast as the pony can get').click();
  await page.locator('[data-test="back-to-products"]').click();

  // ---------------------
  await context.close();
  await browser.close();
})();
