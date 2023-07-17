import { test, expect } from '@playwright/test';


test.describe("User login to Bank", () => {

  const url = 'https://demo-bank.vercel.app/';
  const userId = 'Login123';
  const userPassword = 'Qwertyu8';

  test('login with correct credentials', async ({ page }) => {
    //Arrange
    const expectedUseName = 'Jan Demobankowy';

    // Act
    await page.goto(url);
    await page.getByTestId('login-input').fill(userId);
    await page.getByTestId('password-input').fill(userPassword);
    await page.getByTestId('login-button').click();

    // Assert

    await expect(page.getByTestId('user-name')).toHaveText(expectedUseName)
  });

  test('Unsuccessful login with too short login name', async ({ page }) => {

    //Arrange
    await page.goto(url);

    // Act
    await page.getByTestId('login-input').fill('sdasdw');
    await page.getByTestId('password-input').fill(userPassword);

    // Assert
    await expect(page.locator('#error_login_id')).toHaveText('identyfikator ma min. 8 znaków')
  });


  test('Unsuccessful login with too short password', async ({ page }) => {

    //Arrange
    await page.goto(url);

    // Act
    await page.getByTestId('login-input').fill(userId);
    await page.getByTestId('password-input').fill('dsad');
    await page.getByTestId('password-input').blur();


    // Assert
    await expect(page.locator('#error_login_password')).toHaveText('hasło ma min. 8 znaków')
    await expect(page.getByTestId('error-login-password')).toHaveText('hasło ma min. 8 znaków')

  });

})