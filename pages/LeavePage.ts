import { Locator, Page } from "@playwright/test";

export class LeavePage {

  readonly page: Page;
 
  readonly lnkLeave: Locator;
  readonly lnkPIM: Locator;
  readonly lblDashboard: Locator;
  readonly btnAssignLeave: Locator;
  readonly txtEmployeeName: Locator;
  readonly drpDwnLeaveType: Locator;
  readonly drpDwnLeaveTypeValue: Locator;

  
  constructor(page: Page){
    this.page = page;

    this.lnkLeave = page.getByPlaceholder('Username');
    this.lnkPIM = page.getByPlaceholder('Password');
    this.lblDashboard = page.getByRole('heading', { name: 'Dashboard' });
    this.btnAssignLeave = page.getByRole('link',{ name: 'Assign Leave'});
    this.txtEmployeeName = page.getByPlaceholder('Type for hints...');
    this.drpDwnLeaveTypeValue = page.getByText('CAN - Bereavement');
    this.drpDwnLeaveType = page.getByText('-- Select --');

}
   

     async clickLinkLeave(){
        await this.lnkLeave.click();
    }

    async clickLinkPIM(){
        await this.lnkPIM.click();
    }

     async isDashboardTxtVisible(){
       await this.lblDashboard.waitFor({state: "visible"});
       return this.lblDashboard.isVisible();
    }

    async clickBtnAssignLeave(){
        await this.btnAssignLeave.click();
    }

    async enterEmployeeNameForLeave(name: string){
        await this.txtEmployeeName.type(name);
        await this.txtEmployeeName.click();
    }

    async clickLeaveType(type: string){
        await this.drpDwnLeaveType.click();
        await this.drpDwnLeaveTypeValue.click();
    }

    

   
}