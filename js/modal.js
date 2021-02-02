const buttons = document.querySelectorAll('.modal-trigger[data-modal-trigger]')

buttons.forEach(button => { // no dispara el evento por cada boton
  modalEvent(button)
})

function modalEvent (button) { // si creo la funcion como variable, peta
  button.addEventListener('click', () => {
    const trigger = button.getAttribute('data-modal-trigger')
    const modal = document.querySelector(`[data-modal=${trigger}]`)
    const wrapper = modal.querySelector('.modal__wrapper')
    const close = modal.querySelector('.modal__close-button')

    modal.addEventListener('click', renderPortfolio())
    close.addEventListener('click', () => modal.classList.remove('--open'))
    modal.addEventListener('click', () => modal.classList.remove('--open'))
    wrapper.addEventListener('click', (event) => event.stopPropagation())

    modal.classList.toggle('--open')
  })
}

const getPortfolio = () => {
  return fetch('portfolio.json')
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log(error))
}

const renderPortfolio = async () => {
  const datos = await getPortfolio()
  let html = ''
  datos.forEach(dato => {
    html = `
      <h2 class="text-center">${dato.title}</h2>
      <img src="${dato.imgUrl}" alt="${dato.title}" class="modal__image">
    `
  })
  document.getElementById('modal-content').innerHTML = html
}

// const funcionNueva = () => { // cómo exportar mis js a un main.js
//   console.log('hello kitty')
// }

// export default {
//   funcionNueva
// }
