const buttons = document.querySelectorAll('.modal-trigger[data-modal-trigger]')

bindModalEvents()

buttons.forEach(button => {
  modalEvent(button)
})

function modalEvent (button) {
  button.addEventListener('click', (event) => {
    const dataId = event.target.getAttribute('data-modal-trigger')
    renderPortfolio(dataId)
    const modal = document.getElementsByClassName('modal')[0]
    modal.classList.toggle('--open')
  })
}

function bindModalEvents() {
  const modal = document.getElementsByClassName('modal')[0]
  const wrapper = document.getElementsByClassName('modal__wrapper')[0]
  const close = document.getElementsByClassName('modal__close-button')[0]

  close.addEventListener('click', () => modal.classList.remove('--open'))
  modal.addEventListener('click', () => modal.classList.remove('--open'))
  wrapper.addEventListener('click', (event) => event.stopPropagation())
}

function getPortfolio () {
  return fetch('portfolio.json')
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log(error))
}

async function renderPortfolio(dataId) {
  const datos = await getPortfolio()
  const dato = datos[dataId]

  let html = `
      <h2 class="text-center">${dato.title}</h2>
      <img src="assets/img/web/${dato.imgUrl}" alt="${dato.title}" class="modal__image">
    `
  document.getElementById('modal-content').innerHTML = html
}
