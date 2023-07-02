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
