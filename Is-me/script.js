const checkbox = document.querySelector('input[type="checkbox"]');
const facebookIcon = document.querySelector('.icon1');
const instagramIcon = document.querySelector('.icon2');
const linkedinIcon = document.querySelector('.icon3');
const twitterIcon = document.querySelector('.icon4');
const githubIcon = document.querySelector('.icon5');

checkbox.addEventListener('change', () => {
  const currentCursor = getComputedStyle(document.body).cursor;
  if (checkbox.checked) {
    document.body.style.cursor = 'url("image/c1.svg"), auto';
    const root = document.documentElement;
    root.style.setProperty('--day-background-color', '#000000');
    root.style.setProperty('--day-text-color', '#f9fbed');
    root.style.setProperty('--night-background-color', '#f9fbed');
    root.style.setProperty('--night-text-color', '#000000');
    facebookIcon.src = 'image/facebook0.svg';
    instagramIcon.src = 'image/instagram0.svg';
    linkedinIcon.src = 'image/linkedin0.svg';
    twitterIcon.src = 'image/twitter0.svg';
    githubIcon.src = 'image/github0.svg';
  } else {
    document.body.style.cursor = 'url("image/c2.svg"), auto';
    const root = document.documentElement;
    root.style.setProperty('--day-background-color', '#f9fbed');
    root.style.setProperty('--day-text-color', '#000000');
    root.style.setProperty('--night-background-color', '#000000');
    root.style.setProperty('--night-text-color', '#f9fbed');
    facebookIcon.src = 'image/facebook1.svg';
    instagramIcon.src = 'image/instagram1.svg';
    linkedinIcon.src = 'image/linkedin1.svg';
    twitterIcon.src = 'image/twitter1.svg';
    githubIcon.src = 'image/github1.svg';
  }
});

let scrollX = 0;

function scrollLeft() {
  scrollX -= window.innerWidth * 0.3;
  scrollX = Math.max(scrollX, 0);
  updateScrollPosition();
}

function scrollRight() {
  scrollX += window.innerWidth * 0.3;
  const containerWidth = document.querySelector('.container').scrollWidth - window.innerWidth;
  scrollX = Math.min(scrollX, containerWidth);
  updateScrollPosition();
}

function updateScrollPosition() {
  document.querySelector('.container').style.transform = `translateX(-${scrollX}px)`;
}

window.addEventListener('wheel', (event) => {
  if (event.deltaY > 0) {
    scrollRight();
  } else {
    scrollLeft();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    scrollRight();
  } else if (event.key === 'ArrowLeft') {
    scrollLeft();
  }
});

const letters = ['J', 'I', 'L', 'I', 'A', 'N'];
const letterContainer = document.getElementById('jilian-letter');

letters.forEach(letter => {
  const span = document.createElement('span');
  span.className = 'letter';
  span.textContent = letter;
  letterContainer.appendChild(span);
});

const section3 = document.querySelector('.section3');
let intervalId = null;

document.addEventListener('DOMContentLoaded', function () {
  section3.addEventListener('mouseenter', function () {
    intervalId = setInterval(function () {
      const show = document.querySelector('span[data-show]');
      const next = show.nextElementSibling || document.querySelector('span:first-child');
      const up = document.querySelector('span[data-up]');

      if (up) {
        up.removeAttribute('data-up');
      }

      show.removeAttribute('data-show');
      show.setAttribute('data-up', '');

      next.setAttribute('data-show', '');
    }, 1500);

    section3.addEventListener('mouseleave', function () {
      clearInterval(intervalId);
    });
  });
});