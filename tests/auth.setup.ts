import { test as setup, expect } from '@playwright/test';
import path from 'path';

const variable = require("../hooks/variables");
const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto(variable.data.url);
  await page.locator("data-test=username").fill(variable.data.username);
  await page.locator("data-test=password").fill(variable.data.password);
  await page.locator("data-test=login-button").click();
  await page.waitForURL("https://www.saucedemo.com/inventory.html");
  expect(page.getByRole('button', { name: 'Open Menu' })).not.toBeNull();
  
  await page.context().storageState({ path: authFile });
});