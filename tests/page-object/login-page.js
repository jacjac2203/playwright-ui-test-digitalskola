export class loginPage {
    constructor(page){
        this.page = page    
        this.usernameTextBox = page.locator("data-test=username");
        this.passwordTextBox = page.locator("data-test=password");
        this.loginButton = page.locator("data-test=login-button");
    }
    
    async navigate(){
        await this.page.goto("https://www.saucedemo.com/");
    }

    async login(username, password){
        await this.usernameTextBox.fill(username);
        await this.passwordTextBox.fill(password);
        await this.loginButton.click();
    }

    
}