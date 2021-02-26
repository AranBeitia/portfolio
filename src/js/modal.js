import portfolio from '../../portfolio.json'

const buttons = document.querySelectorAll('[data-modal-trigger]')

bindModalEvents()

buttons.forEach( button => modalEvent(button))

function modalEvent (button) {
  button.addEventListener('click', (event) => {
    const dataId = event.target.getAttribute('data-modal-trigger')
    renderPortfolio(dataId)

    const modal = document.getElementsByClassName('modal')[0]
    modal.classList.toggle('--open')
  })
}

function bindModalEvents() {
  const wrapper = document.getElementsByClassName('modal__wrapper')[0]
  const modal = document.getElementsByClassName('modal')[0]
  const close = document.getElementsByClassName('modal__close-button')[0]

  close.addEventListener('click', () => modal.classList.remove('--open'))
  wrapper.addEventListener('click', (event) => event.stopPropagation())
  modal.addEventListener('click', () => modal.classList.remove('--open'))
}

function getPortfolio () {
  return Promise.resolve(portfolio)
}

function renderPortfolio(jobId) {
  return getPortfolio()
  .then(jobs => { 
    const job = jobs[jobId]

    let html = `
      <h2 class="modal__title">${job.title}</h2>
      <figure class="modal__figure">
        <figcaption class="modal__caption">${job.description}</figcaption>
        <img src="images/content/web/${job.imgUrl}" alt="${job.title}" class="modal__image">
      </figure>
    `
    document.getElementById('modal-content').innerHTML = html
   })
}
