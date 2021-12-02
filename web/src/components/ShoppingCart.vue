<template>
   <aside class="shopping-cart">
      <div class="shopping-cart-top">
         <button 
            class="close-cart" 
            @click="$emit('callCloseShoppingCart')"
            aria-label="Close shopping cart"
         >
            <unicon name="multiply"></unicon>
         </button>
      </div>
      <h1>SHOPPING CART</h1>
      <div class="cart-container" v-if="this.$store.state.cart.length > 0">
         <transition-group tag="ul" class="cart-items" name="cart-items">
            <li
               class="item"
               v-for="item in this.$store.state.cart"
               :key="item.product.id"
            >
               <div class="image">
                  <img :src="item.product.image" :alt="item.product.title" />
               </div>
               <div class="item-info">
                  <div class="title">
                     {{ item.product.title }}
                  </div>
                  <div class="cart-options">
                     <button
                        class="operation"
                        @click="decrementQuantity(item.product)"
                        aria-label="Decrease product quantity"
                     >
                        -
                     </button>
                     <input
                        class="quantity"
                        type="number"
                        :value="item.quantity"
                        aria-label="Product quantity"
                     />
                     <button
                        class="operation"
                        @click="incrementQuantity(item.product)"
                        aria-label="Increase product quantity"
                     >
                        +
                     </button>
                      <button
                        class="remove-from-cart"
                        @click="removeFromCart(item.product)"
                        aria-label="Remove product from cart"
                     >
                        <unicon name="trash"/>
                     </button>
                     <div class="price">
                        {{ currency(item.product.price) }}
                     </div>
                  </div>
               </div>
            </li>
         </transition-group>
         <div class="shopping-cart-bottom">
            <div class="subtotal">
               <span>SUBTOTAL</span>
               <span>{{ currency(total) }}</span>
            </div>
            <button class="checkout">CHECK OUT</button>
         </div>
      </div>
      <div v-else class="empty-cart">
         <p>Your shopping cart is empty :(</p>
      </div>
   </aside>
</template>

<script>
import currency from "../utils/currency";

export default {
   name: "ShoppingCart",
   data() {
      return {};
   },
   computed: {
      total() {
         return this.$store.getters.cartTotal;
      },
   },
   methods: {
      incrementQuantity(product) {
         const payload = {
            product: product,
            quantity: 1,
         };
         this.$store.dispatch("addToCart", payload);
      },
      decrementQuantity(product) {
         const payload = {
            product: product,
            quantity: 1,
         };
         this.$store.dispatch("decrementQuantity", payload);
      },
      removeFromCart(product){
         this.$store.dispatch("removeFromCart", product);
      },
      currency(value) {
         return currency(value);
      },
   },
};
</script>

<style scoped lang="scss">
.shopping-cart {
   position: fixed;
   top: 0;
   left: 0;
   z-index: 5;
   height: 100%;
   width: 100%;
   background-color: #fff;
   padding: 15px;

   .shopping-cart-top {
      display: flex;
      justify-content: flex-end;
   }
   .close-cart {
      position: relative;
      right: 0;
   }
   .cart-container {
      height: 60%;
   }
   .cart-items {
      overflow-y: scroll;
      overflow-x: hidden;
      height: 80%;
      width: 100%;
      margin: 50px 0px;

      display: flex;
      flex-direction: column;

      .item {
         height: 100px;
         width: 100%;
         display: flex;
         align-items: flex-start;
         margin-bottom: 20px;
         border-bottom: 1px solid #c6c6c6;
         padding: 10px 0;

         .image {
            width: 80px;
            height: 100px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-right: 15px;

            img {
               display: inline-block;
               max-width: 80px;
               max-height: 100px;
               align-self: center;
            }
         }

         .item-info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            width: 100%;

            .title{
               flex-grow: 1;
            }

            .cart-options {
               display: flex;
               align-items: center;
               justify-content: flex-start;
               height: 30px;
               margin: 5px;

               .operation {
                  height: 28px;
                  width: 28px;
                  border: 1px solid #c6c6c6;
                  font-size: 32px;
               }
               .remove-from-cart{
                  margin-left: 10px;
               }
               .quantity {
                  height: 30px;
                  width: 30px;
                  text-align: center;
                  font-size: 16px;
                  border: 1px solid #c6c6c6;
               }
               .price {
                  flex-grow: 1;
                  text-align: right;
               }
            }
         }
      }
   }

   .shopping-cart-bottom {
      font-size: 20px;
      display: flex;
      flex-direction: column;
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding: 15px;

      .subtotal {
         display: flex;
         justify-content: space-between;
         margin: 10px 0px;
      }
      .checkout {
         background-color: #1f1d36;
         height: 50px;
         color: #fff;
         font-weight: 500;
      }
   }
}
h1,
.cart-items,
.shopping-cart-bottom,
.empty-cart {
   -webkit-animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
         both,
      fade-in 0.5s;
   animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both,
      fade-in 0.5s;
   animation-delay: 0.5s;
}
@media screen and (min-width: 992px) {
   .shopping-cart {
      width: 500px;
      right: 0;
      left: unset;

      .cart-items {
         height: 90%;
      }
   }
}

.cart-items-leave-active {
   -webkit-animation: slide-out-right 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
      both;
   animation: slide-out-right 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}
</style>