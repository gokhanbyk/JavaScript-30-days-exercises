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
