const { expect } = require('@playwright/test');

export class dashboardPage {
    constructor(page){
        this.page = page    
        this.menuButton = page.getByRole('button', { name: 'Open Menu' });
        this.backpackTitle = page.getByText("Sauce Labs Backpack");
    }

    async navigate(){
        await this.page.goto("https://www.saucedemo.com/inventory.html");
    }

    async validatePage(){
        await expect(this.menuButton).toBeVisible();
        await expect(this.backpackTitle).toBeVisible();
    }
}