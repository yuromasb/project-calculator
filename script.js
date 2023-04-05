let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

/*number*/
const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

/*operator*/
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
        updateScreen(calculationOperator)
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = ''
}


/*equalsign*/
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            return
    }
    currentNumber = result
    calculationOperator = ''
}


/*clearAll*/
const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber=''
    calculationOperator=''
    currentNumber='0'
}


/*decimal*/
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    iputDecimal(event.target.value)
    updateScreen(currentNumber)
})

const iputDecimal = (dot) => {
    if(currentNumber.includes(".")) {
        return
    }
    currentNumber += dot;
};


/*percentage*/
const percentage = document.querySelector('.percentage')

percentage.addEventListener("click", ()=> {
    inputPercentage();
    updateScreen(currentNumber);
})

const inputPercentage = () => {
    currentNumber = parseFloat(currentNumber) / 100;
};

