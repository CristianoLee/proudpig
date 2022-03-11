// 格式化时间
const pig = {
  // 格式化时间
  // 参数为自定义格式
  dateFormat(data) {
    let time = new Date()
    let y = time.getFullYear()
    let m = time.getMonth() + 1
    let d = time.getDate()
    let hh = time.getHours()
    let mm = time.getMinutes()
    let ss = time.getSeconds()
    if (!data || data === '') {
      return (
        y +
        '-' +
        pig.padZero(m) +
        '-' +
        pig.padZero(d) +
        ' ' +
        pig.padZero(hh) +
        ':' +
        pig.padZero(mm) +
        ':' +
        pig.padZero(ss)
      )
    } else if (data === 'YYYY-MM-DD' || data === 'yyyy-mm-dd') {
      return y + '-' + pig.padZero(m) + '-' + pig.padZero(d)
    } else if (data === 'YEAR' || data === 'year') {
      return y
    } else if (data === 'MONTH' || data === 'month') {
      return pig.padZero(m)
    } else if (data === 'DAY' || data === 'day') {
      return pig.padZero(d)
    } else if (data === 'chi') {
      return (
        y +
        '年' +
        pig.padZero(m) +
        '月' +
        pig.padZero(d) +
        '日 ' +
        pig.padZero(hh) +
        '时' +
        pig.padZero(mm) +
        '分' +
        pig.padZero(ss) +
        '秒'
      )
    } else {
      throw new Error(
        '您的语法有误，请重新输入参数!错误参数：' +
          data +
          '\nYour syntax is wrong, please re-enter the parameter! Wrong parameter is:' +
          data
      )
    }
  },
  // 补零并且转化为字符串
  padZero(time) {
    return (time > 9 ? time : '0' + time).toString()
  },
  // 计算时间差（天-时-分-秒）
  // 参数传递：毫秒值,before:过去时间，now:当前时间
  timeDifference(before, now) {
    // 获取当前时间毫秒值
    now = Date.now()
    // 毫秒差值为当前时间减去过去时间
    let time = (now - before) / 1000
    let dd = Math.floor(time / (24 * 60 * 60))
    let hh = Math.floor((time / (60 * 60)) % 24)
    let mm = Math.floor((time / 60) % 60)
    let ss = Math.floor(time % 60)
    let result =
      dd.toString() +
      '天' +
      pig.padZero(hh) +
      '小时' +
      pig.padZero(mm) +
      '分钟' +
      pig.padZero(ss) +
      '秒'
    return result
  },
  // 时间换算为天数
  toDay(time) {
    let millis = new Date(time).getTime()
    let dd = Math.floor(millis / (24 * 60 * 60 * 1000))
    return dd
  },
  // 时间换算为小时
  toHour(time) {
    let millis = new Date(time).getTime()
    let hh = Math.floor((millis / (60 * 60 * 1000)) % 24)
    return hh
  },
  // 时间换算为分种
  toMinute(time) {
    let millis = new Date(time).getTime()
    let mm = Math.floor((time / (60 * 1000)) % 60)
    return mm
  },
  // 时间换算为秒
  toSecond(time) {
    let millis = new Date(time).getTime()
    let ss = Math.floor((time / 1000) % 60)
    return ss
  },
  // 时间换算为毫秒
  toMilliSecond(time) {
    let millis = new Date(time).getTime()
    return millis
  }
}
