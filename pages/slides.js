//pick all images and layer them based on z index
const slideArea = document.querySelector('div.slides');
const images = slideArea.querySelectorAll('.pics');
const slide = document.querySelector('.scroll');
const sections = document.querySelectorAll('section');

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
    const topViewport = window.pageYOffset;
    slide.style.color = 'white';
    images.forEach(image => {
        if (image.style.transform == "") {
            const x = 25 * (Math.floor(Math.random() * 5)) - 50;
            const y = 25 * (Math.floor(Math.random() * 5)) - 50;
    
            image.style.transform = `translate(${x}px, ${y}px)`;
            //image.style.webkitTransition = '0.5s';
        }
        
    })
})

//when i move my mouse away put images back
slideArea.addEventListener('mouseleave', function () {
    slide.style.color = 'black';
    images.forEach(image => {
        image.style.transform = "";
    })
})

//when i scroll slides move out and in
document.addEventListener('scroll', () => {
    const topViewport = window.pageYOffset;

    images.forEach(image => {
        const xyTag = image.querySelector(`[data-xy]`);
        const xy = image.getAttribute("data-xy");

            if ((topViewport > 40) && (topViewport < 400)) {
                image.style.transform = `translate(${xy})`;
            } else {
                image.style.transform = "";
            } 
    })
})