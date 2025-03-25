// console.log("Radhe Radhe");

let left = document.querySelector('.lft_arrow');
let right = document.querySelector('.rgt_arrow');
let cardWrapper = document.querySelector('.card_list'); // The scrolling container
let card = document.querySelector('.card_item')
let card_Link = document.querySelectorAll(".card_link")


let pressed = false;   // Tracks if the mouse is pressed
let startX;            // Stores the initial mouse X position
let x;                 // Stores the current X position
let scrollLeftStart;   // Stores the initial scroll position of the container

cardWrapper.addEventListener("mousedown", (e) => {
    pressed = true;
    startX = e.pageX - cardWrapper.offsetLeft;
    scrollLeftStart = cardWrapper.scrollLeft;
});

cardWrapper.addEventListener("mouseup", (e) => {
    pressed = false;
});

cardWrapper.addEventListener("mousemove", (e) => {
    if (!pressed) return; // If mouse is not pressed, do nothing
    e.preventDefault(); // Prevents text selection while dragging

    let moveX = e.pageX - cardWrapper.offsetLeft; // Get new X position
    let walk = (moveX - startX) * 2; // Calculate how far to scroll (multiplied for smoothness)

    cardWrapper.scrollLeft = scrollLeftStart - walk;
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