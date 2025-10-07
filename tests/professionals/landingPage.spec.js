const {test,expect}=require('@playwright/test')
import professionalLandingPageSelectors from '../../objectRepository/professionalLandingPageSelectors';
import ProfessionalLandingPage from './../../pages/ProfessionalLandingPage';

test('Verify all elements exist on Professional Landing page', async ({ page }) => {
    // const page = await browser.newPage();
    const plp = new ProfessionalLandingPage(page);

    await page.goto('https://elevate-healthforce-f6h23.flutterflow.app/professionals-landing-page');
    await page.waitForLoadState('networkidle')
    
    await plp.enableAccessibility();
    await page.waitForSelector(professionalLandingPageSelectors.professionalLandingPageSelectors.banner.title)
    const results = await plp.verifyAllElementsExist();
    console.log(results);

    // Example: fail test if any element is missing
    for (const [name, exists] of Object.entries(results)) {
        expect(exists).toBe(true);
    }
});