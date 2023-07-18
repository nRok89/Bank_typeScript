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
    const tooShortUserName = 'Aqwe';

    // Act
    const loginPage = new LoginPage(page);
    await loginPage.loginInput.click();
    await loginPage.loginInput.fill(tooShortUserName);
    await loginPage.passwordInput.fill(userPassword);

    // Assert
    await expect(loginPage.errorLoginInfo).toHaveText('identyfikator ma min. 8 znaków')
  });


  test('Unsuccessful login with too short password', async ({ page }) => {

    // Arrange
    const tooShortUserPassword = 'Qwert'

    // Act
    const loginPage = new LoginPage(page);
    await loginPage.loginInput.click();
    await loginPage.loginInput.fill(userId);
    await loginPage.passwordInput.fill(tooShortUserPassword);
    await loginPage.passwordInput.blur();

    // Assert
    await expect(loginPage.errorPasswardInfo).toHaveText('hasło ma min. 8 znaków');
   });

   const people = ['Alice', 'Bob'];
for (const name of people) {
  test(`testing with ${name}`, async () => {
    console.log(name + " to wyświetlam");


  });
  // You can also do it with test.describe() or with multiple tests as long the test name is unique.
}
   


})