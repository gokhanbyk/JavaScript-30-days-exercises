// Day 8 Exercises

// LEVEL 1


const dogX = {}
console.log(dogX) // Object[[Prototype]]: Object

const dog = {
    name: 'Lady',
    legs: 4,
    color: 'white',
    age: 4,
    bark: 'woof woof'
}
console.log(dog.name) // Lady
console.log(dog.legs) // 4
console.log(dog.color) // white
console.log(dog.age) // 4
console.log(dog.bark) // woof woof

dog.breed = 'Husky'
dog.getDogInfo = function() {
    return `My dog's name is ${this.name} and her color is ${this.color} she is ${this.age} years old. She is a ${this.breed}`
}
console.log(dog.getDogInfo()) // My dog's name is Lady and her color is white she is 4 years old. She is a Husky


// LEVEL 2

// users => users.js

function maxSkills(users) {
    let maxSkills = 0
    let mostSkillsPerson = ''

    for (const user in users) {
        let skillsLength = users[user].skills.length
        if (skillsLength > maxSkills) {
            maxSkills = skillsLength
            mostSkillsPerson = user
        }
    }
    return mostSkillsPerson
}
console.log(maxSkills(users)) // Asab


function loggedInUsers(users) {
    let loggedInUsers = 0
    let higherPointUsers = 0
    
    for(const user in users) {
        if(users[user].isLoggedIn){
            loggedInUsers++
        }
        if(users[user].points >= 50) {
            higherPointUsers++
        }
    }
    return `logged in:${loggedInUsers} / higher than 50 point: ${higherPointUsers}`
}
console.log(loggedInUsers(users)) // logged in:2 / higher than 50 point: 3


function mernDeveloper(users) {
    let mernDeveloper = []
    let isMernDeveloper = false
    for(const merns in users) {
        const developers = users[merns].skills
        if(developers.includes('MongoDB', 'Express', 'React', 'Node')) {
            isMernDeveloper = true
            mernDeveloper.push(merns)
        }
    }
    return mernDeveloper
}
console.log(mernDeveloper(users)) // (2) ['Asab', 'Paul']

const copyUsers = Object.assign({}, users)

copyUsers.Gökhan = {}
console.log(copyUsers);


const keys = Object.keys(users)
console.log(keys) // (7) ['Alex', 'Asab', 'Brook', 'Daniel', 'John', 'Thomas', 'Paul']0: "Alex"1: "Asab"2: "Brook"3: "Daniel"4: "John"5: "Thomas"6: "Paul"length: 7[[Prototype]]: Array(0)

const values = Object.values(users)
console.log(values) 


function countriesPrint(countries) {
    for (const country in countries) {
        const capital = countries[country].capital
        const name = countries[country].name
        const population = countries[country].population
        const languages = countries[country].languages
        return `Country name: ${name}, capital: ${capital}, languages: ${languages}, population: ${population}`
    }
}
console.log(countriesPrint(countries)) // Country name: Afghanistan, capital: Kabul, languages: Pashto,Uzbek,Turkmen, population: 27657145


// LEVEL 3
