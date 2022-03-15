/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/CartComp.js":
/*!*******************************!*\
  !*** ./public/js/CartComp.js ***!
  \*******************************/
/***/ (() => {

        eval("Vue.component('cart', {\n  data() {\n    return {\n      imgCartDir: '/img/product_img/prod_thumbs/',\n      cartUrl: '/getBasket.json',\n      cartItems: [],\n      showCart: false\n    };\n  },\n\n  methods: {\n    addProduct(product) {\n      let find = this.cartItems.find(el => el.id_product === product.id_product);\n      console.log(find);\n\n      if (find) {\n        this.$parent.putJson(`/api/cart/${find.id_product}`, {\n          quantity: 1\n        }).then(data => {\n          if (data.result === 1) {\n            find.quantity++;\n          }\n        });\n      } else {\n        let prod = Object.assign({\n          quantity: 1\n        }, product);\n        this.$parent.postJson(`/api/cart`, prod).then(data => {\n          if (data.result === 1) {\n            this.cartItems.push(prod);\n          }\n        });\n      }\n    },\n\n    remove(product) {\n      for (let i = 0; i < this.cartItems.length; i++) {\n        if (this.cartItems[i].id_product === +product.id_product) {\n          this.$parent.deleteJson(`/api/cart/${this.cartItems[i].id_product}`, this.cartItems[i]).then(data => {\n            if (data.result === 1) {\n              this.cartItems[i].quantity -= 1;\n\n              if (this.cartItems[i].quantity === 0) {\n                this.cartItems.splice(i, 1);\n              }\n            }\n          });\n        }\n      }\n    }\n\n  },\n\n  mounted() {\n    // this.$on('remove', this.remove);\n    this.$parent.getJson(`/api/cart`).then(data => {\n      for (let el of data.contents) {\n        this.cartItems.push(el);\n      }\n    });\n  },\n\n  template: `\n<div>\n            <button class=\"btn-cart basket-btn\" type=\"button\" @click=\"showCart = !showCart\"></button>\n            <div class=\"cart-block\" v-show=\"showCart\">\n                <p v-if=\"!cartItems.length\">Cart is empty</p>\n                <cart-item class=\"cart-item\" \n                v-for=\"item of cartItems\" \n                :key=\"item.id_product\"\n                :cart-item=\"item\" \n                :imgCartDir=\"imgCartDir\"\n                @remove=\"remove\">\n                </cart-item>\n            </div>\n</div>`\n});\nVue.component('cart-item', {\n  props: ['cartItem', 'imgCartDir'],\n\n  data() {\n    let cart_img = this.imgCartDir + this.cartItem.id_product + \".png\";\n    return {\n      cart_img\n    };\n  },\n\n  template: `\n                <div class=\"cart-item\">\n                    <div class=\"product-bio\">\n                        <img :src=\"this.cart_img\" alt=\"Some image\">\n                        <div class=\"product-desc\">\n                            <p class=\"product-title\">{{cartItem.product_name}}</p>\n                            <p class=\"product-quantity\">Quantity: {{cartItem.quantity}}</p>\n                            <p class=\"product-single-price\">$ {{cartItem.price}} each</p>\n                        </div>\n                    </div>\n                    <div class=\"right-block\">\n                        <p class=\"product-price\">{{cartItem.quantity*cartItem.price}}</p>\n                        <button class=\"del-btn\" @click=\"$emit('remove', cartItem)\">&times;</button>\n                    </div>\n                </div>\n    `\n});\n\n//# sourceURL=webpack://internet_shop/./public/js/CartComp.js?");

        /***/
      }),

/***/ "./public/js/ErrorComp.js":
/*!********************************!*\
  !*** ./public/js/ErrorComp.js ***!
  \********************************/
/***/ (() => {

        eval("Vue.component('error', {\n  data() {\n    return {\n      text: ''\n    };\n  },\n\n  methods: {\n    setError(error) {\n      this.text = error;\n    }\n\n  },\n  computed: {\n    isVisible() {\n      return this.text !== '';\n    }\n\n  },\n  template: `\n    <div class=\"error-block\" v-if=\"isVisible\"> \n        <p class=\"error-msg\">\n            <button class=\"close-btn\" @click=\"setError('')\">&times;</button>\n            {{ text }}\n        </p>\n    </div>\n    `\n});\n\n//# sourceURL=webpack://internet_shop/./public/js/ErrorComp.js?");

        /***/
      }),

/***/ "./public/js/FilterComp.js":
/*!*********************************!*\
  !*** ./public/js/FilterComp.js ***!
  \*********************************/
/***/ (() => {

        eval("Vue.component('filter-el', {\n  data() {\n    return {\n      userSearch: ''\n    };\n  },\n\n  template: `\n    <form action=\"#\" class=\"search-form\" @submit.prevent=\"$parent.$refs.products.filter(userSearch)\">\n                <input type=\"text\" class=\"search-field\" v-model=\"userSearch\">\n                <button class=\"btn-search\" type=\"submit\"></button>\n            </form>\n    `\n});\n\n//# sourceURL=webpack://internet_shop/./public/js/FilterComp.js?");

        /***/
      }),

/***/ "./public/js/ProducComp.js":
/*!*********************************!*\
  !*** ./public/js/ProducComp.js ***!
  \*********************************/
/***/ (() => {

        eval("Vue.component('products', {\n  data() {\n    return {\n      catalogUrl: '/catalogData.json',\n      products: [],\n      filtered: [],\n      imgCatalog: '/img/product_img/'\n    };\n  },\n\n  methods: {\n    filter(value) {\n      let regexp = new RegExp(value, 'i');\n      this.filtered = this.products.filter(el => regexp.test(el.product_name));\n    }\n\n  },\n\n  mounted() {\n    this.$parent.getJson(`/api/products`).then(data => {\n      for (let el of data) {\n        this.products.push(el);\n        this.filtered.push(el);\n      }\n    });\n  },\n\n  template: `\n        <div class=\"products latest-proj-flex-container\">\n            <product v-for=\"item of filtered\" :key=\"item.id_product\" :imgCatalog=\"imgCatalog\" :product=\"item\"></product>\n        </div>\n    `\n});\nVue.component('product', {\n  props: ['product', 'imgCatalog'],\n\n  data() {\n    let product_img = this.imgCatalog + this.product.id_product + \".jpg\";\n    return {\n      product_img\n    };\n  },\n\n  template: `\n    <div class=\"product-item latest-proj-article-preview\">\n                \n            <div class=\"card\">\n                <div class=\"card-image\">\n                    <figure class=\"image is-4by4\">\n                        <img :src=\"this.product_img\" alt=\"Placeholder image\">\n                    </figure>\n                </div>\n                <div class=\"card-content\">\n                    <div class=\"media\">\n                    <div class=\"media-content\">\n                        <p class=\"title is-4 my-0\">{{product.product_name}}</p>\n                        <p class=\"subtitle is-6 my-0\">{{product.product_cat}}</p>\n                        <p class=\"subtitle is-6 my-0\">{{product.price}} RUB</p>\n                    </div>\n                </div>\n                      \n                <footer class=\"card-footer\">\n                    <button class=\"buy-btn slider-link-btn button is-link is-small is-outlined\" @click=\"$root.$refs.cart.addProduct(product)\"><span class=\"slider-link-btn-txt\">Купить</span></button>\n                </footer>\n            </div>\n    `\n});\n\n//# sourceURL=webpack://internet_shop/./public/js/ProducComp.js?");

        /***/
      }),

    /******/
  });
/************************************************************************/
/******/
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./public/js/main.js"]();
/******/ 	__webpack_modules__["./public/js/CartComp.js"]();
/******/ 	__webpack_modules__["./public/js/ErrorComp.js"]();
/******/ 	__webpack_modules__["./public/js/FilterComp.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/js/ProducComp.js"]();
  /******/
  /******/
})()
  ;