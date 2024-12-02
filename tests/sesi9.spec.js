const { test, expect } = require('@playwright/test');

const variable = require("../hooks/variables");


test.describe('Saucedemo Login Test', () => {
    test('Successful Login', async ({ page }) => {
        await page.goto(variable.data.url);
        await page.locator("data-test=username").fill(variable.data.username);
        await page.locator("data-test=password").fill(variable.data.password);
        await page.locator("data-test=login-button").click();
        await page.waitForURL("https://www.saucedemo.com/inventory.html");
        expect(page.getByRole('button', { name: 'Open Menu' })).not.toBeNull();
    });
});


test.describe('Saucedemo Cart', () => { 
    test("Add to cart", async ({ page }) => {
        await page.goto("https://www.saucedemo.com/inventory.html");
        await expect(page.locator("data-test=add-to-cart-sauce-labs-backpack")).toBeVisible();
        await page.locator("data-test=add-to-cart-sauce-labs-backpack").click();    
        expect(page.locator("data-test=shopping-cart-badge")).toBeVisible();
    });

    test("Add to cart success", async ({ page }) => {
        await page.goto("https://www.saucedemo.com/inventory.html");
        await page.locator("data-test=add-to-cart-sauce-labs-backpack").click();  
        await page.locator("data-test=shopping-cart-link").click();
        await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
        expect(page.locator("data-test=inventory-item")).toBeVisible();
    });
});