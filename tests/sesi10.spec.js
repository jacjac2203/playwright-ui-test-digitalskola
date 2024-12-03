const variable = require("../hooks/variables");
const { test } = require("./base/base-test");

test('Successful Login', async ({LoginPage, menuPage}) => {
    await LoginPage.login(process.env.STANDARD_USER, process.env.PASSWORD);
    await menuPage.validatePage();
});

test('Add item to cart', async ({LoginPage, menuPage, cartPage}) => {
    await LoginPage.login(process.env.STANDARD_USER, process.env.PASSWORD);
    await menuPage.validatePage();
    await cartPage.addToCart();
    await cartPage.validateCart();
});


