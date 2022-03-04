// 获取 player.json 中的歌曲数据
axios.get('../file/player.json').then((res) => {
  // 底部播放器配置
  const ap = new APlayer({
    container: document.querySelector('#aplayer'),
    fixed: true,
    theme: '#b7daff',
    audio: res.data
  })
})
