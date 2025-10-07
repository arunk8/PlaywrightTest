const { test, expect } = require('@playwright/test');
exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page
    }
      get usernameTextbox() {
        return this.page.getByLabel('Username');
    }

    get passwordTextbox() {
        return this.page.getByLabel('Password');
    }

    get loginButton() {
        return this.page.getByRole('button', { name: 'Login' });
    }

    async gotoLoginPage(){
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async login(username, password){
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()
    }

    async enableAccessibility(page) {
        // Wait for the glass pane to be visible
        await this.page.waitForSelector('flt-glass-pane', { state: 'visible', timeout: 30000 });

        // Wait for the hidden accessibility button to exist
        const accessibilityButton = await this.page.$('your-hidden-button-selector');
        if (!accessibilityButton) {
            throw new Error('Accessibility button not found');
        }

        // Click using JavaScript execution (in case it's hidden or not interactable directly)
        await this.page.evaluate((el) => el.click(), accessibilityButton);

        console.log('Accessibility enabled');
    }

}