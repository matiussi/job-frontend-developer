<template>
   <main>
      <div v-if="product" class="product-container">
         <div class="image">
            <img :src="product.image" :alt="product.title" />
         </div>
         <div class="info-container">
            <p class="category">{{ product.category }}</p>
            <h1 class="title">{{ product.title }}</h1>
            <Ratings 
               :rate="product.rating.rate"
               :size="28"
            />
            <p class="price">{{currency}}</p>
         <div class="wrapper">
         <div class="cart-options">
            <button 
               class="operation" 
               @click="decreaseQuantity()"
               :disabled="quantity <= 0 ? true : false"
            >
               -
            </button>
            <input 
               class="quantity" 
               type="number" 
               :value="quantity"
               :v-model="quantity"
               min="0"
               step="1"
            />
            <button class="operation" @click="increaseQuantity()">
               +
            </button>
         </div>
         <button class="add-to-cart" @click="addToCart(product, quantity)">
            ADD TO CART
         </button>
         </div>
         </div>
         <div class="description-container">
            <div class="description">
               <p>Description</p>
            </div>
            <p>{{ product.description }}</p>
         </div>
      </div>
      <div v-if="loading">Loading....</div>
      <div v-if="!loading && !product">Something went wrong...</div>
   </main>
</template>

<script>
import { getProduct } from "../api/fakestore";
import Ratings from '../components/Ratings.vue';
import currency from '../utils/currency';

export default {
   name: "Product",
   components:{
      Ratings
   },
   data() {
      return {
         product: null,
         loading: false,
         quantity: 1
      };
   },

   mounted() {
      this.fetchData();
   },
   computed:{
      currency(){
         return currency(this.product.price);
      }
   },
   methods: {
      async fetchData() {
         this.loading = true;
         this.product = await getProduct(this.$route.params.id);
         this.loading = false;
      },
      increaseQuantity(){
         this.quantity++;
      },
      decreaseQuantity(){
         this.quantity--;
      },
      addToCart(product, quantity){
         const payload = {
            'product': product,
            'quantity': quantity
         }
         this.$store.dispatch('addToCart', payload);
      }, 
   },

};
</script>
<style scoped lang="scss">
.product-container {
   padding: 30px;
   width: 100%;

   .image {
      width: 100%;
      height: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
         display: inline-block;
         max-width: 100%;
         max-height: 300px;
         align-self: center;
      }
   }
   .info-container {
      .rating-wrapper {
         display: flex;
         align-items: center;
         padding: 5px;

         .stars {
            margin-right: 5px;
         }
         &::v-deep .rating {
            font-size: 20px;
            margin-left: 10px;
            margin-top: -5px;
         }
      }
      .price{
         font-size: 24px;
      }
   }
   .cart-options{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 50px;

      .operation{
         height: 48px;
         width: 48px;
         border: 1px solid #c6c6c6;
         font-size: 36px;
         
      }
      .quantity{
         height: 50px;
         width: 50px;
         text-align: center;
         font-size: 20px;
         border: 1px solid #c6c6c6;
      }
   }
   .add-to-cart{
      background-color: #1F1D36;
      color: #fff;
      font-weight: 500;
      font-size: 20px;
      height: 50px;
      width: 100%;
      margin: 20px 0px;
   }
   .description-container{
      margin-top: 60px;
      font-size: 18px;
      width: 100%;

      .description{
         border-bottom: 1px solid #c6c6c6;
         font-weight: 500;
         
      }
   }
}

@media screen and (min-width: 992px) {
   .product-container{
      display: flex;
      flex-wrap: wrap;
      
      .image{
         width: 50%;
      }
      .info-container{
         width: 50%;
         flex-grow: 1;

         .wrapper{
            margin-top: 50px;
         }
      }
   }
}
</style>
