import { test, expect } from '@playwright/test';
import { App } from '../pages/App';

// Test Case 1: Valid login
// Given user is on the login page
// When user enters username "standard_user"
// And user enters password "secret123"
// And user clicks login
// Then user should be redirected to the dashboard
// And user should see text "Welcome"
test('Valid login redirects to dashboard and shows Welcome', async ({ page }) => {
  const app = new App(page);
  await app.LoginPage.visit();
  await app.LoginPage.login('standard_user', 'secret123');
  // Check dashboard is visible
  await expect(await app.DashboardPage.isDashboardTxtVisible()).toBeTruthy();
  // Check Welcome text is visible
  await expect(await app.LoginPage.lblWelcome.isVisible()).toBeTruthy();
});

// Test Case 2: Invalid password
// Given user is on the login page
// When user enters username "standard_user"
// And user enters password "wrongpass"
// And user clicks login
// Then error message "Invalid credentials" should be displayed
test('Invalid password shows error message', async ({ page }) => {
  const app = new App(page);
  await app.LoginPage.visit();
  await app.LoginPage.login('standard_user', 'wrongpass');
  await expect(await app.LoginPage.isInvalidLoginLblVisible()).toBeTruthy();
});
