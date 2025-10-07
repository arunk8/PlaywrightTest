class WebActions {
    constructor(page) {
        this.page = page;
    }

    /**
     * Navigates to a specified URL.
     * @param {string} url - The URL to navigate to.
     */
    async navigateTo(url) {
        console.log(`Navigating to URL: ${url}`);
        await this.page.goto(url, { waitUntil: 'load' });
    }

    /**
     * Types text into the given selector.
     * @param {string} selector - The selector of the input field.
     * @param {string} text - The text to enter.
     */
    async type(selector, text) {
        console.log(`Typing into ${selector}: ${text}`);
        await this.page.locator(selector).waitFor({ state: 'visible' });
        await this.page.fill(selector, text);
    }

    /**
     * Clicks on the specified selector.
     * @param {string} selector - The selector to click.
     */
    async click(selector) {
        console.log(`Clicking on ${selector}`);
        await this.page.locator(selector).waitFor({ state: 'attached' });
        await this.page.click(selector);
    }

    /**
     * Clicks using JavaScript if normal click fails.
     * @param {string} selector - The selector to click via JS.
     */
    async jsClick(selector) {
        console.log(`JS Clicking on ${selector}`);
        const elementHandle = await this.page.$(selector);
        await this.page.evaluate(el => el.click(), elementHandle);
    }

    /**
     * Waits for the element to be visible.
     * @param {string} selector - The selector to wait for.
     */
    async waitForVisibility(selector) {
        console.log(`Waiting for visibility of ${selector}`);
        await this.page.locator(selector).waitFor({ state: 'visible' });
    }

    /**
     * Waits for the element to be hidden.
     * @param {string} selector - The selector to wait for disappearance.
     */
    async waitForHidden(selector) {
        console.log(`Waiting for ${selector} to be hidden`);
        await this.page.locator(selector).waitFor({ state: 'hidden' });
    }

    /**
     * Selects a dropdown option by value.
     * @param {string} selector - The select element.
     * @param {string} value - The value to select.
     */
    async selectByValue(selector, value) {
        console.log(`Selecting value "${value}" from ${selector}`);
        await this.page.selectOption(selector, value);
    }

    /**
     * Takes a screenshot with a dynamic timestamped filename.
     * @param {string} name - Base name for the screenshot.
     */
    async takeScreenshot(name = 'screenshot') {
        const path = `reports/screenshots/${name}_${Date.now()}.png`;
        console.log(`Capturing screenshot: ${path}`);
        await this.page.screenshot({ path });
    }

    /**
     * Returns true if the element is visible.
     * @param {string} selector
     * @returns {boolean}
     */
    async isVisible(selector) {
        const visible = await this.page.locator(selector).isVisible();
        console.log(`${selector} is visible: ${visible}`);
        return visible;
    }

    /**
     * Waits for navigation after a click or action.
     */
    async waitForNavigation() {
        console.log("Waiting for navigation...");
        await this.page.waitForNavigation({ waitUntil: 'load' });
    }

    /**
     * Gets the text of the selector.
     * @param {string} selector
     * @returns {string}
     */
    async getText(selector) {
        await this.waitForVisibility(selector);
        const text = await this.page.locator(selector).innerText();
        console.log(`Text of ${selector}: ${text}`);
        return text;
    }

    /**
     * Presses a keyboard key.
     * @param {string} selector
     * @param {string} key - Keyboard key like 'Enter', 'Tab'
     */
    async pressKey(selector, key) {
        console.log(`Pressing key "${key}" on ${selector}`);
        await this.page.locator(selector).press(key);
    }

    /**
     * Checks if selector exists in the DOM.
     * @param {string} selector
     * @returns {boolean}
     */
    async isPresent(selector) {
        const count = await this.page.locator(selector).count();
        const exists = count > 0;
        console.log(`Presence of ${selector}: ${exists}`);
        return exists;
    }
}

module.exports = { WebActions };
