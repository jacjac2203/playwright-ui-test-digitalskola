const { expect } = require('@playwright/test');

export class itemCartPage {
    constructor(page){
        this.page = page    
        this.atcBackpack = page.locator("data-test=add-to-cart-sauce-labs-backpack");
        this.backpackTitle = page.getByText("Sauce Labs Backpack");
        this.cartBadge = page.locator("data-test=shopping-cart-badge");
        this.cartLink = page.locator("data-test=shopping-cart-link");
        this.itemList = page.locator("data-test=inventory-item");
    }

    async addToCart(){
        await this.page.goto("https://www.saucedemo.com/inventory.html");
        await expect(this.atcBackpack).toBeVisible();
        await this.atcBackpack.click();
        await expect(this.cartBadge).toBeVisible();
    }

    async validateCart(){
        await this.cartLink.click();
        await expect(this.page).toHaveURL("https://www.saucedemo.com/cart.html");
        await expect(this.itemList).toBeVisible();
    }
}