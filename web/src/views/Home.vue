<template>
  <main>
    <ProductsList page="Home" />
  </main>
</template>

<script>
import ProductsList from '../components/ProductsList.vue';

export default {
  name: 'Home',
  components:{
    ProductsList
  }
}
</script>
