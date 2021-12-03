<template>
   <main>
      <SlideShow />
      <ProductsList page="Home" />
   </main>
</template>

<script>
import ProductsList from "../components/ProductsList.vue";
import SlideShow from "../components/SlideShow.vue";

export default {
   name: "Home",
   components: {
      ProductsList,
      SlideShow,
   },
};
</script>
