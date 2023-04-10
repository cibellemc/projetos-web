const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

const slider1 = document.querySelectorAll('.slider1');
const btnPrev1 = document.getElementById('prev-button1');
const btnNext1 = document.getElementById('next-button1');

let currentSlide = 0;
let currentSlide1 = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)


function hideSlider1() {
  slider1.forEach(item => item.classList.remove('on'))
}

function showSlider1() {
  slider1[currentSlide1].classList.add('on')
}

function nextSlider1() {
  hideSlider1()
  if(currentSlide1 === slider1.length -1) {
    currentSlide1 = 0
  } else {
    currentSlide1++
  }
  showSlider1()
}

function prevSlider1() {
  hideSlider1()
  if(currentSlide === 0) {
    currentSlide1 = slider1.length -1
  } else {
    currentSlide1--
  }
  showSlider1()
}

btnNext1.addEventListener('click', nextSlider1)
btnPrev1.addEventListener('click', prevSlider1)