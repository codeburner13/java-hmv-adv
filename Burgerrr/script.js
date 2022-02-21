"use strict";
//ищем кнопку по её id
//при клике на кнопку происходит расчёт продукта через функцию getTotal
document.getElementById('check').onclick = getTotal;

function getTotal() {
    let option = document.getElementsByClassName('option');
    let price = 0;
    let kkal = 0;
    for (let i = 0; i < option.length; i++) {
        if (option[i].checked) {
            //принимаем строки в качестве чисел
            price += parseFloat(option[i].getAttribute('date-cost'));
            kkal += parseFloat(option[i].getAttribute('date-kkal'));
        }
    }
    //"убираем" span
    document.getElementById('price').textContent = price;
    document.getElementById('kkal').textContent = kkal;
}