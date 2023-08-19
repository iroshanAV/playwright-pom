import { Locator, Page } from "@playwright/test";

export class LoginPage {

  readonly page: Page;
 
  readonly txtUsername: Locator;
  readonly txtPassword: Locator;
  readonly btnLogin: Locator;
  readonly lblInvalidLogin: Locator;



  
  constructor(page: Page){
    this.page = page;
 
    this.txtUsername = page.locator('input[name="username"]');
    this.txtPassword = page.locator('input[name="password"]');;
    this.btnLogin = page.getByRole('button', { name: 'Log In' });
    this.lblInvalidLogin = page.locator('//div[@id="rightPanel"]//p');

}
   


     async login(username: string, password: string){
      await this.txtUsername.type(username);
      await this.txtPassword.type(password);
      await this.btnLogin.click();
     
    }


     async visit(){
      await this.page.goto("https://parabank.parasoft.com/parabank/index.htm");     
    }

   
}