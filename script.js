const boxField = document.getElementById("numberBox");
const numButtons = document.querySelectorAll('button[id^="num"]');
const opButtons = document.querySelectorAll('button[id^="op"]');
let inputs = 0;
let totalInput = 0;
const equalButton = document.getElementById("equals");
const clearButton = document.getElementById("clearButton");
// operator booleans
let plus = false;
let subtract = false;
let multiply = false;
let divide = false;

numButtons.forEach(button => {
    button.addEventListener('click', () => {
      boxField.value += button.value;
    });
});

function add(){
    plus = true;
    if (inputs = 0){
        inputs = boxField.value;
        totalInput += Number(inputs);
    }
    else{
        inputs = boxField.value;
        totalInput = Number(inputs);
    }
    boxField.value = '';
    console.log(typeof totalInput);
}

function subtraction(){
    subtract = true;
    if (inputs = 0){
        inputs = boxField.value;
        totalInput += Number(inputs);
    }
    else{
        inputs = boxField.value;
        totalInput = Number(inputs);
    }
    boxField.value = '';
    console.log(inputs);
}

function multiplication(){
    multiply = true;
    if (inputs = 0){
        inputs = boxField.value;
        totalInput += Number(inputs);
    }
    else{
        inputs = boxField.value;
        totalInput = Number(inputs);
    }
    boxField.value = '';
    console.log(inputs);
}

function division(){
    divide = true;
    if (inputs = 0){
        inputs = boxField.value;
        totalInput += Number(inputs);
    }
    else{
        inputs = boxField.value;
        totalInput = Number(inputs);
    }
    boxField.value = '';
    console.log(inputs);
}
equalButton.addEventListener('click', ()=>{
    inputs = boxField.value;
    if(plus){
        totalInput = totalInput + Number(inputs);
        console.log(plus);
    }

    if(subtract){
        totalInput = totalInput - Number(inputs);
        console.log(subtract);
    }

    if(multiply){
        totalInput = totalInput * Number(inputs);
        console.log(multiply);
    }

    if(divide){
        totalInput = totalInput / Number(inputs);
        console.log(divide);
    }
    console.log(totalInput);
    console.log(inputs);
    boxField.value = totalInput;
    plus = false;
    subtract = false;
    multiply = false;
    divide = false;
})

clearButton.addEventListener('click', ()=>{
    boxField.value = '';
})
