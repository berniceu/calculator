
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equals");
let decimal = document.querySelector(".decimal");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operators");

let previousScreen = document.querySelector(".previous");
let currentScreen = document.querySelector(".current");

numbers.forEach((number) => number.addEventListener("click", function(e){
    handleNumber(e.target.textContent)
    currentScreen.textContent = currentValue;
}))

operators.forEach((op) => op.addEventListener("click", function(e){
    operate(e.target.textContent)
    previousScreen.textContent = `${previousValue} ${op}`;
    currentScreen.textContent = currentValue;
}))

clear.addEventListener("click", function(){
    currentValue = '';
    previousValue = '';
    op  = '';
    previousScreen.textContent = currentValue;
    currentScreen.textContent = currentValue;
})
equal.addEventListener("click", function(){
    calculate()
})

function handleNumber(num){
    if(currentValue.length <= 9){
        currentValue += num;
    }
}

function operate(op){
    previousValue = currentValue;
    currentValue = '';

}

function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(op === "+"){
        previousValue += currentValue;
    } else if(op === "-"){
        previousValue -= currentValue;
    } else if(op === "/"){
        previousValue /= currentValue;
    } else if(op === "x"){
        previousValue *= currentValue;
    }

    previousValue = previousValue.toString();
    currentValue = currentValue.toString()
}