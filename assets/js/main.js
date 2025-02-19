
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    loop: true, // Enables looping
    autoplay: {
      delay: 3000, // Auto-slide every 3 seconds
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

// about-us

document.getElementById('learnMoreBtn').addEventListener('click', function () {
  alert('For more information, visit our campus or contact us directly!');
});

// <!-- JavaScript for Counter Animation -->

function animateCounter(id, target, duration) {
  let count = 0;
  let step = target / (duration / 20);

  function updateCounter() {
    count += step;
    if (count >= target) {
      count = target;
      clearInterval(interval);
    }
    document.getElementById(id).innerText = Math.floor(count);
  }

  let interval = setInterval(updateCounter, 20);
}

window.onload = function () {
  animateCounter("students", 1200, 2000);
  animateCounter("teachers", 50, 2000);
  animateCounter("success", 98, 2000);
  animateCounter("years", 20, 2000);
};

// featurse Sections

function setActiveCard(index) {
  let cards = document.querySelectorAll('.feature-card');
  let details = document.querySelectorAll('.feature-detail');
  let images = document.querySelectorAll('.feature-image');

  // Remove active class from all cards & add to clicked one
  cards.forEach((card, i) => {
    card.classList.toggle('active', i === index);
  });

  // Show the selected feature detail and hide others
  details.forEach((detail, i) => {
    detail.classList.toggle('hidden', i !== index);
  });

  // Show the selected image and hide others
  images.forEach((img, i) => {
    img.classList.toggle('hidden', i !== index);
  });
}


