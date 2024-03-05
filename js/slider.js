// Function to create a carousel
function createCarousel(sliderClass) {
	const slides = document.querySelectorAll(`.${sliderClass} .myslide`);
	const dots = document.querySelectorAll(`.${sliderClass} .dot`);
	let counter = 1;
	slidefun(counter);
  
	let timer = setInterval(autoSlide, 5000);
  
	function autoSlide() {
	  counter += 1;
	  slidefun(counter);
	}
  
	function plusSlides(n) {
	  counter += n;
	  slidefun(counter);
	  resetTimer();
	}
  
	function currentSlide(n) {
	  counter = n;
	  slidefun(counter);
	  resetTimer();
	}
  
	function resetTimer() {
	  clearInterval(timer);
	  timer = setInterval(autoSlide, 5000);
	}
  
	function slidefun(n) {
	  let i;
	  for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	  }
	  for (i = 0; i < dots.length; i++) {
		dots[i].classList.remove('active');
	  }
	  if (n > slides.length) {
		counter = 1;
	  }
	  if (n < 1) {
		counter = slides.length;
	  }
	  slides[counter - 1].style.display = 'block';
	  dots[counter - 1].classList.add('active');
	}
  
	// Event listeners for the carousel controls
	document.querySelector(`.${sliderClass} .prev`).addEventListener('click', () => plusSlides(-1));
	document.querySelector(`.${sliderClass} .next`).addEventListener('click', () => plusSlides(1));
	dots.forEach((dot, index) => dot.addEventListener('click', () => currentSlide(index + 1)));
  }
  
  // Initialize the carousels
  createCarousel('slider');
  createCarousel('new-slider');
