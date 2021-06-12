/* 

For CSS (Colours) editing, head to 'css/root.css'

Here you can edit the main values for your page, such as the name, job title, etc.
Ofcourse you may take full advantage of editing it yourself through the code if you wish.

*/

// Page Styling ------------------------------------------------------------------

export let pageStyling = {
    backgroundColor: "#FD8B72", // Main Page Background Color
    foregroundColor: "#FEFCFB", // Foreground Color
    primaryColor: "#FDFAF9", // Neon Color
    secondaryColor: "#878484", // Underglow Color
    textColor: "#0A0A0A",
    subTextColor: "#B8B3B1",
    font: "Georgia",
    particleEffect: true,
};

// Navigation --------------------------------------------------------------------

export let navigation = {
    navLogo: { // Navigation Logo
        enabled: true, // Do you want to use a Branding?
        isImage: false, // Do you want to use an Image? If not, alt text will be used
        logoWidth: "75px", // Size of your logo, adjustable without the CSS
        altText: "CM", // This will be used if it is not an Image (Will also be the alt text if it is an image)
        linkTo: "#",
    },

    leftNavigation: [ // Add items to the left side of the navigation Bar
        {
            text: "",
            url: "#",
        },
    ],

    rightNavigation: [ // Add items to the right side of the navigation Bar
        {
            text: "About Me", // Text Value
            url: "#aboutme", // Anchor points or External URLS, you may have to edit the App.js to add Anchors
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

    // Enable / Disable a Resume Button to allow a user to download your RESUME

    resumeBtn: {
        enabled: true, // Enable / Disable
        downloadIcon: true, // Show Icon
        text: "Resume", // Text on Button
        url: "https://google.com", // Make sure to include https:// or http://. This is the download link to your stored Resume
    }
};

// Information ------------------------------------------------------------------------

export let information = {
    fullName: "Caroline Miller", // Name in Profile Banner
    welcomeMsg: "Welcome! I'm", // Welcome subheading above Name
    aboutMe: "Full-stack web developer from Austin, Texas", // Short Description
    companyName: "", // Your position @ a Company
    // Replace with the URL to your image (URL or Local Image)
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
    description: "I'm an enthusiastic full-stack web developer certified with the Coding Boot Camp at the University of Texas at Austin. My goal is to draw upon my years of teaching experience to bring positivity, problem-solving, and collaboration to the workplace, and work with teams to produce creative solutions. \n \n \n Feel free to reach out to me at caroline.oconnor.miller@gmail.com, or via phone at 970-691-5493.",
};

// Portfolio ---------------------------------------------------------------------------

export let portfolioCards = [
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
];

// Experience -------------------------------------------------------------------------

export let experience = {
    experiences: [ // Preferably, sort by newest first
        {
            companyName: "Florida, Colorado, and Texas Public Schools", // Company Name
            companyLocation: "Austin, Texas & St. Augustine, Florida", // Location of Company
            roles: [ // Each company can have multiple Roles
                {
                    role: "Private bassoon instructor",
                    type: "Part-Time", // Full-Time, Part-Time, Internship, etc...
                    startPeriod: "August 2018", // Preferable format
                    endPeriod: "Present", // End result will look like "Apr 2020 - Present"
                    description: "Teaching students aged 10-18 of all skill levels how to grow and excel as musicians with the bassoon.",
                },
                {
                    role: "Substitute Teacher",
                    type: "Part-Time", // Full-Time, Part-Time, Internship, etc...
                    startPeriod: "January 2018", // Preferable format
                    endPeriod: "May 2018", // End result will look like "Apr 2020 - Present"
                    description: "Taught and managed classrooms while the regular teacher was absent. Led classrooms from pre-school to 12 grade in all subjects.",
                },
                {
                    role: "Band Intern",
                    type: "Full-Time", // Full-Time, Part-Time, Internship, etc...
                    startPeriod: "August 2017", // Preferable format
                    endPeriod: "December 2017", // End result will look like "Apr 2020 - Present"
                    description: "Rehearsed, organized, and conducted the 350-student Pacetti Bay Middle School Band and Jazz Band.",
                },
            ],
        },
        {
            companyName: "Quay Eyewear", // Company Name
            companyLocation: "Austin, Texas", // Location of Company
            roles: [ // Each company can have multiple Roles
                {
                    role: "Sales Associate",
                    type: "Part-Time", // Full-Time, Part-Time, Internship, etc...
                    startPeriod: "April 2021", // Preferable format
                    endPeriod: "Present", // End result will look like "Apr 2020 - Present"
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


/*

Portfolio-Bootstrap-React by Joshua Daveston Ahimaz

My Portfolio:
https://JAhimaz.github.io

My Github:
https://Github.com/JAhimaz


*/