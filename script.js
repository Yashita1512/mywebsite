
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const offsetPosition = targetElement.offsetTop - navbarHeight;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });


document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    
    const downloadBtn = document.querySelector('.primary-button[data-action="download-cv"]');
    if (this.classList.contains('active') && !navLinks.contains(downloadBtn)) {
        navLinks.appendChild(downloadBtn);
    }
});

// Handle scrolling background
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Close menu when clicking a nav link
document.querySelectorAll('[data-nav-link]').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.hamburger').classList.remove('active');
        document.querySelector('.nav-links').classList.remove('active');
    });
});

function downloadCV() {
    window.open('documents/YASHITA_SHARMA_CV.pdf', '_blank');
}

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Change background after scrolling 50px
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const phrases = [
    "A Clear Thinker",
    "An Articulator",
    "A Collaborator"
];

let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingElement = document.querySelector('.typing-text');

function type() {
    const currentPhrase = phrases[currentPhraseIndex];
    const redIconHTML = `<i class="fa-sharp fa-solid fa-circle red-icon"></i>`;
    
    if (isDeleting) {
        // Deleting text
        typingElement.innerHTML = currentPhrase.substring(0, currentCharIndex - 1);
        currentCharIndex--;
    } else {
        // Typing text
        typingElement.innerHTML = currentPhrase.substring(0, currentCharIndex + 1);
        currentCharIndex++;
    }

    // Change direction when word is complete
    if (!isDeleting && currentCharIndex === currentPhrase.length) {
        typingElement.innerHTML += redIconHTML;
        isDeleting = true;
        setTimeout(type, 1500); // Wait before starting to delete
        return;
    }

    // Move to next word when deletion is complete
    if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setTimeout(type, 500); // Wait before typing next word
        return;
    }

    // Set typing speed
    const typingSpeed = isDeleting ? 100 : 200;
    setTimeout(type, typingSpeed);

    const style = document.createElement('style');
    style.textContent = `
        .red-icon {
            color: #e03131; 
            font-size: 18px; 
            vertical-align: baseline; 
            margin-left: 4px;
        }
    `;
    document.head.appendChild(style);
}

type();

document.querySelectorAll("a").forEach(link=>{
    link.setAttribute('target', '_blank')
})

function openModal(videoSrc) {
    let video = document.getElementById("modalVideo");
    let source = document.getElementById("videoSource");

    source.src = videoSrc;
    video.load(); // Reload the video with the new source
    video.play(); // Auto-play the video

    document.getElementById("videoModal").style.display = "flex";
}

function closeModal() {
    let video = document.getElementById("modalVideo");
    video.pause();
    video.currentTime = 0; 

    document.getElementById("videoModal").style.display = "none";
}

document.getElementById("videoModal").addEventListener("click", function (e) {
    if (e.target === this) closeModal();
});

document.querySelector(".close").addEventListener("click", closeModal);

function filterProjects(category) {
    document.querySelectorAll(".projects-item").forEach(item => {
        item.style.display = item.getAttribute("data-category") === category ? "block" : "none";
    });

    document.querySelectorAll(".primary-button").forEach(btn => btn.classList.remove("active"));
    const activeButton = document.querySelector(`.primary-button[data-category="${category}"]`);
    if (activeButton) {
        activeButton.classList.add("active");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    filterProjects('web-dev');
});

document.querySelectorAll('h1').forEach(heading => {
    heading.setAttribute('data-aos', 'fade-left');
});

document.querySelectorAll('.timeline-item').forEach(item => {
    item.setAttribute('data-aos', 'fade-left');
})

document.querySelectorAll('.category-label-wrapper').forEach(label => {
    label.setAttribute('data-aos', 'fade-left');
});

document.querySelectorAll('.card').forEach(item=>{
    item.setAttribute('data-aos','custom-flip');
    item.setAttribute('data-aos-duration', '3000')
})


// document.addEventListener('DOMContentLoaded', function() {
//     const track = document.querySelector('.carousel-track');
//     const slides = document.querySelectorAll('.testimonial-card');
//     const prevButton = document.querySelector('.prev-arrow');
//     const nextButton = document.querySelector('.next-arrow');
//     let currentSlide = 0;
//     let interval;

//     function updateSlides() {
//         slides.forEach(slide => {
//             slide.classList.remove('active');
//         });
//         slides[currentSlide].classList.add('active');
//         track.style.transform = `translateX(-${currentSlide * 100}%)`;
//     }

//     function nextSlide() {
//         if (currentSlide < slides.length - 1) {
//             currentSlide++;
//         } else {
//             track.appendChild(track.firstElementChild);
//             track.style.transition = 'none';
//             track.style.transform = `translateX(0)`;
//             setTimeout(() => {
//                 track.style.transition = 'transform 0.5s ease-in-out'; 
//                 currentSlide = 0;
//                 updateSlides();
//             }, 0);
//             return;
//         }
//         updateSlides();
//     }

//     function prevSlide() {
//         if (currentSlide > 0) {
//             currentSlide--;
//         } else {
//             track.prepend(track.lastElementChild);
//             track.style.transition = 'none'; 
//             track.style.transform = `translateX(-${(slides.length - 1) * 100}%)`;
//             setTimeout(() => {
//                 track.style.transition = 'transform 0.5s ease-in-out'; 
//                 currentSlide = slides.length - 1;
//                 updateSlides();
//             }, 0);
//             return;
//         }
//         updateSlides();
//     }

//     function startAutoplay() {
//         interval = setInterval(nextSlide, 3000);
//     }

//     function stopAutoplay() {
//         clearInterval(interval);
//     }

//     prevButton.addEventListener('click', () => {
//         prevSlide();
//         stopAutoplay();
//         startAutoplay();
//     });

//     nextButton.addEventListener('click', () => {
//         nextSlide();
//         stopAutoplay();
//         startAutoplay();
//     });

//     slides[0].classList.add('active');
//     startAutoplay();
// });

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.testimonial-card'));
    const prevButton = document.querySelector('.prev-arrow');
    const nextButton = document.querySelector('.next-arrow');
    let currentSlide = 0;
    let interval;

    // Clone first and last slides for infinite loop effect
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);
    track.appendChild(firstClone);
    track.prepend(lastClone);

    function updateSlides(transition = true) {
        if (transition) {
            track.style.transition = 'transform 0.5s ease-in-out';
        } else {
            track.style.transition = 'none';
        }
        track.style.transform = `translateX(-${(currentSlide + 1) * 100}%)`;
    }

    function handleSlideComplete() {
        track.style.transition = 'none';
        if (currentSlide === slides.length) {
            currentSlide = 0;
            track.style.transform = `translateX(-${(currentSlide + 1) * 100}%)`;
        } else if (currentSlide === -1) {
            currentSlide = slides.length - 1;
            track.style.transform = `translateX(-${(currentSlide + 1) * 100}%)`;
        }
    }

    function nextSlide() {
        if (currentSlide >= slides.length) return;
        currentSlide++;
        updateSlides();
    }

    function prevSlide() {
        if (currentSlide <= -1) return;
        currentSlide--;
        updateSlides();
    }

    function startAutoplay() {
        stopAutoplay();
        interval = setInterval(nextSlide, 3000);
    }

    function stopAutoplay() {
        clearInterval(interval);
    }

    // Event Listeners
    track.addEventListener('transitionend', handleSlideComplete);

    prevButton.addEventListener('click', () => {
        prevSlide();
        stopAutoplay();
        startAutoplay();
    });

    nextButton.addEventListener('click', () => {
        nextSlide();
        stopAutoplay();
        startAutoplay();
    });

    // Initialize the carousel
    updateSlides(false);
    startAutoplay();
});

document.addEventListener('DOMContentLoaded', function() {
    AOS.init({duration: 1500, once: true});

    window.addEventListener('resize', function() {
        AOS.refresh();
    });
});