class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
        this.render();//вывод товаров на страницу
        this.getSummery();//суммарная стоимость товаров
    }

    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Mouse', price: 20 },
            { id: 3, title: 'Keyboard', price: 200 },
            { id: 4, title: 'Gamepad', price: 50 },
        ];
    }
    //2-ой пункт дз
    //const sumall = this.goods.map(item => item.price).reduce((prev, curr) => prev + curr, 0);
    //console.log(`Сумма всех товаров составляет ${sumall} рублей.`); 

    getSummery() {
        const sumall = this.goods.map(item => item.price).reduce((prev, curr) => prev + curr, 0);
        console.log(`Сумма всех товаров составляет ${sumall} рублей.`);
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
            //           block.innerHTML += item.render();
        }
    }

}

class ProductItem {
    constructor(product, img = 'https://99px.ru/sstorage/53/2017/07/tmb_203552_5658.png') {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }

    render() {
        return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();

//1-ый пункт дз
class cart {
    showCart() { }; //всплывающая корзина при нажатии
    clearCart() { };//очистить корзину
    getTotalCount() { };//получить суммарную стоимость товаров в корзине
    render() { };
}

class cartProduct {
    addProduct() { }; //добавить товар в корзину
    removeProduct() { }; //удалить товар из корзины
    openProductCard() { }; //открыть карточку товара
    render() { };
}




