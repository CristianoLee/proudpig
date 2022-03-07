// 切换肤色
let color = localStorage.getItem('color')
// 进入页面判断肤色
if (color) {
  dark()
} else {
  light()
}

let isChange = true

$('.change-color').on('click', () => {
  if (isChange) {
    isChange = false
    setTimeout(() => {
      isChange = true
    }, 1000)
    if (color === 'dark') {
      light()
    } else {
      dark()
    }
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
