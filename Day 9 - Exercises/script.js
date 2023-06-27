// DAY 09 EXERCISES

// LEVEL 1

// We use forEach to iterate an array
// we use map to iterate an array and modify its elements
// we use filter to filter out irems in an array
// we use reduce to  

const sayilar = [1, 2, 3, 4, 5, 12]
function sumArray(arr) {
    sum = 0
    const callBack = function (element) {
        sum += element
    }
    arr.forEach(callBack)
    return sum
}
console.log(sumArray(sayilar))


countries.forEach(country => console.log(country))

countries.forEach(country => console.log(country.name))

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.forEach(number => console.log(number))


const countriesShort = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Ethiopia']

countriesShort.map(country => console.log(country.toUpperCase()))

const countriesShortLength = countriesShort.map(country => country.length)
console.log(countriesShortLength)

const numbersSquare = numbers.map(number => number ** 2)
console.log(numbersSquare)

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

names.map(name => console.log(name.toUpperCase()))

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

products.map(productPrice => console.log(`${productPrice.product}: ${productPrice.price}`))

const countriesContainingLand = countriesShort.filter((country) =>
    country.includes('land')
)
console.log(countriesContainingLand)

const countriesHave6Letter = countriesShort.filter((country) => country.length == 6)
console.log(countriesHave6Letter)

const countriesStartWithE = countriesShort.filter(country => country.startsWith('E'))
console.log(countriesStartWithE)


const prices = products.filter(productPrice => productPrice.price)
console.log(prices)


const myArray = [1, "hello", 2, "world", 3, "foo", "bar"];
function getStringLists(arr) {
    const stringList = arr.filter(item => typeof item === 'string');
    return stringList;
}

const result = getStringLists(myArray);
console.log(result);

let sonuc = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(sonuc)


const concatenatedCountries = countriesShort.reduce((sentence, country, index) => {
    if (index === 0) {
      return country
    } else if (index === countries.length - 1) {
      return sentence + ", and " + country
    } else {
      return sentence + ", " + country
    }
}, "")
  
const finalSentence = concatenatedCountries + " are north European countries."
  
console.log(finalSentence)

// in every : every element of object must be same, in some, some of them is enogyh

const namesGreaterThanSeven = names.some(name => name.length === 7)
console.log(namesGreaterThanSeven)

const countriesEvery = countriesShort.every(country => country.includes('land'))
console.log(countriesEvery)


// find: return the first element / findIndex: return the first position

const firstCountryHas6Letter = countriesShort.find(country => country.length == 6)
console.log(firstCountryHas6Letter)

const firstCountryHas6LetterIndex = countriesShort.findIndex(country => country.length == 6)
console.log(firstCountryHas6LetterIndex)

const isNorway = countriesShort.findIndex(country => country == 'Norway')
console.log(isNorway) // 3


const isRussia = countriesShort.findIndex(country => country == 'Russia')
console.log(isRussia) // -1


// LEVEL 2
