const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav__link');
const skillsContent = document.querySelectorAll('.skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');
const modalViews = document.querySelectorAll('.services__modal');
const modalBtns = document.querySelectorAll('.services__button');
const modalCloses = document.querySelectorAll('.services__modal-close');
const testimonialContainer = document.querySelector('.testimonial__container');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-content');
const span = document.querySelector('.close');
const images = document.querySelectorAll('.grid-wrap img');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

navLink.forEach((n) => {
  n.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

skillsHeader.forEach((header) => {
  header.addEventListener('click', () => {
    const itemClass = header.parentNode.classList;

    skillsContent.forEach((content) => {
      content.classList.add('skills__close');
      content.classList.remove('skills__open');
    });

    if (itemClass.contains('skills__close')) {
      itemClass.remove('skills__close');
      itemClass.add('skills__open');
    }
  });
});

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('qualification__active');
    });

    target.classList.add('qualification__active');

    tabs.forEach((t) => {
      t.classList.remove('qualification__active');
    });

    tab.classList.add('qualification__active');
  });
});

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modalViews[i].classList.add('active-modal');
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal');
    });
  });
});

const swiperTestimonial = new Swiper(testimonialContainer, {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});

images.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
  });
});

span.addEventListener('click', () => {
  modal.style.display = 'none';
});

// add the 'active' class when the image is clicked to show the modal
images.forEach((img) => {
  img.addEventListener('click', () => {
    modalImg.src = img.src;
    modal.classList.add('active');
  });
});

// scroll sections active link*//
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    }else{
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }

  })
}
window.addEventListener('scroll', scrollActive)
// change background header
function scrollHeader(){
  const nav = document.getElementById('header')
  // when the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)
// show scroll top
const scrollUp = document.getElementById('scroll-up');
window.addEventListener('scroll', () => {
  scrollUp.classList.toggle('show-scroll', window.scrollY >= 560);
});
// dark light themes
// const themeButton = document.getElementById('theme-button')
// const darkTheme = "dark-theme"
// const iconTheme = 'uil-sun'


// // previosly selected topic (if user selected)
// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

// // we obtain the current theme that the inferface has by validating the dark-theme class
// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// // we validate if the user previously chose a topic 
// if (selectedTheme) {
//   // if the validation is fulfilled, we ask what teh issue was to know if we activated or deactivated the dark
//    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
//    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
//   }

//   // activate/deactivate the theme manually with the buton
//   themeButton.addEventListener('click', () => {
//     // add or remove the dark / icon  theme 
//     document.body.classList.toggle(darkTheme)
//     themeButton.classList.toggle(iconTheme)
//     // we seve the theme and current icon that teh ser chose 
//     localStorage.setItem('selected-theme', getCurrentTheme())
//     localStorage.setItem('selected-icon', getCurrentIcon())
//   // })
































