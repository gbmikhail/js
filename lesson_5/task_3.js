'use strict';
/*
3. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре.
Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
    3.1. Пустая корзина должна выводить строку «Корзина пуста»;
    3.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
*/

let shopcart = [
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

function showShopcart()
{
    let div = document.getElementById('shopcart');
    if (shopcart.length == 0)
        div.insertAdjacentHTML('beforeend', '<p>Корзина пуста</p>');
    else
    {
        //const table = document.createElement('table');
        let table = document.getElementById('table_shopcart');
        let tdElem = document.createElement('tr');
        tdElem.insertAdjacentHTML('afterbegin', `<th>Наименование</th><th>Цена</th><th>Количество</th><th>На сумму</th>`);
        table.appendChild(tdElem);
        for (let i of shopcart)
        {
            tdElem = document.createElement('tr');
            tdElem.insertAdjacentHTML('afterbegin', `
                    <td><p>${i.title}</p></td>
                    <td><p>${i.price}</p></td>
                    <td><p>${i.count}</p></td>
                    <td><p>${i.price * i.count}</p></td>
                `);
            table.appendChild(tdElem);
        }
        // Итого
        tdElem = document.createElement('tr');
        tdElem.insertAdjacentHTML('afterbegin', `
                <td colspan="3"><p><b>Итого:</b></p></td>
                <td><p><b>${countBasketPrice(shopcart)}</b></p></td>
            `);
        table.appendChild(tdElem);

        div.appendChild(table);
    }

}
