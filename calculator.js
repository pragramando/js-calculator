function add(x,y){
    return x+y;
}

function sub(x,y){
    return x-y;
}

function mul(x,y){
    return x*y;
}

function div(x,y){
    return x/y;
}

function operate(operator, x, y){

    switch(operator){
        case '+': return add(x,y);
        case '-': return sub(x,y);
        case '*': return mul(x,y);
        case '/': return div(x,y);
    }
}
