describe('Navigation toggle', () => {
  it('hides menu after click', () => {
    //given - button (menu is shown) toggle (.navigation__button)
    document.body.innerHTML = `
      <div>
        <button class="navigation__button"></button>
        <div class="navigation__background --visible"></div>
        <div class="navigation__nav --visible"></div>
      </div>
    `
    require('./nav.js')
    //when - click
    document.querySelector('.navigation__button').click()
    //then - menu is hidden
    expect(document.querySelector('.navigation__background').classList).not.toContain('--visible')
  })
  
  it('displays menu after click', () => {
    // given when then
    // Arrange-Act-Assert

    // given - button (menu is hidden) toggle (.navigation__button)
    document.body.innerHTML = `
      <div>
        <button class="navigation__button"></button>
        <div class="navigation__background"></div>
        <div class="navigation__nav"></div>
      </div>
    `
    require ('./nav.js')
    // when - click
    document.querySelector('.navigation__button').click()
    // then - shows the menu
    expect(
      document.querySelector('.navigation__background').classList
      ).toContain('--visible')
    expect(document.querySelector('.navigation__nav').classList).toContain('--visible')
  })

})
