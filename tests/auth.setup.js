const { test:setup } = require("@playwright/test");
import path from 'path';
const { loginPage } = require("../tests/page-object/login-page");

const variable = require("../hooks/variables");
const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {
  const LoginPage = new loginPage(page);
  await LoginPage.navigate();
  await LoginPage.login(process.env.STANDARD_USER, process.env.PASSWORD);
  
  await page.context().storageState({ path: authFile });
});

