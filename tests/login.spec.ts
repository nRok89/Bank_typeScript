import { test, expect } from '@playwright/test';

test('jolo', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#');
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').fill('wpisuje coś');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').fill('fafasf');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByText('This is just a demo of TodoMVC for testing, not the real TodoMVC app.').click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').fill('bgdfgdfgsgdfg');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').press('ArrowUp');
  await page.getByPlaceholder('What needs to be done?').press('ArrowDown');
  await page.getByPlaceholder('What needs to be done?').press('ArrowRight');
  await page.getByPlaceholder('What needs to be done?').press('ArrowLeft');
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').press('Control+Enter');
  await page.getByText('All Active Completed').click();
  await page.locator('html').click();
  await page.locator('html').click();
  await page.getByText('All Active Completed').click();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').fill('grtgr');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('khj');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('hjhg');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').fill('gdrgdr');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('hfrth');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByRole('link', { name: 'All' }).click();
  await page.locator('li').filter({ hasText: 'khj' }).getByLabel('Toggle Todo').check();
  await page.locator('li').filter({ hasText: 'hjhg' }).getByLabel('Toggle Todo').check();
  await page.getByRole('button', { name: 'Delete' }).click({
    button: 'right'
  });
  await page.locator('li').filter({ hasText: 'hjhg' }).getByLabel('Toggle Todo').uncheck();
  await page.locator('li').filter({ hasText: 'hjhg' }).getByLabel('Toggle Todo').check();
  await page.locator('li').filter({ hasText: 'hjhg' }).getByLabel('Toggle Todo').click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByText('fafasf').click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Delete' }).click({
    button: 'right'
  });
});