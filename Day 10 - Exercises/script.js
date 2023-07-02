// LEVEL 1

const emptySet = new Set()


for(let i = 0; i < 10; i++) {
    emptySet.add(i)
}
console.log(emptySet) // Set(10) {0, 1, 2, 3, 4, …}

emptySet.delete(7)
console.log(emptySet) // Set(9) {0, 1, 2, 3, 4, …}

emptySet.clear()
console.log(emptySet) // Set(0) {size: 0}

const names = ['Gökhan', 'Yiğit', 'Arda', 'Şakir', 'Mehmet']
const setOfNames = new Set(names)
console.log(setOfNames) // Set(5) {'Gökhan', 'Yiğit', 'Arda', 'Şakir', 'Mehmet'}

const countriesMap = [['Turkey', 'Ankara'], ['Finland', 'Helsinki'], ['Italy', 'Rome']]
const mapOfCountries = new Map(countriesMap)
console.log(mapOfCountries) // Map(3) {'Turkey' => 'Ankara', 'Finland' => 'Helsinki', 'Italy' => 'Rome'}

// LEVEL 2

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)
// Union of sets
console.log(C) // Set(6) {4, 5, 8, 9, 3, …}

let d = a.filter((num) => B.has(num))
let D = new Set(d)

// Intersection
console.log(D) // Set(2) {4, 5}

//find a with b
let newA = new Set(a)
let result = []

for(const number of b) {
    if(newA.has(number)) {
        result.push(number)
    }
}
console.log(result) // (2) [4, 5]

// LEVEL 3

let countriesSet = new Set(countries)
console.log(countriesSet) // Set(250) {{…}, {…}, {…}, {…}, {…}, …}

function mostSpokenLanguages(countries, x) {
    let languageCounts = new Map()
  
    for (let i = 0; i < countries.length; i++) {
      const languages = countries[i].languages
  
      for (const lang of languages) {
        if (languageCounts.has(lang)) {
          languageCounts.set(lang, languageCounts.get(lang) + 1)
        } else {
          languageCounts.set(lang, 1)
        }
      }
    }
  
    const countsArray = Array.from(languageCounts, ([language, count]) => ({
      language: language,
      count: count,
    }))
  
    countsArray.sort((a, b) => b.count - a.count);
  
    return countsArray.slice(0, x);
  }
  
  console.log(mostSpokenLanguages(countries, 10));
