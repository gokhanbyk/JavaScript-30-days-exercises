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

function destructCountriesData() {
    for(const {name, capital, population, languages} of countries_data) {
        console.log(name, capital, population, languages)
    }
}
destructCountriesData() // all countries have been printed


const student1 = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

let [name, skills, [, , jsScore, reactScore] ] = student1
console.log(name, skills, jsScore, reactScore) // David (4) ['HTML', 'CSS', 'JS', 'React'] 90 95


const students = [
    ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTML', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

function convertArrayToObject(arr) {
    return arr.map(([name, skills, scores]) => {
        return {name, skills, scores}
    })
}
console.log(convertArrayToObject(students))

const student = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
}

const newStudent = JSON.parse(JSON.stringify(student)) // for deep copy

const {skills: {frontEnd, backEnd, dataBase, dataScience}} = newStudent

frontEnd.push({skill: 'Bootstrap', level: 8})
console.log(frontEnd)

backEnd.push({skill: 'Express', level: 9})
console.log(backEnd)

dataBase.push({skill: 'SQL', level: 8})
console.log(dataBase)

dataScience.push('SQL')
console.log(dataScience)

console.log(student)
console.log(newStudent)
