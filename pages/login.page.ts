import { Page } from "@playwright/test";

export class LoginPage {
    constructor(private page: Page) {}
    loginInput = this.page.getByTestId('login-input');
    passwordInput = this.page.getByTestId('password-input');
    loginButton = this.page.getByTestId('login-button');

    errorLoginInfo = this.page.locator('#error_login_id')
    errorPasswardInfo = this.page.locator('#error_login_password')
}