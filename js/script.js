'use strict';

// Adding type-effect on the header title (I am Youssef Gaafar)
const runTypingEffect = function () {
  const headerTitle = 'I am Youssef Gaafar.';
  const typingEl = document.getElementById('typing-text');
  const typingDelay = 100; // in ms, to be used in setTimeout

  // Helper function encapsulated within runTypingEffect
  const typeText = function (text, typEl, delay) {
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        typEl.textContent += text[i];
      }, delay * i);
    }
  };

  typeText(headerTitle, typingEl, typingDelay);
};

document.addEventListener('DOMContentLoaded', function (e) {
  runTypingEffect();
  // Check if the Screen width is <= 991px to remove the margin-left in typescript word
  const tsWordEl = document.querySelector('.ts-word');
  if (window.innerWidth <= 992) {
    tsWordEl.style.marginLeft = '0';
  }
});
