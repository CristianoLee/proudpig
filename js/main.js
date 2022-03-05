// 判断当前页面肤色

// 计算网站创建至今时长
function buildTime(res) {
  // 将时间转化为毫秒值
  let before = pig.toMilliSecond(res.data)
  setInterval(() => {
    let time = pig.timeDifference(before)
    document.querySelector('.existTime').innerText = time
  }, 1000)
}
