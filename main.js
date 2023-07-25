let currentValue = '';
let previousValue = '';
let operator = '';

    let clear = document.querySelector(".clear");
    let equal = document.querySelector(".equals");
    let decimal = document.querySelector(".decimal");
    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");
    const deleteButton = document.querySelector('.delete');

    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener("click", function(e){
        operate(e.target.textContent)
        previousScreen.textContent = previousValue +" " + operator;
        currentScreen.textContent = currentValue;
    }))

    clear.addEventListener("click", function(){
        currentValue = '';
        previousValue = '';
        operator  = '';
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    })
    equal.addEventListener("click", function(){
        if(currentValue != '' && previousValue != ''){
            calculate()
            previousScreen.textContent = '';
            currentScreen.textContent = previousValue;
        }

    })
    decimal.addEventListener("click", function(){
        addDecimal()
        currentScreen.textContent = currentValue ;

    })
    deleteButton.addEventListener('click', () => {
        backspace();
        currentScreen.textContent = currentValue;

    })


function handleNumber(num){
    if(currentValue.length <= 9){
        currentValue += num;
    }
}

function operate(op){
    operator = op;
    previousValue = currentValue;
    currentValue = '';

}

function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === "+"){
        previousValue += currentValue;
    } else if(operator === "-"){
        previousValue -= currentValue;
    } else if(operator === "/") {

        previousValue /= currentValue;
    } else if (operator === "x") {
        previousValue *= currentValue;
    }

    
    previousValue = previousValue.toString();
    currentValue = previousValue.toString()
}

function addDecimal(){
    if (!currentValue.includes(".")){
        currentValue += ".";
    }
}



function backspace(){
    if(currentValue != ''){
        currentValue = currentValue.slice(0, -1);
        
    }
}