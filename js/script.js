let label = document.getElementsByClassName("label");

for (let i = 0; i < label.length; i++) {
    label[i].addEventListener("click", function () {
        let activeAcc = document.querySelector(".label.active");
        if (activeAcc && activeAcc !== this) {
            activeAcc.classList.toggle("active");
            activeAcc.nextElementSibling.classList.toggle("active");
        }
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("active");
    });
}


// For Header Scroll That changes its color Starts

window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    if (window.pageYOffset > 0) {
        header.classList.add('black');
    } else {
        header.classList.remove('black');
    }
});

// Ends

// Hamburger Starts

let hamBurger = document.querySelector('.hamburger')
let navMenu = document.querySelector('.nav-menu')

hamBurger.addEventListener('click', () => {

    hamBurger.classList.toggle('active')
    navMenu.classList.toggle('active')
})


document.querySelectorAll('.nav-menu').forEach(n => n.addEventListener('click', () => {
    hamBurger.classList.remove('active');
    navMenu.classList.remove('active');
}))

// Hamburger Ends



// Slider Auto Starts


// let slider = document.querySelector('.slider');
// let images = slider.querySelectorAll('img');
// let index = 0;

// images[index].classList.add('active');

// setInterval(nextSlide, 3000);

// function nextSlide() {
//     images[index].classList.remove('active');
//     index++;
//     if (index >= images.length) {
//         index = 0;
//     }
//     images[index].classList.add('active');
// }


// Slider Ends


// Slider Manual Starts


// let images = document.querySelectorAll('.slider-image');
// let captions = document.querySelectorAll('.caption');
// // let captionContainers = document.querySelectorAll('.caption-container');
// let arrows = document.querySelectorAll('.arrow');
// let index = 0;

// function showImage(index) {
//     images.forEach(image => image.classList.remove('active'));
//     captions.forEach(caption => caption.classList.remove('active'));
//     // captionContainers.forEach(captionContainer => captionContainer.classList.remove('active'));

//     images[index].classList.add('active');
//     captions[index].classList.add('active');
//     // captionContainers[index].classList.add('active');
// }

// arrows.forEach(arrow => {
//     arrow.addEventListener('click', () => {
//         if (arrow.classList.contains('arrow-left')) {
//             index = (index === 0) ? images.length - 1 : index - 1;
//         } else {
//             index = (index === images.length - 1) ? 0 : index + 1;
//         }
//         showImage(index);
//     });
// });

// showImage(index);


// let index = 0;

// function controller(x) {
//     index = index + x;
//     slideshow(index);
// }

// slideshow(index);

// function slideshow(num) {
//     let slides = document.getElementsByClassName('slider');
//     if (num == slides.length) {
//         index = 0
//         num = 0
//     }
//     if (num < 0) {
//         index = slides.length - 1;
//         num = slides.length - 1;
//     }
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = 'none';
//     }
//     slides[num].style.display = 'block';
// }

// Slider Manual Ends



// window.addEventListener('load', function () {
//     var status = document.querySelector('#status');
//     var preloader = document.querySelector('#preloader');

//     status.style.display = 'none';
//     setTimeout(function () {
//         preloader.style.display = 'none';
//     }, 550);
// });

