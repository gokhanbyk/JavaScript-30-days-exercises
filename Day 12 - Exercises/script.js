// DAY 12 EXERCISES

// LEVEL 1
const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'

const salaryPerMonthRegex = /earns (\d+) euro from salary per month/
const annualBonusRegex = /(\d+) euro annual bonus/
const onlineCoursesPerMonthRegex = /(\d+) euro online courses per month/

const salaryPerMonthMatch = text.match(salaryPerMonthRegex)
const annualBonusMatch = text.match(annualBonusRegex)
const onlineCoursesPerMonthMatch = text.match(onlineCoursesPerMonthRegex)
// console.log(salaryPerMonthMatch)

const salaryPerMonth = parseInt(salaryPerMonthMatch[1])
const annualBonus = parseInt(annualBonusMatch[1])
const onlineCoursesPerMonth = parseInt(onlineCoursesPerMonthMatch[1])
// console.log(onlineCoursesPerMonth)


const totalAnnualIncome = (salaryPerMonth * 12) + annualBonus + (onlineCoursesPerMonth * 12)
console.log('Total Annual Income:', totalAnnualIncome, 'euro')


const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']

const numberPattern = /-?\d+/g

const numericPoints = points.join(' ').match(numberPattern).map(Number)

const sortedPoints = numericPoints.sort((a, b) => a - b)

const distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0]

console.log('Distance:', distance)


function is_valid_variable(str) {
    const pattern = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/
    console.log(pattern.test(str))
}

is_valid_variable('first_name') // True
is_valid_variable('first-name') // False
is_valid_variable('1first_name') // False
is_valid_variable('firstname') // True

// LEVEL 2 

function tenMostFrequentWords(paragraph) {
    const sanitizedParagraph = paragraph.replace(/[^\w\s]/g, '').toLowerCase()

    const words = sanitizedParagraph.split(/\s+/)
    const wordFrequencies = {}
  
    for (const word of words) {
      wordFrequencies[word] = (wordFrequencies[word] || 0) + 1
    }
  
    const wordFrequencyArray = Object.entries(wordFrequencies).map(([word, count]) => ({ word, count }))
  
    wordFrequencyArray.sort((a, b) => b.count - a.count)
  
    return wordFrequencyArray.slice(0, 10)
}
  
const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

console.log(tenMostFrequentWords(paragraph))


// LEVEL 3

function cleanText(text) {
    const cleanedText = text.replace(/[^\w\s]/g, '')
  
    const words = cleanedText.split(/\s+/)
  
    const wordFrequencies = {}
  
    for (const word of words) {
      wordFrequencies[word] = (wordFrequencies[word] || 0) + 1
    }
  
    const wordFrequencyArray = Object.entries(wordFrequencies).map(([word, count]) => ({ word, count }))
  
    wordFrequencyArray.sort((a, b) => b.count - a.count)
  
    const topThreeWords = wordFrequencyArray.slice(0, 3)
  
    return topThreeWords
}
  
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

console.log(cleanText(sentence))
