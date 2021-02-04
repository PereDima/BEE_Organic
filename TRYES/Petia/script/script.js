
let imgCarousel = document.querySelector('#img-id');
let rightButton = document.getElementById('right-arrow')
let oldHref = imgCarousel.getAttribute('href');

const carusellArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let activeImg = 1

const handleRightClick = () => {
  imgCarousel.setAttribute('src', `./img/caruselle/${activeImg}.jpg`)

  const postionOfCursor = carusellArr.indexOf(activeImg)
  activeImg = carusellArr[postionOfCursor + 1]
}

imgCarousel.setAttribute('src', './img/caruselle/4.jpg')

rightButton.addEventListener('click', handleRightClick)