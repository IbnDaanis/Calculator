class Calculator {
  private display: string = '0'
  private current: number | string
  private previous: number | string
  private operation: string

  public reset(): void {
    this.display = '0'
    this.current = null
    this.previous = null
    this.operation = null
  }

  public getDisplay(): string {
    return this.display
  }

  public setDisplay(input: string): void {
    console.log('setDisplay', input)
    this.display = input
  }

  public getCurrent(): number | string {
    return this.current
  }

  public setCurrent(input: number | string) {
    this.current = input
  }

  public getPrevious(): number | string {
    return this.previous
  }

  public setPrevious() {
    this.previous = this.current
  }

  public setOperation(input: string) {
    this.operation = input
  }

  public getOperation(): string {
    return this.operation
  }

  public divide() {
    this.current = +this.previous / +this.current
    this.previous = null
  }

  public multiply() {
    this.current = +this.previous * +this.current
    this.previous = null
  }

  public add() {
    this.current = +this.previous + +this.current
    this.previous = null
    console.log('Add: ', this.current)
  }

  public subtract() {
    this.current = +this.previous - +this.current
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
  const displayEl = document.querySelector('#displayText')

  let awaitingOperator = true

  const updateDisplay = (): void => {
    displayEl.textContent = calculator.getCurrent() ? calculator.getCurrent().toString() : '0'
  }

  const formatDisplay = (input: string): string => {
    let value: string
    if (awaitingOperator) {
      value =
        calculator.getDisplay() === '0'
          ? input === '.'
            ? '0.'
            : input
          : calculator.getDisplay() + input
    } else {
      value = calculator.getCurrent() ? calculator.getCurrent() + input : input
    }
    console.log('formatDisplay: ', value)
    return value.toString()
  }

  const calculate = (): void => {
    switch (calculator.getOperation()) {
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

  digits.forEach(digit => {
    digit.addEventListener('click', () => {
      console.log('Numbers', calculator.getCurrent(), calculator.getPrevious())
      if (digit.value === '.' && calculator.getDisplay().includes('.')) return
      if (awaitingOperator) {
        calculator.setCurrent(formatDisplay(digit.value))
        calculator.setDisplay(formatDisplay(digit.value))
      } else {
        console.log(calculator.getCurrent())
        calculator.setCurrent(formatDisplay(digit.value))
        calculator.setDisplay(calculator.getCurrent().toString())
        awaitingOperator = true
      }
      updateDisplay()
    })
  })

  operators.forEach(operator => {
    operator.addEventListener('click', (): void => {
      awaitingOperator && calculate()
      updateDisplay()
      calculator.setOperation(operator.value)
      calculator.setPrevious()
      calculator.setCurrent(null)
      awaitingOperator = false
    })
  })

  equals.addEventListener('click', (): void => {
    calculate()
    updateDisplay()
    console.log('Equals', calculator.getCurrent(), calculator.getPrevious())
  })

  clearBtn.addEventListener('click', (): void => {
    calculator.reset()
    updateDisplay()
  })
})()
