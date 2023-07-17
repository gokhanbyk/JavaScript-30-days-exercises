// Day 21 Exercise

// LEVEL 1 
const firstP = document.querySelector('p')
console.log(firstP)

const secondP = document.querySelector('#second')
console.log(secondP)

const thirdP = document.querySelector('#third')
console.log(thirdP)

const fourthP = document.querySelector('#fourth')
console.log(fourthP)

const allP = document.querySelectorAll('p')
console.log(allP) // NodeList(4) [p#first, p#second, p#third, p#fourth]

for (let i = 0; i - allP.length; i++) {
    console.log(allP[i])
}

fourthP.textContent = 'Fourth Paragraph'

firstP.className = 'bla'

secondP.setAttribute('class', 'bla2')

thirdP.classList.add('ahmet')

// LEVEL 2

thirdP.style.backgroundColor = 'lightblue'
fourthP.style.fontSize = '20px'


allP.forEach((p,index) => {
    if(index % 2 === 0) {
        p.style.color = 'red'
    } else {
        p.style.color = 'green'
    }
})

firstP.textContent = 'Hello World!'
firstP.setAttribute('id', 'bir')
firstP.classList.add('first')

secondP.textContent = 'World Hello!'
secondP.setAttribute('id', 'iki')
secondP.classList.add('gökhan')

thirdP.textContent = 'What is uo'
thirdP.setAttribute('id', 'uc')
thirdP.classList.add('ahmet')

fourthP.textContent = 'Naberss'
fourthP.setAttribute('id', 'dort')
fourthP.classList.add('naber')

// FOR LEVEL 3 GO TO DOM MİNİ PROJECT 1 FİLE