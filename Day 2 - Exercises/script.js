// LEVEL 1
let challange = '30 Days Of JavaScript'
console.log(challange)  // 30 Days Of JavaScript

console.log(challange.length) // 21

console.log(challange.toUpperCase()) // 30 DAYS OF JAVASCRIPT
console.log(challange.toLowerCase()) // 30 days of javascript

console.log(challange.substr(0, 2)) // 30
console.log(challange.substring(0, 2)) // 30

console.log(challange.slice(3)) //  Days Of JavaScript

console.log(challange.includes('Script')) //    true

console.log(challange.split()) //   ['30 Days Of JavaScript']
console.log(challange.split(' ')) //    (4) ['30', 'Days', 'Of', 'JavaScript']

let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(string.split()) // ['Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon']

console.log(challange.replace('JavaScript', 'Python')) //   30 Days Of Python

console.log(challange.charAt(15))   // S

console.log(challange.charCodeAt('J')) // 51

console.log(challange.indexOf('a')) // 4

console.log(challange.lastIndexOf('a')) //  14

let sentence = 'You cannot end a sentence with because because because is a conjunction'

console.log(sentence.indexOf('because')) // 31

console.log(sentence.lastIndexOf('because')) // 47

console.log(sentence.search('because')) //  31

challange = '   30 Days Of JavaScript   '
console.log(challange.trim()) //  30 Days Of JavaScript

console.log(challange.startsWith(' ')) // true because of I changed the challenge's value

console.log(challange.endsWith(' ')) // true

challange = '30 Days Of JavaScript'
console.log(challange.startsWith('30')) // true
console.log(challange.endsWith('Script')) // true

console.log(challange.match('a')) // ['a', index: 4, input: '30 Days Of JavaScript', groups: undefined]

string = ''
console.log(string.concat('30 Days Of', ' JavaScript')) // 30 Days Of JavaScript

console.log(challange.repeat(2)) // 30 Days Of JavaScript30 Days Of JavaScript


// LEVEL 2

let quote = 'The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another'

console.log(quote)

quote = '\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"'
console.log(quote)

console.log(typeof '10') //string
console.log(typeof 10) // number
let num = '10'
num = parseInt(num)
console.log(typeof num) // number

console.log(parseFloat('9.8') == 10) // false
let num1 = parseFloat('9.8')
num1 = Math.round(num1)
console.log(num1 == 10) // true

let word = 'python'
let word1 = 'jargon'
console.log(word.includes('on') == word1.includes('on')) // true

sentence = 'I hope this couse is not full of jargon'
console.log(sentence.includes('jargon')) // true

let randomNum = Math.floor(Math.random() * 100)
console.log(randomNum)

let randomNum1 = Math.floor(Math.random() * (50) + 50)
console.log(randomNum1)

let randomNum2 = Math.floor(Math.random() * 255)
console.log(randomNum2)

string = 'JavaScript'
let randomNumber = Math.floor(Math.random() * string.length)
let randomCharacter = string.charAt(randomNumber)
console.log(randomCharacter)

console.log('1\t1\t1\t1\t1 \n2\t1\t2\t4\t8 \n3\t1\t3\t9\t27 \n4\t1\t4\t16\t64 \n5\t1\t5\t25\t125')

sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because')) // 31
console.log(sentence.lastIndexOf('because')) // 47
console.log(sentence.substr(31, 23))
let sentence1 = sentence.substr(0,31)
let sentence2 = sentence.substr(55)
sentence = sentence1 + sentence2
console.log(sentence)

// LEVEL 3

sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
console.log(sentence.match(/love/gi))

sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.match(/because/gi))

sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

console.log(sentence.replace('%', ''))

let cleanedTxt = sentence.replace(/[^\w\s]/g, '')
console.log(cleanedTxt)

let words = cleanedTxt.split(' ')
console.log(words)

let wordFrequency = {}
words.forEach(word => {
  word = word.toLowerCase()
  wordFrequency[word] = (wordFrequency[word] || 0) + 1
})

let mostFrequentWord = '';
let maxFrequency = 0;
for (let word in wordFrequency) {
  if (wordFrequency[word] > maxFrequency) {
    mostFrequentWord = word;
    maxFrequency = wordFrequency[word];
  }
}

console.log("Most frequent word:", mostFrequentWord);

// 4. example
let a = 5000
let b = 10000
let c = 15000

let income = `He earns ${a} euro from salary per month, ${b} euro annual bonus, ${c} euro online courses per month. So he earns total of ${a + b + c} euro per month.`
console.log(income)