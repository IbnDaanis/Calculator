const digits = document.querySelectorAll('#digit')
const operators = document.querySelectorAll('#operator')
const equals = document.querySelector('#equals')
const display = document.querySelector('#displayText')

let equation = []
let result = ''
let awaitingOperator = false
let lastOperator = null
let input = ''

const formatNumber = num => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const operations = {
  '/': (first, second) => +first / +second,
  '*': (first, second) => +first * +second,
  '+': (first, second) => +first + +second,
  '-': (first, second) => +first - +second,
}

const operate = operator => {
  input && equation.push(input)
  input = '0'
  lastOperator = operator
  awaitingOperator = false
  console.log('Equation: ', equation)
  if (equation.length >= 2) {
    result = operations[operator](equation[0], equation[1])
    equation = [result]
  }
  console.log(result)
  console.log('Input: ', input)
  display.textContent = formatNumber(result) || input
}

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    operate(operator.value)
  })
})

digits.forEach(digit => {
  digit.addEventListener('click', () => {
    if (digit.value === '.') {
      if (input.includes('.')) {
        return
      } else if (
        digit.value === '.' &&
        !input.includes('.') &&
        input.length > 0
      ) {
        input === '0' ? (input = digit.value) : (input += digit.value)
      }
    } else {
      input === '0' ? (input = digit.value) : (input += digit.value)
    }
    console.log(input)
    display.textContent = formatNumber(input)
    console.log(formatNumber(input))
  })
})

equals.addEventListener('click', () => {
  lastOperator && operate(lastOperator)
})
