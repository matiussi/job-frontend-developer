<template>
   <main> 
      <div class="title">
         <h1 class="category">{{ $route.params.id }}</h1>
      </div>
      <ProductsList page="Category"/>
   </main>
</template>

<script>
import ProductsList from '../components/ProductsList.vue';

export default {
  name: 'Category',
  components:{
    ProductsList
  }
}
</script>
<style scoped lang="scss">
   .category{
      padding-left: 15px;
      text-transform: uppercase;
      margin: 0;
   }
</style>
