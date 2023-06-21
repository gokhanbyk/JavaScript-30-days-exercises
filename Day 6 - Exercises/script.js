// LEVEL 1
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

for (let i = 0; i <= 10; i++) {
    console.log(i);
}
console.log('***********');

let i = 0
do {
    console.log(i);
    i++
} while (i <= 10)
console.log('***********');

i = 0
while (i <= 10) {
    console.log(i);
    i++
}
console.log('***********');

for (let i = 10; i >= 0; i--) {
    console.log(i);
}
console.log('***********');

i = 10
do {
    console.log(i);
    i--
} while (i >= 0)
console.log('***********');

i = 10
while (i >= 0) {
    console.log(i);
    i--
}
console.log('***********');

let n = 10
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
console.log('***********');

for (let i = 1; i <= 7; i++) {
    console.log('#'.repeat(i));
}
console.log('***********');

for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}
console.log('***********');

i = 0
while (i <= 10) {
    console.log(`${i} ${Math.pow(i, 2)} ${Math.pow(i, 3)}`);
    i++
}

console.log('***********');

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

console.log('***********');

for (let i = 0; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

console.log('***********');

for (let x = 2; x <= 100; x++) {
    let isPrime = true
    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
            isPrime = false
            break
        }
    }
    if (isPrime) {
        console.log(x);
    }
}

console.log('***********');

let sum = 0
for (let i = 0; i <= 100; i++) {
    sum += i
}
console.log(`the sum of all numbers from 0 to 100 is ${sum}`);

console.log('***********');

sumEven = 0
sumOdd = 0
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        sumEven += i
    } else {
        sumOdd += i
    }
}
console.log(`The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdd}`);

console.log('***********');

let sumArray = []
// for (let i = 0; i <= 100; i++) {
//     if(i % 2 == 0) {
//         sumEven += i
//     } else {
//         sumOdd += i
//     }
// }
sumArray.push(sumEven, sumOdd)
console.log(sumArray);

console.log('***********');


let randomNum = []
for (let i = 0; i <= 5; i++) {
    let random = Math.round(Math.random() * 100)
    randomNum.push(random)
}
console.log(randomNum);

console.log('***********');

let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let id = ''

for (let i = 0; i < 6; i++) {
    var randomIndex = Math.round(Math.random() * characters.length)
    id += characters.charAt(randomIndex)
}
console.log(id);
console.log('***********');

// LEVEL 2

let randomLength = Math.round(Math.random() * 30)
id = ''

for (let i = 0; i < randomLength; i++) {
    let randomIndex = Math.round(Math.random() * characters.length)
    id += characters.charAt(randomIndex)
}
console.log(id);

console.log('***********');

let hexadecimalValues = '0123456789ABCDEFabcdef'
let hexadecimal = ''

randomLength = Math.round(Math.random() * (8 - 3 + 1) + 3)
for (let i = 0; i < 6; i++) { //randomlength is also works but ı prefer using 6
    let randomIndex = Math.round(Math.random() * hexadecimalValues.length)
    hexadecimal += hexadecimalValues.charAt(randomIndex)
}
let hexadecimalColor = '#' + hexadecimal
console.log(hexadecimalColor);
document.body.style.backgroundColor = hexadecimalColor

console.log('***********');


let randomRgbColor = []

for (let i = 0; i < 3; i++) {
    let randomRgb = Math.round(Math.random() * 255)
    randomRgbColor.push(randomRgb)
}
console.log(`rgb(${randomRgbColor[0]}, ${randomRgbColor[1]}, ${randomRgbColor[2]})`)
let rgbColor = `rgb(${randomRgbColor[0]}, ${randomRgbColor[1]}, ${randomRgbColor[2]})`

const h1 = document.querySelector('h1')
h1.style.color = rgbColor

console.log('***********');
let newCountries = []
for (let i = 0; i < countries.length; i++) {
    newCountries.push(countries[i].toUpperCase())
}
console.log(newCountries);  // ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

let countriesLength = []
for (let i = 0; i < countries.length; i++) {
    countriesLength.push(countries[i].length)
}
console.log(countriesLength); // [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

let countriesOfArrays = []
for (let i = 0; i < countries.length; i++) {
    countriesOfArrays.push([countries[i], newCountries[i].slice(0, 3), countriesLength[i]])
}
console.log(countriesOfArrays);
/*
  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]
*/

console.log('***********');
countries.push('Iceland')

let landCountries = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes('land')) {
        landCountries.push(countries[i])
    }
}
if (landCountries.length > 0) {
    console.log(landCountries); // ['Finland','Ireland', 'Iceland']
} else {
    console.log('All these countries are without land');
}

console.log('***********');

let endsWithIaCountries = []
let withoutIa = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].endsWith('ia')) {
        endsWithIaCountries.push(countries[i])
    }
    if (!countries[i].endsWith('ai')) {
        withoutIa.push(countries[i])
    }
}
console.log(`These are countries ends without ia = ${withoutIa}`);
console.log(endsWithIaCountries); // ['Albania', 'Bolivia','Ethiopia']

console.log('***********');

let maxLength = 0
let biggestCountry = ''

for (let i = 0; i < countries.length; i++) {
    if (countries[i].length > maxLength) {
        maxLength = countries[i].length
        biggestCountry = countries[i]
    }
}
console.log(biggestCountry); // Ethiopia

console.log('***********');

let onlyFiveCharCountries = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length == 5) {
        onlyFiveCharCountries.push(countries[i])
    }
}
console.log(onlyFiveCharCountries); // ['Japan', 'Kenya']

console.log('***********');

let longestWord = ''
maxLength = 0

for (let i = 0; i < webTechs.length; i++) {
    if (webTechs[i].length > maxLength) {
        maxLength = webTechs[i].length
        longestWord = webTechs[i]
    }
}
console.log(longestWord); // JavaScript

console.log('***********');

let webTechsOfArrays = []

for (let i = 0; i < webTechs.length; i++) {
    webTechsOfArrays.push([webTechs[i], webTechs[i].length])
}
console.log(webTechsOfArrays); // [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

console.log('***********');

console.log(mernStack); // (4) ['MongoDB', 'Express', 'React', 'Node']
let acronym = ''

for (let i = 0; i < mernStack.length; i++) {
    let word = mernStack[i]
    acronym += word[0].toUpperCase()
}
console.log(acronym) // MERN

console.log('***********');

webTechs.push('Express')

for (const tech of webTechs) {
    console.log(tech);
}

console.log('***********');

const fruit = ['banana', 'orange', 'mango', 'lemon']
let reverseFruit = []
console.log(fruit);
for (let i = fruit.length - 1; i >= 0; i--) {
    reverseFruit.push(fruit[i])
}
console.log(reverseFruit);

console.log('***********');

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

for (let i = 0; i < fullStack.length; i++) {
    for(let j = 0; j < fullStack[i].length; j++) {
        console.log(fullStack[i][j].toUpperCase());
    }
}

// LEVEL 3

/*
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
*/

const countriesCopy = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
    'Iceland'
]

const sortedCountries = countriesCopy.sort()
console.log(sortedCountries);

const sortedWebTechs = webTechs.sort()
console.log(sortedWebTechs);

const sortedMenStack = mernStack.sort()
console.log(sortedMenStack);

let withLandCountries = []

for (let i = 0; i < countriesData.length; i++) {
    if (countriesData[i].includes('land')) {
        withLandCountries.push(countriesData[i])
    }   
}
console.log(withLandCountries); // ['Finland', 'Iceland', 'Ireland', 'Marshall Islands', 'Netherlands', 'New Zealand', 'Poland', 'Solomon Islands', 'Swaziland', 'Switzerland', 'Thailand']

maxLength = 0
let longestWordCountry = ''

for(let i = 0; i < countriesData.length; i++) {
    if (countriesData[i].length > maxLength) {
        maxLength = countriesData[i].length
        longestWordCountry = countriesData[i]
    }
}
console.log(longestWordCountry); // Central African Republic

let onlyFourCharCountries = []

for (let i = 0; i < countriesData.length; i++) {
    if (countriesData[i].length == 4) {
        onlyFourCharCountries.push(countriesData[i])
    }
}
console.log(onlyFourCharCountries); // ['Chad', 'Cuba', 'Fiji', 'Iran', 'Iraq', 'Laos', 'Mali', 'Oman', 'Peru', 'Togo']

let twoOrMoreWordCountries = []

for(let i = 0; i < countriesData.length; i++) {
    let words = countriesData[i].split(' ')
    if (words.length >= 2) {
        twoOrMoreWordCountries.push(countriesData[i])
    }
}

console.log(twoOrMoreWordCountries);

let reverseCountriesData = []

for (let i = countriesData.length - 1; i >= 0; i--) {
    reverseCountriesData.push(countriesData[i].toUpperCase())
    reverseCountriesData.sort()
}
console.log(reverseCountriesData); 
