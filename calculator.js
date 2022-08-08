const calcButtons = document.querySelectorAll('button');
const display = document.getElementById('display');
let  display_numbers = '';
let opCounter = 0;

let operation = {
    firstNumber: 0,
    secondNumber: 0,
    op: ''
};

//function adds two numbers
function add(x,y){
    return x+y;
}

//function subtracts two numbers
function sub(x,y){
    return x-y;
}

//function multiplies two numbers
function mul(x,y){
    return x*y;
}
//function divides two numbers
function div(x,y){
    if(y == 0){
        return  display.innerText = 'CANNOT DIVIDE BY ZERO'; 
    }
    return x/y;
}

function operate(input){

    arrayToObject();

    switch(input.op){
        case '+': return add(input.firstNumber,input.secondNumber);
        case '-': return sub(input.firstNumber,input.secondNumber);
        case '*': return mul(input.firstNumber,input.secondNumber);
        case '/': return div(input.firstNumber,input.secondNumber);
    }
}

function update_display(){

    display.innerText = display_numbers;  
    console.log(display_numbers);
}

function arrayToObject(){
    let i = 0;
    let j = 0;
    let n1 = [];
    let n2 = [];
    let size = display_numbers.length;
    if(isNaN(display_numbers[0])){
        display_numbers = [];
    }
    else{
        while(display_numbers[i] !='+' && display_numbers[i] !='-' && display_numbers[i] !='*' && display_numbers[i] !='/'){
            n1[i] = display_numbers[i];
            i++;
        }
        if(isNaN(display_numbers[i])){
            operation.op = display_numbers[i];
            i++;
        }
        j = i;
        while(j<= size){
            n2[j-i] = display_numbers[j];
            j++;
        }
        operation.firstNumber = Number(n1.join(''));
        operation.secondNumber = Number(n2.join(''));
    }
}
let numToArray = num => Number(num);

//event listeners for calculator's buttons
calcButtons.forEach((btn) => {

    btn.addEventListener('click', () =>{
        switch(btn.id){
            case 'number0': display_numbers = display_numbers + '0';
                            break;
            case 'number1': display_numbers = display_numbers + '1';
                            break;
            case 'number2': display_numbers = display_numbers + '2';
                            break;
            case 'number3': display_numbers = display_numbers + '3';
                            break;
            case 'number4': display_numbers = display_numbers + '4';
                            break;
            case 'number5': display_numbers = display_numbers + '5';
                            break;
            case 'number6': display_numbers = display_numbers + '6';
                            break;
            case 'number7': display_numbers = display_numbers + '7';
                            break;
            case 'number8': display_numbers = display_numbers + '8'; 
                            break;
            case 'number9': display_numbers = display_numbers + '9';
                            break;
            case 'sumbtn':  if(opCounter <1){
                                display_numbers = display_numbers + ' + ';
                                opCounter++;
                                break;
                            }
                            else{
                                let result = operate(operation);
                                display_numbers = result;
                                display_numbers = display_numbers + ' + ';
                                break;
                            }
            case 'subbtn': if(opCounter <1){
                                display_numbers.push('-');
                                opCounter++;
                                break;
                            }
                            else{
                                let result = operate(operation);
                                display_numbers = result;
                                display_numbers.push('-');
                                break;
                            }
            case 'mulbtn': if(opCounter<1){
                                display_numbers = display_numbers + ' * ';
                                opCounter++;
                                break;
                            }
                            else{
                                let result = operate(operation);
                                display_numbers = result;
                                display_numbers = display_numbers + ' * ';
                                break;
                            }
            case 'divbtn': if(opCounter<1){
                                display_numbers = display_numbers + ' / ';
                                opCounter++;
                                break;
                            }
                            else{
                                let result = operate(operation);
                                display_numbers = result;
                                display_numbers = display_numbers + ' / ';
                                break;
                            }
            case 'deletebtn': display_numbers.pop();
                            break;
            case 'clearbtn': display_numbers = [];
                            break;
            case 'equalsbtn': let result = operate(operation);
                                opCounter = 0;
                                display_numbers = result;
                                break;
        }
        update_display();
    })
})


//event listeners for keyboard
document.addEventListener ('keypress', (event) => {
    
    switch(event.key){
        case '0': display_numbers = display_numbers + '0';
                        break;
        case '1': display_numbers = display_numbers + '1';
                        break;
        case '2': display_numbers = display_numbers + '2';
                        break;
        case '3': display_numbers = display_numbers + '3';
                        break;
        case '4': display_numbers = display_numbers + '4';
                        break;
        case '5': display_numbers = display_numbers + '5';
                        break;
        case '6': display_numbers = display_numbers + '6';
                        break;
        case '7': display_numbers = display_numbers + '7';
                        break;
        case '8': display_numbers = display_numbers + '8'; 
                        break;
        case '9': display_numbers = display_numbers + '9';
                        break;
        case '+':  if(opCounter <1){
                            display_numbers = display_numbers + ' + ';
                            opCounter++;
                            break;
                        }
                        else{
                            let result = operate(operation);
                            display_numbers = result;
                            display_numbers = display_numbers + ' + ';
                            break;
                        }
        case '-': if(opCounter <1){
                            display_numbers.push('-');
                            opCounter++;
                            break;
                        }
                        else{
                            let result = operate(operation);
                            display_numbers = result;
                            display_numbers.push('-');
                            break;
                        }
        case '*': if(opCounter<1){
                            display_numbers = display_numbers + ' * ';
                            opCounter++;
                            break;
                        }
                        else{
                            let result = operate(operation);
                            display_numbers = result;
                            display_numbers = display_numbers + ' * ';
                            break;
                        }
        case '/': if(opCounter<1){
                            display_numbers = display_numbers + ' / ';
                            opCounter++;
                            break;
                        }
                        else{
                            let result = operate(operation);
                            display_numbers = result;
                            display_numbers = display_numbers + ' / ';
                            break;
                        }
        case 'Backspace': display_numbers.pop();
                        break;
        case 'Enter': let result = operate(operation);
                        opCounter = 0;
                        display_numbers = result;
                        break;
    }
    update_display();

    if(keyName === 'a'){
        snareAudio.play();
    }
    else if(keyName === 'b'){
        bassAudio.play();
    }
    else if(keyName === 'k'){
        hiHatAudio.play();
    }
  })