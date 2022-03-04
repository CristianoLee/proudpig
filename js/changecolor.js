// 切换肤色
let light = false
$('.change-color').on('click', () => {
  light = !light
  if (light) {
    $('.main-container').css({ backgroundColor: '#181c27' })
    $('.head-bg').css({ background: 'url(./image/head.png)' })
  } else {
    $('.main-container').css({ backgroundColor: '#f5f5f5' })
    $('.head-bg').css({ background: 'url(./image/jie.png) 0 -310px' })
  }
})
