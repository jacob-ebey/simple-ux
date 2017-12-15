import $ from 'jquery'

const smoothscroll = () => {
  const $root = $('html, body')

  $('a[href^="#"]').click(function () {
    const href = $.attr(this, 'href')
    const found = $(href)
    if (typeof found.offset === 'function') {
      $root.animate({
        scrollTop: found.offset().top
      }, 500, () => {
        window.location.hash = href
      })

      return false
    }
  })
}

export default smoothscroll
