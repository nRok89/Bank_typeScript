import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { LoginPage } from '../pages/login.page';
import { PulpitPage } from '../pages/pulpit.page';


test.describe("Pulpit tests", () => {



    test.beforeEach(async ({ page }, testInfo) => {

        const userId = loginData.userId;
        const userPassword = loginData.userPassword;

        await page.goto('/');
        const loginPage = new LoginPage(page);
        await loginPage.loginInput.fill(userId);
        await loginPage.passwordInput.fill(userPassword);
        await loginPage.loginButton.click();
    });

    test('fast transfer', async ({ page }) => {

        //Arrange
        const receiverID = '2';
        const transferAmount = '168,00';
        const transferName = 'Cinema ticket';
        const responsMessage = `Przelew wykonany! Chuck Demobankowy - ${transferAmount}PLN - ${transferName}`;
        // Act
        const pulpit = new PulpitPage(page);
        await pulpit.transferReceiver.selectOption(receiverID);
        await pulpit.transferAmount.fill(transferAmount);
        await pulpit.transferTitle.fill(transferName);
        await pulpit.buttonExeute.click();

        await pulpit.buttonClose.click();

        // Assert
        await expect(pulpit.messagesInfo).toHaveText(responsMessage);
    });


    test('phone top-up', async ({ page }) => {

        //Arrange
        const TopUpReceiver = '503 xxx xxx';
        const mobileTopUp = "50,00";
        const messagesResponse = `Doładowanie wykonane! ${mobileTopUp}PLN na numer ${TopUpReceiver}`;

        // Act
        const pulpit = new PulpitPage(page);
        await pulpit.receiverTopUp.selectOption(TopUpReceiver);
        await pulpit.amountTopUp.fill(mobileTopUp);
        await pulpit.agreemesntTopUp.click();
        await pulpit.buttonTopUp.click();
        await pulpit.buttonClose.click();

        // Assert
        await expect(pulpit.messagesInfo).toHaveText(messagesResponse)


    });

    test('correct balance after phone top-up', async ({ page }) => {

        //Arrange
        const TopUpReceiver = '503 xxx xxx';
        const mobileTopUp = "50";
        const messages = `Doładowanie wykonane! ${mobileTopUp},00PLN na numer ${TopUpReceiver}`;

        const pulpit = new PulpitPage(page);
        const initialValue = await pulpit.availableFunds.innerText();
        const valueAfterPay = Number(initialValue) - Number(mobileTopUp);

        // Act
        await pulpit.receiverTopUp.selectOption(TopUpReceiver);
        await pulpit.amountTopUp.fill(mobileTopUp);
        await pulpit.agreemesntTopUp.click();
        await pulpit.buttonTopUp.click();
        await pulpit.buttonClose.click();

        // Assert
        await expect(page.locator('#show_messages')).toHaveText(messages);
        // await expect(page.locator('#money_value')).toHaveText(`${valueAfterPay}`)
        await expect(page.locator('#money_value')).toHaveText(valueAfterPay.toString())

    });
});