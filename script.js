// console.log("Radhe Radhe");

let left = document.querySelector('.lft_arrow');
let right = document.querySelector('.rgt_arrow');
let cardWrapper = document.querySelector('.card_list'); // The scrolling container
let card = document.querySelector('.card_item')

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