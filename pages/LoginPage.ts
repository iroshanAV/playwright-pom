import { Locator, Page } from "@playwright/test";

export class LoginPage {

  readonly page: Page;
 
  readonly txtUsername: Locator;
  readonly txtPassword: Locator;
  readonly btnLogin: Locator;
  readonly lblInvalidLogin: Locator;
  readonly lblWelcome: Locator;


  
  constructor(page: Page){
    this.page = page;
 
    this.txtUsername = page.locator('input[name="username"]');
    this.txtPassword = page.locator('input[name="password"]');;
    this.btnLogin = page.getByRole('button', { name: 'Log In' });
    this.lblInvalidLogin = page.getByText('Invalid credentials');
    this.lblWelcome = page.locator('//p[@class = "smallText"]/b');

}
   

 

     async login(username: string, password: string){
      await this.txtUsername.type(username);
      await this.txtPassword.type(password);
      await this.btnLogin.click();
     
    }

    async isInvalidLoginLblVisible(){
      await this.lblInvalidLogin.waitFor({state: "visible"});
      return  this.lblInvalidLogin.isVisible();
    }

     async visit(){
      await this.page.goto("https://parabank.parasoft.com/parabank/index.htm");     
    }

    //https://parabank.parasoft.com/parabank/index.htm
}