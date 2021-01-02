const digits = document.querySelectorAll('#digit')
const operators = document.querySelectorAll('#operator')
const display = document.querySelector('#displayText')

let current = '0'
let equation = []
let awaitingOperator = true

const calculate = () => {
  let result = 0
}

const multiply = () => {
  console.log('Multiply')
}

const divide = () => {
  console.log('Divide')
}

const add = () => {
  console.log('Add')
  equation.push(current, '+')
  current = '0'
  display.textContent = current
  console.log(equation)
}

const subtract = () => {
  console.log('Subtract')
}

const equals = () => {
  console.log('Equals')
}

digits.forEach(digit => {
  digit.addEventListener('click', () => {
    if (current === '0') {
      current = digit.value
    } else {
      current += digit.value
    }
    display.textContent = current
  })
})

operators.forEach(operator => {
  if (operator.value === '*') {
    operator.addEventListener('click', () => {
      multiply()
    })
  } else if (operator.value === '/') {
    operator.addEventListener('click', () => {
      divide()
    })
  } else if (operator.value === '+') {
    operator.addEventListener('click', () => {
      add()
    })
  } else if (operator.value === '-') {
    operator.addEventListener('click', () => {
      subtract()
    })
  } else if (operator.value === '=') {
    operator.addEventListener('click', () => {
      equals()
    })
  }
})
