// console.log("Radhe Radhe");

let left = document.querySelector('.lft_arrow');
let right = document.querySelector('.rgt_arrow');
let cardWrapper = document.querySelector('.card_list'); // The scrolling container
let card = document.querySelector('.card_item')
let card_Link = document.querySelectorAll(".card_link")


let pressed = false;
let startX;
let x;

cardWrapper.addEventListener("mousedown", (e) => {
    pressed = true;
    startX = e.offsetX - card.offsetLeft;

    // let x = e.offsetX + "px";  //give the x and y cordinates wrt to the ul (parent) container 
    // let y = e.offsetY + "px";
    // console.log(x, y);

});

window.addEventListener("mouseup",()=>{
    pressed = false;
});

cardWrapper.addEventListener("mousemove",(e)=>{
    if(!pressed) return;

    e.preventDefault();

    x = e.offsetX;
    cardWrapper.scrollLeft = `${x-startX}px`
    // card.style.left = `${x-startX}px`


});


// mouse down grab
card_Link.forEach((e) => {
    e.addEventListener("mousedown", () => {
        e.style.cursor = "grabbing";
    })
});

// mouse  up grab
card_Link.forEach((e) => {
    e.addEventListener("mouseup", (a) => {
        e.style.cursor = "grab";
    })
});
























// arrow left n right

function arrow_click() {
    let cardWidth = card.offsetWidth + 30; // Card width + margin

    right.addEventListener("click", () => {
        cardWrapper.scrollBy({
            left: cardWidth,
            behavior: "smooth"
        })
    });

    left.addEventListener("click", () => {
        cardWrapper.scrollBy({
            left: -cardWidth,
            behavior: "smooth"
        })
    })
}
arrow_click();



























// breakpoints: {
//     0 : {
//         slidesPreview: 1,
//     }
//     768: {
//         slidesPreview: 2,
//     }
//     1024 : {
//         slidesPreview: 4,
//     }
// }