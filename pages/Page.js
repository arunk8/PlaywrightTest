
module.exports = class Page{


    async enableAccessibility() {
        // Wait for the glass pane to be visible
        await this.page.waitForSelector('//body', { state: 'visible', timeout: 30000 });

        // Wait for the hidden accessibility button
        const accessibilityButton = await this.page.waitForSelector("flt-semantics-placeholder", { state: 'attached', timeout: 10000 });

        // Click the button via JS in case it's hidden or not interactable
        await accessibilityButton.evaluate(el => el.click());
        // await accessibilityButton.evaluate(el => el.click());

        await console.log('Accessibility enabled');
    }

}