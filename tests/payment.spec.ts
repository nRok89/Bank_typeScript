import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { LoginPage } from '../pages/login.page';
import { LeftManu } from '../pages/left.manu';
import { PaymentPage } from '../pages/payment.page';

test.describe("Pulpit tests", () => {



  test.beforeEach(async ({ page }) => {

    const userId = loginData.userId;
    const userPassword = loginData.userPassword;

    await page.goto('/');
    const loginPage = new LoginPage(page);
    await loginPage.loginInput.fill(userId);
    await loginPage.passwordInput.fill(userPassword);
    await loginPage.loginButton.click();

    const payment = new LeftManu(page);
    payment.paymentOptions.click();

  });

  test("simple payment", async ({ page }) => {
    // Arrange
    const transferReceiver = 'Jan Nowakowski';
    const transferAmount = '265';
    const transferAccount = '12 3412 3453 4664 6415 5236 64613';
    const expectedMessage = `Przelew wykonany! ${transferAmount},00PLN dla ${transferReceiver}`;
    // Act
    const payment = new PaymentPage(page);

    await payment.transferReceiver.fill(transferReceiver);
    await payment.transferAccount.fill(transferAccount);
    await payment.transferAmount.fill(transferAmount);
    await payment.buttomExecuteTranfer.click();
    await payment.buttonClose.click();

    // Assert
    await expect(payment.messagesInfo).toHaveText(expectedMessage)
  });
});