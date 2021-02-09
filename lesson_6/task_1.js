'use strict';

/*
1. Доработать модуль корзины.
a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы
b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида
*/

const catalog = {
    cart: null,
  
    goods: [
        {
            id: 1,
            title: 'Материнская плата',
            price: 5000
        },
        {
            id: 2,
            title: 'Процессор',
            price: 10000
        },
        {
            id: 3,
            title: 'Оперативная память',
            price: 7000
        },
        {
            id: 4,
            title: 'Видеокарта',
            price: 12000
        },
        {
            id: 5,
            title: 'Оптический привод',
            price: 900
        },
        {
            id: 6,
            title: 'Блок питания',
            price: 1600
        },
        {
            id: 7,
            title: 'HDD',
            price: 2000
        },
    ],

    addToCart(id) {
        let good = null;
        for (let i of this.goods)
        {
            if (i.id === id)
            {
                good = i;
                break;
            }
        }
        if (good !== null)
            this.cart.add(good);
    },

    render() {
        let table = document.getElementById('catalog');
        this.goods.forEach(element => {
            const tr = document.createElement('tr');
            tr.insertAdjacentHTML('beforeend', `
                <td><p>${element.title}</p></td>
                <td><p>${element.price}</p></td>
                <td><a href='#' onclick="catalog.addToCart(${element.id})">Добавить</a></td>
            `);
            table.appendChild(tr);
            
            // console.log(element)
        });
    },
};

const cart = {
    goods: [],

    findGoodInCart(good) {
        for (let i = 0; i < this.goods.length; i++) 
        {
            if (this.goods[i].id == good.id)
                return this.goods[i];
        }
        return null;
    },

    add(good) {
        let findGood = this.findGoodInCart(good);
        if (findGood === null)
            this.goods.push({...good, count: 1});
        else
            findGood.count++;

        this.render();
    },

    removeClickHandler(event) {
        const id = +event.target.getAttribute("data");

        for (let i = 0; i < this.goods.length; i++) 
        {
            if (this.goods[i].id == id)
            {
                this.goods.splice(i, 1);
                break;
            }
        }

        this.render();
    },

    render() {
        document.querySelectorAll('#cart > tr').forEach(el => el.remove());

        let table = document.getElementById('cart');
        if (this.goods.length == 0)
        {
            table.insertAdjacentHTML('afterend', '<p id="clesr_cart">Корзина пуста</p>');
            return;
        }
        else
        {
            let el = document.getElementById('clesr_cart');
            if (el)
                el.parentNode.removeChild(el);
        }

        this.goods.forEach(element => {
            const tr = document.createElement('tr');
            tr.insertAdjacentHTML('beforeend', `
                <td><p>${element.title}</p></td>
                <td><p>${element.price}</p></td>
                <td><p>${element.count}</p></td>
                <td><p>${element.price * element.count}</p></td>
                <td><a href="#" data="${element.id}">Удалить</a></td>
            `);
            table.appendChild(tr);
            
            // console.log(element)
        });

        document.querySelectorAll('#cart > tr > td > a').forEach(el => {
            el.addEventListener('click', (event) => {
                    this.removeClickHandler(event)
                })
        });
    },
};

catalog.cart = cart;
catalog.render();
cart.render();
