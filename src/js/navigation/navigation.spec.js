describe('Navigation toggle', () => {
  beforeEach(() => jest.resetModules())

  it('displays menu after click in the button', () => {
    // given - button (menu is hidden) toggle (.navigation__button)
    document.body.innerHTML = `
      <div>
        <button class="navigation__button"></button>
        <div class="navigation__background"></div>
        <div class="navigation__nav"></div>
      </div>
    `
    require('./navigation.js')
    // when - click
    document.querySelector('.navigation__button').click()
    // then - shows the menu
    expect(
    document.querySelector('.navigation__background').classList
      ).toContain('--visible')
    expect(document.querySelector('.navigation__nav').classList).toContain('--visible')
  })

  it('hides menu after click in the button', () => {
    //given - button (menu is shown) toggle (.navigation__button)
    document.body.innerHTML = `
      <div>
        <button class="navigation__button"></button>
        <div class="navigation__background --visible"></div>
        <div class="navigation__nav --visible"></div>
      </div>
    `
    require('./navigation.js')
    //when - click
    document.querySelector('.navigation__button').click()
    //then - menu is hidden
    expect(document.querySelector('.navigation__background').classList).not.toContain('--visible')
    expect(document.querySelector('.navigation__nav').classList).not.toContain('--visible')
  })

  it('hides menu after clicking an element of the menu list', () => {
    //given - item list clicks, menu is hidden (toggle .--visible)
    document.body.innerHTML =`
      <div>
        <ul>
          <li class="navigation__link">About</li>
        </ul>
        <div class="navigation__background --visible"></div>
        <div class="navigation__nav --visible"></div>
      </div>
    `
    require('./navigation.js')
    //when
    document.querySelector('.navigation__link').click()
    //then
    expect(document.querySelector('.navigation__nav').classList).not.toContain('--visible')
  })
})
