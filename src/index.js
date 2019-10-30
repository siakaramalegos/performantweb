import './style.css'

function closeMenu() {
  const menu = document.getElementById('mobile-menu')
  menu.classList.remove('is-visible')
  menu.classList.add('is-hidden')
}

function toggleMenu() {
  const menu = document.getElementById('mobile-menu')

  if (menu.classList.contains('is-hidden')) {
    menu.classList.remove('is-hidden')
    menu.classList.add('is-visible')
  } else {
    menu.classList.remove('is-visible')
    menu.classList.add('is-hidden')
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const menuLink = document.getElementById('menu-link')
  menuLink.addEventListener('click', toggleMenu)
  const links = document.querySelectorAll('.MobileNav__MobileNavLink')
  links.forEach(function (element) {
    element.addEventListener('click', closeMenu)
  })
})

