// Day 22 Exercise

// LEVEL 1

const wrapper = document.querySelector('.wrapper')

wrapper.style.width = '530px'
wrapper.style.display = 'flex'
wrapper.style.flexWrap = 'wrap'
wrapper.style.gap = '5px'

document.body.style.display = 'flex'
document.body.style.alignItems = 'center'
document.body.style.flexDirection = 'column'

const h1 = document.createElement('h1')
h1.textContent = 'Number Generator'
document.body.prepend(h1)

for(let i = 0; i <= 100; i++) {
    let nums = document.createElement('div')
    
    nums.style.border = '1px solid'
    nums.style.width = '80px'
    nums.style.height = '50px'
    nums.style.textAlign = 'center'
    nums.style.fontSize = '40px'

    nums.textContent = i

    if(isPrime(i)) {
        nums.style.backgroundColor = 'red'
    } else if(i % 2 == 0) {
        nums.style.backgroundColor = 'green'
    } else {
        nums.style.backgroundColor = 'yellow'
    }

    wrapper.appendChild(nums)
}


function isPrime(x) {
    let prime = true
    if(x == 1 || x == 0) {
        prime = false
    }

    for(let i = 2; i < x; i++) {
        if(x % i == 0) {
            prime = false
        }
    }
    if(prime) {
        return true
    } else {
        return false
    }
}