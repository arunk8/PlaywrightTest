module.exports = {
    navigation: {
        feeds: "//flt-semantics[@role='button' and text()='Feeds']",
        jobs: "//flt-semantics[@role='button' and text()='Jobs']",
        learnings: "//flt-semantics[@role='button' and text()='Learnings']",
        goGlobal: "//flt-semantics[@role='button' and text()='GoGlobal']",
        alerts: "//flt-semantics[@role='button' and text()='Alerts']",
        profile: "//flt-semantics[@role='button' and text()='Profile']",
        signOut: "//flt-semantics[@role='button' and text()='Sign out']"
    },

    profile: {
        editButton: "//flt-semantics[@role='button' and text()='Edit']",
        instituteName: "//flt-semantics[span/text()='Life Choice Institute - School']",
        description: "//flt-semantics[span[contains(text(),'LIFE CHOICE INSTITUTE was founded')]]"
    },

    postedItems: {
        postedCourses: "//flt-semantics[@role='button' and text()='Posted Courses']",
        postedJobs: "//flt-semantics[@role='button' and text()='Posted Jobs']",
        postedEvents: "//flt-semantics[@role='button' and text()='Posted Events']",
        jobApplicants: "//flt-semantics[@role='button' and text()='Job Applicants']",
        courseRegistrants: "//flt-semantics[@role='button' and text()='Course Registrants']"
    },

    courses: {
        infectionDisease: "//flt-semantics[contains(@aria-label,'Infection Disease')]",
        staffNurse: "//flt-semantics[contains(@aria-label,'Staff nurse course')]",
        palliativeCare: "//flt-semantics[contains(@aria-label,'Palliative Care')]",
        cnaTest: "//flt-semantics[contains(@aria-label,'CNA Test')]",
        hhaPackage: "//flt-semantics[contains(@aria-label,'HHA Package')]",
        firstAid: "//flt-semantics[contains(@aria-label,'single_firstaid_auto_careslink')]",
        
        // buttons inside courses
        infectionDisease_delete: "//flt-semantics[contains(@aria-label,'Infection Disease')]//flt-semantics[@role='button'][1]",
        infectionDisease_edit: "//flt-semantics[contains(@aria-label,'Infection Disease')]//flt-semantics[@role='button'][2]",
        staffNurse_delete: "//flt-semantics[contains(@aria-label,'Staff nurse course')]//flt-semantics[@role='button'][1]",
        staffNurse_edit: "//flt-semantics[contains(@aria-label,'Staff nurse course')]//flt-semantics[@role='button'][2]"
    },
    createCourse: {
        header: {
            title: "//span[text()='Create Course']",
            closeButton: "(//flt-semantics[@role='button'])[1]" // top right close icon
        },

        fields: {
            courseName: "//textarea[@aria-label='Course name']",
            description: "//textarea[@aria-label='Description']",
            roleDropdown: "//flt-semantics[@role='button' and text()='Select Role']",
            languageDropdown: "//flt-semantics[@role='button' and text()='Select Language']",
            currencyDropdown: "//flt-semantics[@role='button' and text()='Currency']",
            coursePrice: "//textarea[@aria-label='Course Price']",
            discount: "//textarea[@aria-label='Discount(%)*']"
        },

        courseFormat: {
            online: "//flt-semantics[@role='group' and @aria-label='Online']",
            inPerson: "//flt-semantics[@role='group' and @aria-label='In-person']",
            hybrid: "//flt-semantics[@role='group' and @aria-label='Hybrid']",
            book: "//flt-semantics[@role='group' and @aria-label='Book']"
        },

        certificate: {
            yes: "//flt-semantics[@role='group' and @aria-label='Yes'][.//ancestor::flt-semantics[@id='flt-semantic-node-2125']]",
            no: "//flt-semantics[@role='group' and @aria-label='No'][.//ancestor::flt-semantics[@id='flt-semantic-node-2127']]"
        },

        hostedByCaresLink: {
            yes: "//flt-semantics[@role='group' and @aria-label='Yes'][.//ancestor::flt-semantics[@id='flt-semantic-node-2130']]",
            no: "//flt-semantics[@role='group' and @aria-label='No'][.//ancestor::flt-semantics[@id='flt-semantic-node-2132']]"
        },

        category: {
            certifications: "//flt-semantics[@role='group' and @aria-label='Certifications (HHA,CNA,etc.)']",
            continuousEducation: "//flt-semantics[@role='group' and @aria-label='Continuous Education (BLS, HIV, HIPAA, etc.)']",
            nclexTraining: "//flt-semantics[@role='group' and @aria-label='NCLEX Training']",
            ieltsOetTraining: "//flt-semantics[@role='group' and @aria-label='IELTS/OET Training']",
            valueAddedServices: "//flt-semantics[@role='group' and @aria-label='Value Added Services']"
        },

        actions: {
            cancel: "//flt-semantics[@role='button' and text()='Cancel']",
            create: "//flt-semantics[@role='button' and text()='Create']"
        }
    }


}
