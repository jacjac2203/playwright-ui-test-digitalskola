const variable = require("../hooks/variables");
const { test } = require("./base/base-test");

test('Successful Login', async ({LoginPage}) => {
    await LoginPage.login(variable.data.username, variable.data.password);
});

test('Validate on menu page', async ({menuPage}) => {
    await menuPage.validatePage();
});


