/*
5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
Результат выведен в консоль
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

let a = Math.round(Math.random() * 100);
let b = Math.round(Math.random() * 100);
console.log(`a = ${a}\t\tb = ${b}`);
console.log(`a + b = ${add(a, b)}`);
console.log(`a - b = ${sub(a, b)}`);
console.log(`a * b = ${mul(a, b)}`);
console.log(`a / b = ${div(a, b)}`);
