const sliderPrev = document.querySelector('.slider__arrow_prev');
const sliderNext = document.querySelector('.slider__arrow_next');
const sliders = Array.from(document.querySelectorAll('.slider__item'));

let activeSlide = sliders.findIndex((item) => item.classList.contains('slider__item_active'));
function slide(newActiveSlide) {
	sliders[activeSlide].classList.remove('slider__item_active');
	sliders[newActiveSlide].classList.add('slider__item_active');
	activeSlide = newActiveSlide;
}

sliderPrev.addEventListener('click', () => {
	let newSlide = activeSlide - 1;
	newSlide = newSlide < 0 ? sliders.length - 1 : newSlide;
	slide(newSlide);
});

sliderNext.addEventListener('click', () => {
	let newSlide = activeSlide + 1;
  newSlide = newSlide >= sliders.length ? 0 : newSlide;
	slide(newSlide);
});
