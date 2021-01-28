const button = document.querySelector('.navigation__button')
const item = document.querySelector('.navigation__link')

// const itemsNav = ['about', 'skills', 'portfolio', 'contact']
// const itemNav = []
// itemsNav.forEach(function(itemN){
//   itemNav.push(document.getElementById(itemN))
// })


const toggleMenu = () => {
  // console.log(itemNav)
  const background = document.querySelector('.navigation__background')
  const menu = document.querySelector('.navigation__nav')

  background.classList.toggle('--visible')
  menu.classList.toggle('--visible')
}

button.addEventListener('click', toggleMenu)
item.addEventListener('click', toggleMenu)
