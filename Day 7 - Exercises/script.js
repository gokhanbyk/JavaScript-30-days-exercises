// 07 Day Exercises

// LEVEL 1

function fullName() { 
    let firstName = 'Göhan'
    let lastName = 'Bıyıkoğlu'
    return `${firstName} ${lastName}`
}
console.log(fullName())

function fullName1(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log(fullName1('Gökhan', 'Bıyıkoğlu'))

function addNumber(x, y) {
    let sum = x + y
    return sum
}

console.log(addNumber(5, 20)) // 25

function areOfRectangle(length, width) {
    let area = length * width
    return area
}
console.log(areOfRectangle(10, 20)) //200

const perimeterOfRectangle = (length, width) => {
    let perimeter = 2 * (length + width)
    return perimeter
}
console.log(perimeterOfRectangle(20, 30)) // 100

function volumeOfRectPrism(length, width, heigth) {
    let volume = length * width * heigth
    return volume
}
console.log(volumeOfRectPrism(5, 2, 3)) // 30 

function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}
console.log(areaOfCircle(5)) // 78.53981633974483


const circumOfCircle = (r) => {
    let circumference = 2 * Math.PI * r 
    return circumference
}
console.log(circumOfCircle(10)) // 62.83185307179586

function calculateDensity(mass, volume) {
    let density = mass / volume
    return density
}
console.log(calculateDensity(1000, 50)) // 20

function calculateSpeed() {
    let distance = 300 //km
    let time = 2 // s
    let speed = distance / time
    return speed
}
console.log(calculateSpeed()) // 150km/s

function calculateWeight() {
    let mass = 50
    const gravity = 9.81
    let weight = mass * gravity
    return weight
}
console.log(calculateWeight()) // 490.5


function convertCelsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * (9/5)) + 32
    return fahrenheit
}
console.log(convertCelsiusToFahrenheit(30)) // 86


let weight = Number(prompt('enter your kg'))
let heigth = Number(prompt('enter your height as metre'))

function calculateBMI(weight, heigth) {
    let bmi = weight / (heigth * heigth)
    if(bmi < 18.5) {
        return 'Underweight'
    } else if(bmi > 18.5 && bmi < 24.9) {
        return 'Normal Weight'
    } else if(bmi > 25 && bmi < 29.9) {
        return 'Overweight'
    } else if (ibm >= 30) {
        return 'obese'
    }
}
console.log(calculateBMI(weight, heigth))


let summer = ['june', 'july', 'august']
let winter = ['december', 'january', 'february']
let spring = ['march', 'april', 'may']
let fall = ['september', 'october', 'november']
let month = prompt('Month?')

function checkSeason(month) {
    month = month.toLowerCase()
    if(summer.includes(month)) {
        return 'its summer'
    } else if(winter.includes(month)) {
        return 'its winter'
    } else if(fall.includes(month)) {
        return 'its fall'
    } else if(spring.includes(month)) {
        return 'its spring'
    } else {
        return 'Wrong value'
    }
}
console.log(checkSeason(month));


function findMax(x, y, z) {
    if(x > y && x > z) {
        return x
    } else if(y > x && y > z) {
        return y
    } else if(z > x && z > y) {
        return z
    }
}
console.log(findMax(5, 12, 32)) // 32

// LEVEL 2
