import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';

test.describe("Pulpit tests", () => {



  test.beforeEach(async ({ page }) => {

    const userId = loginData.userId;
    const userPassword = loginData.userPassword;

    await page.goto('/');
    await page.getByTestId('login-input').fill(userId);;
    await page.getByTestId('password-input').fill(userPassword);
    await page.getByTestId('login-button').click();
    await page.getByRole('link', { name: 'płatności' }).click();
  });

  test("simple payment", async ({ page }) => {
// Arrange
    const transferReceiver = 'Jan Nowakowski';
    const transferAmount = '265';
    const transferAccount = '12 3412 3453 4664 6415 5236 64613';
    const expectedMessage = `Przelew wykonany! ${transferAmount},00PLN dla ${transferReceiver}`;
// Act
  await page.getByTestId('transfer_receiver').fill(transferReceiver);
  await page.getByTestId('form_account_to').fill(transferAccount);
  await page.getByTestId('form_amount').fill(transferAmount);
  await page.getByRole('button', { name: 'wykonaj przelew' }).click();
  await page.getByTestId('close-button').click();

  // Assert
    await expect(page.locator('#show_messages')).toHaveText(expectedMessage)
  });
});