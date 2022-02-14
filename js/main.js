const products = [
    { id: 1, title: 'Notebook', price: 2000 },
    { id: 2, title: 'Mouse', price: 20 },
    { id: 3, title: 'Keyboard', price: 200 },
    { id: 4, title: 'Gamepad', price: 50 },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (product, img = 'https://99px.ru/sstorage/53/2017/07/tmb_203552_5658.png') => {
    return `<div class="product-item">
                <img src="${img}">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">${product.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    document.querySelector('.products').innerHTML = list.map(product =>
        renderProduct(product));
};

renderPage(products);

// 3-ий пункт дз

document.querySelector('.products').childNodes.forEach(node => {
    if (node.nodeName === '#text') {
        node.remove();
    }
});

