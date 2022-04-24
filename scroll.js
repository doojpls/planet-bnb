
const milesTag = document.querySelector('.miles');
const backHome = document.querySelectorAll('.footer-btn');
const marsBtn = document.querySelector('#mars-icon-btn');
const jupiterBtn = document.querySelector('#jupiter-icon-btn');
const saturnBtn = document.querySelector('#saturn-icon-btn');
const sections = document.querySelectorAll('section');


//top container changes color when clicking home button
const homeBtn = document.querySelector('.header-right');
const container = document.querySelector('.container');
const bottomText = document.querySelector('.bottom-container');
const bottom = document.querySelector('.bottom-container');

homeBtn.addEventListener('click', () => {
    container.classList.toggle('container-toggle');
    bottom.classList.toggle('container-toggle');
    bottomText.classList.toggle('bottom-text-toggle')
});

//when we scroll the page update the scrolltag to be how far we scrolled
document.addEventListener('scroll', function () {
    const miles = window.pageYOffset;

    if (miles == 0) {
        milesTag.innerHTML = 0;
    } else {
        milesTag.innerHTML = miles + " m";
    }

})

// When the user clicks on the button, scroll to the top of the document
backHome.forEach(button => {
    button.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});


//when the user clicks on the icon, scroll to that section
marsBtn.addEventListener('click', function () {
    window.scrollTo({ top: 590, behavior: 'smooth' });
});

jupiterBtn.addEventListener('click', function () {
    window.scrollTo({ top: 1200, behavior: 'smooth' });
});

saturnBtn.addEventListener('click', function () {
    window.scrollTo({ top: 1853, behavior: 'smooth' });
});



//pick all images and layer them based on z index
const slideArea = document.querySelector('div.hero-slides')
const images = slideArea.querySelectorAll('.slide')

//keep track of two things
let currentSlide = 0;
let z = 1;

//when i click slide area change the slide based on z index
slideArea.addEventListener('click', function () {
    currentSlide++

    if (currentSlide > images.length - 1) {
        currentSlide = 0;
    }
    z++

    //remove animation from the style for every image
    images.forEach(image => {
        image.style.animation = '';
    })

    //pick right image
    images[currentSlide].style.zIndex = z
    images[currentSlide].style.animation = 'fade 0.5s';
})


//when i hover over images they move in random place
slideArea.addEventListener('mouseenter', function () {
    images.forEach(image => {
        if (image.style.transform == "") {
            const x = 25 * (Math.floor(Math.random() * 5)) - 50;
            const y = 25 * (Math.floor(Math.random() * 5)) - 50;

            image.style.transform = `translate(${x}px, ${y}px)`;
        }
    })
})

//when i move my mouse away put images back
slideArea.addEventListener('mouseleave', function () {
    images.forEach(image => {
        image.style.transform = "";
    })
});

//when we scroll page make things paralax
//we want to move certain tags, based on how far they are from an anchor point
//what is the anchor? middle of section
//how far should we parralax? ratio of middle distance scrolled to middle point
document.addEventListener('scroll', () => {
    const topViewport = window.pageYOffset;
    const midViewport = topViewport + (window.innerHeight);

    sections.forEach(section => {
        const topSection = section.offsetTop;
        const midSection = topSection + (section.offsetHeight);
        
        const distanceToSection = midViewport - midSection;
        const parallaxTags = section.querySelectorAll(`[data-parallax]`);

        //loop over each parallax tag
        parallaxTags.forEach(tag => {
            const speed = parseFloat(tag.getAttribute("data-parallax"));
            tag.style.transform = `translate(0px, ${distanceToSection * speed}px)`
        })
    })
})

//when i scroll slides move out and in
document.addEventListener('scroll', () => {
    const topViewport = window.pageYOffset;

    images.forEach(image => {
        const xyTag = image.querySelector(`[data-xy]`);
        const xy = image.getAttribute("data-xy");

            if ((topViewport > 40) && (topViewport < 300)) {
                image.style.transform = `translate(${xy})`;
            } else {
                image.style.transform = "";
            } 
    })
})

//const pics = document.querySelector('.slide')

//var rect = pics.getBoundingClientRect();
//console.log(rect.top, rect.right, rect.bottom, rect.left);