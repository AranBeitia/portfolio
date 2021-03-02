describe ('Scroll animation items', () => {
  beforeEach(() => jest.resetModules())

  it('shows elements when scroll', () => {
    // given
    document.body.innerHTML = `
      <img src="images/content/logo.svg" class="hidden">
    `
    // when - scroll, .hidden changes into .fade-in-elements
    require('./scroll.js')
    // then
    // expect(document.querySelector('.hidden').classList).toContain('')
  })
})