console.log("Radhe Radhe");

let left = document.querySelector('.lft_arrow');
let right = document.querySelector('.rgt_arrow');
let card = document.querySelectorAll('.card_item');
let images = document.querySelectorAll('.card_image');
let slideNo = 1;

// code

right.addEventListener("click", () => {
    console.log("radha");

    if (slideNo < images.length) {
        // card.forEach((box) => {
        //     box.style.transform = `translateX(-${slideNo * 10}rem)`;
        //     slideNo++;
            card.style.transform = `translateX(-${slideNo * 10}rem)`;
            // slideNo++;
        // });
    }

    else {
        // slideNo = 1;
    }
});






// left.addEventListener("click", () => {
//     console.log("kanha");

//     if (slideNo < images.length) {

//         card.forEach((box) => {
//             box.style.transform = `translateX(${slideNo * 15}rem)`;
//             slideNo++;
//         });
//     } else {
//         slideNo = 1;
//     }


// });







































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