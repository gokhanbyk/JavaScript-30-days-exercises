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
