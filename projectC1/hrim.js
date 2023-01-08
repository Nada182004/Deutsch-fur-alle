const bookContainers = [...document.querySelectorAll('.book-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
const bookCard = document.querySelector(".book-card")

bookContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width +40 ;
    let bookCardWidth = bookCard.getBoundingClientRect().width + 40;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
        console.log(containerWidth)
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
        console.log(containerWidth)
    })

    // auto slide images
    let autoSlider = setInterval(() => {
        item.scrollLeft += bookCardWidth;;
        console.log(containerWidth)
        console.log(item.scrollLeft)
        if (item.scrollLeft >= containerWidth / 1.3) {
            item.scrollLeft = 0
        }
    }, 5000)
})