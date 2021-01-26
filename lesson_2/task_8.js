/*
8. *С помощью рекурсии организовать функцию возведения числа в степень. 
Формат: function power(val, pow), где val – заданное число, pow – степень.
*/

function pow(x, y)
{
    if (y == 0)
        return 1;
    else
        return x * pow(x, y - 1);
}

console.log(pow(2, 10));
