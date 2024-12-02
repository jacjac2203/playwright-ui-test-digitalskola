const { test:base } = require("@playwright/test");
const { loginPage } = require("../page-object/login-page");
const { dashboardPage } = require("../page-object/dashboard-page");

export const test = base.extend({
    LoginPage: async ({page}, use) => {
        const LoginPage = new loginPage(page);
        await LoginPage.navigate();
        await use(LoginPage);
    },
    menuPage: async ({page}, use) => {
        const menuPage = new dashboardPage(page);
        await menuPage.navigate();
        await use(menuPage);
    }
});

