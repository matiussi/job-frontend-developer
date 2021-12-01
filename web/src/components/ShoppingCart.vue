<template>
   <aside class="shopping-cart">
      <div class="shopping-cart-top">
         <h1>SHOPPING CART</h1>
         <button @click="$emit('callCloseShoppingCart')">
            <unicon name="multiply"></unicon>
         </button>
      </div>
      <div class="cart-container" v-if="this.$store.state.cart.length > 0">
         <ul class="cart-items">
            <li
               class="item"
               v-for="item in this.$store.state.cart"
               :key="item.product.id"
            >
               <div class="image">
                  <img :src="item.product.image" :alt="item.product.id" />
               </div>
               <div class="item-info">
                  <div class="title">
                     {{ item.product.title }}
                  </div>
                  <div class="cart-options">
                     <button
                        class="operation"
                        @click="decrementQuantity(item.product)"
                     >
                        -
                     </button>
                     <input
                        class="quantity"
                        type="number"
                        :value="item.quantity"
                     />
                     <button
                        class="operation"
                        @click="incrementQuantity(item.product)"
                     >
                        +
                     </button>
                     <div class="price">{{ currency(item.product.price) }}</div>
                  </div>
               </div>
            </li>
         </ul>
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
import currency from '../utils/currency';

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
      currency(value){
         return currency(value);
      }
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
      align-items: center;
      justify-content: space-between;
   }

   .cart-container{
      height: 60%;
   }
   .cart-items {
      overflow-y: scroll;
      height: 80%;
      width: 100%;
      margin: 50px 0px;

      display: flex;
      flex-direction: column;

      .item {
         height: 140px;
         width: 100%;
         display: flex;
         align-items: flex-start;
         margin-bottom: 20px;
         border-bottom: 1px solid #c6c6c6;
         padding: 10px 0;

         .image {
            width: 80px;
            height: 120px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-right: 15px;

            img {
               display: inline-block;
               max-width: 80px;
               max-height: 120px;
               align-self: center;
            }
         }

         .item-info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            width: 100%;

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

@media screen and (min-width: 992px) {
   .shopping-cart {
      width: 500px;
      right: 0;
      left: unset;

      .cart-items{
         height: 90%;
      }
   }
}
</style>