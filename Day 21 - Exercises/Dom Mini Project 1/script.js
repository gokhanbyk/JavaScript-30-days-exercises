// Day 21 LEVEL 3
const allLi = document.querySelectorAll('li')
const ul = document.querySelector('ul')
const wrapper = document.querySelector('.wrapper')
const year = document.querySelector('#year')
const h2 = document.querySelector('h2')
const date = document.querySelector('#date')

// Style
wrapper.style.width = '100%'
wrapper.style.display = 'flex'
wrapper.style.flexDirection = 'column'
wrapper.style.alignItems = 'center'

ul.style.margin = 'auto'
ul.style.width = '35%'
ul.style.listStyleType = 'none'

year.style.fontSize = '70px'
year.style.color = rgbColor()

date.textContent = dateSet()
date.style.padding = '10px'
date.style.width = '10%'
date.style.border = '1px solid'
date.style.backgroundColor = hexColor()
date.style.fontWeight = '900'

h2.style.fontFamily = 'arial'
h2.style.fontWeight = '100'
h2.style.textDecoration = 'underline'

document.body.style.display = 'flex'
document.body.style.justifyContent = 'center'
document.body.style.textAlign = 'center'
// Style

allLi.forEach(li => {
    li.style.border = '1px solid'
    li.style.padding = '10px'
    li.style.width = '100%'
    li.style.textAlign = 'start'
    li.style.marginTop = '5px'
    li.style.fontWeight = '900'

    if(li.textContent.includes('Done')) {
        li.style.backgroundColor = 'lightgreen'
    } else if(li.textContent.includes('Ongoing')) {
        li.style.backgroundColor = 'yellow'
    } else if(li.textContent.includes('Coming')) {
        li.style.backgroundColor = 'indianred'
    }
})

setInterval(() => {
    year.style.color = rgbColor()
}, 1000)

setInterval(() => {
    date.textContent = dateSet()
    date.style.backgroundColor = hexColor()
}, 1000)


function dateSet() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octoboer', 'November', 'December']

    let now = new Date()
    let year = now.getFullYear()
    let monthIndex = now.getMonth()
    let month = months[monthIndex]
    let day = now.getDate()

    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()

    if(hour < 10) {
        hour = '0' + hour
    }
    if (minute < 10) {
        minute = '0' + minute
    }
    if(second < 10) {
        second = '0' + second
    }

    let date = `${month} ${day}, ${year} ${hour}:${minute}:${second}`
    return date
}



function rgbColor() {
    let rgb1 = Math.floor(Math.random() * 255)
    let rgb2 = Math.floor(Math.random() * 255)
    let rgb3 = Math.floor(Math.random() * 255)

    return `rgb(${rgb1}, ${rgb2}, ${rgb3})`
}

function hexColor() {
    let index = '123456789abcdef'
    let hexa = '#'
    let hexaColor = ''
    for(let i = 0; i < 6; i++) {
        let indexChar = Math.floor(Math.random() * index.length)
        hexaColor += index[indexChar]
    }
    
    hexaColor = hexa + hexaColor

    return hexaColor
}
