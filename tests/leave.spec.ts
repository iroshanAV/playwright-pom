import { test, expect } from '@playwright/test';
import { App } from '../pages/App';

test("Checking whether Admin can assign leaves to an employee", async({page}) => {
  const app = new App(page);
  await app.LoginPage.visit();
  await app.LoginPage.login("Admin","admin123");
  await app.DashboardPage.clickLinkLeave();
  await app.LeavePage.clickBtnAssignLeave();
  

});

