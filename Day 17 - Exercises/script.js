// DAY 17 - Exercises

// LEVEL 1
localStorage.setItem('firstName', 'Gökhan')
localStorage.setItem('lastName', 'Bıyıkoğlu')
localStorage.setItem('age', 21)
localStorage.setItem('country', 'Turkey')
localStorage.setItem('city', 'izmir')
console.log(localStorage)

// LEVEL 2
const student = {
    firstName: 'Gökhan',
    lastName: 'Bıyıkoğlu',
    age: 21,
    skills: [
        'HTML',
        'CSS',
        'JS'
    ],
    country: 'Turkey'
}

const studentJSON = JSON.stringify(student, undefined, 4)
localStorage.setItem('student', studentJSON)

// LEVEL 3
const personAccount = {
    firstName: 'Gökhan',
    lastName: 'Bıyıkoğlu',
    incomes: 0,
    expenses: 0,

    totalIncome() {
        return this.incomes
    },
    
    totalExpenses() {
        return this.expenses
    },
    
    accountInfo() {
        return `${this.firstName} ${this.lastName}'s total income is ${this.incomes} and expense is ${this.expenses} and his account balance is ${this.accountBalance()}`
    },
    
    addIncome(income) {
        this.incomes += income
    },

    addExpense(expense) {
        this.expenses += expense
    },

    accountBalance() {
        let accountBalance = this.incomes - this.expenses
        return accountBalance
    },
}
personAccount.addIncome(300)
personAccount.addIncome(400)
personAccount.addExpense(200)
personAccount.addExpense(300)
console.log(personAccount.incomes) // 700
console.log(personAccount.expenses) // 500
console.log(personAccount.accountBalance()) // 200
console.log(personAccount.accountInfo()) // Gökhan Bıyıkoğlu's total income is 700 and expense is 500 and his account balance is 200
console.log(personAccount.totalExpenses()) // 500
console.log(personAccount.totalIncome()) // 700

const personAccountJSON = JSON.stringify(personAccount)

localStorage.setItem('personAccount', personAccountJSON)
console.log(localStorage)

console.log(localStorage.getItem('personAccount'))
