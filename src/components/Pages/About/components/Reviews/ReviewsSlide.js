
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextbtn");
const prevBtn = document.querySelector(".prevbtn");
//============================================================
slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`
});
//============================================================
let counter = 0;
nextBtn.addEventListener('click', function () {
    counter++;
    carusel();
});
prevBtn.addEventListener('click', function () {
    counter--;
    carusel();
});
//=============== u need to invoke the function ===============
function carusel() {
    //======================= for first and last slides =======
    // if (counter === slides.length) {
    //     counter = 0;
    // }
    // if (counter < 0) {
    //     counter = slides.length - 1;
    // }
    //============================================================
    //======================= for prev and next btns =======
    if (counter < slides.length - 1) {
        nextBtn.style.display = "block";
    }
    else {
        nextBtn.style.display = "none";
    }
    if (counter > 0) {
        prevBtn.style.display = "block";
    }
    else {
        prevBtn.style.display = "none";
    }
    slides.forEach(function (slide) {
        slide.style.transform = `translate(-${counter * 100}%)`;
    })
}

//============================================================
