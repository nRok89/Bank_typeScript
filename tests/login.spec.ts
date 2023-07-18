import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { LoginPage } from '../pages/login.page';


test.describe("User login to Bank", () => {

  const userId = loginData.userId;
  const userPassword = loginData.userPassword;
  const expectedUseName = 'Jan Demobankowy';

  test.beforeEach(async ({ page }, testInfo) => {

    await page.goto('/');
  });



  test('login with correct credentials', async ({ page }) => {

    // Act
    const loginPage = new LoginPage(page);
    await loginPage.loginInput.fill(userId);
    await loginPage.passwordInput.fill(userPassword);
    await loginPage.loginButton.click();

    // Assert

    await expect(page.getByTestId('user-name')).toHaveText(expectedUseName)
  });

  test('Unsuccessful login with too short login name', async ({ page }) => {


    //Arrange
    const tooShortUserName = 'Qwert'

    // Act
    await page.getByTestId('login-input').fill(tooShortUserName);
    await page.getByTestId('password-input').fill(userPassword);

    // Assert
    await expect(page.locator('#error_login_id')).toHaveText('identyfikator ma min. 8 znaków')
  });


  test('Unsuccessful login with too short password', async ({ page }) => {

    // Arrange
    const tooShortUserPassword = 'Qwert'
    // Act
    await page.getByTestId('login-input').fill(tooShortUserPassword);
    await page.getByTestId('password-input').fill('dsad');
    await page.getByTestId('password-input').blur();


    // Assert
    await expect(page.locator('#error_login_password')).toHaveText('hasło ma min. 8 znaków')
    await expect(page.getByTestId('error-login-password')).toHaveText('hasło ma min. 8 znaków')

  });

})