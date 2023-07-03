// Day 04 Exercise
// LEVEL 1
let userAge = prompt('Enter your age:')

if(userAge > 18) {
    console.log('You are old enough to drive');
} else if ( userAge < 18) {
    console.log(`You are left with ${18 - userAge} years to drive.`)
}

let myAge = prompt('Enter first age:')
let yourAge = prompt('Enter second age:')

if(myAge > yourAge) {
    console.log(`I am ${myAge - yourAge} years older than you`);
} else if (myAge < yourAge) {
    console.log(`You are ${yourAge - myAge} years older than me`);
} else {
    console.log('We are at the same age');
}


let a = 4
let b = 3
if(a > b) {
    console.log(`${a} is greater than ${b}`);
} else if (a < b) {
    console.log(`${a} is less than ${b}`);
} else {
    console.log('they are equal');
}
 
    
a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is less than ${b}`);
    

let number = Number(prompt('Enter a number even or odd'))
if (number % 2 == 0) {
    console.log(`${number} is an even number`);
} else {
    console.log(`${number} is an odd number`);
}


//  LEVEL 2
let vize = Number(prompt('Enter your vize not'))
let final = Number(prompt('Enter your final note'))
result = (final + vize) / 2

switch (true) {
    case (result > 80 && result < 100):
        console.log('Your grade is A');
        break
    case (result < 80 && result > 70):
        console.log('Your grade is B');
        break
    case (result < 70 && result > 60):
        console.log('Your grade is C');
        break
    case (result < 60 && result > 50):
        console.log('Your grade is D');
        break
    case (result < 50):
        console.log('you failed');
        break
}

// if(result > 80 && result < 100) {
//     console.log('Your grade is A');
// } else if (result < 80 && result > 70) {
//     console.log('Your grade is B');
// } else if (result < 70 && result > 60) {
//     console.log('Your grade is C');
// } else if (result < 60 && result > 50) {
//     console.log('Your grade is D');
// } else {
//     console.log('YOu failed');
// }


let autumn = ['September', 'October', 'November']
let winter = ['December', 'January', 'February']
let spring = ['March', 'April', 'May']
let summer = ['June', 'July', 'August']

let userSeason = prompt('enter a month')

if (winter.includes(userSeason)) {
    console.log('its winter');
} else if (spring.includes(userSeason)) {
    console.log('its spring');
} else if (summer.includes(userSeason)) {
    console.log('its summer');
} else if (autumn.includes(userSeason)) {
    console.log('its autumn');
} else {
    console.log('you entered wrong value');
}

let workdays = ['monday', 'tuesday', 'wednesday', 'thurday', 'friday']
let weekdays = ['saturday', 'sunday']
let userDay = prompt('What is the day today?')
userDayValue = userDay.toLowerCase()

if (workdays.includes(userDayValue)) {
    console.log(`${userDayValue} is a working day`);
} else if (weekdays.includes(userDayValue)) {
    console.log(`${userDayValue} is a weekend`);
}

// LEVEL 3
let days = prompt('Enter a month to know how many days in it')
day = days.toLowerCase()

switch(day) {
    case 'january':
        console.log('January has 31 days');
        break
    case 'february':
        console.log('February has 28 days');
        break
    case 'march':
        console.log('March has 31 days');
        break
    case 'april':
        console.log('April has 30 days');
        break
    case 'may':
        console.log('May has 31 days');
        break
    case 'june':
        console.log('June has 30 days');
        break
    case 'july':
        console.log('July has 31 days');
        break
    case 'august':
        console.log('August has 31 days');
        break
    case 'september':
        console.log('September has 30 days');
        break
    case 'october':
        console.log('October has 31 days');
        break
    case 'november':
        console.log('November has 30 days');
        break
    case 'december':
        console.log('December has 31 days');
        break
}

