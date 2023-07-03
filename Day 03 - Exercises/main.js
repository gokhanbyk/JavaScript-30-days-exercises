// LEVEL 1

let firstName = 'Gökhan'
let lastName = 'Biyikoglu'
let country = 'Turkey'
let city = 'izmir'
let age = 21
let isMarried = false
let year = 2023

console.log(typeof firstName)   // String
console.log(typeof lastName)    // String
console.log(typeof country)     //String
console.log(typeof city)        // String
console.log(typeof age)         // number
console.log(typeof isMarried)   // boolean
console.log(typeof year)        // number

console.log(typeof '10' === 10) // false

console.log(typeof parseInt('9.8') === 10) // false

// truthy value
let isLightOn = true
let name = 'Gökhan'
let num5 = 5
//falsy value
num5 = 0
name = ''
isLightOn = false

//*****************************
/*
i. 4 > 3 -> true
ii. 4 >= -> true
iii. 4 < 3 -> false
iv. 4 <= 3 -> false
v. 4 == 4 -> true
vi. 4 === 4 -> true
vii. 4 != 4 -> false
viii. 4 !== 4 -> false
ix. 4 != '4' -> false
x. 4 == '4' -> true
xi. 4 === '4' -> false
*/

console.log(4 > 3)  //true
console.log(4 >= 3) // true
console.log(4 < 3)  // false
console.log(4 <= 3) // false
console.log(4 == 4) // true
console.log(4 === 4)    // true
console.log(4 != 4) // false
console.log(4 !== 4)    // false
console.log(4 != '4')   // false
console.log(4 == '4')   // true
console.log(4 === '4')  // false

let python = 'python'
let jangon = 'jangon'

console.log(python.length > jangon.length) // false
// *****************************
console.log('************');

/*
i. 4 > 3 && 10 < 12 -> true
ii. 4 > 3 && 10 > 12 -> false
iii. 4 > 3 || 10 < 12 -> true
iv. 4 < 3 || 10 > 12 -> false
v. !(4 > 3) -> false
vi. !(4 < 3) -> true
vii. !(false) -> true
viii. !(4 > 3 && 10 < 12) -> false
ix. !(4 > 3 && 10 > 12) -> true
x. !(4 === '4') -> true
*/

console.log(4 > 3 && 10 < 12)   // true
console.log(4 > 3 && 10 > 12)   // false
console.log(4 > 3 || 10 < 12 )  // true
console.log(4 < 3 || 10 > 12)   // false
console.log(!(4 > 3))   // false
console.log(!(4 < 3))   // true
console.log(!(false))   // true
console.log(!(4 > 3 && 10 < 12))    // false
console.log(!(4 > 3 && 10 > 12))    // true
console.log(!(4 === '4'))   // true
console.log(!(python.includes('on') && jangon.includes('on'))) // false
console.log('************');
// *****************************

let now = new Date()
console.log('What is the year today\n' + now.getFullYear()) // 2023
console.log('What is the month today as a number\n' + now.getMonth()) // 5
console.log('what is the date today?\n' + now.getDate()) // 16
console.log('what is the day today as a number\n' + now.getDay()) // 5
console.log('what is the hours now?\n' + now.getHours()) // 14
console.log('what is the minutes now?\n' + now.getMinutes()) // 31
console.log(now.getTime() + ' the number of seconds elapsed from jan 1, 1970 to now.')  //1686915180044 


// LEVEL 2

let base = parseInt(prompt('Enter base', 'type 20'))
let height = parseInt(prompt('enter height', 'type 10'))
console.log(`The are of the triangle is ${0.5 * base * height}`)


let a = Number(prompt('enter side a:', '5'))
let b = Number(prompt('enter side b:', '4'))
let c = Number(prompt('enter side c:', '3'))
console.log(`The perimeter of the triangle is ${a + b + c}`)


let length = Number(prompt('length'))
let width = Number(prompt('width'))
console.log(`are of rectangle ${length * width} and perimeter ${2 * (length + width)}`)


const PI = 3.14
let radius = Number(prompt('radius'))
console.log(`are of circle ${PI * radius * radius} and circumference of circle ${2 * PI * radius}`)


let x1 = 5
let y1 = 2 * x1 - 2
console.log(y1);
let slope = (2 - 2) / (6 - 10)
console.log(slope);

let x = -3
let y = (x*x) + 6 * x + 9 
console.log(y);

let hour = Number(prompt('Enter hours', '40'))
let rate = Number(prompt('Enter Rate per hour', '28'))
console.log(`your weakly earning is ${40 * 28}`);


firstName.length > 7
    ? console.log('Your name is long')
    : console.log('Your name is short')

firstName.length > lastName.length
    ? console.log('Your First name is longer than your family name')
    : console.log('it is shorter')


let myAge = 250
let yourAge = 25
console.log(`I am ${myAge - yourAge} older than you.`)

let birth = Number(prompt('Enter Birth Year:', '1995 or 2006'))
2023 - birth > 18
    ? console.log('You are free to drive')
    : console.log('You cannot drive')

let year2 = Number(prompt('enter the year you lived'))
console.log(`you lived ${year2 * 365 * 24 * 60 *60}`);


let year1 = now.getFullYear()
let month = now.getMonth()
let day = now.getDay()
let hours = now.getHours()
let minutes = now.getMinutes()

console.log(`i. ${year1}-${month}-${day} ${hours}:${minutes}`);
console.log(`ii. ${day}-${month}-${year1} ${hours}:${minutes}`);
console.log(`iii. ${day}/${month}/${year1} ${hours}:${minutes}`);


// LEVEL 3

console.log(`${year1}-${month}-${day} ${hours}:${minutes}`);
