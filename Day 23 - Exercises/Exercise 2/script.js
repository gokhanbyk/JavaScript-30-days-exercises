// Exercise 2

const wrapper = document.querySelector('.wrapper')

// CSS
document.body.style.display = 'flex'
document.body.style.justifyContent = 'center'
document.body.style.alignItems = 'center'
document.body.style.textAlign = 'center'

wrapper.style.display = 'flex'
wrapper.style.flexDirection = 'column'
wrapper.style.justifyContent = 'center'
wrapper.style.alignItems = 'center'
wrapper.style.gap = '50px'
wrapper.style.height = '100vh'
wrapper.style.width = '100%'

// CSS

// Creating elements
const start = document.createElement('div')
start.textContent = 'Press any keyboard key'

start.style.fontSize = '70px'
start.style.padding = '20px'
start.style.border = '1px solid black'
start.style.boxShadow = '5px 5px 5px black'

wrapper.appendChild(start)

const code = document.createElement('div')

code.style.fontSize = '70px'
code.style.padding = '20px'
code.style.border = '1px solid black'
code.style.boxShadow = '5px 5px 5px black'
code.style.display = 'none'
code.style.color = '#beeb9f'

wrapper.appendChild(code)

// Creating elements



document.body.addEventListener('keydown', (e) => {
    let pressedKey = e.key
    start.innerHTML = `You pressed <span style="color: #beeb9f;">${pressedKey}</span>`;

    code.style.display = 'block'
    code.textContent = e.keyCode
})