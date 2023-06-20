// LEVEL 1
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

for (let i = 0; i <= 10; i++) {
    console.log(i);
}
console.log('***********');

let i = 0
do {
    console.log(i);
    i++
} while (i <= 10)
console.log('***********');

i = 0
while (i <= 10) {
    console.log(i);
    i++
}
console.log('***********');

for (let i = 10; i >= 0; i--) {
    console.log(i);
}
console.log('***********');

i = 10
do {
    console.log(i);
    i--
} while (i >= 0)
console.log('***********');

i = 10
while (i >= 0) {
    console.log(i);
    i--
}
console.log('***********');

let n = 10
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
console.log('***********');

for (let i = 1; i <= 7; i++) {
    console.log('#'.repeat(i));
}
console.log('***********');

for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}
console.log('***********');

i = 0
while (i <= 10) {
    console.log(`${i} ${Math.pow(i, 2)} ${Math.pow(i, 3)}`);
    i++
}

console.log('***********');

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

console.log('***********');

for (let i = 0; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

console.log('***********');

for (let x = 2; x <= 100; x++) {
    let isPrime = true
    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
            isPrime = false
            break
        }
    }
    if (isPrime) {
        console.log(x);
    }
}

console.log('***********');

let sum = 0
for (let i = 0; i <= 100; i++) {
    sum += i
}
console.log(`the sum of all numbers from 0 to 100 is ${sum}`);

console.log('***********');

sumEven = 0
sumOdd = 0
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        sumEven += i
    } else {
        sumOdd += i
    }
}
console.log(`The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdd}`);

console.log('***********');

let sumArray = []
// for (let i = 0; i <= 100; i++) {
//     if(i % 2 == 0) {
//         sumEven += i
//     } else {
//         sumOdd += i
//     }
// }
sumArray.push(sumEven, sumOdd)
console.log(sumArray);

console.log('***********');


let randomNum = []
for (let i = 0; i <= 5; i++) {
    let random = Math.round(Math.random() * 100)
    randomNum.push(random)
}
console.log(randomNum);

console.log('***********');

let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let id = ''

for (let i = 0; i < 6; i++) {
    var randomIndex = Math.round(Math.random() * characters.length)
    id += characters.charAt(randomIndex)
}
console.log(id);
console.log('***********');

// LEVEL 2
