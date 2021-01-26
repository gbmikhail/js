/*
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
В зависимости от переданного значения операции выполнить одну из арифметических операций 
(использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
*/

function add(a, b)
{
    return a + b;
}

function sub(a, b)
{
    return a - b;
}

function mul(a, b)
{
    return a * b;
}

function div(a, b)
{
    return a / b;
}

function mathOperation(arg1, arg2, operation)
{
    switch (operation)
    {
        case "+":
        case "add":
            return add(arg1, arg2);
        case "-":
        case "sub":
            return sub(arg1, arg2);
        case "*":
        case "mul":
            return mul(arg1, arg2);
        case "/":
        case "div":
            return div(arg1, arg2);
        default:
            return null;
    }

}

let a = Math.round(Math.random() * 100);
let b = Math.round(Math.random() * 100);
console.log(`\na = ${a}\tb = ${b}\n`);

console.log(`a + b = ${mathOperation(a, b, "+")}`);
console.log(`a - b = ${mathOperation(a, b, "-")}`);
console.log(`a * b = ${mathOperation(a, b, "mul")}`);
console.log(`a / b = ${mathOperation(a, b, "div")}`);
