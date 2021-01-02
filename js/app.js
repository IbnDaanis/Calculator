const digits = document.querySelectorAll('#digit')
const operators = document.querySelectorAll('#operator')
const equals = document.querySelector('#equals')
const display = document.querySelector('#displayText')

let equation = []
let result = ''
let awaitingOperator = false
let lastOperator = null
let input = ''
const operations = {
  '/': (first, second) => +first / +second,
  '*': (first, second) => +first * +second,
  '+': (first, second) => +first + +second,
  '-': (first, second) => +first - +second,
}

const operate = operator => {
  equation.push(input)
  console.log('Equation: ', equation, 'Input: ', input)
  input = ''
  lastOperator = operator
  awaitingOperator = false
  if (equation.length >= 2) {
    result = operations[operator](equation[0], equation[1])
    equation = [result]
  }
  console.log(result)
}

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    operate(operator.value)
  })
})

digits.forEach(digit => {
  digit.addEventListener('click', () => {
    input += digit.value
  })
})

equals.addEventListener('click', () => {
  lastOperator && operate(lastOperator)
})
