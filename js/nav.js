const button = document.querySelector('.navigation__button')
const item = document.querySelector('.navigation__link')

const toggleMenu = () => {
  const background = document.querySelector('.navigation__background')
  const menu = document.querySelector('.navigation__nav')

  background.classList.toggle('--visible')
  menu.classList.toggle('--visible')
}

button.addEventListener('click', toggleMenu)
item.addEventListener('click', toggleMenu)
