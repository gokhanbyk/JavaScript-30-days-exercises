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
