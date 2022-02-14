const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
c.beginPath()
c.arc(canvas.width/2,canvas.height/2,200,Math.PI * 2,false)
c.fillStyle = 'blue'
c.fill()