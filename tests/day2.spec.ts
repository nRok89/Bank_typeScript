// import { test, expect } from '@playwright/test';

// test.only('test', async ({ page }) => {
//   await page.goto('https://demo-bank.vercel.app/');
//   await page.getByTestId('login-input').click();
//   await page.getByTestId('login-input').fill('Login123');
//   await page.getByTestId('password-input').click();
//   await page.getByTestId('password-input').fill('Qwertyu8');
//   await page.getByTestId('login-button').click;
// });

// import { test, expect } from '@playwright/test';
// test('test', async ({ page }) => {
//     await page.goto('https://www.intercity.pl/pl/');
//     await page.getByRole('link', { name: 'Wyszukiwarka szczegółowa' }).click();
//     await page.getByPlaceholder('np. Poznań Gł.').click();
//     await page.getByPlaceholder('np. Poznań Gł.').fill('warszawa centralna');
//     await page.getByPlaceholder('np. Poznań Gł.').press('ArrowDown');
//     await page.getByPlaceholder('np. Poznań Gł.').click
//     // await page.getByRole('link', { name: 'Warszawa Centralna' }).click();

//     await page.locator('#stname-1').click();
//     await page.locator('#stname-1').fill('Toruń głowny');
//     await page.locator('#stname-1').press("ArrowDown");
//     await page.locator('#stname-1').click();

//     await page.locator('#ic-seek-direct').click();
//     await page.locator('#ic-seek-dirsect').click();
//     await page.getByRole('button', { name: 'Wyszukaj' }).click();

//     await page.goto('https://bilet.intercity.pl/zakup_biletu.jsp?ref=infop&rezerwacja_0=1&miejsce_0=0&ref=1');
//     await page.locator('#trasa_25').getByText('WYBIERZ').click();
// });