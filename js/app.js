const digits = document.querySelectorAll('#digit')
const operators = document.querySelectorAll('#operator')
const equals = document.querySelector('#equals')
const display = document.querySelector('#displayText')
const clearBtn = document.querySelector('#clear')

let input = ''
let result = ''
let equation = []
let lastOperator = null
let awaitingOperator = false

const formatNumber = num => {
  return num > 1000 ? parseFloat(num.toString()).toLocaleString('en') : num
}

const displaySize = () => {
  if (display.textContent.length > 13) {
    display.style.fontSize = '2.3rem'
    return
  }
  if (display.textContent.length > 8) {
    display.style.fontSize = '3rem'
    return
  }
  display.style.fontSize = '4rem'
}

const operations = {
  '/': (first, second) => +first / +second,
  '*': (first, second) => +first * +second,
  '+': (first, second) => +first + +second,
  '-': (first, second) => +first - +second,
  '%': (first, second) => +first % +second,
}

const operate = operator => {
  awaitingOperator = false
  input && equation.push(input)
  console.log('Input: ', input)
  input = ''
  console.log('Equation: ', equation, 'Last operator: ', lastOperator)
  if (equation.length >= 2) {
    result = operations[lastOperator](equation[0], equation[1])
    equation = [result]
  }
  lastOperator = operator
  console.log('Result: ', result)
  display.textContent = formatNumber(result) || formatNumber(equation[0])
  displaySize()
}

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    operate(operator.value)
  })
})

clearBtn.addEventListener('click', () => {
  input = ''
  result = ''
  equation = []
  lastOperator = null
  display.textContent = '0'
  displaySize()
})

digits.forEach(digit => {
  digit.addEventListener('click', () => {
    if (!awaitingOperator) {
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
      console.log('Input: ', input)
      display.textContent = formatNumber(input)
      displaySize()
    }
  })
})

equals.addEventListener('click', () => {
  lastOperator && operate(lastOperator)
  awaitingOperator = true
})

document.addEventListener('keydown', e => {
  const numberReg = /[\d]/g
  const operatorReg = /[*\/+\-]/g
  let key = e.key.toString()
  let number = key.match(numberReg)
  if (number) {
    input === '0' ? (input = number) : (input += number)
    display.textContent = formatNumber(input)
  }

  if (e.key.toString().match(operatorReg)) {
    operate(e.key.toString())
  }

  if (e.key === 'Backspace') {
    input = input.slice(0, input.length - 1)
    display.textContent = formatNumber(input)
  }
  if (e.key === 'Enter') {
    lastOperator && operate(lastOperator)
    awaitingOperator = true
  }
  if (e.key === '.') {
    if (input.includes('.')) {
      return
    } else if (!input.includes('.')) {
      input === '0' ? (input = '0.0') : (input += e.key)
      display.textContent = input
    }
  }
  displaySize()
})
