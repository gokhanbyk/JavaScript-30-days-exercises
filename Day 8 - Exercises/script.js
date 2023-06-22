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

const personAccount = {
    firstName: 'Gökhan',
    lastName: 'Bıyıkoğlu',
    incomes: [],
    expenses: [],
    totalIncome: function () {
        let total = 0
        for (const income of this.incomes) {
            total += income.amount
        }
        return total
    },
    totalExpenses: function () {
        let total = 0
        for (const expense of this.expenses) {
            total += expense.amount
        }
        return total
    },
    accountInfo: function () {
        return `Name: ${this.firstName} ${this.lastName}\nTotal Income: ${this.totalIncome()}\nTotal Expenses: ${this.totalExpenses()}`
    },
    addIncome: function (amount) {
        this.incomes.push({ amount })
    },
    addExpense: function (amount) {
        this.expenses.push({ amount })
    },
    accountBalance: function () {
        const balance = this.totalIncome() - this.totalExpenses()
        return `Account Balance: ${balance}`
    }
}

personAccount.addIncome(5000)
personAccount.addIncome(10000)
personAccount.addExpense(3000)

console.log(personAccount.accountInfo()) // Name: Gökhan Bıyıkoğlu Total Income: 15000 Total Expenses: 3000
console.log(personAccount.accountBalance()) // Account Balance: 12000


const usersX = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]

function signUp() {
    let userName = prompt('Sign up', 'Username')
    let password = Number(prompt('Sign up', 'password'))
    for (const user in usersX) {
        let exist = usersX[user].username
        if (exist.includes(userName)) {
            return 'This account has already exist'
        } else {
            usersX.newUser = {
                username: userName,
                password: password
            }
            return 'sign up succesfully'
        }
    }
}
console.log(signUp())
console.log(usersX);

function signIn() {
    let userName = prompt('Sign in', 'Username')
    let password = Number(prompt('Sign in', 'password'))
    for (const user in usersX) {
        let userUsername = usersX[user].username
        let userPassword = usersX[user].password
        if (userUsername === userName && userPassword == password) {
            if (usersX[user].isLoggedIn === true) {
                return 'user has already signed in'
            } else {
                usersX[user].isLoggedIn = true;
                return 'Sign in succesfully'
            }
        }
    }
    return 'invalid username or password'
}

console.log(signIn())
console.log(usersX);



function rateProduct() {
    let productName = prompt('Product Name:', 'Laptop')
    let rate = Number(prompt('Rate the product', '5'))
    for (const product in products) {
        let name = products[product].name
        let rating = products[product].ratings
        if (productName === name && rating.length === 0) {
            products[product].ratings.push(rate)
            return 'Your rating has been saved'
        }
    }
    return 'invalid product name'
}
console.log(rateProduct())
console.log(products[1])

function averageRating() {
    let productName = prompt('Product name', 'TV')
    for (const product of products) {
        if (product.name === productName) {
            const ratings = product.ratings;
            if (ratings.length === 0) {
                return 'No ratings yet.';
            } 
            let sum = 0;
            for (const rating of ratings) {
                sum += rating.rate
            const average = sum / ratings.length;
            return average.toFixed(1);
        }
        }
    }
    return 'Invalid product name.';
}
console.log(averageRating());


function likedProduct() {
    let productName = prompt('Product name', 'mobile phone')
    for (const product of products) {
        if (productName === product.name) {
          const likedIndex = product.likes.indexOf('fg12cy')
          if (likedIndex === -1) {
            product.likes.push('fg12cy')
            return 'Product liked.'
          } else {
            product.likes.splice(likedIndex, 1)
            return 'Product unliked.'
          }
        }
      }
      return 'Product not found.'
}
console.log(likedProduct())
