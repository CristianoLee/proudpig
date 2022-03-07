// 切换肤色
let color = localStorage.getItem('color')
// 进入页面判断肤色
if (color === 'light' || !color) {
  light()
} else {
  dark()
}

$('.change-color').on('click', () => {
  if (color === 'light') {
    color = 'dark'
    dark()
  } else {
    color = 'light'
    light()
  }
  localStorage.setItem('color', color)
})

function light() {
  $('#style')[0].href = './css/light.css'
}

function dark() {
  $('#style')[0].href = './css/dark.css'
}
