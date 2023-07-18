// DAY 22 LEVEL 2

const wrapper = document.querySelector('.wrapper')
const h1 = document.createElement('h1')
const h4 = document.createElement('h4')

h1.textContent = 'WORLD COUNTRIES LIST'
h4.textContent = `Total Number of countries: ${countries.length}`
document.body.prepend(h1, h4)

// CSS
document.body.style.display = 'flex'
document.body.style.flexDirection = 'column'
document.body.style.alignItems = 'center'

wrapper.style.display = 'flex'
wrapper.style.justifyContent = 'center'
wrapper.style.flexWrap = 'wrap'
wrapper.style.width = '80%'
wrapper.style.gap = '10px'
// CSS

let len = countries.length
for(let i = 0; i < len; i++) {
    let country = document.createElement('div')

    // CSS
    country.style.padding = '7px'
    country.style.width = '200px'
    country.style.height = '100px'
    country.style.display = 'flex'
    country.style.justifyContent = 'center'
    country.style.alignItems = 'center'
    country.style.textAlign = 'center'
    country.style.fontSize = '23px'
    country.style.border = '1px solid lightgrey'
    // CSS

    country.textContent = countries[i].name

    wrapper.appendChild(country)
}