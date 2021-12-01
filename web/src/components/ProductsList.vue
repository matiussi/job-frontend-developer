<template>
   <div class="list" v-if="!loading && products">
      <div class="select-container">
         <label for="select">Order by </label>
         <select
            id="select"
            name="select"
            @change="orderProducts(orderBy)"
            v-model="orderBy"
         >
            <option disabled selected value="">Select</option>
            <option value="title,asc">Name, A-Z</option>
            <option value="title,desc">Name, Z-A</option>
            <option value="price,asc">Price, lowest</option>
            <option value="price,desc">Price, highest</option>
            <option value="rating,asc">Rating, lowest</option>
            <option value="rating,desc">Rating, highest</option>
         </select>
      </div>
      <ul class="products-wrapper">
         <Product
            v-bind="product"
            v-for="product in products"
            :key="product.key"
         />
      </ul>
   </div>
   <Loading v-if="loading" />
   <div v-if="!loading && !products">No products were found...</div>
</template>

<script>
import { getAllProducts, getProductsByCategory } from "../api/fakestore";
import orderItems from "../utils/orderItems";
import Loading from "./Loading.vue";
import Product from "./Product.vue";

export default {
   name: "ProductsList",
   components: {
      Product,
      Loading,
   },
   props: {
      page: String,
   },
   data() {
      return {
         products: [],
         loading: false,
         orderBy: "",
      };
   },
   created() {
      this.fetchData();
   },
   watch: {
      $route: "fetchData",
   },
   methods: {
      async fetchData() {
         this.loading = true;
         if (this.page == "Home") {
            this.products = await getAllProducts();
         } else {
            this.products = [];
            this.products = await getProductsByCategory(this.$route.params.id);
         }
         this.loading = false;
      },
      orderProducts() {
         this.products = orderItems(this.products, this.orderBy);
      },
   },
};
</script>

<style scoped lang="scss">
.products-wrapper {
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}
.select-container {
   width: 100%;
   height: 50px;

   display: flex;
   justify-content: flex-end;
   align-items: center;
   padding: 15px;
   margin: 30px 0px 50px 0px;

   label {
      margin-right: 10px;
   }
   select {
      width: 160px;
      height: 40px;
      padding-left: 10px;
      background-color: #fff;
      border: 1px solid #c6c6c6;

      font-size: 16px;
      font-family: "Raleway";
   }
}
</style>
