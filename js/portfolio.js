const funcionNueva = (event) => {
  event.target.getAttribute('data-prueba')
  console.log(event.target.getAttribute('data-prueba'))
}

const data = document.getElementById('2')
data.addEventListener('click', funcionNueva)

document.addEventListener('DOMContentLoaded', () => {
  renderPortfolio()
})

const getPortfolio = (id) => {
  return fetch('portfolio.json')
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log(error))
}

const renderPortfolio = async (id) => {
  const datos = await getPortfolio(id)
  console.log(getPortfolio(id))
  let html = ''
  datos.forEach(dato => {
    html = `
      <img src="${dato.imgUrl}" alt="${dato.title}" class="modal__image">
    `
  })
  document.getElementById('modali').innerHTML = html
}

export default {
  funcionNueva
}
