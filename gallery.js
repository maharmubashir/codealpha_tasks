const images = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");

const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let current = 0;

function showImage(index){
    current = index;
    lightboxImg.src = images[current].src;
}

images.forEach((img, index) => {
    img.addEventListener("click", () => {
        lightbox.classList.add("active");
        showImage(index);
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

nextBtn.addEventListener("click", () => {
    current++;

    if(current >= images.length){
        current = 0;
    }

    showImage(current);
});

prevBtn.addEventListener("click", () => {
    current--;

    if(current < 0){
        current = images.length - 1;
    }

    showImage(current);
});

window.addEventListener("keydown", (e) => {

    if(!lightbox.classList.contains("active")) return;

    if(e.key === "Escape"){
        lightbox.classList.remove("active");
    }

    if(e.key === "ArrowRight"){
        nextBtn.click();
    }

    if(e.key === "ArrowLeft"){
        prevBtn.click();
    }

});
