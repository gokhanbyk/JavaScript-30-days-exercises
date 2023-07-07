// DAY 13 Exercise

// LEVEL 1

console.table(countries)

const countriesObject = {
    name: 'Turkey',
    capital: 'Ankara',
    languages: ['Turkish', 'English'],
    population: 87057705,
    flag: 'https://restcountries.eu/data/tur.svg',
    currency: 'Turkish lira'
}

console.table(countriesObject)

const countriesCapital = [
    'Ankara',
    'Rome',
    'Berlin',
    'London'
]

const country = [
    'Turkey',
    'Italy',
    'Germany',
    'England'
]

console.group('Countries')
console.log(country)
console.log(countriesCapital)
console.groupEnd()


// LEVEL 2

console.assert(10 > 2 * 10, '10 is not greater than 20') // Assertion failed: 10 is not greater than 20

console.warn('Your username or password is wrong')
console.error('Wrong password')


// LEVEL 3

const numbers = [1, 2, 3, 4, 5]

console.time('While')
let i = 0
while(i < numbers.length) {
    console.log(i)
    i++
}
console.timeEnd('While') // While: 0.09814453125 ms

console.time('For')
for(let i = 0; i < numbers.length; i++) {
    console.log(i)
}
console.timeEnd('For') // For: 0.0390625 ms

console.time('For of')
for(const num of numbers) {
    console.log(num)
}
console.timeEnd('For of') // For of: 0.1240234375 ms

console.time('forEach')
numbers.forEach((num) => console.log(num))
console.timeEnd('forEach') // forEach: 0.15625 ms
