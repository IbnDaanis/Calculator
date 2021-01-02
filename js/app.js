const digits = document.querySelectorAll('#digit')
const operators = document.querySelectorAll('#operator')
const equals = document.querySelector('#equals')
const display = document.querySelector('#displayText')
const clearBtn = document.querySelector('#clear')

let equation = []
let result = ''
let lastOperator = null
let input = ''

const formatNumber = num => {
  return num > 1000
    ? num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    : num
}

const operations = {
  '/': (first, second) => +first / +second,
  '*': (first, second) => +first * +second,
  '+': (first, second) => +first + +second,
  '-': (first, second) => +first - +second,
}

const operate = operator => {
  input && equation.push(input)
  input = ''
  console.log('Equation: ', equation, 'Last operator: ', lastOperator)
  if (equation.length >= 2) {
    result = operations[lastOperator](equation[0], equation[1])
    equation = [result]
  }
  lastOperator = operator
  console.log(result)
  console.log('Input: ', input)
  display.textContent = formatNumber(result) || '0'
}

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    operate(operator.value)
  })
})

clearBtn.addEventListener('click', () => {
  equation = []
  result = ''
  lastOperator = null
  input = ''
  display.textContent = '0'
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
