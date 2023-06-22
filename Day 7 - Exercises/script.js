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

function solveLinEquation(a, b, c) {
    if(a === 0 && b === 0) {
        return 'Invalid equation: both a and b cannot be zero'
    } else if (a === 0) {
        return 'x = ' + (-c / b) 
    } else if (b === 0) {
        return 'y = ' + (-c / a)
    } else {
        return 'x = ' + (-c / a) + ', y = ' + (-c / b)
    }
}
console.log(solveLinEquation(3, -3, 6)); //  x = -2, y = 2


const printArray = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

console.log(printArray(summer)) 


const showDateTime = () => {
    let time = new Date()
    let day = time.getDate()
    let month = time.getMonth()
    let year = time.getFullYear()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    
    if(hours < 10){
        hours = '0' + hours
    }
    if(minutes < 10) {
        minutes = '0' + minutes
    }
    if(month < 10) {
        month = '0' + month
    }

    return `${day}/${month}/${year} ${hours}:${minutes}`
}
console.log(showDateTime()) // 22/05/2023 09:07


const swapValues = (x, y) => {
    let a = x
    let b = y
    let c

    c = b
    b = a
    a = c
    return `x: ${a} y: ${b}`
}
console.log(swapValues(2, 3)); // x: 3 y: 2

let arr = [1, 2, 3, 4, 5]
function reverseArray(x) {
    let reverseArray = []
    for (let i = x.length - 1; i >= 0; i--){
        reverseArray.push(x[i])
    }
    return reverseArray
}
console.log(reverseArray(arr)) // [5, 4, 3, 2, 1]

let arr1 = ['html', 'css', 'js']
function capitalizeArray(arr) {
    let capitalizedArray = []
    for (let i = 0; i < arr.length; i++) {
        capitalizedArray.push(arr[i].toUpperCase()) 
    }
    return capitalizedArray
}
console.log(capitalizeArray(arr1)) // (3) ['HTML', 'CSS', 'JS']

let itemArray = []
function addItem(item, arr) {
    arr.push(item)
    return arr
}
addItem('shovel', itemArray)
addItem('fork', itemArray)
addItem('pink', itemArray)
console.log(itemArray) // (2) ['shovel', 'fork', 'pink']


function removeItem(index, arr) {
    arr.splice(index, 1)
    return arr
}
removeItem(1, itemArray)
console.log(itemArray) // (2) ['shovel', 'pink']


const sumOfNumbers = (number) => {
    let sum = 0
    for (let i = 0; i <= number; i++) {
        sum += i
    }
    return sum
}
console.log(sumOfNumbers(20)) // 210

function sumOfOdds(number) {
    let sum = 0
    for(let i = 0; i <= number; i++) {
        if (i % 2 != 0) {
            sum += i
        }
    }
    return sum
}
console.log(sumOfOdds(20)) // 100


function sumOfEven(number) {
    let sum = 0
    for(let i = 0; i <= number; i++) {
        if(i % 2 == 0) {
            sum += i
        }
    }
    return sum
}
console.log(sumOfEven(20)) // 110


function evensAndOdds(number) {
    if(number > 0) {
        let even = []
        let odd = []
        for(let i = 0; i <= number; i++){
            if(i % 2 == 0) {
                even.push(i)
            } 
            if(i % 2 != 0) {
                odd.push(i)
            }
        }
        return `The number of odds are ${odd.length}.\nThe number of evens are ${even.length}.`
    } else {
        return 'wrong value. value must be positive'
    }
    
}

console.log(evensAndOdds(100)) // The number of odds are 50. The number of evens are 51.


function sumfOfArguments() {
    let sum = 0
    for (const number of arguments) {
        sum += number
    }
    return sum
}
console.log(sumfOfArguments(2, 3, 4, 5)) // 14
console.log(sumfOfArguments(2, 3, 4, 5, 6)) // 20



function randomUserIp() {
    let characters = 'abcçdefgğhıijklmnoöprsştuivyzqwxABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZQWX1234567890'
    let id = ''
    for (let i = 1; i < 10; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        id += characters.charAt(randomIndex)
    }
    return id
}
console.log(randomUserIp()) // şJ3VRgiW3 / k8eK0fm2s


const randomMacAddress = () => {
    let digits = '0123456789ABCDEF'
    let macAdress = ''

    for(let i = 0; i < 6; i++) {
        let pair = ''
        for (let j = 0; j < 2; j++) {
            let randomIndex = Math.floor(Math.random() * digits.length)
            pair += digits.charAt(randomIndex)
        }

        macAdress += pair

        if(i < 5) {
            macAdress += ':'
        } 

    }
    return macAdress
}

console.log(randomMacAddress()) // 14:D8:43:D3:0C:05 //  6D:F9:17:CC:7C:C2


function randomHexaNumberGenerator() {
    let hexadecimalValues = '0123456789ABCDEFabcdef'
    let hexidecimal = ''

    for(let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * hexadecimalValues.length)
        hexidecimal += hexadecimalValues.charAt(randomIndex)
    }
    let hexidecimalColor = '#' + hexidecimal
    document.body.style.backgroundColor = hexidecimalColor
    return hexidecimalColor
}
console.log(randomHexaNumberGenerator())


function userIdGenerator() {
    let characters = 'abcçdefgğhıijklmnoöprsştuivyzqwxABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZQWX1234567890'
    let userId = ''

    for (let i = 0; i < 7; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        userId += characters.charAt(randomIndex)
    }
    return userId
}
console.log(userIdGenerator()) // JİQirfı / 5IğiNSD


// LEVEL 3
