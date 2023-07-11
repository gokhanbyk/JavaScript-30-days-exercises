// DAY 15 EXERCISE

// LEVEL 1

class Animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }

    getAnimalInfo() {
        let info = `Animal's name is ${this.name}, it is ${this.age} year old. its color is ${this.color}, and has ${this.legs} legs`
        return info
    }
}
const animal = new Animal('Şimşek', 2, 'red', 4)
console.log(animal.getAnimalInfo()) // Animal's name is Şimşek, it is 2 year old. its color is red, and has 4 legs

class Dog extends Animal {
    bark() {
        console.log('bark bark')
    }
    // level 2
    getAnimalInfo() {
        return super.getAnimalInfo() + ' its a dog' 
    }
}
const dog = new Dog('Lady', 1, 'white', 4)
console.log(dog) // Dog {name: 'Lady', age: 1, color: 'white', legs: 4}
console.log(dog.getAnimalInfo()) // Animal's name is Lady, it is 1 year old. its color is white, and has 4 legs its a dog


class Cat extends Animal {
    meow() {
        console.log('meow meow')
    }

    // Level 2
    getAnimalInfo() {
        return super.getAnimalInfo() + ' its a cat' 
    }
}
const cat = new Cat('Cino', 2, 'orange', 4)
console.log(cat) // Cat {name: 'Cino', age: 2, color: 'orange', legs: 4}
console.log(cat.getAnimalInfo()) // Animal's name is Cino, it is 2 year old. its color is orange, and has 4 legs its a cat


// LEVEL 3

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistics = {
    count: () => ages.length,
    sum: () => ages.reduce((a, b) => a + b),
    min: () => Math.min(...ages),
    max: () => Math.max(...ages),
    range: () => statistics.max() - statistics.min(),
    mean: () => statistics.sum() / statistics.count(),
    median: () => ages.sort((a, b) => a - b)[ages.length >> 1],
    mode: () => {
        const modeDict = {}
        for (const age of ages) {
            const count = modeDict[age]
            modeDict[age] = count === undefined ? 1 : count + 1
        }
        return Object.entries(modeDict).reduce((a, b) => a[1] > b[1] ? a : b)
    },
    var: () => {
        const mean = statistics.mean()
        const squaredDeviations = ages.map((age) => Math.pow(age - mean, 2))
        return squaredDeviations.reduce((a, b) => a + b) / statistics.count()
    },
    std: () => Math.sqrt(statistics.var()),
    freqDist: () => ages.reduce((a, age) => {
        const count = a[age]
        a[age] = count === undefined ? 1 : count + 1
        return a
    }, {}),
}

console.log('Count:', statistics.count()) // Count: 25
console.log('Sum: ', statistics.sum()) // Sum:  744
console.log('Min: ', statistics.min()) // Min:  24
console.log('Max: ', statistics.max()) // Max:  38
console.log('Range: ', statistics.range()) // Range:  14
console.log('Mean: ', statistics.mean()) // Mean:  29.76
console.log('Median: ', statistics.median()) // Median: 29
console.log('Mode: ', statistics.mode()) // (2) ['26', 5]
console.log('Variance: ', statistics.var()) // Variance:  17.5424
console.log('Standard Deviation: ', statistics.std()) // Standard Deviation:  4.188364836066696
console.log('Frequency Distribution: ', statistics.freqDist()) // Frequency Distribution:  {24: 2, 25: 1, 26: 5, 27: 4, 29: 1, 31: 2, 32: 3, 33: 2, 34: 2, 37: 2, 38: 1}


class PersonAccount {
    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
        this.incomes = 0
        this.expenses = 0
    }
    
    accountInfo() {
        return {
            firstname: this.firstname,
            lastname: this.lastname,
            totalIncome: this.totalIncome(),
            totalExpense: this.totalExpense(),
        }
    }

    totalIncome() {
       return `${this.incomes}`
    }

    totalExpense() {
       return `${this.expenses}`
    }


    addIncome(income) {
        this.incomes += income
    }

    addExpense(expense) {
        this.expenses += expense
    }

    accountBalance() {
        return this.totalIncome() - this.totalExpense()
    }
}


const person = new PersonAccount('Gökhan', 'Biyikoglu')
console.log(person) 
console.log(person.incomes) // 0
console.log(person.expenses) // 0

person.addIncome(1000)
person.addIncome(3000)
console.log(person.incomes) // 4000

person.addExpense(500)
person.addExpense(1000)
console.log(person.expenses) // 1500

console.log(person.totalIncome()) // 4000
console.log(person.totalExpense()) // 1500

console.log(person.accountInfo()) // {firstname: 'Gökhan', lastname: 'Biyikoglu', totalIncome: '4000', totalExpense: '1500'}

console.log(person.accountBalance()) // 2500
