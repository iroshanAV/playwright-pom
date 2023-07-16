import { test, expect } from '@playwright/test';
import { App } from '../pages/App';

test("Checking whether user can logged in", async({page}) => {
  const app = new App(page);
  await app.LoginPage.visit();
  await app.LoginPage.login("Admin","admin123");
  await expect( await app.DashboardPage.isDashboardTxtVisible()).toBeTruthy();
});


test("Checking whether wrong username, password does not allow users to log in", async({page}) => {
  const app = new App(page);
  await app.LoginPage.visit();
  await app.LoginPage.login("Admin","admin12");
  await expect( await app.DashboardPage.isInvalidLoginLblVisible()).toBeTruthy();

})