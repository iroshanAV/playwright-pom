import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AccountsOverviewPage } from '../pages/AccountsOverviewPage';

test.describe("Login Page Tests", () => {

  let loginPage: LoginPage;
  let accoutsOverviewPage: AccountsOverviewPage;



  test.beforeEach(({ page }) => {
    loginPage = new LoginPage(page);
    accoutsOverviewPage = new AccountsOverviewPage(page);
  });



  test("TC-001: Checking whether user can logged in", async ({ page }) => {
    await test.step("1.Log in to the site", async () => {
      await loginPage.visit();
    });
    await test.step("2.Enter correct username and password", async () => {
      await loginPage.login("Admin", "admin123");
    });
    await test.step("3.Validate user logged in successfuly", async () => {
      await expect(await accoutsOverviewPage.lblWelcome).toBeVisible({ timeout: 5000 });
    });
  });


  test("TC-002: Checking whether wrong username, password does not allow users to log in", async ({ page }) => {
    await test.step("1.Log in to the site", async () => {
      await loginPage.visit();
    });
    await test.step("2.Enter correct username and password", async () => {
      await loginPage.login("Admin", "");
    });
    await test.step("3.Validate Incorrect username and password message is visible", async () => {
      await expect(loginPage.lblInvalidLogin).toBeVisible({ timeout: 5000 });
    });

  });

});