const { professionalLandingPageSelectors } = require('./../objectRepository/professionalLandingPageSelectors'); // your big POM with all XPaths

class ProfessionalLandingPage {
    constructor(page) {
        this.page = page;

        // ================= HEADER =================
        this.headerLogo = professionalLandingPageSelectors.header.logo; 
        this.btnNavJobs = professionalLandingPageSelectors.header.navJobs;
        this.btnNavFeeds = professionalLandingPageSelectors.header.navFeeds;
        this.btnNavLearnings = professionalLandingPageSelectors.header.navLearnings;
        this.btnNavGoGlobal = professionalLandingPageSelectors.header.navGoGlobal;
        this.btnNavProfessionals = professionalLandingPageSelectors.header.navProfessionals;
        this.btnNavEmployers = professionalLandingPageSelectors.header.navEmployers;
        this.btnNavSchools = professionalLandingPageSelectors.header.navSchools;
        // this.btnSearchIcon = professionalLandingPageSelectors.header.searchIcon;
        this.btnSignIn = professionalLandingPageSelectors.header.btnSignIn;

        // ================= BANNER =================
        this.bannerTitle = professionalLandingPageSelectors.banner.title;
        this.bannerSubtitle = professionalLandingPageSelectors.banner.subtitle;
        this.bannerDescription = professionalLandingPageSelectors.banner.description;
        this.btnJoinFree = professionalLandingPageSelectors.banner.btnJoinFree;
        // this.btnGooglePlay = professionalLandingPageSelectors.banner.btnGooglePlay;
        // this.btnAppStore = professionalLandingPageSelectors.banner.btnAppStore;

        // ================= EMPLOYERS =================
        this.badgeSaratoga = professionalLandingPageSelectors.employers.badgeSaratoga;
        this.badgeOthers = professionalLandingPageSelectors.employers.badgeOthers;

        // ================= JOBS =================
        this.jobOrgName = professionalLandingPageSelectors.jobs.orgName;
        this.jobLocation = professionalLandingPageSelectors.jobs.location;
        this.jobTitle = professionalLandingPageSelectors.jobs.jobTitle;
        this.jobDescription = professionalLandingPageSelectors.jobs.jobDescription;
        this.jobSalaryLabel = professionalLandingPageSelectors.jobs.salaryLabel;
        this.jobSalaryValue = professionalLandingPageSelectors.jobs.salaryValue;
        this.jobBenefitsLabel = professionalLandingPageSelectors.jobs.benefitsLabel;
        this.jobContractTypeLabel = professionalLandingPageSelectors.jobs.contractTypeLabel;
        this.jobContractValue = professionalLandingPageSelectors.jobs.contractValue;
        this.jobShiftSchedule = professionalLandingPageSelectors.jobs.shiftSchedule;
        this.btnViewMoreJobs = professionalLandingPageSelectors.jobs.btnViewMoreJobs;

        // ================= CAREER PATHWAYS =================
        this.btnPathUSA = professionalLandingPageSelectors.careerPathways.pathUSA;
        this.btnPathCanada = professionalLandingPageSelectors.careerPathways.pathCanada;
        this.btnPathAustralia = professionalLandingPageSelectors.careerPathways.pathAustralia;
        this.btnPathUK = professionalLandingPageSelectors.careerPathways.pathUK;
        this.btnPathMore = professionalLandingPageSelectors.careerPathways.pathMore;

        // ================= COURSES =================
        this.coursesTitle = professionalLandingPageSelectors.courses.title;
        this.btnCoreCertifications = professionalLandingPageSelectors.courses.btnCoreCertifications;
        this.btnNCLEXTraining = professionalLandingPageSelectors.courses.btnNCLEX;
        this.btnContinuousEducation = professionalLandingPageSelectors.courses.btnContinuousEducation;
        this.btnLanguageProficiency = professionalLandingPageSelectors.courses.btnLanguageProficiency;

        // ================= JOB CATEGORIES =================
        this.cardRegisteredNurses = professionalLandingPageSelectors.jobCategories.cardRegisteredNurses;
        this.cardCNA = professionalLandingPageSelectors.jobCategories.cardCNA;
        this.cardHHA = professionalLandingPageSelectors.jobCategories.cardHHA;
        this.cardStaffNurses = professionalLandingPageSelectors.jobCategories.cardStaffNurses;
        this.cardCaregivers = professionalLandingPageSelectors.jobCategories.cardCaregivers;

        // ================= CREDENTIAL MANAGEMENT =================
        this.credentialsTitle = professionalLandingPageSelectors.credentials.title;
        this.credentialsAllInOne = professionalLandingPageSelectors.credentials.allInOneStorage;
        this.credentialsVerification = professionalLandingPageSelectors.credentials.credentialVerification;
        this.credentialsExpiration = professionalLandingPageSelectors.credentials.expirationAlerts;
        this.credentialsFastSharing = professionalLandingPageSelectors.credentials.fastSharing;

        // ================= BOTTOM =================
        this.bottomProcessTitle = professionalLandingPageSelectors.bottom.processTitle;
        this.bottomStep1 = professionalLandingPageSelectors.bottom.step1;
        this.bottomStep2 = professionalLandingPageSelectors.bottom.step2;
        this.bottomStep3 = professionalLandingPageSelectors.bottom.step3;
        this.bottomCommunityTitle = professionalLandingPageSelectors.bottom.communityTitle;

        this.hiddenAccessibilityButton = professionalLandingPageSelectors.header.hiddenAccessibilityButton;
    }

    /**
     * Method to verify if each element exists on the page
     */
    async verifyAllElementsExist() {
        const results = {};

        for (const [key, locator] of Object.entries(this)) {
            if (typeof locator === 'string' && locator.startsWith('//')) {
                const elementHandle = await this.page.$(locator);
                results[key] = elementHandle !== null;
            }
        }

        return results; // { headerLogo: true, btnNavJobs: false, ... }
    }


    async enableAccessibility() {
        // Wait for the glass pane to be visible
        await this.page.waitForSelector('//body', { state: 'visible', timeout: 30000 });

        // Wait for the hidden accessibility button
        const accessibilityButton = await this.page.waitForSelector(this.hiddenAccessibilityButton, { state: 'attached', timeout: 10000 });

        // Click the button via JS in case it's hidden or not interactable
        await accessibilityButton.evaluate(el => el.click());
        // await accessibilityButton.evaluate(el => el.click());

        await console.log('Accessibility enabled');
    }

    /**
   * Verify navigation for a given button locator and expected URL substring
   * @param {string} buttonLocator - XPath or selector of the button
   * @param {string} expectedUrlSubstring - Part of URL expected after navigation
   */
  async verifyNavigation(buttonLocator, expectedUrlSubstring) {
    // Listen for navigation promise after click
    const [response] = await Promise.all([
      this.page.waitForNavigation({ waitUntil: 'load', timeout: 30000 }),
      this.page.click(buttonLocator),
    ]);

    // Validate expected URL contains substring
    const currentUrl = this.page.url();
    if (!currentUrl.includes(expectedUrlSubstring)) {
      throw new Error(`Navigation failed: current URL "${currentUrl}" does not include "${expectedUrlSubstring}"`);
    }

    console.log(`Navigation test passed for ${buttonLocator} to ${expectedUrlSubstring}`);
  }

  /**
   * Test navigation of all main buttons with their expected URL parts
   * Customize expectedUrlSubstrings based on your app's routing
   */
  async verifyAllButtonNavigations() {
    const navTests = [
      { locator: this.btnNavJobs, expectedUrl: '/jobs' },
      { locator: this.btnNavFeeds, expectedUrl: '/feeds' },
      { locator: this.btnNavLearnings, expectedUrl: '/learnings' },
      { locator: this.btnNavGoGlobal, expectedUrl: '/goglobal' },
      { locator: this.btnNavProfessionals, expectedUrl: '/professionals' },
      { locator: this.btnNavEmployers, expectedUrl: '/employers' },
      { locator: this.btnNavSchools, expectedUrl: '/schools' },
      { locator: this.btnSignIn, expectedUrl: '/signin' },
      { locator: this.btnJoinFree, expectedUrl: '/signup' }, // Example: Join CaresLink
      // Add more buttons + expected URLs as needed
    ];

    for (const { locator, expectedUrl } of navTests) {
      try {
        await this.verifyNavigation(locator, expectedUrl);
      } catch (err) {
        console.error(`Navigation test failed for ${locator}: ${err.message}`);
      }
    }
  }

}

module.exports = ProfessionalLandingPage;
