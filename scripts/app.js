const digits = document.querySelectorAll('#digit')
const operators = document.querySelectorAll('#operator')
const equals = document.querySelector('#equals')
const display = document.querySelector('#displayText')
const clearBtn = document.querySelector('#clear')
const negOrPos = document.querySelector('#negOrPos')

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
  if (input || equation) {
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

    display.textContent = result
      ? formatNumber(result)
      : formatNumber(equation[0])
    console.log('Result: ', result)
  }
}

clearBtn.addEventListener('click', () => {
  input = ''
  result = ''
  equation = []
  lastOperator = null
  awaitingOperator = false
  display.textContent = '0'
  console.log('-----------Clear-------------')
})

negOrPos.addEventListener('click', () => {
  if (!awaitingOperator) {
    if (+input > 0) {
      input = `-${input}`
    } else {
      input = input.slice(1, input.length)
    }
    display.textContent = input
    console.log(input, display.textContent)
  }
})

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    awaitingOperator = false
    input && operate(operator.value)
  })
})

digits.forEach(digit => {
  digit.addEventListener('click', () => {
    if (awaitingOperator) {
      equation = []
      result = ''
      awaitingOperator = false
    }
    if (!awaitingOperator) {
      if (digit.value === '.') {
        if (input.includes('.')) {
          return
        } else if (!input.includes('.') && input.length > 0) {
          input === '0' ? (input = digit.value) : (input += digit.value)
        }
      } else {
        input === '0' ? (input = digit.value) : (input += digit.value)
      }
      // console.log('Input: ', input)
      display.textContent = formatNumber(input)
    }
  })
})

equals.addEventListener('click', () => {
  // console.log('-----------Equals-------------')
  // console.log('Input: ', input)
  // console.log('Result: ', result)
  // console.log('Equation: ', equation)
  // console.log('Last Operator: ', lastOperator)
  // console.log('Awaiting Operator: ', awaitingOperator)
  // console.log('Display: ', display.textContent)
  lastOperator && operate(lastOperator)
  awaitingOperator = true
})

document.addEventListener('keydown', e => {
  const numberReg = /[\d]/g
  const operatorReg = /[*\/+\-]/g
  let key = e.key.toString()
  let number = key.match(numberReg)
  if (number) {
    // console.log('Number: ', number)
    if (awaitingOperator) {
      equation = []
      result = ''
      awaitingOperator = false
    }
    if (!awaitingOperator) {
      input === '0' ? (input = number) : (input += number)
      display.textContent = formatNumber(input)
    }
  }

  if (e.key.toString().match(operatorReg)) {
    awaitingOperator = false
    console.log(e.key.toString())
    input && operate(e.key.toString())
  }
  if (e.key === 'Backspace') {
    input = input.slice(0, input.length - 1)
    display.textContent = formatNumber(input)
  }
  clearBtn.disabled = true
  if (e.key === 'Enter') {
    // console.log('-----------Enter-------------')
    // console.log('Input: ', input)
    // console.log('Result: ', result)
    // console.log('Equation: ', equation)
    // console.log('Last Operator: ', lastOperator)
    // console.log('Awaiting Operator: ', awaitingOperator)
    // console.log('Display: ', display.textContent)

    lastOperator && operate(lastOperator)
    awaitingOperator = true
  }
  clearBtn.disabled = false
  if (e.key === '.') {
    if (input.includes('.')) {
      return
    } else if (!input.includes('.')) {
      input === '0' ? (input = '0.0') : (input += e.key)
      display.textContent = input
    }
  }
})

// When Display changes, fire display font size function
const config = { attributes: true, childList: true, subtree: true }
// Callback function to execute when mutations are observed
const callback = function (mutationsList) {
  // Use traditional 'for loops' for IE 11
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      // console.log('A child node has been added or removed.')
      displaySize()
    } else if (mutation.type === 'attributes') {
      // console.log('The ' + mutation.attributeName + ' attribute was modified.')
      displaySize()
    }
  }
}
// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback)
// Start observing the target node for configured mutations
observer.observe(display, config)
