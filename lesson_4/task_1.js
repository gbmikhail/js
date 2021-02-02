/*
1. Написать функцию, преобразующую число в объект.
Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
в котором в соответствующих свойствах описаны единицы, десятки и сотни.
Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

'use strict'

const digit = {
    "единицы": 0,
    "десятки": 0,
    "сотни": 0,
};

function digitToObj(n) {
    let value = {...digit};
    if (n >= 1000)
    {
        console.log("Число больше 999")
        return value;
    }
    value["единицы"] = n % 10;
    n = Math.floor(n / 10);
    value["десятки"] = n % 10;
    n = Math.floor(n / 10);
    value["сотни"] = n % 10;
    n = Math.floor(n / 10);

    return value;
}

let value = digitToObj(987);
console.log(value);
