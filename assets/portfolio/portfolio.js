
// Skills

var skills = [{
        img: "../assets/portfolio/icon_analysis.svg",
        title: "Analysis"
    },
    {
        img: "../assets/portfolio/icon_develop.svg",
        title: "Develop"
    },
    {
        img: "../assets/portfolio/icon_plan.svg",
        title: "Project plan"
    },
    {
        img: "../assets/portfolio/icon_card.svg",
        title: "Branding"
    },
    {
        img: "../assets/portfolio/icon_ui.svg",
        title: "UI/UX Design"
    },
    {
        img: "../assets/portfolio/icon_motion.svg",
        title: "Motion Graphics"
    }
];

var rowIcons = document.querySelector('.row-icons');

for (let i = 0; i < skills.length; i++) {
    const {
        img,
        title
    } = skills[i];


    var templateSkills = `
    <div class="icon-section">
        <img src="${img}" alt="${title}">
        <p>${title}</p>
    </div>`;

    rowIcons.insertAdjacentHTML('beforeend', templateSkills);

};

// Social

var social = [{
        img: "../assets/portfolio/linkedin.svg",
        title: "linkedin",
        url: "https://www.linkedin.com/in/jialu-y-062a59256/"
    },
    {
        img: "../assets/portfolio/dribbble.svg",
        title: "dribbble",
        url: "https://dribbble.com/jialuyu"
    },
    {
        img: "../assets/portfolio/github.svg",
        title: "github",
        url: "https://github.com/YuJialu-lab?tab=repositories"
    }
];

var socialItems = document.querySelector('.social-items');

for (let i = 0; i < social.length; i++) {
    const {
        img,
        title,
        url,
    } = social[i];


    var templateSocial = `
        <a class="social" href="${url}" target="_blank"  rel="noopener">
            <img src="${img}" alt="${title}">
            <p class="social-title">${title}</p>
        </a>`;

    socialItems.insertAdjacentHTML('beforeend', templateSocial);

}