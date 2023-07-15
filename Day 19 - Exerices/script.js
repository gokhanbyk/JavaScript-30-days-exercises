// DAY 19 - Exercise

// LEVEL 1
function name() {
    let firstName = 'Gökhan'
    let lastName = 'Biyikoglu'

    function fullName() {
        let fullName = firstName + ' ' + lastName
        return fullName
    }

    return fullName
}
const personName = name()

console.log(personName()) // Gökhan Biyikoglu

function multiply() {
    let count = 3

    function multiplyBy() {
        count *= 2
        return count
    }
    return multiplyBy
}   

const multiplyBy = multiply()

console.log(multiplyBy()) // 6


// LEVEL 2

function outerFunction() {
    let count = 0

    function add() {
        count++
        return count
    }
    function remove() {
        count--
        return count
    }
    function divide(x) {
        count /= x
        return count
    }
    function multiply(x) {
        count *= x
        return count
    }

    return {
        add: add,
        remove: remove,
        divide: divide,
        multiply: multiply
    }
}

const innerFuncs = outerFunction()

console.log(innerFuncs.add()) // 1
console.log(innerFuncs.add()) // 2
console.log(innerFuncs.remove()) // 1
console.log(innerFuncs.multiply(10)) // 10
console.log(innerFuncs.divide(5)) // 2


// LEVEL 3

const personAccount = () => {
    let firstName = 'Gökhan'
    let lastName = 'Biyikoglu'
    let incomes = 0
    let expenses = 0

    function totalIncome() {
        return incomes
    }
    function totalExpense() {
        return expenses
    }
    function accountInfo() {
        return `My name is ${firstName} ${lastName}. My total income is ${totalIncome()} and my expenses is ${totalExpense()} and account balance is ${accountBalance()}`
    }
    function addIncome(income, description) {
        incomes += income
        let bank = income + ', ' + description
        return bank
    }
    function addExpense(expense, description) {
        expenses += expense
        let bank = expense + ', ' + description
        return bank
    }
    function accountBalance() {
        let accountBalance = totalIncome() - totalExpense()
        return accountBalance
    }

    return {
        totalIncome: totalIncome,
        totalExpense: totalExpense,
        accountInfo: accountInfo,
        accountBalance: accountBalance,
        addIncome: addIncome,
        addExpense: addExpense
    }
    }

const person = personAccount()

console.log(person.accountInfo()) // My name is Gökhan Biyikoglu. My total income is 0 and my expenses is 0 and account balance is 0

console.log(person.addIncome(1000, 'salary')) // 1000, salary
console.log(person.addIncome(250, 'bonus')) // 250, bonus
console.log(person.totalIncome()) // 1250

console.log(person.addExpense(500, 'market')) // 500, market
console.log(person.addExpense(100, 'gas')) // 100, gas
console.log(person.totalExpense()) // 600

console.log(person.accountBalance()) // 650

console.log(person.accountInfo()) //  My name is Gökhan Biyikoglu. My total income is 1250 and my expenses is 600 and account balance is 650