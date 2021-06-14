
// Page Styling ------------------------------------------------------------------

export let pageStyling = {
    backgroundColor: "#77CBD0",
    foregroundColor: "#FEFCFB",
    primaryColor: "#FDFAF9",
    secondaryColor: "#878484",
    textColor: "#0A0A0A",
    subTextColor: "#B8B3B1",
    font: "Georgia",
    particleEffect: true,
};

// Navigation --------------------------------------------------------------------

export let navigation = {
    navLogo: {
        enabled: true,
        isImage: false,
        logoWidth: "75px",
        altText: "C/M",
        linkTo: "#",
    },

    leftNavigation: [
        {
            text: "",
            url: "#",
        },
    ],

    rightNavigation: [
        {
            text: "About Me",
            url: "#aboutme",
        },
        {
            text: "Portfolio",
            url: "#portfolio",
        },
        {
            text: "Experience",
            url: "#experience",
        },
        {
            text: "Skills",
            url: "#skills",
        },
        {
            text: "Contact",
            url: "#aboutme",
        },
    ],

    resumeBtn: {
        enabled: true,
        downloadIcon: true,
        text: "Resume",
        url: "https://docs.google.com/document/d/1-1HZzFTyDAsqhsB0My2XmPy_Xk9w92yiEUUvEXlq47M/edit?usp=sharing", // Make sure to include https:// or http://. This is the download link to your stored Resume
    }
};

// Information ------------------------------------------------------------------------

export let information = {
    fullName: "Caroline Miller",
    welcomeMsg: "Welcome! I'm",
    aboutMe: "Full-stack web developer from Austin, Texas",
    profilePhoto: "https://imgur.com/9T0yR6w.jpg"
};

// Socials ----------------------------------------------------------------------------

export let socials = {
    // twitterURL: "https://twitter.com/", // Twitter
    githubURL: "https://github.com/caroline-e-miller", // Github
    linkedinURL: "https://www.linkedin.com/in/caroline-miller-5097a71b6/", // LinkedIn
};

// About Me ----------------------------------------------------------------------------

export let aboutMe = {
    description: "I'm an enthusiastic full-stack web developer certified with the Coding Boot Camp at the University of Texas at Austin. My goal is to draw upon my years of teaching experience to bring positivity, problem-solving, and collaboration to the workplace, and work with teams to produce creative solutions.",
    quote: "Feel free to reach out to me at caroline.oconnor.miller@gmail.com, or via phone at 970-691-5493."
};

// Portfolio ---------------------------------------------------------------------------

export let portfolioCards = [
    {
        projectTitle: "Mind Managed",
        projectDesc: "Mind Managed is an application designed to help users navigate, track, and manage their mental health needs. Complete with journaling, mood data, prescription information, and prescription intake history, Mind Managed aims to take the complicated task of maintaining mental balance and make it a little easier.",
        projectURL: "https://obscure-beyond-60909.herokuapp.com/",
        projectImg: "https://user-images.githubusercontent.com/70964778/121830119-ef299e00-cc89-11eb-9b6d-cbbc5c7ef8a1.png"
    },
    {
        projectTitle: "Week Daze",
        projectDesc: "Week Daze is an application designed for users during a job search. It allows the user to save their applications, application status, and see graphs reflecting the length of time since their application was submitted.",
        projectURL: "https://arcane-harbor-21800.herokuapp.com/",
        projectImg: "https://user-images.githubusercontent.com/70964778/115125032-34cc3200-9f8b-11eb-8933-5b3efd607170.png"
    },
    {
        projectTitle: "BiblioTech",
        projectDesc: "BiblioTech is a site designed to provide a space for programmers to create a profile, write about their ideas, and comment on the posts of their peers.",
        projectURL: "https://evening-reef-25069.herokuapp.com/",
        projectImg: "https://user-images.githubusercontent.com/70964778/115979938-7e4deb80-a54e-11eb-80e6-834f2e31ce1d.png"
    },
    {
        projectTitle: "Workout Tracker",
        projectDesc: "Workout Tracker allows the user to track the duration, type, etc. of workouts and see data rendered in charts that reflects their progress.",
        projectURL: "https://blooming-waters-15181.herokuapp.com/",
        projectImg: "https://user-images.githubusercontent.com/70964778/117221912-d64ae480-adcf-11eb-85ba-14112d86c3ba.png"
    },
    {
        projectTitle: "Worlwide Workers",
        projectDesc: "Worldwide Workers is a React application that gives the user the ability to sort through a large number of employees by name and nationality.",
        projectURL: "https://caroline-e-miller.github.io/employee-directory/",
        projectImg: "https://user-images.githubusercontent.com/70964778/119277450-687f2500-bbe5-11eb-9634-8b79b8976037.png"
    },
    {
        projectTitle: "Readme Generator",
        projectDesc: "The Readme Generator takes the sometimes-mundane task of writing a Readme file, and turns it into a simple series of command-line questions that results in an elegant Readme that is tailored toward the individual users project.",
        projectURL: "https://caroline-e-miller.github.io/employee-directory/",
        projectImg: "https://user-images.githubusercontent.com/70964778/110176328-b8113a00-7dc8-11eb-85b8-757f5576312a.png"
    },
];

// Experience -------------------------------------------------------------------------

export let experience = {
    experiences: [
        {
            companyLogo: "https://media.guitarcenter.com/is/image/MMGS7/M100E-Professional-Bassoon/L58593000000000-00-500x500.jpg",
            companyName: "Florida, Colorado, and Texas Public Schools",
            companyLocation: "Austin, Texas & St. Augustine, Florida",
            roles: [
                {
                    role: "Private bassoon instructor",
                    type: "Part-Time",
                    startPeriod: "August 2018",
                    endPeriod: "Present",
                    description: "Teaching students aged 10-18 of all skill levels how to grow and excel as musicians with the bassoon.",
                },
                {
                    role: "Substitute Teacher",
                    type: "Part-Time",
                    startPeriod: "January 2018",
                    endPeriod: "May 2018",
                    description: "Taught and managed classrooms while the regular teacher was absent. Led classrooms from pre-school to 12 grade in all subjects.",
                },
                {
                    role: "Band Intern",
                    type: "Full-Time",
                    startPeriod: "August 2017",
                    endPeriod: "December 2017",
                    description: "Rehearsed, organized, and conducted the 350-student Pacetti Bay Middle School Band and Jazz Band.",
                },
            ],
        },
        {
            companyLogo: "https://cdn-vzn.yottaa.net/555a305b2bb0ac71b9002d22/10ec148069090139fdee0ead9ecbf798.yottaa.net/v~4b.266.0.0/tenantlogos/28196.png?yocs=D_NA_.jpg",
            companyName: "Quay Eyewear",
            companyLocation: "Austin, Texas",
            roles: [
                {
                    role: "Sales Associate",
                    type: "Part-Time",
                    startPeriod: "April 2021",
                    endPeriod: "Present",
                    description: "Worked with customers to help them find the best sunglasses and prescription eyewear for their individual needs. Coordinated with teammates to manage the store, and maintain customer engagement.",
                },
            ],
        },
    ]
};

// Skills -----------------------------------------------------------------------------

export let skills = {
    //Pie Chart Editing
    radius: 42, // of the circle
    lineWidth: 15, //The line Width of all segments
    paddingAngle: 5, // The distance between each segment
    //Labels
    labelPosition: 72, // Location of Label. Outer = 166
    fontSize: '2px', // Size of the Label
    //Pie Chart Data
    skillsData: [
        // Each Skill will have the title, value for the chart, color, experience (years, months) and a desscription on the task
        // Some examples are shown below
        {
            title: 'ReactJS', value: 45, color: '#484C4F', experience: '1 year',
            description: 'Built a full-stack health application designed for modern mental health needs.'
        },
        {
            title: 'JavaScript', value: 25, color: '#6D7881', experience: '2 years',
            description: 'Designed a password generator that took user choices, and rendered a secure password tailored to their specifications.'
        },
        {
            title: 'NodeJS', value: 10, color: '#99ACBB', experience: '1 year',
            description: 'Created a README generator that creates a custom README based upon user input regarding their project.'
        },
        {
            title: 'NoSQL', value: 20, color: '#C0D4E5', experience: '1 year',
            description: 'Built a workout application that tracks the duration, type, etc. of a users workout. User history is rendered in various chart forms.'
        },
    ],
}