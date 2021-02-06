'use strict';

/*
1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию.
Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
*/

function drawTable() {
    const size = 8;
    let board = document.getElementById('board');
    
    for (let row = 0; row <= size + 1; row++)
    {
        const rowElem = document.createElement('tr');
        for (let col = 0; col <= size + 1; col++)
        {
            const colElem = document.createElement('td');
            // Нумерация
            if (row == 0 || row > size)
            {
                colElem.style.height = rowElem.style.height = "20px";
                if (col > 0 && col <= size)
                    colElem.innerText = String.fromCharCode("A".charCodeAt() + col - 1);
            }
            if (col == 0 || col > size)
            {
                colElem.style.width = rowElem.style.width = "20px";
                if (row > 0 && row <= size)
                    colElem.innerText = 9 - row;
            }

            // Разрисовка доски
            if (row && col && row <= size && col <= size)
                if ((col + row) % 2 != 0)
                    colElem.style.background = "black";

            rowElem.appendChild(colElem);
        }
        board.appendChild(rowElem);
    }
}
