class Calculator {
  current: number
  previous: number

  public reset(): void {
    this.current = null
    this.previous = null
  }

  public setCurrent(input: number) {
    this.previous = this.current
    this.current = input
    console.log(this.current, this.previous)
    return this
  }

  public add() {
    this.current = this.current + this.previous
    this.previous = null
    return this
  }
}

const calculator = new Calculator()

const DOM_EVENTS = (() => {
  const digits = document.querySelectorAll('[data-digit]')
  const operators = document.querySelectorAll('[data-operator]')
  const equals = document.querySelector('[data-equals]')
  const clearBtn = document.querySelector('[data-clear]')
  const negOrPos = document.querySelector('[data-negOrPos]')
  const percent = document.querySelector('[data-percent]')
  const display = document.querySelector('#displayText')

  const updateDisplay = () => {
    display.textContent = calculator.current.toString()
  }

  digits.forEach(digit => {
    digit.addEventListener('click', (e: Event) => {
      display.textContent = digit.textContent

      console.log()
    })
  })

  operators.forEach(operator => {
    operator.addEventListener('click', (e: Event) => {
      console.log(e.target)

      calculator.setCurrent(+display.textContent)
    })
  })

  equals.addEventListener('click', (e: Event) => {
    calculator.setCurrent(+display.textContent)
    calculator.add()
    updateDisplay()
  })
})()
