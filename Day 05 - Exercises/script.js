// DAY 05 EXERCISE
// LEVEL 1

const arr = []
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.length); // 5

let firstItem = numbers[0]
console.log(firstItem); // 1
let middleItemIndex = (numbers.length - 1) / 2
let middleItem = numbers[middleItemIndex]
console.log(middleItem);    // 3

let lastIndex = numbers.length - 1
let lastItem = numbers[lastIndex]
console.log(lastItem);  // 5

const mixedDataTypes = [
    'Gökhan',
    21,
    true,
    {country: 'Turkey', city: 'izmir'},
    {skills: ['HTML', 'CSS', 'JS', 'React', 'Python']}
]
console.log(mixedDataTypes.length); // 5

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies); // (7) ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies.length); // 7

let firstCompany = itCompanies[0]
console.log(firstCompany); // Facebook

let middleCompanyIndex = (itCompanies.length - 1) / 2
let middleCompany = itCompanies[middleCompanyIndex]
console.log(middleCompany); // Apple

let lastCompanyIndex = itCompanies.length - 1
let lastCompany = itCompanies[lastCompanyIndex]
console.log(lastCompany); // Amazon

console.log(itCompanies[0]); // Facebook
console.log(itCompanies[1]); // Google
console.log(itCompanies[2]); // Microsoft
console.log(itCompanies[3]); // Apple 
console.log(itCompanies[4]); // IBM
console.log(itCompanies[5]); // Oracle
console.log(itCompanies[6]); // Amazon

console.log(itCompanies[0].toUpperCase()); // FACEBOOK
console.log(itCompanies[1].toUpperCase()); // GOOGLE
console.log(itCompanies[2].toUpperCase()); // MICROSOFT
console.log(itCompanies[3].toUpperCase()); // APPLE 
console.log(itCompanies[4].toUpperCase()); // IBM
console.log(itCompanies[5].toUpperCase()); // ORACLE
console.log(itCompanies[6].toUpperCase()); // AMAZON

itCompanies.join(', ')
console.log(itCompanies + ' are big IT companies'); // Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon are big IT companies

let googleIndexOf = itCompanies.indexOf('Google') // 1
console.log(googleIndexOf);

if( googleIndexOf === -1) {
    console.log('company is not found');
} else {
    console.log(itCompanies[1]);
}

itCompanies.sort()
console.log(itCompanies); // (7) ['Amazon', 'Apple', 'Facebook', 'Google', 'IBM', 'Microsoft', 'Oracle']

itCompanies.reverse()
console.log(itCompanies); // (7) ['Oracle', 'Microsoft', 'IBM', 'Google', 'Facebook', 'Apple', 'Amazon']

console.log(itCompanies.slice(0, 3)); // (3) ['Oracle', 'Microsoft', 'IBM']
console.log(itCompanies.slice(4, 7)); // (3) ['Facebook', 'Apple', 'Amazon']
console.log(itCompanies.slice(3, 4)); // ['Google']

itCompanies.shift()
console.log(itCompanies); // oracle removed

console.log(itCompanies.slice(2, 4)); // google and facebook

itCompanies.pop()
console.log(itCompanies); // Amazon

console.log(itCompanies.splice());


// LEVEL 2

let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python'
let words = text.split(' ')
console.log(words);
console.log(words.length);


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
console.log(shoppingCart);
shoppingCart.pop()
shoppingCart.pop()
shoppingCart.push('Green Tea')
shoppingCart.push('Sugar')
console.log(shoppingCart);
//******************* */
console.log(countries.indexOf('Ethiopia')); // 4
if(countries.indexOf('Ethiopia') === -1) {
    countries.push('Ethiopia')
} else [
    console.log(countries[4].toUpperCase())
]
//* *****************
console.log(webTechs.indexOf('Sass')); // -1
if (webTechs.indexOf('Sass') === -1){
    webTechs.push('Sass')
    console.log(webTechs);
} else {
    console.log('Sass is a CSS preprocess');
}
//* *****************

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Python']
const backEnd = ['Node', 'Express', 'MongoDB']
// const fullStack = [frontEnd, backEnd]
const fullStack = frontEnd.concat(backEnd)

console.log(fullStack);

// LEVEL 3

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort()
const minAge = ages[0]
const maxAge = ages[ages.length - 1]
console.log(ages); // min : 19 / max: 26
let medianAgeIndex = (ages.length) / 2
let medianAge = ages[medianAgeIndex]
console.log(medianAge); // 24

let averageAge = ages.reduce((total, age) => total + age, 0)
console.log(averageAge / ages.length); // 22.8

const range = maxAge - minAge
console.log(range); // 7

let firstTenCountries = countries.slice(0, 10)
console.log(firstTenCountries);


let middleCountryIndex = Math.ceil(countries.length / 2)
let middleCountry = countries[middleCountryIndex]
console.log(middleCountry);

const firsHalfCountry = countries.slice(0, middleCountryIndex)
const secondHalfCountry = countries.slice(middleCountryIndex)

console.log(firsHalfCountry);
console.log(secondHalfCountry);