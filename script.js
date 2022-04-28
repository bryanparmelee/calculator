

const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a / b;
}

const operate = (operator, a, b) => {
    switch(operator) {
        case add:
            return add(a, b);
            break;
        case subtract:
            return subtract(a, b);
            break; 
        case multiply:
            return multiply(a, b);
            break;
        case divide: 
            return divide(a, b);
            break;

    }
}

const numbers = document.querySelectorAll('.numbers');
const displayText = document.querySelector('.display-text');

let currentVal = 0;
numbers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let num = parseInt(e.target.value);
        displayText.innerHTML = num;
    })
    
   
})




