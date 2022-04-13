
const milesTag = document.querySelector('.miles');
const backHome = document.querySelectorAll('.footer-btn');
const marsBtn = document.querySelector('#mars-icon-btn');
const jupiterBtn = document.querySelector('#jupiter-icon-btn');
const saturnBtn = document.querySelector('#saturn-icon-btn');

//when we scroll the page update the scrolltag to be how far we scrolled
document.addEventListener('scroll', function () {
    const miles = window.pageYOffset;

    milesTag.innerHTML = miles + " m"
})

// When the user clicks on the button, scroll to the top of the document
backHome.forEach(button => {
    button.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});


//when the user clicks on the icon, scroll to that section
marsBtn.addEventListener('click', function () {
    window.scrollTo({ top: 515, behavior: 'smooth' });
});

jupiterBtn.addEventListener('click', function () {
    window.scrollTo({ top: 1133, behavior: 'smooth' });
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
        const x = 25 * (Math.floor(Math.random() * 5)) - 50;
        const y = 25 * (Math.floor(Math.random() * 5)) - 50;

        image.style.transform = `translate(${x}px, ${y}px)`;
    })
})

//when i move my mouse away put images back
slideArea.addEventListener('mouseleave', function () {
    images.forEach(image => {
        image.style.transform = "";
    })
})