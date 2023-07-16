import { Locator, Page } from "@playwright/test";

export class LoginPage {

  readonly page: Page;
 
  readonly txtUsername: Locator;
  readonly txtPassword: Locator;
  readonly btnLogin: Locator;

  
  constructor(page: Page){
    this.page = page;
 
    this.txtUsername = page.getByPlaceholder('Username');
    this.txtPassword = page.getByPlaceholder('Password');;
    this.btnLogin = page.getByRole('button', { name: ' Login' });
}
   

 

     async login(username: string, password: string){
      await this.txtUsername.type(username);
      await this.txtPassword.type(password);
      await this.btnLogin.click();
     
    }

     async visit(){
      await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");     
    }
}