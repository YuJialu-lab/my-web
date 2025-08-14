window.onload = function (e) {


    // Sticky menu 

    var menuNav = document.querySelector('.mainNav'),
        itemContainer = document.querySelector(".dailyItems");

    window.onscroll = function () {

        if (window.pageYOffset >= 100) {
            menuNav.classList.add('sticky');

        } else {
            menuNav.classList.add('sticky-out');

            setTimeout(function () {
                menuNav.classList.remove('sticky');
                menuNav.classList.remove('sticky-out');
            }, 200);
        }
    }


    // Add Works

    var nu = 1,
        nm = 1,
        im = 1,
        folder = "../assets/works",
        total = 81;


    const items = [{
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "The advisory platform",
            color: "#f2d8a6ff"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "Gym management system",
            color: "#a6b5d3ff"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "Autoleasing",
            color: "#6aa0b6"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "E-motorcycle",
            color: "#68b1acff"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "App Icon",
            color: "#b0b0b3"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "Profile",
            color: "#9473e2ff"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "Settings",
            color: "#8160de"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "404 Page",
            color: "#61378a"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "Music Player",
            color: "#e2a902"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "Social Share",
            color: "#359ed2"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "Flash Message",
            color: "#62ccb9"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "E-Commerce Shop (Single Item)",
            color: "#F3615C"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "Direct Messaging",
            color: "#60c4c7"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "Countdown Timer",
            color: "#fe9014"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "On/Off Switch",
            color: "#1db0b9"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "Pop-Up / Overlay",
            color: "#5d48c9"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "Email Receipt",
            color: "#435072"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "Analytics Chart",
            color: "#70d3b2"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "Leaderboard",
            color: "#E87867"
        },
    ];

    const itemEmpty = [{
        name: `${nm}`,
        image: `${folder}/placeholder.jpg`,
        desc: "Coming soon",
        color: "#000000"
    }];


    function addItems() {

        for (let i = 0; i < items.length; i++) {
            var name = items[i].name,
                img = items[i].image,
                desc = items[i].desc,
                url = items[i].url,
                color = items[i].color;

            var template = `
            <a href="${url}" target="_blank"  rel="noopener" class="dailyItem">
            
                    <div class="dailyItem__content">
                    <div class="dailyItem__itemBg" style="background-color:${color}f0"></div>
                    <article class="dailyItem__text">
                        <h3 class="dailyItem__name">#${name}</h3>
                        <p class="dailyItem__desc">${desc}</p>
                    </article>
                    </div>
                    <div class="dailyItem__image"> 
                        <img src="${img}" alt="Daily UI ${name} - ${desc}">
                    </div>
                
            </a>`;
            itemContainer.insertAdjacentHTML('beforeend', template);
        }
    }

    function addEmpty(total) {

        for (let i = 0; i < total; i++) {
            var name2 = itemEmpty[0].name++,
                img2 = itemEmpty[0].image,
                desc2 = itemEmpty[0].desc,
                color2 = itemEmpty[0].color;

            var template = `
            <div class="dailyItem">
                    <div class="dailyItem__content">
                    <div class="dailyItem__itemBg" style="background-color:${color2}70"></div>
                    <article class="dailyItem__text">
                        <h3 class="dailyItem__name">#${name2}</h3>
                        <p class="dailyItem__desc">${desc2}</p>
                    </article>
                    </div>
                    <div class="dailyItem__image"> 
                        <img src="${img2}" alt="${desc2}">
                    </div>
            </div>`;
            itemContainer.insertAdjacentHTML('beforeend', template);
        }
    }

    addItems();

    addEmpty(total);


    ///////// Animate Modules //////////
    const dailyItem = document.querySelectorAll('.dailyItem');
    let delay = 1;


    const anime = (element, animation) => {
        if (element.offsetParent != null) {

            if (!element.classList.contains(animation)) {
                element.classList.add(animation);

                element.style.animationDelay = `${delay}` * 0.2 + "s";
                delay++;
            }
        }
    };

    const isInViewport = (element) => {
        var bounding = element.getBoundingClientRect();
        return (
            bounding.bottom >= 0 &&
            bounding.right >= 0 &&
            bounding.top <= document.documentElement.clientHeight &&
            bounding.left <= document.documentElement.clientWidth
        )
    };

    const isItemVisible = (element, animation) => {
        if (isInViewport(element)) {
            if (window.innerWidth >= 800) {
                anime(element, animation);
            }
        }
    };


    // for viewport
    const animeItem = (item, animation) => {
        item.forEach(item => {
            isItemVisible(item, animation);
        })
        delay = 1;
    };


    // for scroll
    window.addEventListener('scroll', () => {
        if (window.innerWidth >= 800) {
            animeItem(dailyItem, "anime");
        }

    });
    // to load the animations

    animeItem(dailyItem, "anime");

}