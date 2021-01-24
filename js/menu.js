// const content = document.getElementsByClassName('.main-content')
// scrollnav.init(content)

document.addEventListener('DOMContentLoaded', () => {
  click()
})

const click = () => {
  const item = document.getElementById('toggle')

  item.classList.forEach( it => {
    if(it === 'hidden') {
      item.classList.remove('hidden')
      item.classList.add('active')
    }

    if(it === 'active') {
      item.classList.remove('active')
      item.classList.add('hidden')
    }
  })

  // if(item === 'hello') {

  //   item.classList.remove('hello')
  // }

  // if (item === '') {
  //   item.classList.add('hello')
  // }


  console.log(item)
}
