<template>
   <div class="loading-container">
      <unicon name="spinner"></unicon>
      <p class="loading">Loading...</p>
   </div>
</template>
<script>
export default {
   name: "Loading",
}
</script>

<style scoped lang="scss">
.loading-container{
   width: 100%;
   height: 50vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   
   .loading{
      font-size: 20px;
   }
   .unicon {
      -webkit-animation: rotate-center 1s ease-in-out infinite;
      animation: rotate-center 1s ease-in-out infinite;
   }
}
</style>