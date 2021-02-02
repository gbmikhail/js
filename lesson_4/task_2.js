/*
2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

'use strict'

let goods = [
    {
        title: "stm32f103c8t6",
        price: 155,
        count: 10
    },   
    {
        title: "stm32f407vet6",
        price: 650,
        count: 2
    },   
    {
        title: "esp8266",
        price: 130,
        count: 4
    },   
    {
        title: "esp32",
        price: 400,
        count: 1
    },   
    {
        title: "w5500",
        price: 270,
        count: 3
    },   
];

function countBasketPrice(arr)
{
    let sum = 0;
    for (let i of arr)
        sum += i.price * i.count;
    return sum;
}

// Подсчет по каждой позиции, оказывается можно добавить свойство на лету
for (let i of goods)
    i.total = i.price * i.count;

// Я сделал для себя открытие - console.table ! ! !
console.table(goods);
console.log("Сумма товаров: " + countBasketPrice(goods));
