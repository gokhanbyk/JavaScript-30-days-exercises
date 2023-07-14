// DAY 18 EXERCISE

// LEVEL 1

const url = 'https://restcountries.com/v2/all' // countries api
async function getCountries() {
    try{
        const response = await fetch(url)
        const data = await response.json()
        for(const country of data) {
            const languages = country.languages.map(l => l.name)
            console.log(
                `Name of country: ${country.name}
                \nCapital: ${country.capital}
                \nlanguages: ${languages.join(', ')}
                \npopulation: ${country.population}
                \narea: ${country.area}`
            )
        }
    } catch (err) {
        console.log(err)
    }
}
getCountries()
/*
Name of country: Turkey
                
Capital: Ankara
                
languages: Turkish
                
population: 84339067
                
area: 783562
*/


// LEVEL 2


const catsName = [
    {name: 'Whiskers'},
    {name: 'Fluffy'},
    {name: 'Mittens'}
]

const catsPromise = new Promise((resolve) => {
    setTimeout(() => {
            const names = catsName.map(cat => cat.name)
            resolve(names)
        }, 3000)
})

catsPromise
    .then(catsName => {
        console.log(catsName) // (3) ['Whiskers', 'Fluffy', 'Mittens']
    })
    .catch(error => {
        console.log(error)
    })

const catsNameAPI = 'https://api.thecatapi.com/v1/breeds'

async function getCatsName() {
    try {
        const response = await fetch(catsNameAPI)
        const cats = await response.json()
        for(const cat of cats) {
            console.log(`Name: ${cat.name}`)
        }
    } catch(err) {
        console.log(err)
    }
}
getCatsName() // Name: Cheetoh...

// LEVEL 3

const catsAPI = 'https://api.thecatapi.com/v1/breeds'

async function getCatWeight() {
    try {
        const response = await fetch(catsAPI)
        const data = await response.json()
        // console.log(data)

        let totalWeight = 0
        let catCount = 0

        for(const cat of data) {
            if(cat.weight && cat.weight.metric) {
                const weight = parseFloat(cat.weight.metric)
                if(!isNaN(weight)) {
                    totalWeight += weight
                    catCount++
                }
            }
        }

        if(catCount > 0) {
            const averageWeight = totalWeight / catCount
            console.log(`Average weight: ${averageWeight.toFixed(2)}kg`)
        }
    } catch (err) {
        console.log(err)
    }
}
getCatWeight() // Average weight: 3.22kg


const getTenLargestCountry = async () => {
    try {
        const response = await fetch(url)
        const countries = await response.json()
        
        const sortedCountries = countries.sort((a, b) => b.population - a.population)
        
        for(let i = 0; i < 10; i++) {
            console.log(
                `Name: ${sortedCountries[i].name} & ${sortedCountries[i].population}`
            )
        }
    } catch (err) {
        console.log(err)
    }
}
getTenLargestCountry()
/*
Name: China & 1402112000
Name: India & 1380004385
Name: United States of America & 329484123
Name: Indonesia & 273523621
Name: Pakistan & 220892331
Name: Brazil & 212559409
Name: Nigeria & 206139587
Name: Bangladesh & 164689383
Name: Russian Federation & 144104080
Name: Mexico & 128932753
*/


async function countOffLang() {
    try{
        const response = await fetch(url)
        const countries = await response.json()

        let languageSet = new Set() // using set to store unique languages

        for (const country of countries) {
            if(country.languages && country.languages.length > 0) {
                for(const language of country.languages) {
                    languageSet.add(language.name)
                }
            }
        }

        const totalLanguages = languageSet.size
        console.log(`Total number of languages as off: ${totalLanguages}`)
    
    } catch (err) {
        console.log(err)
    }
}
countOffLang() // Total number of languages as off: 123