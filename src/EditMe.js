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
    secondaryColor: "#4edcff", // Underglow Color
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
            url: "#",
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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales lectus ex, nec lacinia libero finibus in. Sed at mattis justo, feugiat cursus sapien. Proin blandit nisi nec mi iaculis, ac viverra felis sollicitudin. Aliquam rhoncus porta magna, non lacinia ipsum aliquam vitae. Vivamus fermentum dapibus mauris, varius consequat velit viverra egestas. Nunc eget lacus in tortor ultricies dignissim eget a eros. Suspendisse volutpat sit amet lorem non consectetur. Fusce sed ultricies felis.",
    quote: "\"The Best Preparation For Tommorow Is Doing Your Best Today.\"",
};

// Portfolio ---------------------------------------------------------------------------

export let portfolioCards = [
    {
        projectTitle: "My Project 1",
        projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales lectus ex, nec lacinia libero finibus in. Sed at mattis justo, feugiat cursus sapien. Proin blandit nisi nec mi iaculis, ac viverra felis sollicitudin. Aliquam rhoncus porta magna, non lacinia ipsum aliquam vitae. Vivamus fermentum dapibus mauris, varius consequat velit viverra egestas. Nunc eget lacus in tortor ultricies dignissim eget a eros. Suspendisse volutpat sit amet lorem non consectetur. Fusce sed ultricies felis.",
        projectURL: "https://github.com/",
        projectImg: "https://user-images.githubusercontent.com/70964778/115125032-34cc3200-9f8b-11eb-8933-5b3efd607170.png"
    },
    {
        projectTitle: "My Project 2",
        projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales lectus ex, nec lacinia libero finibus in. Sed at mattis justo, feugiat cursus sapien. Proin blandit nisi nec mi iaculis, ac viverra felis sollicitudin. Aliquam rhoncus porta magna, non lacinia ipsum aliquam vitae. Vivamus fermentum dapibus mauris, varius consequat velit viverra egestas. Nunc eget lacus in tortor ultricies dignissim eget a eros. Suspendisse volutpat sit amet lorem non consectetur. Fusce sed ultricies felis.",
        projectURL: "https://github.com/",
        projectImg: "https://user-images.githubusercontent.com/70964778/115979938-7e4deb80-a54e-11eb-80e6-834f2e31ce1d.png"
    },
    {
        projectTitle: "My Project 3",
        projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales lectus ex, nec lacinia libero finibus in. Sed at mattis justo, feugiat cursus sapien. Proin blandit nisi nec mi iaculis, ac viverra felis sollicitudin. Aliquam rhoncus porta magna, non lacinia ipsum aliquam vitae. Vivamus fermentum dapibus mauris, varius consequat velit viverra egestas. Nunc eget lacus in tortor ultricies dignissim eget a eros. Suspendisse volutpat sit amet lorem non consectetur. Fusce sed ultricies felis.",
        projectURL: "https://github.com/",
        projectImg: "https://user-images.githubusercontent.com/70964778/117221912-d64ae480-adcf-11eb-85ba-14112d86c3ba.png"
    },
];

// Experience -------------------------------------------------------------------------

export let experience = {
    experiences: [ // Preferably, sort by newest first
        {
            companyLogo: "", // Leave Blank for Template Logo
            companyName: "The New Company", // Company Name
            companyLocation: "Selangor, Malaysia", // Location of Company
            roles: [ // Each company can have multiple Roles
                {
                    role: "Software Engineer",
                    type: "Full-Time", // Full-Time, Part-Time, Internship, etc...
                    startPeriod: "Apr 2020", // Preferable format
                    endPeriod: "Present", // End result will look like "Apr 2020 - Present"
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales lectus ex, nec lacinia libero finibus in. Sed at mattis justo, feugiat cursus sapien. Proin blandit nisi nec mi iaculis, ac viverra felis sollicitudin. Aliquam rhoncus porta magna, non lacinia ipsum aliquam vitae. Vivamus fermentum dapibus mauris, varius consequat velit viverra egestas. Nunc eget lacus in tortor ultricies dignissim eget a eros. Suspendisse volutpat sit amet lorem non consectetur. Fusce sed ultricies felis.",
                },
                {
                    role: "Intern",
                    type: "Internship", // Full-Time, Part-Time, Internship, etc...
                    startPeriod: "Jan 2020", // Preferable format
                    endPeriod: "Apr 2020", // End result will look like "Apr 2020 - Present"
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales lectus ex, nec lacinia libero finibus in. Sed at mattis justo, feugiat cursus sapien. Proin blandit nisi nec mi iaculis, ac viverra felis sollicitudin. Aliquam rhoncus porta magna, non lacinia ipsum aliquam vitae. Vivamus fermentum dapibus mauris, varius consequat velit viverra egestas. Nunc eget lacus in tortor ultricies dignissim eget a eros. Suspendisse volutpat sit amet lorem non consectetur. Fusce sed ultricies felis.",
                },
            ],
        },
        {
            companyLogo: "", // Leave Blank for Template Logo
            companyName: "The Old Company", // Company Name
            companyLocation: "United Kingdom", // Location of Company
            roles: [ // Each company can have multiple Roles
                {
                    role: "Junior Full-Stack Developer",
                    type: "Part-Time", // Full-Time, Part-Time, Internship, etc...
                    startPeriod: "Dec 2019", // Preferable format
                    endPeriod: "Jan 2020", // End result will look like "Apr 2020 - Present"
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales lectus ex, nec lacinia libero finibus in. Sed at mattis justo, feugiat cursus sapien. Proin blandit nisi nec mi iaculis, ac viverra felis sollicitudin. Aliquam rhoncus porta magna, non lacinia ipsum aliquam vitae. Vivamus fermentum dapibus mauris, varius consequat velit viverra egestas. Nunc eget lacus in tortor ultricies dignissim eget a eros. Suspendisse volutpat sit amet lorem non consectetur. Fusce sed ultricies felis.",
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
            title: 'ReactJS', value: 45, color: '#28ACEA', experience: '1 year',
            description: 'Built a full-stack health application designed for modern mental health needs.'
        },
        {
            title: 'JavaScript', value: 25, color: '#19CEEB', experience: '2 years',
            description: 'Designed a password generator that took user choices, and rendered a secure password tailored to their specifications.'
        },
        {
            title: 'NodeJS', value: 10, color: '#09EBEE', experience: '1 year',
            description: 'Created a README generator that creates a custom README based upon user input regarding their project.'
        },
        {
            title: 'NoSQL', value: 20, color: '#00FEEF', experience: '1 year',
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