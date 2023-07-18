import { Page } from "@playwright/test";
import { LeftManu } from "./left.manu";

export class PaymentPage {
    constructor(private page: Page) {
        
    }
    leftManu = new LeftManu(this.page);
    transferReceiver = this.page.getByTestId('transfer_receiver');
    transferAccount = this.page.getByTestId('form_account_to');
    transferAmount = this.page.getByTestId('form_amount');
    buttomExecuteTranfer = this.page.getByRole('button', { name: 'wykonaj przelew' });
    buttonClose = this.page.getByTestId('close-button');
    messagesInfo = this.page.locator('#show_messages');


}