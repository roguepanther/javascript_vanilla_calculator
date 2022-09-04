let result_button = document.querySelector('#result');
let button_1 = document.querySelector('#button_1');
let button_2 = document.querySelector('#button_2');
let button_3 = document.querySelector('#button_3');
let button_4 = document.querySelector('#button_4');
let button_5 = document.querySelector('#button_5');
let button_6 = document.querySelector('#button_6');
let button_7 = document.querySelector('#button_7');
let button_8 = document.querySelector('#button_8');
let button_9 = document.querySelector('#button_9');
let button_0 = document.querySelector('#button_0');
let button_dot = document.querySelector('#button_dot');
let button_equals = document.querySelector('#button_equals');
let button_plus = document.querySelector('#button_plus');
let button_minus = document.querySelector('#button_minus');
let button_multiply = document.querySelector('#button_multiply');
let button_divide = document.querySelector('#button_divide');
let button_ac = document.querySelector('#button_ac');
let button_modulus = document.querySelector('#button_modulus');
let button_plmi = document.querySelector('#button_plusminus');
let current_operand = '';
let number = 0;
let counter = 0;
let final_result = 0;
let expression1 = '';
let expression2 = '';


/* TODO: Need to complete the functionality for memory buttons */

/* AC Reset Function */
button_ac.addEventListener('click', function() {
    result_button.innerText = '0';
    final_result = 0;
    counter = 0;
    expression1 = '';
    expression2 = '';
    current_operand = '';
})


button_1.addEventListener('click', function() {
    number = 1;
    if(result_button.innerText[0] === '0') {
        result_button.innerText = (String(number)); 
    } else {
        result_button.append(String(number))
    }
    
    counter += number;
    expression1 += '1';

    //each time the button is clicked, append a 1 to string expression

})

button_2.addEventListener('click', function() {
    number = 2;
    if(result_button.innerText[0] === '0') {
        result_button.innerText = (String(number)); 
    } else {
        result_button.append(String(number))
    }
    counter += number;
    expression1 += '2';
})

button_3.addEventListener('click', function() {
    number = 3;
    if(result_button.innerText[0] === '0') {
        result_button.innerText = (String(number)); 
    } else {
        result_button.append(String(number))
    }
    counter += number;
    expression1 += '3';
})

button_4.addEventListener('click', function() {
    number = 4;
    if(result_button.innerText[0] === '0') {
        result_button.innerText = (String(number)); 
    } else {
        result_button.append(String(number))
    }
    counter += number;
    expression1 += '4';
})

button_5.addEventListener('click', function() {
    number = 5;
    if(result_button.innerText[0] === '0') {
        result_button.innerText = (String(number)); 
    } else {
        result_button.append(String(number))
    }
    counter += number;
    expression1 += '5';
})

button_6.addEventListener('click', function() {
    number = 6;
    if(result_button.innerText[0] === '0') {
        result_button.innerText = (String(number)); 
    } else {
        result_button.append(String(number))
    }
    counter += number;
    expression1 += '6';
})

button_7.addEventListener('click', function() {
    number = 7;
    if(result_button.innerText[0] === '0') {
        result_button.innerText = (String(number)); 
    } else {
        result_button.append(String(number))
    }
    counter += number;
    expression1 += '7';
})

button_8.addEventListener('click', function() {
    number = 8;
    if(result_button.innerText[0] === '0') {
        result_button.innerText = (String(number)); 
    } else {
        result_button.append(String(number))
    }
    counter += number;
    expression1 += '8';
})

button_9.addEventListener('click', function() {
    number = 9;
    if(result_button.innerText[0] === '0') {
        result_button.innerText = (String(number)); 
    } else {
        result_button.append(String(number))
    }
    counter += number;
    expression1 += '9';
})

button_0.addEventListener('click', function() {
    number = 0;
    if(result_button.innerText[0] === '0') {
        result_button.innerText = (String(number)); 
    } else {
        result_button.append(String(number))
    }
    counter += number;
    expression1 += '0';
})

/* TODO: Fix the dot expression to only allow for one dot in expression */

button_dot.addEventListener('click', function() {
    if(expression1.indexOf('.') > -1){
        console.log("a dot already exists.")
    } else {
        result_button.append('.');
    }
})


button_plus.addEventListener('click', function() {
    expression2 = expression1.slice(0, expression1.length);
    expression1 = '';
    result_button.innerText = '0';
    final_result = 0;
    counter = 0;
    current_operand = 'add';
})

button_divide.addEventListener('click', function() {
    expression2 = expression1.slice(0, expression1.length);
    expression1 = '';
    result_button.innerText = '0';
    final_result = 0;
    counter = 0;
    current_operand = 'divide';
})

button_multiply.addEventListener('click', function() {
    expression2 = expression1.slice(0, expression1.length);
    expression1 = '';
    result_button.innerText = '0';
    final_result = 0;
    counter = 0;
    current_operand = 'multiply';
})

button_minus.addEventListener('click', function() {
    expression2 = expression1.slice(0, expression1.length);
    expression1 = '';
    result_button.innerText = '0';
    final_result = 0;
    counter = 0;
    current_operand = 'minus';
})

button_modulus.addEventListener('click', function() {
    expression2 = expression1.slice(0, expression1.length);
    expression1 = '';
    result_button.innerText = '0';
    final_result = 0;
    counter = 0;
    current_operand = 'modulus';
})

button_plmi.addEventListener('click', function() {
    if(expression1.charAt(0) != '-'){
        result_button.innerText = "-" + result_button.innerText;
        expression1 = "-" +  expression1;
    } else {
        console.log('something went wrong');
    }
})

button_equals.addEventListener('click', function() {
    if(current_operand === 'add'){
        result_button.innerText = (String(parseInt(expression2) + parseInt(expression1)));
    } else if (current_operand === 'divide') {
        result_button.innerText = (String(parseInt(expression2) / parseInt(expression1)));
    } else if(current_operand === 'multiply') {
        result_button.innerText = (String(parseInt(expression2) * parseInt(expression1)));
    } else if (current_operand === 'minus') {
        result_button.innerText = (String(parseInt(expression2) - parseInt(expression1)));
    } else if (current_operand === 'modulus') {
        result_button.innerText = (String(parseInt(expression2) % parseInt(expression1)));
    } else {
        console.warn('Could not compute. Try again.');
    }
})


