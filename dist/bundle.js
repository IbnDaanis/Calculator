/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
var Calculator = /** @class */ (function () {
    function Calculator() {
        this.display = '0';
    }
    Calculator.prototype.reset = function () {
        this.display = '0';
        this.current = null;
        this.previous = null;
        this.operation = null;
    };
    Calculator.prototype.getDisplay = function () {
        return this.display;
    };
    Calculator.prototype.setDisplay = function (input) {
        console.log('setDisplay', input);
        this.display = input;
    };
    Calculator.prototype.getCurrent = function () {
        return this.current;
    };
    Calculator.prototype.setCurrent = function (input) {
        this.current = input;
    };
    Calculator.prototype.getPrevious = function () {
        return this.previous;
    };
    Calculator.prototype.setPrevious = function () {
        this.previous = this.current;
    };
    Calculator.prototype.setOperation = function (input) {
        this.operation = input;
    };
    Calculator.prototype.getOperation = function () {
        return this.operation;
    };
    Calculator.prototype.divide = function () {
        this.current = +this.previous / +this.current;
        this.previous = null;
    };
    Calculator.prototype.multiply = function () {
        this.current = +this.previous * +this.current;
        this.previous = null;
    };
    Calculator.prototype.add = function () {
        this.current = +this.previous + +this.current;
        this.previous = null;
        console.log('Add: ', this.current);
    };
    Calculator.prototype.subtract = function () {
        this.current = +this.previous - +this.current;
        this.previous = null;
    };
    return Calculator;
}());
var calculator = new Calculator();
var DOM_EVENTS = (function () {
    var digits = document.querySelectorAll('[data-digit]');
    var operators = document.querySelectorAll('[data-operator]');
    var equals = document.querySelector('[data-equals]');
    var clearBtn = document.querySelector('[data-clear]');
    var negOrPos = document.querySelector('[data-negOrPos]');
    var percent = document.querySelector('[data-percent]');
    var displayEl = document.querySelector('#displayText');
    var awaitingOperator = true;
    var updateDisplay = function () {
        displayEl.textContent = calculator.getCurrent() ? calculator.getCurrent().toString() : '0';
    };
    var formatDisplay = function (input) {
        var value;
        if (awaitingOperator) {
            value = calculator.getDisplay() === '0' ? input : calculator.getDisplay() + input;
        }
        else {
            value = calculator.getCurrent() ? calculator.getCurrent() + input : input;
        }
        console.log('formatDisplay: ', value);
        return value.toString();
    };
    var calculate = function () {
        switch (calculator.getOperation()) {
            case '/':
                calculator.divide();
                break;
            case '*':
                calculator.multiply();
                break;
            case '+':
                calculator.add();
                break;
            case '-':
                calculator.subtract();
                break;
            default:
                return;
        }
    };
    digits.forEach(function (digit) {
        digit.addEventListener('click', function () {
            if (awaitingOperator) {
                calculator.setCurrent(+formatDisplay(digit.value));
                calculator.setDisplay(formatDisplay(digit.value));
            }
            else {
                console.log(calculator.getCurrent());
                calculator.setCurrent(+formatDisplay(digit.value));
                calculator.setDisplay(calculator.getCurrent().toString());
                awaitingOperator = true;
            }
            updateDisplay();
            console.log('Numbers', calculator.getCurrent(), calculator.getPrevious());
        });
    });
    operators.forEach(function (operator) {
        operator.addEventListener('click', function () {
            awaitingOperator && calculate();
            updateDisplay();
            calculator.setOperation(operator.value);
            calculator.setPrevious();
            calculator.setCurrent(null);
            awaitingOperator = false;
        });
    });
    equals.addEventListener('click', function () {
        calculate();
        updateDisplay();
        console.log('Equals', calculator.getCurrent(), calculator.getPrevious());
    });
    clearBtn.addEventListener('click', function () {
        calculator.reset();
        updateDisplay();
    });
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7SUFBQTtRQUNVLFlBQU8sR0FBVyxHQUFHO0lBaUUvQixDQUFDO0lBNURRLDBCQUFLLEdBQVo7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUc7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSTtRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUk7SUFDdkIsQ0FBQztJQUVNLCtCQUFVLEdBQWpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTztJQUNyQixDQUFDO0lBRU0sK0JBQVUsR0FBakIsVUFBa0IsS0FBYTtRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLO0lBQ3RCLENBQUM7SUFFTSwrQkFBVSxHQUFqQjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU87SUFDckIsQ0FBQztJQUVNLCtCQUFVLEdBQWpCLFVBQWtCLEtBQWE7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLO0lBQ3RCLENBQUM7SUFFTSxnQ0FBVyxHQUFsQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVE7SUFDdEIsQ0FBQztJQUVNLGdDQUFXLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTztJQUM5QixDQUFDO0lBRU0saUNBQVksR0FBbkIsVUFBb0IsS0FBYTtRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUs7SUFDeEIsQ0FBQztJQUVNLGlDQUFZLEdBQW5CO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUztJQUN2QixDQUFDO0lBRU0sMkJBQU0sR0FBYjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFD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LEVBQUU7UUFDWCxhQUFhLEVBQUU7UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsVUFBVSxFQUFFLEVBQUUsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzFFLENBQUMsQ0FBQztJQUVGLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7UUFDakMsVUFBVSxDQUFDLEtBQUssRUFBRTtRQUNsQixhQUFhLEVBQUU7SUFDakIsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLEVBQUUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ2FsY3VsYXRvciB7XG4gIHByaXZhdGUgZGlzcGxheTogc3RyaW5nID0gJzAnXG4gIHByaXZhdGUgY3VycmVudDogbnVtYmVyXG4gIHByaXZhdGUgcHJldmlvdXM6IG51bWJlclxuICBwcml2YXRlIG9wZXJhdGlvbjogc3RyaW5nXG5cbiAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuZGlzcGxheSA9ICcwJ1xuICAgIHRoaXMuY3VycmVudCA9IG51bGxcbiAgICB0aGlzLnByZXZpb3VzID0gbnVsbFxuICAgIHRoaXMub3BlcmF0aW9uID0gbnVsbFxuICB9XG5cbiAgcHVibGljIGdldERpc3BsYXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5XG4gIH1cblxuICBwdWJsaWMgc2V0RGlzcGxheShpbnB1dDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ3NldERpc3BsYXknLCBpbnB1dClcbiAgICB0aGlzLmRpc3BsYXkgPSBpbnB1dFxuICB9XG5cbiAgcHVibGljIGdldEN1cnJlbnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50XG4gIH1cblxuICBwdWJsaWMgc2V0Q3VycmVudChpbnB1dDogbnVtYmVyKSB7XG4gICAgdGhpcy5jdXJyZW50ID0gaW5wdXRcbiAgfVxuXG4gIHB1YmxpYyBnZXRQcmV2aW91cygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnByZXZpb3VzXG4gIH1cblxuICBwdWJsaWMgc2V0UHJldmlvdXMoKSB7XG4gICAgdGhpcy5wcmV2aW91cyA9IHRoaXMuY3VycmVudFxuICB9XG5cbiAgcHVibGljIHNldE9wZXJhdGlvbihpbnB1dDogc3RyaW5nKSB7XG4gICAgdGhpcy5vcGVyYXRpb24gPSBpbnB1dFxuICB9XG5cbiAgcHVibGljIGdldE9wZXJhdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9wZXJhdGlvblxuICB9XG5cbiAgcHVibGljIGRpdmlkZSgpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSArdGhpcy5wcmV2aW91cyAvICt0aGlzLmN1cnJlbnRcbiAgICB0aGlzLnByZXZpb3VzID0gbnVsbFxuICB9XG5cbiAgcHVibGljIG11bHRpcGx5KCkge1xuICAgIHRoaXMuY3VycmVudCA9ICt0aGlzLnByZXZpb3VzICogK3RoaXMuY3VycmVudFxuICAgIHRoaXMucHJldmlvdXMgPSBudWxsXG4gIH1cblxuICBwdWJsaWMgYWRkKCkge1xuICAgIHRoaXMuY3VycmVudCA9ICt0aGlzLnByZXZpb3VzICsgK3RoaXMuY3VycmVudFxuICAgIHRoaXMucHJldmlvdXMgPSBudWxsXG4gICAgY29uc29sZS5sb2coJ0FkZDogJywgdGhpcy5jdXJyZW50KVxuICB9XG5cbiAgcHVibGljIHN1YnRyYWN0KCkge1xuICAgIHRoaXMuY3VycmVudCA9ICt0aGlzLnByZXZpb3VzIC0gK3RoaXMuY3VycmVudFxuICAgIHRoaXMucHJldmlvdXMgPSBudWxsXG4gIH1cbn1cblxuY29uc3QgY2FsY3VsYXRvciA9IG5ldyBDYWxjdWxhdG9yKClcblxuY29uc3QgRE9NX0VWRU5UUyA9ICgoKSA9PiB7XG4gIGNvbnN0IGRpZ2l0czogTm9kZUxpc3RPZjxIVE1MQnV0dG9uRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1kaWdpdF0nKVxuICBjb25zdCBvcGVyYXRvcnM6IE5vZGVMaXN0T2Y8SFRNTEJ1dHRvbkVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtb3BlcmF0b3JdJylcbiAgY29uc3QgZXF1YWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZXF1YWxzXScpXG4gIGNvbnN0IGNsZWFyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtY2xlYXJdJylcbiAgY29uc3QgbmVnT3JQb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZWdPclBvc10nKVxuICBjb25zdCBwZXJjZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcGVyY2VudF0nKVxuICBjb25zdCBkaXNwbGF5RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlzcGxheVRleHQnKVxuXG4gIGxldCBhd2FpdGluZ09wZXJhdG9yID0gdHJ1ZVxuXG4gIGNvbnN0IHVwZGF0ZURpc3BsYXkgPSAoKTogdm9pZCA9PiB7XG4gICAgZGlzcGxheUVsLnRleHRDb250ZW50ID0gY2FsY3VsYXRvci5nZXRDdXJyZW50KCkgPyBjYWxjdWxhdG9yLmdldEN1cnJlbnQoKS50b1N0cmluZygpIDogJzAnXG4gIH1cblxuICBjb25zdCBmb3JtYXREaXNwbGF5ID0gKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgIGxldCB2YWx1ZTogc3RyaW5nXG4gICAgaWYgKGF3YWl0aW5nT3BlcmF0b3IpIHtcbiAgICAgIHZhbHVlID0gY2FsY3VsYXRvci5nZXREaXNwbGF5KCkgPT09ICcwJyA/IGlucHV0IDogY2FsY3VsYXRvci5nZXREaXNwbGF5KCkgKyBpbnB1dFxuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IGNhbGN1bGF0b3IuZ2V0Q3VycmVudCgpID8gY2FsY3VsYXRvci5nZXRDdXJyZW50KCkgKyBpbnB1dCA6IGlucHV0XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdmb3JtYXREaXNwbGF5OiAnLCB2YWx1ZSlcbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKVxuICB9XG5cbiAgY29uc3QgY2FsY3VsYXRlID0gKCk6IHZvaWQgPT4ge1xuICAgIHN3aXRjaCAoY2FsY3VsYXRvci5nZXRPcGVyYXRpb24oKSkge1xuICAgICAgY2FzZSAnLyc6XG4gICAgICAgIGNhbGN1bGF0b3IuZGl2aWRlKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJyonOlxuICAgICAgICBjYWxjdWxhdG9yLm11bHRpcGx5KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJysnOlxuICAgICAgICBjYWxjdWxhdG9yLmFkZCgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICctJzpcbiAgICAgICAgY2FsY3VsYXRvci5zdWJ0cmFjdCgpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm5cbiAgICB9XG4gIH1cblxuICBkaWdpdHMuZm9yRWFjaChkaWdpdCA9PiB7XG4gICAgZGlnaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoYXdhaXRpbmdPcGVyYXRvcikge1xuICAgICAgICBjYWxjdWxhdG9yLnNldEN1cnJlbnQoK2Zvcm1hdERpc3BsYXkoZGlnaXQudmFsdWUpKVxuICAgICAgICBjYWxjdWxhdG9yLnNldERpc3BsYXkoZm9ybWF0RGlzcGxheShkaWdpdC52YWx1ZSkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhjYWxjdWxhdG9yLmdldEN1cnJlbnQoKSlcbiAgICAgICAgY2FsY3VsYXRvci5zZXRDdXJyZW50KCtmb3JtYXREaXNwbGF5KGRpZ2l0LnZhbHVlKSlcbiAgICAgICAgY2FsY3VsYXRvci5zZXREaXNwbGF5KGNhbGN1bGF0b3IuZ2V0Q3VycmVudCgpLnRvU3RyaW5nKCkpXG4gICAgICAgIGF3YWl0aW5nT3BlcmF0b3IgPSB0cnVlXG4gICAgICB9XG4gICAgICB1cGRhdGVEaXNwbGF5KClcblxuICAgICAgY29uc29sZS5sb2coJ051bWJlcnMnLCBjYWxjdWxhdG9yLmdldEN1cnJlbnQoKSwgY2FsY3VsYXRvci5nZXRQcmV2aW91cygpKVxuICAgIH0pXG4gIH0pXG5cbiAgb3BlcmF0b3JzLmZvckVhY2gob3BlcmF0b3IgPT4ge1xuICAgIG9wZXJhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuICAgICAgYXdhaXRpbmdPcGVyYXRvciAmJiBjYWxjdWxhdGUoKVxuICAgICAgdXBkYXRlRGlzcGxheSgpXG4gICAgICBjYWxjdWxhdG9yLnNldE9wZXJhdGlvbihvcGVyYXRvci52YWx1ZSlcbiAgICAgIGNhbGN1bGF0b3Iuc2V0UHJldmlvdXMoKVxuICAgICAgY2FsY3VsYXRvci5zZXRDdXJyZW50KG51bGwpXG4gICAgICBhd2FpdGluZ09wZXJhdG9yID0gZmFsc2VcbiAgICB9KVxuICB9KVxuXG4gIGVxdWFscy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcbiAgICBjYWxjdWxhdGUoKVxuICAgIHVwZGF0ZURpc3BsYXkoKVxuICAgIGNvbnNvbGUubG9nKCdFcXVhbHMnLCBjYWxjdWxhdG9yLmdldEN1cnJlbnQoKSwgY2FsY3VsYXRvci5nZXRQcmV2aW91cygpKVxuICB9KVxuXG4gIGNsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuICAgIGNhbGN1bGF0b3IucmVzZXQoKVxuICAgIHVwZGF0ZURpc3BsYXkoKVxuICB9KVxufSkoKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==