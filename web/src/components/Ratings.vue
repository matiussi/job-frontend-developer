<template>
   <div class="rating-wrapper">
      <unicon
         v-for="index in 5"
         :key="index"
         name="star"
         :fill="Math.trunc(rate) >= index ? '#1F1D36' : '#c6c6c6'"
         icon-style="solid"
         :width="size"
         :height="size"
      >
      </unicon>
      <span class="rating">{{ rate }}</span>
   </div>
</template>

<script>
export default {
   name: "Ratings",
   props:{
      rate: Number,
      size: Number
   }
}
</script>