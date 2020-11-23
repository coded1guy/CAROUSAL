const carousal = document.querySelector('.carousal');
const movingDiv = document.querySelector('.carousal-img');
const carousalStatus = document.querySelectorAll('.carousal-status > .circle');
console.log(carousalStatus);
let itCount = 0;

movingDiv.onanimationiteration = () => {
    itCount++;
    console.log(itCount);

    if(itCount === 1) {
        carousalStatus[0].classList.remove('active');
        carousalStatus[1].classList.add('active');
        carousal.style.backgroundImage = "url('assets/slider-img3.jpg')";
        movingDiv.style.backgroundImage ="url('assets/slider-img2.jpg')";
    } else if(itCount === 2) {
        carousalStatus[1].classList.remove('active');
        carousalStatus[2].classList.add('active');
        carousal.style.backgroundImage = "url('assets/slider-img1.jpg')";
        movingDiv.style.backgroundImage ="url('assets/slider-img3.jpg')";
    } else if(itCount === 3) {
        carousalStatus[2].classList.remove('active');
        carousalStatus[0].classList.add('active');
        carousal.style.backgroundImage = "url('assets/slider-img2.jpg')";
        movingDiv.style.backgroundImage ="url('assets/slider-img1.jpg')";
        itCount = 0;
    }
}

//iteration