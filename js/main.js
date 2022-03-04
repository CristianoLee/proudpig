// head 禁止拖拽标志
let nav = document.querySelector('.nav')
for (let i = 0; i < nav.children.length; i++) {
  nav.children[i].draggable = true
}
