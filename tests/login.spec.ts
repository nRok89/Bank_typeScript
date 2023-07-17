import { test, expect } from '@playwright/test';


test.describe("User login to Bank", () => {

  test('login with correct credentials', async ({ page }) => {
    await page.goto('https://demo-bank.vercel.app/');
    await page.getByTestId('login-input').click();
    await page.getByTestId('login-input').fill('Login123');
    await page.getByTestId('password-input').click();
    await page.getByTestId('password-input').fill('Qwertyu8');
    await page.getByTestId('login-button').click();
    await page.getByTestId('user-name').click();

    // assercja
  
    await expect(page.getByTestId('user-name')).toHaveText('Jan Demobankowy')
  });

  test('unsuccessful login with to short login name', async ({ page }) => {
    await page.goto('https://demo-bank.vercel.app/');

    await page.getByTestId('login-input').click();
    await page.getByTestId('login-input').fill('Login');

    await page.getByTestId('password-input').fill('Qwertyu8');
    await page.getByTestId('password-input').click();

    // assercja
    await expect(page.locator('#error_login_id')).toHaveText('identyfikator ma min. 8 znaków')
  });


  test('Unsuccessful login with to short password', async ({ page }) => {
    await page.goto('https://demo-bank.vercel.app/');

    await page.getByTestId('login-input').click();
    await page.getByTestId('login-input').fill('Login123');

    await page.getByTestId('password-input').click();
    await page.getByTestId('password-input').fill('Qwerty');
    await page.getByTestId('password-input').blur();

  
    // assercja
    await expect(page.locator('#error_login_password')).toHaveText('hasło ma min. 8 znaków')
    await expect(page.getByTestId('error-login-password')).toHaveText('hasło ma min. 8 znaków')

  });

})