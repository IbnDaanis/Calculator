class Calculator {
  current: string = '0'
  previous: string
  operation: string

  public reset(): void {
    this.current = '0'
    this.previous = null
    this.operation = null
  }

  public setInput(input: string | number) {
    const value =
      this.current === '0' ? input.toString() : this.current.toString() + input.toString()
    this.setCurrent(value)
  }

  public setCurrent(input: string | number) {
    console.log('Input: ', input)
    this.current = input.toString()
  }

  public setPrevious(input: string | number) {
    this.previous = input.toString()
  }

  public setOperation(input: string) {
    this.operation = input
  }

  public divide() {
    this.current = (+this.previous / +this.current).toString()
    this.previous = null
  }

  public multiply() {
    this.current = (+this.previous * +this.current).toString()
    this.previous = null
  }

  public add() {
    this.current = (+this.previous + +this.current).toString()
    this.previous = null
  }

  public subtract() {
    this.current = (+this.previous - +this.current).toString()
    this.previous = null
  }
}

const calculator = new Calculator()

const DOM_EVENTS = (() => {
  const digits: NodeListOf<HTMLButtonElement> = document.querySelectorAll('[data-digit]')
  const operators: NodeListOf<HTMLButtonElement> = document.querySelectorAll('[data-operator]')
  const equals = document.querySelector('[data-equals]')
  const clearBtn = document.querySelector('[data-clear]')
  const negOrPos = document.querySelector('[data-negOrPos]')
  const percent = document.querySelector('[data-percent]')
  const display = document.querySelector('#displayText')

  const updateDisplay = (): void => {
    display.textContent = calculator.current.toString()
  }

  const calculate = (): void => {
    console.log('Calculate', calculator.current, calculator.previous)
    // switch (calculator.operation) {
    //   case '/':
    //     calculator.divide()
    //     break
    //   case '*':
    //     calculator.multiply()
    //     break
    //   case '+':
    //     calculator.add()
    //     break
    //   case '-':
    //     calculator.subtract()
    //     break
    //   default:
    //     return
    // }
  }

  updateDisplay()

  digits.forEach(digit => {
    digit.addEventListener('click', (e: Event) => {
      calculator.setInput(digit.value)
      updateDisplay()
    })
  })

  operators.forEach(operator => {
    operator.addEventListener('click', (e: Event): void => {
      calculator.operation = operator.value
      calculator.setPrevious(display.textContent)
      calculator.setCurrent('')
      calculate()
      updateDisplay()
    })
  })

  equals.addEventListener('click', (): void => {
    calculator.setCurrent(display.textContent)
    console.log('Current', calculator.current)

    calculate()
    updateDisplay()
  })

  clearBtn.addEventListener('click', (): void => {
    calculator.reset()
    updateDisplay()
  })
})()
