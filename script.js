'use strict'
// SECTIONS
const section1 = document.querySelector('#section__1')
const section2 = document.querySelector('#section__2')
const section3 = document.querySelector('#section__3')
const section4 = document.querySelector('#section__4')

// // BTNS

const learnMore = document.querySelector('.btn--scroll')
const getitonFirefox = document.querySelector('.btn__firefox')
const getitonChrome = document.querySelector('.btn__chrome')
const btnsOpenModal = document.querySelectorAll('.btn__open')
const btnCloseModal = document.querySelector('.btn--close-modal')

//////////////////////////////////////////////////////////

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const hero = document.querySelector('.hero')
const hamburger = document.getElementById('hamburger')
const nav = document.querySelector('.navbar__list')

////////////////////////////////////////////////////////////////////

const tabs = document.querySelectorAll('.operation__btn')
const tabsContainer = document.querySelector('.operation__btn-container')
const tabsContent = document.querySelectorAll('.operation__content')

// NAV MENU

hamburger.addEventListener('click', function () {
  nav.classList.toggle('open')
  hamburger.classList.toggle('ani')
})
// FUNCTIONS -scroll
const s2Scroll = function () {
  const s2coord = section2.getBoundingClientRect()
  window.scrollTo({
    left: s2coord.left + window.pageYOffset,
    top: s2coord.top + window.pageYOffset,
    behavior: 'smooth',
  })
}
// FUNCTIONS - LOGIN
const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}
const closeModal = function () {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

// OPEN MODAL LOGIN

btnsOpenModal.forEach(function (btn) {
  btn.addEventListener('click', openModal)
})
btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

// SCROLLS

learnMore.addEventListener('click', function () {
  const s1coord = section1.getBoundingClientRect()
  window.scrollTo({
    left: s1coord.left + window.pageXOffset,
    top: s1coord.top + window.pageYOffset,
    behavior: 'smooth',
  })
})
getitonFirefox.addEventListener('click', s2Scroll)
getitonChrome.addEventListener('click', s2Scroll)

// COOKIE

const message = document.createElement('div')
message.classList.add('cookie')
message.innerHTML =
  'COOKIE MESSAGE <button class="btn btn__more btn__close-cookie">Got it!</button>'
hero.after(message)

document
  .querySelector('.btn__close-cookie')
  .addEventListener('click', function () {
    message.remove()
  })

// NAVIGATION

document.querySelector('.navbar__list').addEventListener('click', function (e) {
  e.preventDefault()
  if (e.target.classList.contains('navbar__link')) {
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    })
  }
})

//////////////////////////////////////////////////// FEATURES tab component

tabsContainer.addEventListener('click', function (e) {
  const operbtn = e.target.closest('.operation__btn')

  if (!operbtn) return
  // active tab
  tabs.forEach((btn) => btn.classList.remove('operation__btn--active'))
  operbtn.classList.add('operation__btn--active')
  tabsContent.forEach((content) =>
    content.classList.remove('operation__content--active')
  )
  // active content area
  document
    .querySelector(`.operation__content--${operbtn.dataset.btn}`)
    .classList.add('operation__content--active')
})
///////////////////////////////////////////////
// NAV FADE

nav.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('navbar__link')) {
    const siblings = e.target
      .closest('.navbar__list')
      .querySelectorAll('.navbar__link')
    siblings.forEach((el) => {
      if (el !== e.target) el.style.opacity = 0.5
    })
  }
})

nav.addEventListener('mouseout', function (e) {
  if (e.target.classList.contains('navbar__link')) {
    const siblings = e.target
      .closest('.navbar__list')
      .querySelectorAll('.navbar__link')

    siblings.forEach((el) => {
      if (el !== e.target) el.style.opacity = 1
    })
  }
})

///////////////////////////////////////////////////////////////////////
//REVEAL SECTIONS

const allSections = document.querySelectorAll('.section')

const revealSection = function (entries, observer) {
  const [entry] = entries
  if (!entry.isIntersecting) return

  entry.target.classList.remove('section__hidden')
  observer.unobserve(entry.target)
}

const sectionAll = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
})
allSections.forEach(function (section) {
  sectionAll.observe(section)
  section.classList.add('section__hidden')
})

// ///////////////////////////////////////////////////////////////////////////
// FAQ SECTION

const faqCard = document.querySelectorAll('.faq__card')
const faqField = document.querySelector('.faq__field')

faqField.addEventListener('click', function (e) {
  const clicked = e.target.closest('.faq__card')
  if (!clicked) return
  clicked.classList.toggle('faq__card--active')
})
// ///////////////////////////////////////////////////////////////////////////
