const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// let getRequest = (url, cb) => {
//     let xhr = new XMLHttpRequest();
//     // window.ActiveXObject -> xhr = new ActiveXObject()
//     xhr.open("GET", url, true);
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4){
//             if(xhr.status !== 200){
//                 console.log('Error');
//             } else {
//                 cb(xhr.responseText);
//             }
//         }
//     };
//     xhr.send();
// };

class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];//массив товаров из JSON документа
        this.allProducts = [];
        this._getProducts()
            .then(data => { //data - объект js
                this.goods = [...data];
                //                 console.log(data);
                this.render()
            });
    }
    // _fetchProducts(cb){
    //     getRequest(`${API}/catalogData.json`, (data) => {
    //         this.goods = JSON.parse(data);
    //         console.log(this.goods);
    //         cb();
    //     })
    // }
    _getProducts() {

        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });

    }
    calcSum() {
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            //            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
}

class ProductItem {
    constructor(product, img = 'https://99px.ru/sstorage/53/2017/07/tmb_203552_5658.png') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render() {
        return `<div class="product-item" data-id="${this.id}">
                        <img src="${this.img}" alt="Image">
                    <div class="desc">
                        <h3>${this.title}</h3>
                        <p>${this.price} $</p>
                        <button class="buy-btn">Купить</button>
                    </div>
                </div>`
    }
}

let list = new ProductsList();

class Cart {
    constructor(container = '.cart-float') {
        this.container = container;
        this.goods = [];
        this.cart_click();
        this.cart_product().then(data => {
            this.goods = [...data.contents]
            this.render()
        });
        this.addProduct();
        this.removeProduct();
    }

    cart_click() {
        document.querySelector('.btn-cart')
            .addEventListener('click', () => {
                document.querySelector(this.container).classList.toggle('invisible');
            });
    }

    cart_product() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                alert(error);
            })
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new CartItem();
            block.insertAdjacentHTML('beforeend', productObj.render(product));
        }
    }
}

class CartItem {

    render(product) {
        return `<div class="cart-item" data-id="${product.id_product}">
                    <div class="product-card">
                        <img src="${product.img}" alt="Image">
                            <div class="product-info">
                                <p class="product-title">${product.product_name}</p>
                                <p class="product-quantity">Количество: ${product.quantity}</p>
                                <p class="product-cart-price">Цена: $${product.price} </p>
                            </div>
                    </div>
                    <div class="right">
                        <p class="product-prices">$${product.quantity * product.price}</p>
                        <button class="btn-del" data-id="${product.id_product}">&times;</button>
                    </div>
                </div>`
    }
}
let bask = new Cart();

