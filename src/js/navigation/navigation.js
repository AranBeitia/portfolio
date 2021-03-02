const items = document.querySelectorAll('.navigation__link')

items.forEach(item => {
  item.addEventListener('click', toggleMenu)
})

function toggleMenu () {
  const background = document.querySelector('.navigation__background')
  const menu = document.querySelector('.navigation__nav')

  background.classList.toggle('--visible')
  menu.classList.toggle('--visible')
}

const button = document.querySelector('.navigation__button')
if (button) button.addEventListener('click', toggleMenu)
