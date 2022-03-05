// 切换肤色

let color = localStorage.getItem('color')
// 进入页面判断肤色
if (color === 'light' || !color) {
  $('.main-container').css({ backgroundColor: '#f5f5f5' })
  $('.head-bg').css({ background: 'url(./image/head-light.png) 0 -310px' })
} else {
  $('.main-container').css({ backgroundColor: '#181c27' })
  $('.head-bg').css({ background: 'url(./image/head-dark.png) 0 -160px/1920px 1080px' })
}

$('.change-color').on('click', () => {
  if (color === 'light') {
    color = 'dark'
    $('.main-container').css({ backgroundColor: '#181c27' })
    $('.head-bg').css({ background: 'url(./image/head-dark.png) 0 -160px/1920px 1080px' })
  } else {
    color = 'light'
    $('.main-container').css({ backgroundColor: '#f5f5f5' })
    $('.head-bg').css({ background: 'url(./image/head-light.png) 0 -310px' })
  }
  localStorage.setItem('color', color)
})
