let indexValue = 1;

const img = document.querySelectorAll(".galeria");
const slider = document.querySelectorAll(".btm-slides span");
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");
const array = document.querySelectorAll(".btn");

showImg(indexValue);

leftButton.addEventListener('click', () => {
    showImg(indexValue -= 1);
});

rightButton.addEventListener('click', () => {
    showImg(indexValue += 1);
});

array.forEach((item) => {
    item.addEventListener('click', (e) => {
       
        showImg(indexValue = parseInt(e.target.id.substr(-1), 10));
    });
});

function showImg(foto) {
    if (foto > img.length) {
        indexValue = 1;
        showImg(indexValue);
        return; 
    }

    if (foto < 1) {
        indexValue = img.length;
        showImg(indexValue);
        return; 
    }

    for (let j = 0; j < img.length; j++) {
        img[j].style.display = "none";
    }

    for (let j = 0; j < slider.length; j++) {
        slider[j].style.background = "rgba(255,255,255,0.1)";
    }
    
    img[indexValue - 1].style.display = "block";
    slider[indexValue - 1].style.background = "white";
}