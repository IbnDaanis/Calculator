const digits = document.querySelectorAll('[data-digit]')
const operators = document.querySelectorAll('[data-operator]')
const equals = document.querySelector('[data-equals]')
const clearBtn = document.querySelector('[data-clear]')
const negOrPos = document.querySelector('[data-negOrPos]')
const percent = document.querySelector('[data-percent]')
const display = document.querySelector('#displayText')

let input = ''
let result = ''
let equation = []
let lastOperator = null
let awaitingOperator = false

const disableEnterKey = event => {
  if (event.keyCode === 13) {
    event.preventDefault()
    return
  }
}

const formatNumber = num => {
  const stringNumber = num.toString()
  const integerDigits = parseFloat(stringNumber.split('.')[0])
  const decimalDigits = stringNumber.split('.')[1]
  let integerDisplay
  isNaN(integerDigits)
    ? (integerDisplay = '')
    : (integerDisplay = integerDigits.toLocaleString('en', {
        maximumFractionDigits: 0,
      }))
  return decimalDigits != null
    ? `${integerDisplay}.${decimalDigits}`
    : `${integerDisplay}`
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
  '/': (first, second) => {
    if (second.toString() === '0') {
      return
    } else {
      return +first / +second
    }
  },
  '*': (first, second) => +first * +second,
  '+': (first, second) => +first + +second,
  '-': (first, second) => +first - +second,
}

const operate = operator => {
  if (input || equation) {
    input && equation.push(input)
    console.log('Input: ', input)
    input = ''
    console.log('Equation: ', equation, 'Last operator: ', lastOperator)
    if (equation.length >= 2 && equation[1]) {
      result = operations[lastOperator](equation[0], equation[1])
      equation = [result]
      display.textContent = formatNumber(result)
    }
    lastOperator = operator
    console.log('Result: ', result)
    display.textContent = formatNumber(equation[0])
    awaitingOperator = false
    console.log(
      'Result: ',
      result,
      'Equation: ',
      equation,
      'Last operator',
      lastOperator
    )
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

clearBtn.addEventListener('keydown', e => {
  disableEnterKey(e)
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

negOrPos.addEventListener('keydown', e => {
  disableEnterKey(e)
})

percent.addEventListener('click', () => {
  if (!awaitingOperator) {
    input = input / 100
    display.textContent = input
    console.log(input, display.textContent)
  }
})

percent.addEventListener('keydown', e => {
  disableEnterKey(e)
})

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    console.log('Operator button: ', operator.value)
    awaitingOperator = false
    input && operate(operator.value)
    if (result && result === equation[0]) {
      lastOperator = operator.value
    }
  })
  operator.addEventListener('keydown', e => {
    disableEnterKey(e)
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
        } else if (!input.includes('.')) {
          display.textContent === '0' ? (input = '0.') : (input += digit.value)
        }
      } else {
        input === '0' ? (input = digit.value) : (input += digit.value)
      }
      // console.log('Input: ', input)
      display.textContent = formatNumber(input)
    }
  })
  digit.addEventListener('keydown', e => {
    disableEnterKey(e)
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
    console.log('Number: ', number)
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
    if (result && result === equation[0]) {
      lastOperator = e.key.toString()
    }
  }
  if (e.key === '%') {
    if (!awaitingOperator) {
      input = input / 100
      display.textContent = input
      console.log(input, display.textContent)
    }
  }
  if (e.key === 'Backspace') {
    input = input.length === 1 ? '0' : input.toString().slice(0, -1)
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
      display.textContent === '0' ? (input = '0.') : (input += '.')
      display.textContent = formatNumber(input)
    }
  }
})

// When Display changes, fire display font size function
const config = { attributes: true, childList: true, subtree: true }
const callback = function (mutationsList) {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      displaySize()
    } else if (mutation.type === 'attributes') {
      displaySize()
    }
  }
}
const observer = new MutationObserver(callback)
observer.observe(display, config)
