<template>
   <li class="product">
      <router-link :to="`/product/${id}`">
         <div class="image">
            <img :src="image" :alt="title" />
         </div>
      </router-link>
      <div class="info">
         <div class="title">
            <p >{{ truncateTitle }}</p>
         </div>
         <Ratings 
            :rate="rating.rate"
            :size="18"
         />
         <p class="price">{{currency}}</p>
      </div>
   </li>
</template>

<script>
import Ratings from '../components/Ratings.vue';
import truncateString from '../utils/truncateString';
import currency from '../utils/currency';

export default {
   name: "Product",
   props: {
      id: Number,
      title: String,
      price: Number,
      description: String,
      category: String,
      image: String,
      rating: {
         rate: Number,
         count: Number,
      },
   },
   components:{
      Ratings
   },
   computed: {
      truncateTitle() {
         return truncateString(this.title);
      },
      currency(){
         return currency(this.price);
      }

   },
};
</script>

<style scoped lang="scss">
.product {
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 45%;
   max-width: 300px;
   margin: 12px 4px;
   /* border: 1px solid #c6c6c6; */

   a {
      width: 100%;
      height: 100%;
   }
   .image {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 200px;

      img {
         display: inline-block;
         max-width: 100%;
         max-height: 100%;
      }
   }
   .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-top: 5px;

      .title {
         font-weight: 500;
         padding: 5px;   
      }
      .rating-wrapper {
         display: flex;
         margin: 5px;

         &::v-deep .rating {
            font-size: 14px;
            margin-left: 5px;
         }
      }
      .price {
         font-weight: 700;
         margin: 10px 0px 10px 0px;
      }
   }
}
@media screen and (min-width: 992px) {
   .product {
      margin: 30px 15px;

      .image {
         height: 100%;
         max-height: 300px;
      }
   }
}
</style>
