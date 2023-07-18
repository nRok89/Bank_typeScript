import { Page } from "@playwright/test";
import { LeftManu } from "./left.manu";

export class PulpitPage {
    constructor(private page: Page) {
    }
    leftManu = new LeftManu(this.page);

    transferReceiver = this.page.locator('#widget_1_transfer_receiver');
    transferAmount = this.page.locator('#widget_1_transfer_amount');
    transferTitle = this.page.locator('#widget_1_transfer_title');
    buttonExeute = this.page.getByRole('button', { name: 'wykonaj' });

    buttonClose = this.page.getByTestId('close-button');
    messagesInfo = this.page.locator('#show_messages');

    receiverTopUp = this.page.locator('#widget_1_topup_receiver');
    amountTopUp = this.page.locator('#widget_1_topup_amount');
    agreemesntTopUp = this.page.locator('#widget_1_topup_agreement');
    buttonTopUp = this.page.getByRole('button', { name: 'doładuj telefon' });

    availableFunds = this.page.locator('#money_value');

    
}