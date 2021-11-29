<template>
   <main>
      <div v-if="product" class="product-container">
         <div class="image">
            <img :src="product.image" :alt="product.title" />
         </div>
         <div class="info-container">
            <p class="category">{{ product.category }}</p>
            <h1 class="title">{{ product.title }}</h1>
            <div class="raring-wrapper">
               <span v-for="index in 5" :key="index">
                  <unicon
                     name="star"
                     fill="black"
                     icon-style="solid"
                     size="10"
                     v-if="Math.trunc(product.rating.rate) >= index"
                  >
                  </unicon>
                  <unicon v-else name="star" fill="black"> </unicon>
               </span>
               <span class="rating">{{ product.rating.rate }}</span>
            </div>
            <p class="price">$ {{ product.price }}</p>

            <div class="description">
               <p>Description</p>
               {{ product.description }}
            </div>
         </div>
      </div>
      <div v-if="loading">Loading....</div>
      <div v-if="!loading && !product">Something went wrong...</div>
   </main>
</template>

<script>
import { getProduct } from "../api/fakestore";

export default {
   name: "Product",

   data() {
      return {
         product: null,
         loading: false,
      };
   },
   mounted() {
      this.fetchData();
   },
   methods: {
      async fetchData() {
         this.loading = true;
         this.product = await getProduct(this.$route.params.id);
         this.loading = false;
      },
   },
};
</script>
<style scoped lang="scss">

.product-container{
   padding: 30px;
   width: 100%;
   /* background-color: tan; */

   .image{
      width: 100%;
      height: 300px;
      /* background: turquoise; */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img{
         display: inline-block;
         max-width: 100%;
         /* height: auto; */
         max-height: 300px;
         align-self: center;
      }
   }

}
</style>
