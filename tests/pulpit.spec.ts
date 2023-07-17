import { test, expect } from '@playwright/test';
test.describe("Pulpit tests", () => {

    
        let phoneTopUp = "50,00";
   

    test.beforeEach(async ({ page }, testInfo) => {
        console.log(`Running ${testInfo.title}`);
        await page.goto('/');
        await page.getByTestId('login-input').fill('gwoazdaw');;
        await page.getByTestId('password-input').fill('tanieccc');
        await page.getByTestId('login-button').click();
    });

    test('fast transfer', async ({ page }) => {

        await page.locator('#widget_1_transfer_receiver').selectOption('2');
        await page.locator('#widget_1_transfer_amount').fill('168');
        await page.locator('#widget_1_transfer_title').fill('Jazda');
        await page.getByRole('button', { name: 'wykonaj' }).click();
        await page.getByTestId('close-button').click();
        await expect(page.locator('#show_messages')).toHaveText('Przelew wykonany! Chuck Demobankowy - 168,00PLN - Jazda')
    });

    test('phone top-up', async ({ page }) => {

        await page.locator('#widget_1_topup_receiver').selectOption('503 xxx xxx');
        await page.locator('#widget_1_topup_amount').fill(phoneTopUp);
        await page.locator('#widget_1_topup_agreement').click();
        await page.getByRole('button', { name: 'doładuj telefon' }).click();
        await page.getByTestId('close-button').click();
        await expect(page.locator('#show_messages')).toHaveText(`Doładowanie wykonane! ${phoneTopUp}PLN na numer 503 xxx xxx`)


    });

});