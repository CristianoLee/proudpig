// 通过 jsonp 获取本地 player.json 中的歌曲数据
function playerData(res) {
  // 底部播放器配置
  new APlayer({
    container: document.querySelector('#aplayer'),
    fixed: true,
    theme: '#b7daff',
    audio: res.data
  })
}
