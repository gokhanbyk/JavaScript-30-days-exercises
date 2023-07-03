// DAY 11 EXERCISES

// LEVEL 1

const constants = [2.72, 3.14, 9.81, 37, 100]

const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp) // 2.72 3.14 9.81 37 100

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

let [fin, est, sw, den, nor] = countries
console.log(fin, est, sw, den, nor) // Finland Estonia Sweden Denmark Norway


const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}

let {width, height, area, perimeter} = rectangle
console.log(width, height, area, perimeter) // 20 10 200 60


// LEVEL 2

const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

for(const {name, scores, skills, age} of users) {
    console.log(name, scores, skills, age)
}

function findLessThan2() {
    for(const {name, scores, skills, age} of users) {
        if(skills.length < 2) {
            console.log(`Less than two skills: ${name} : ${skills.length} skill `)
        }
    }
}
findLessThan2() // Less than two skills: John : 1 skill 


// LEVEL 3
