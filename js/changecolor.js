// 切换肤色
let color = localStorage.getItem('color')
// 进入页面判断肤色
if (color) {
  dark()
} else {
  light()
}

$('.change-color').on('click', () => {
  if (color === 'dark') {
    light()
  } else {
    dark()
  }
})

function light() {
  color = 'light'
  $('html').removeAttr('color')
  localStorage.removeItem('color')
}

function dark() {
  color = 'dark'
  $('html').attr('color', 'dark')
  localStorage.setItem('color', color)
}
