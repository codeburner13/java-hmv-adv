Vue.component('cart', {
    props: ['cartProducts', 'img', 'visibility'],
    template: `
        <div class="cart-block" v-show="visibility">
            <cart-product v-for="item of cartProducts" :key="item.id_product" :img="img" :cart-product="item">
            </cart-product>
        </div>
    `
});

Vue.component('cart-product', {
    props: ['img', 'cartProduct'],
    template: `
    <div class="cart-product">
                    <div class="product-bio">
                        <img :src="img" alt="Some img">
                        <div class="product-desc">
                            <div class="product-title">{{ cartProduct.product_name }}</div>
                            <div class="product-quantity">Quantity: {{ cartProduct.quantity }}</div>
                            <div class="product-single-price">$ {{ cartProduct.price }} each</div>
                        </div>
                    </div>
                    <div class="right-block">
                        <div class="product-price">{{cartProduct.quantity*cartProduct.price}}</div>
                        <button class="del-btn" @click="$root.remove(cartProduct)">&times;</button>
                    </div>
                </div>
    `
})