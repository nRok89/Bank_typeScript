import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';


test.describe("Pulpit tests", () => {



    test.beforeEach(async ({ page }, testInfo) => {

        const userId = loginData.userId;
        const userPassword = loginData.userPassword;

        await page.goto('/');
        await page.getByTestId('login-input').fill(userId);;
        await page.getByTestId('password-input').fill(userPassword);
        await page.getByTestId('login-button').click();
    });

    test('fast transfer', async ({ page }) => {

        //Arrange
        const receiverID = '2';
        const transferAmount = '168,00';
        const transferName = 'Cinema ticket';

        // Act
        await page.locator('#widget_1_transfer_receiver').selectOption(receiverID);
        await page.locator('#widget_1_transfer_amount').fill(transferAmount);
        await page.locator('#widget_1_transfer_title').fill(transferName);
        await page.getByRole('button', { name: 'wykonaj' }).click();
        await page.getByTestId('close-button').click();

        // Assert
        await expect(page.locator('#show_messages')).toHaveText(`Przelew wykonany! Chuck Demobankowy - ${transferAmount}PLN - ${transferName}`)
    });

    test('phone top-up', async ({ page }) => {

        //Arrange
        const TopupReceiver = '503 xxx xxx';
        let phoneTopUp = "50,00";

        // Act
        await page.locator('#widget_1_topup_receiver').selectOption(TopupReceiver);
        await page.locator('#widget_1_topup_amount').fill(phoneTopUp);
        await page.locator('#widget_1_topup_agreement').click();
        await page.getByRole('button', { name: 'doładuj telefon' }).click();
        await page.getByTestId('close-button').click();

        // Assert
        await expect(page.locator('#show_messages')).toHaveText(`Doładowanie wykonane! ${phoneTopUp}PLN na numer ${TopupReceiver}`)


    });

    test('correct balance after phone top-up', async ({ page }) => {

        //Arrange
        const TopupReceiver = '503 xxx xxx';
        const phoneTopUp = "50";
        const messages = `Doładowanie wykonane! ${phoneTopUp},00PLN na numer ${TopupReceiver}`;
        const initialValue = await page.locator('#money_value').innerText();
        const valueAfterPay = Number(initialValue) - Number(phoneTopUp);

        // Act
        await page.locator('#widget_1_topup_receiver').selectOption(TopupReceiver);
        await page.locator('#widget_1_topup_amount').fill(phoneTopUp);
        await page.locator('#widget_1_topup_agreement').click();
        await page.getByRole('button', { name: 'doładuj telefon' }).click();
        await page.getByTestId('close-button').click();

        // Assert
        await expect(page.locator('#show_messages')).toHaveText(messages);
        await expect(page.locator('#money_value')).toHaveText(`${valueAfterPay}`)
        await expect(page.locator('#money_value')).toHaveText(valueAfterPay.toString())

    });
});