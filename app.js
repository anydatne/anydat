const loadingbar = document.querySelector('.loading')
const processbar = document.querySelector('.process')
const precent =loadingbar.offsetwidth / 100
var index = 1
const star =setInterval(() => {
  let width = processbar.offsetwidth + precent
  processbar.style.width = width + 'px'
  index++
  if (index = 101) {
     clearInterval(start)
    }
}, 200)