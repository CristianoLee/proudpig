window.onload = () => {
  console.log(
    '页面加载完毕！消耗了 %c' + Math.round(100 * performance.now()) / 100 + ' ms',
    'background:#282c34;color:#51aded;'
  )
}

// 点击返回顶部头部导航栏淡出
$('.backTop').on('click', () => {
  $('html, body').animate(
    {
      scrollTop: $('html').offset().top
    },
    500
  )
  setTimeout(() => {
    $('.head-container').removeClass('scrollDown').addClass('scrollUp')
    $('.backTop').removeClass('backTopUp').addClass('backTopDown')
    $('.tools').removeClass('toolsUp').addClass('toolsDown')
  }, 450)
})

// 记录上一次滚动高度，用于判断滚动方向
let lastHeight = window.innerHeight

// 仅处理鼠标滚动
window.addEventListener('wheel', () => {
  // console.log(window.scrollY);
  if (window.scrollY > 260) {
    $('.tools').removeClass('toolsDown').addClass('toolsUp')
    $('.backTop').removeClass('backTopDown').addClass('backTopUp')
  } else {
    $('.tools').removeClass('toolsUp').addClass('toolsDown')
    $('.backTop').removeClass('backTopUp').addClass('backTopDown')
  }
  if ((lastHeight < window.scrollY) & (window.scrollY > 260)) {
    // 向下滚动
    $('.t1').removeClass('scrollUp').addClass('scrollDown')
  }
  if (lastHeight > window.scrollY) {
    // 向上滚动
    $('.t1').removeClass('scrollDown').addClass('scrollUp')
  }
  // 相等则不做处理
  lastHeight = window.scrollY
})

let nav_toggle = true
let nav_width
// 移动端点击切换导航栏显示
$('.nav-toggle').on('click', () => {
  if (nav_toggle) {
    nav_width = 0
    $('.fa-navicon').removeClass('fa-navicon').addClass('fa-times')
  } else {
    nav_width = -240
    $('.fa-times').removeClass('fa-times').addClass('fa-navicon')
  }
  nav_toggle = !nav_toggle
  $('.menu-mobile').css({ right: nav_width })
})

$(window).resize(() => {
  const e = $(window)
  if (e.width() > 769) {
    $('.menu-mobile').css({ right: '-240px' })
    nav_toggle = true
    $('.fa-times').removeClass('fa-times').addClass('fa-navicon')
  }
})

// 计算网站创建至今时长
function buildTime(res) {
  // 将时间转化为毫秒值
  let before = pig.toMilliSecond(res.data)
  setInterval(() => {
    let time = pig.timeDifference(before)
    document.querySelector('.existTime').innerText = time
  }, 1000)
}
