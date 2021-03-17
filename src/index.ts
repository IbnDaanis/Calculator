import './styles/style.scss'

class Calculator {
  private display: string = '0'
  private current: number | string
  private previous: number | string
  private operation: string
  private awaitingOperator: boolean = true

  public reset = (): void => {
    this.display = '0'
    this.current = null
    this.previous = null
    this.operation = null
    this.awaitingOperator = true
  }

  public getDisplay = (): string => this.display

  public setDisplay(input: string): void {
    this.display = input
  }

  public getCurrent = (): number | string => this.current

  public setCurrent(input: number | string) {
    this.current = input
  }

  public getPrevious = (): number | string => this.previous

  public setPrevious = () => {
    this.previous = this.current
  }

  public setOperation = (input: string): void => {
    this.operation = input
  }

  public getOperation = (): string => this.operation

  public getAwaitingOperator = (): boolean => this.awaitingOperator

  public setAwaitingOperator = (option: boolean): void => {
    this.awaitingOperator = option
  }

  public divide = () => {
    this.current = +this.previous / +this.current
    this.previous = null
  }

  public multiply = () => {
    this.current = +this.previous * +this.current
    this.previous = null
  }

  public add = () => {
    this.current = +this.previous + +this.current
    this.previous = null
  }

  public subtract = () => {
    this.current = +this.previous - +this.current
    this.previous = null
  }
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

  const updateDisplay = (): void => {
    displayEl.textContent = calculator.getCurrent() ? calculator.getCurrent().toString() : '0'
  }

  const formatDisplay = (input: string): string => {
    let value: string

    if (calculator.getAwaitingOperator()) {
      value =
        calculator.getDisplay() === '0'
          ? input === '.'
            ? '0.'
            : input
          : calculator.getDisplay() + input
    } else {
      value = calculator.getCurrent() ? calculator.getCurrent() + input : input
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
  }

  const numberInput = (input: string): void => {
    if (input === '.' && calculator.getDisplay().includes('.')) return
    if (calculator.getAwaitingOperator()) {
      calculator.setCurrent(formatDisplay(input))
      calculator.setDisplay(formatDisplay(input))
    } else {
      console.log(calculator.getCurrent())
      calculator.setCurrent(formatDisplay(input))
      calculator.setDisplay(calculator.getCurrent().toString())
      calculator.setAwaitingOperator(true)
    }
    updateDisplay()
  }

  const operatorInput = (input: string): void => {
    calculator.getAwaitingOperator() && calculate()
    updateDisplay()
    calculator.setOperation(input)
    calculator.setPrevious()
    calculator.setCurrent(null)
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
    calculator.setCurrent(
      calculator.getCurrent() > 0
        ? -Math.abs(+calculator.getCurrent())
        : Math.abs(+calculator.getCurrent())
    )
    calculator.setDisplay(calculator.getCurrent().toString())
    updateDisplay()
  })
})()
