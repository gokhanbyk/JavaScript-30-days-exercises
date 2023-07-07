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
