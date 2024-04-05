let screen = document.querySelector('#screen');
let btn = document.querySelectorAll('.btn');
let btns = document.querySelectorAll('.btns');
let diff = document.querySelectorAll('#diff');
let container = document.getElementById("calculator");
let his = '', historyString = '';

document.getElementById("historyContainer").style.visibility = "hidden";

for (item of btn) 
{
    item.addEventListener('click', (event) => 
    {
        btntext = event.target.innerText;
        if (btntext == '×') btntext = '*';
        if (btntext == '÷') btntext = '/';
        screen.value = screen.value + btntext;
    });
}

function clear()
{
    document.getElementById("historyContent").innerHTML = '';
}

function close()
{
    document.getElementById("historyContainer").style.visibility = "hidden";
}

document.getElementById("closeHistory").addEventListener("click", close);
document.getElementById("clearHistory").addEventListener("click", clear);

if(!screen.value) screen.value=0;

function history()
{
    document.getElementById("historyContainer").style.visibility = "visible";
}

function solve()
{
    his = screen.value;
    screen.value = eval(screen.value);
    historyString = his +  ' = ' + screen.value;
    document.getElementById("historyContent").innerHTML += historyString + "<br/>";
}

function sin() 
{
    his = screen.value;// obtained the value in a variable
    screen.value = eval(screen.value);
    let val = Math.sin(screen.value);// obtaing the sinosudal value of the variable
    if (val < 1e-10) screen.value = 0;
    else screen.value = val;
    historyString = 'sin(' + his + ') = ' + screen.value;// adding the calculation performed to the history string
    document.getElementById("historyContent").innerHTML += historyString + "<br/>";
}

function cos() 
{
    his = screen.value;
    screen.value = eval(screen.value);
    let val = Math.cos(screen.value);
    if (val < 1e-10) screen.value = 0;
    else screen.value = val;
    historyString = 'cos(' + his + ') = ' + screen.value;
    document.getElementById("historyContent").innerHTML += historyString + "<br/>";
}

function tan() 
{
    his = screen.value;
    screen.value = eval(screen.value);
    let val = Math.tan(screen.value);
    if (val < 1e-10) screen.value = 0;
    else screen.value = val;
    historyString = 'tan(' + his + ') = ' + screen.value;
    document.getElementById("historyContent").innerHTML += historyString + "<br/>";
}

function sinh() 
{
    his = screen.value;
    screen.value = eval(screen.value);
    let val = Math.sinh(screen.value);
    if (val < 1e-10) screen.value = 0;
    else screen.value = val;
    historyString = 'sinh(' + his + ') = ' + screen.value;
    document.getElementById("historyContent").innerHTML += historyString + "<br/>";
}

function cosh() 
{
    his = screen.value;
    screen.value = eval(screen.value);
    let val = Math.cosh(screen.value);
    if (val < 1e-10) screen.value = 0;
    else screen.value = val;
    historyString = 'cosh(' + his + ') = ' + screen.value;
    document.getElementById("historyContent").innerHTML += historyString + "<br/>";
}

function tanh() 
{
    his = screen.value;
    screen.value = eval(screen.value);
    let val = Math.tanh(screen.value);
    if (val < 1e-10) screen.value = 0;
    else screen.value = val;
    historyString = 'tanh(' + his + ') = ' + screen.value;
    document.getElementById("historyContent").innerHTML += historyString + "<br/>";
}

function arcsinh() 
{
    his = screen.value;
    screen.value = eval(screen.value);
    let val = Math.asinh(screen.value);
    if (val < 1e-10) screen.value = 0;
    else screen.value = val;
    historyString = 'asinh(' + his + ') = ' + screen.value;
    document.getElementById("historyContent").innerHTML += historyString + "<br/>";
}

function arccosh() 
{
    his = screen.value;
    screen.value = eval(screen.value);
    let val = Math.acosh(screen.value);
    if (val < 1e-10) screen.value = 0;
    else screen.value = val;
    historyString = 'acosh(' + his + ') = ' + screen.value;
    document.getElementById("historyContent").innerHTML += historyString + "<br/>";
}
