import { Locator, Page } from "@playwright/test";

export class AccountsOverviewPage {
  readonly page: Page;
  readonly lblWelcome: Locator;



  constructor(page: Page) {
    this.page = page;
    this.lblWelcome = page.locator('//p[@class = "smallText"]/b');
  }



  async visit() {
    await this.page.goto("https://parabank.parasoft.com/parabank/index.htm");
  }


}