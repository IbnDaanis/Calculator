import './styles/style.scss'

class Calculator {
  private displayNumber: string = '0'
  private currentNumber: number | string
  private previousNumber: number | string
  private operation: string
  private awaitingOperator: boolean = true

  public reset = (): void => {
    this.displayNumber = '0'
    this.currentNumber = null
    this.previousNumber = null
    this.operation = null
    this.awaitingOperator = true
  }

  public getDisplayNumber = (): string => this.displayNumber

  public setDisplayNumber = (input: string) => (this.displayNumber = input)

  public getCurrentNumber = (): number | string => this.currentNumber

  public setCurrentNumber = (input: number | string) => (this.currentNumber = input)

  public getPrevious = (): number | string => this.previousNumber

  public setPrevious = () => (this.previousNumber = this.currentNumber)

  public resetPrevious = (): void => (this.previousNumber = null)

  public setOperation = (input: string) => (this.operation = input)

  public getOperation = (): string => this.operation

  public getAwaitingOperator = (): boolean => this.awaitingOperator

  public setAwaitingOperator = (option: boolean) => (this.awaitingOperator = option)

  public divide = () => (this.currentNumber = +this.previousNumber / +this.currentNumber)

  public multiply = () => (this.currentNumber = +this.previousNumber * +this.currentNumber)

  public add = () => (this.currentNumber = +this.previousNumber + +this.currentNumber)

  public subtract = () => (this.currentNumber = +this.previousNumber - +this.currentNumber)
}

const DOM_EVENTS = (() => {
  const digits: NodeListOf<HTMLButtonElement> = document.querySelectorAll('[data-digit]')
  const operators: NodeListOf<HTMLButtonElement> = document.querySelectorAll('[data-operator]')
  const equals: HTMLButtonElement = document.querySelector('[data-equals]')
  const clearBtn: HTMLButtonElement = document.querySelector('[data-clear]')
  const negOrPos: HTMLButtonElement = document.querySelector('[data-negOrPos]')
  const percent: HTMLButtonElement = document.querySelector('[data-percent]')
  const displayEl: HTMLHeadingElement = document.querySelector('#displayText')

  const calculator = new Calculator()

  const displaySize = () => {
    if (displayEl.textContent.length > 12) {
      displayEl.style.fontSize = '2.2rem'
      return
    }
    if (displayEl.textContent.length > 8) {
      displayEl.style.fontSize = '3rem'
      return
    }
    displayEl.style.fontSize = '4rem'
  }

  const updateDisplay = (): void => {
    displayEl.textContent = calculator.getCurrentNumber()
      ? calculator.getCurrentNumber().toString()
      : '0'
    displaySize()
  }

  const formatDisplay = (input: string): string => {
    let value: string

    if (calculator.getAwaitingOperator()) {
      value =
        calculator.getDisplayNumber() === '0'
          ? input === '.'
            ? '0.'
            : input
          : calculator.getDisplayNumber() + input
    } else {
      value = calculator.getCurrentNumber() ? calculator.getCurrentNumber() + input : input
    }
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
    calculator.resetPrevious()
  }

  const numberInput = (input: string): void => {
    if (input === '.' && calculator.getDisplayNumber().includes('.')) return
    if (calculator.getAwaitingOperator()) {
      calculator.setCurrentNumber(formatDisplay(input))
      calculator.setDisplayNumber(formatDisplay(input))
    } else {
      console.log(calculator.getCurrentNumber())
      calculator.setCurrentNumber(formatDisplay(input))
      calculator.setDisplayNumber(calculator.getCurrentNumber().toString())
      calculator.setAwaitingOperator(true)
    }
    updateDisplay()
  }

  const operatorInput = (input: string): void => {
    calculator.getAwaitingOperator() && calculate()
    updateDisplay()
    calculator.setOperation(input)
    calculator.setPrevious()
    calculator.setCurrentNumber(null)
    calculator.setAwaitingOperator(false)
  }

  digits.forEach(digit => {
    digit.addEventListener('click', () => {
      numberInput(digit.value)
    })
  })

  operators.forEach(operator => {
    operator.addEventListener('click', (): void => {
      operatorInput(operator.value)
    })
  })

  equals.addEventListener('click', (): void => {
    calculate()
    updateDisplay()
  })

  clearBtn.addEventListener('click', (): void => {
    calculator.reset()
    updateDisplay()
  })

  negOrPos.addEventListener('click', (): void => {
    calculator.setCurrentNumber(
      calculator.getCurrentNumber() > 0
        ? -Math.abs(+calculator.getCurrentNumber())
        : Math.abs(+calculator.getCurrentNumber())
    )
    calculator.setDisplayNumber(calculator.getCurrentNumber().toString())
    updateDisplay()
  })

  percent.addEventListener('click', (): void => {
    calculator.setCurrentNumber(+calculator.getCurrentNumber() / 100)
    calculator.setDisplayNumber(calculator.getCurrentNumber().toString())
    updateDisplay()
  })
})()
