import { Locator, Page } from "@playwright/test";

export class DashboardPage {

  readonly page: Page;
 
  readonly lnkLeave: Locator;
  readonly lnkPIM: Locator;
  readonly lblDashboard: Locator;

  
  constructor(page: Page){
    this.page = page;

    this.lnkLeave = page.getByPlaceholder('Username');
    this.lnkPIM = page.getByPlaceholder('Password');
    this.lblDashboard = page.getByRole('heading', { name: 'Dashboard' });
}
   

 

     async clickLinkLeave(){
           this.lnkLeave.click();
    }

    async clickLinkPIM(){
        this.lnkPIM.click();
    }

     async isDashboardTxtVisible(){
       await this.lblDashboard.waitFor({state: "visible"});
       return this.lblDashboard.isVisible();
    }

   
}