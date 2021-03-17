class Calculator {
  current: string = '0'
  previous: string
  operation: string

  public reset(): void {
    this.current = '0'
    this.previous = null
    this.operation = null
  }

  public setCurrent(input: string | number) {}

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

  const updateDisplay = (): void => {}

  const calculate = (): void => {
    console.log(calculator.current, calculator.previous)
    switch (calculator.operation) {
      case '/':
        calculator.divide()
        break
      case '*':
        calculator.multiply()
        break
      case '+':
        calculator.add()
        break
      case '-':
        calculator.subtract()
        break
      default:
        return
    }
  }

  updateDisplay()

  digits.forEach(digit => {
    digit.addEventListener('click', () => {})
  })

  operators.forEach(operator => {
    operator.addEventListener('click', (): void => {
      calculator.setOperation(operator.value)
    })
  })

  equals.addEventListener('click', (): void => {
    calculate()
  })

  clearBtn.addEventListener('click', (): void => {
    calculator.reset()
  })
})()
