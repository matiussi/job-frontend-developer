<template>
   <div v-if="loading">
      Loading....
   </div>
   <div class="list" v-if="products">
      <ul class="products-wrapper" >
         <Product v-bind="product" v-for="product in products" :key="product.key"/>
      </ul>
   </div>
</template>

<script>

import { getAllProducts } from "../api/fakestore";
import Product from "./Product.vue";

export default {
   name: "ProductsList",
   components:{
      Product
   },
   data(){
      return{
         products: [],
         loading: false
      }
   },
   async mounted() {
      this.loading = true;
      this.products = await getAllProducts();
      this.loading = false;
   },
};
</script>

<style scoped lang="scss">
.products-wrapper{
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
}
</style>
