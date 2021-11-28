<template>
   <li class="product">
      <router-link to="/about">
         <div class="image">
            <img :src="image" :alt="title" />
         </div>
      </router-link>
      <div class="info">
         <p class="title">{{ truncateString(title) }}</p>
         <p>Ratings: {{rating.rate}}</p>
         <p class="price">$ {{ price }}</p>
      </div>
      <!-- <button class="button">Adicionar ao carrinho</button> -->
   </li>
</template>

<script>
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
   methods: {
      truncateString(str) {
         if (str.length > 40) {
            return str.slice(0, 30) + "...";
         } else {
            return str;
         }
      },
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
   margin: 8px 4px;
   /* border: 1px solid #c6c6c6; */

   a {
      width: 100%;
   }
   .image {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 300px;

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
      .price{
         margin: 0px 0px 10px 0px;
      }
   }
}
@media screen and (min-width: 992px) {
   .product{
      margin: 30px 15px;
   }
}
</style>
