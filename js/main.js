window.onload = () => {
  console.log(
    '页面加载完毕！消耗了 %c' + Math.round(100 * performance.now()) / 100 + ' ms',
    'background:#282c34;color:#51aded;'
  )
}

// 初始化工具位置
$('.backTop').removeClass('backTopUp').addClass('backTopDown')
$('.tools').removeClass('toolsUp').addClass('toolsDown')

// 记录上一次滚动高度，用于判断滚动方向
let lastHeight = window.innerHeight

// 仅处理鼠标滚动
window.addEventListener('wheel', () => {
  // console.log(window.scrollY);
  if (window.scrollY > 300) {
    $('.tools').removeClass('toolsDown').addClass('toolsUp')
    $('.backTop').removeClass('backTopDown').addClass('backTopUp')
  } else {
    $('.tools').removeClass('toolsUp').addClass('toolsDown')
    $('.backTop').removeClass('backTopUp').addClass('backTopDown')
  }
  if ((lastHeight < window.scrollY) & (window.scrollY > 300)) {
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

// 计算网站创建至今时长
function buildTime(res) {
  // 将时间转化为毫秒值
  let before = pig.toMilliSecond(res.data)
  setInterval(() => {
    let time = pig.timeDifference(before)
    document.querySelector('.existTime').innerText = time
  }, 1000)
}
