module.exports = {
    professionalLandingPageSelectors: {
        // ================= HEADER & TOP NAVIGATION =================
        header: {
            logo: "//span[text()='CaresLink']",
            navJobs: "//flt-semantics[text()='Jobs']",
            navFeeds: "//flt-semantics[text()='Feeds']",
            navLearnings: "//flt-semantics[text()='Learnings']",
            navGoGlobal: "//flt-semantics[text()='GoGlobal']",
            navProfessionals: "//flt-semantics[text()='Professionals']",
            navEmployers: "//flt-semantics[text()='Employers']",
            navSchools: "//flt-semantics[text()='Schools']",
            searchIcon: "//flt-semantics[@role='button' and @z-index='168']",
            btnSignIn: "//*[contains(text(),'Sign in') or contains(text(),'Sign In')]",
            hiddenAccessibilityButton: "flt-semantics-placeholder",
        },

        // ================= MAIN BANNER SECTION =================
        banner: {
            title: "//span[text()='CaresLink']",
            subtitle: "//span[contains(text(),'The Global HealthForce')]",
            description: "//span[contains(text(),'Join 200,000+ Healthcare Professionals Elevating their Skills')]",
            btnJoinFree: "//flt-semantics[@role='button' and contains(text(),'Join CaresLink for Free')]",
            btnGooglePlay: "//span[contains(text(),'GET IT ON')]/ancestor::flt-semantics",
            btnAppStore: "//span[contains(text(),'Download on the')]/ancestor::flt-semantics"
        },

        // ================= FEATURED EMPLOYERS / BADGES =================
        employers: {
            badgeSaratoga: "//span[contains(text(),'Saratoga Medical')]",
            badgeOthers: "//flt-semantics//span[contains(text(),'ComForCare') or contains(text(),'Focused Post Acute') or contains(text(),'ComForHealth')]"
        },

        // ================= JOB LISTING CARDS =================
        jobs: {
            orgName: "//span[contains(text(),'Saratoga Medical')]",
            location: "//span[contains(text(),'New York, United States')]",
            jobTitle: "//span[contains(text(),'Registered Nurse')]",
            jobDescription: "//flt-semantics//span[contains(text(),'The Registered Nurse will deliver')]",
            salaryLabel: "//span[text()='Salary']",
            salaryValue: "//span[contains(text(),'$75,000') or contains(text(),'$25(CAD)')]",
            benefitsLabel: "//span[text()='Benefits']",
            contractTypeLabel: "//span[text()='Contract Type']",
            contractValue: "//span[contains(text(),'Full-time')]",
            shiftSchedule: "//span[text()='Shift & schedule']",
            btnViewMoreJobs: "//flt-semantics[@role='button' and contains(text(),'View More Jobs')]"
        },

        // ================= COUNTRY CAREER PATHWAYS =================
        careerPathways: {
            pathUSA: "//flt-semantics[@role='button' and contains(text(),'Path To USA')]",
            pathCanada: "//flt-semantics[@role='button' and contains(text(),'Path To Canada')]",
            pathAustralia: "//flt-semantics[@role='button' and contains(text(),'Path To Australia')]",
            pathUK: "//flt-semantics[@role='button' and contains(text(),'Path To UK')]",
            pathMore: "//flt-semantics[@role='button' and contains(text(),'Explore More Countries')]"
        },

        // ================= COURSES & CERTIFICATIONS =================
        courses: {
            title: "//span[contains(text(),'Essential Courses to Advance Your Global Healthcare Career')]",
            btnCoreCertifications: "//flt-semantics[@role='button' and contains(text(),'Core Certifications')]",
            btnNCLEX: "//flt-semantics[@role='button' and contains(text(),'NCLEX Training')]",
            btnContinuousEducation: "//flt-semantics[@role='button' and contains(text(),'Continuous Education Credits')]",
            btnLanguageProficiency: "//flt-semantics[@role='button' and contains(text(),'Language Proficiency')]"
        },

        // ================= JOBS CATEGORIES =================
        jobCategories: {
            cardRegisteredNurses: "//flt-semantics[@role='button' and contains(text(),'Registered Nurses')]",
            cardCNA: "//flt-semantics[@role='button' and contains(text(),'CNA')]",
            cardHHA: "//flt-semantics[@role='button' and contains(text(),'HHA')]",
            cardStaffNurses: "//flt-semantics[@role='button' and contains(text(),'Staff Nurses')]",
            cardCaregivers: "//flt-semantics[@role='button' and contains(text(),'Caregivers')]"
        },

        // ================= CREDENTIAL MANAGEMENT =================
        credentials: {
            title: "//span[contains(text(),'Keep Your Credentials Ready for Every Opportunity')]",
            allInOneStorage: "//span[contains(text(),'All-in-One Storage')]",
            credentialVerification: "//span[contains(text(),'Credential Verification')]",
            expirationAlerts: "//span[contains(text(),'Expiration Alerts')]",
            fastSharing: "//span[contains(text(),'Fast Sharing')]"
        },

        // ================= BOTTOM SECTION =================
        bottom: {
            processTitle: "//span[contains(text(),'3 Step Process for Networking')]",
            step1: "//span[contains(text(),'Create your Account')]",
            step2: "//span[contains(text(),'Explore Courses & Opportunities')]",
            step3: "//span[contains(text(),'Connect and Grow')]",
            communityTitle: "//span[contains(text(),'What the CaresLink Community is Saying')]"
        }
    }
};
