import { Page } from "@playwright/test";
export class LeftManu {
    constructor(private page: Page) {
    }
     paymentOptions = this.page.getByRole('link', { name: 'płatności' })

}