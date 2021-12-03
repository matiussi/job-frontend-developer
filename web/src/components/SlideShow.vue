<template>
   <div class="carousel">
      <div
         class="image-container"
         v-for="(image, index) in images"
         :key="index"
      >
         <img v-show="currentIndex == index" class="image" :src="image" />
      </div>
      <!-- <button class="prev" @click="prev">&lt;</button>
      <button class="next" @click="next">&gt;</button> -->
   </div>
</template>

<script>
export default {
   name: "Home",
   data() {
      return {
         images: [
            require("@/assets/img/electronics.jpg"),
            require("@/assets/img/jewelery.jpg"),
            require("@/assets/img/men.jpg"),
            require("@/assets/img/women.jpg"),
         ],
         currentIndex: 0,
      };
   },
   mounted(){
      this.start();
   },
   methods: {
      start() {
         setInterval(() =>{
            this.currentIndex++
         }, 6000)
      },
      // next() {
      //    this.currentIndex++;
      // },
      // prev() {
      //    this.currentIndex--;
      // },
   },
   watch: {
      currentIndex: function () {
         if (this.currentIndex >= this.images.length) {
            this.currentIndex = 0;
         }
         if (this.currentIndex < 0) {
            this.currentIndex = this.images.length - 1;
         }
      },
     
   },
};
</script>

<style scoped lang="scss">
.carousel {
   width: 100%;
   height: 30vh;
   max-width: 1300px;
   overflow: hidden;
   display: flex;
   align-items: center;
   justify-content: center;
   -webkit-animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

   .image {
      width: 100%;
      height: 100%;
      display: inline-block;
 
      -webkit-animation: kenburns-top 6s ease-out both;
      animation: kenburns-top 6s ease-out both;
   }
   .next,
   .prev {
      position: absolute;
      top: 50%;
      width: 60px;
      height: 60px;
      background-color: #fff;
      color: #1f1d36;
      font-weight: 500;
      font-size: 30px;
   }
   .prev{
      left: 0;
   }
   .next {
      right: 0;
   }
}

@-webkit-keyframes kenburns-top {
   0% {
      -webkit-transform: scale(1) translateY(0);
      transform: scale(1) translateY(0);
      -webkit-transform-origin: 50% 16%;
      transform-origin: 50% 16%;
      opacity: 0;
   }
   75%{
      opacity: 1;
   }
   100% {
      -webkit-transform: scale(1.1) translateY(-15px);
      transform: scale(1.1) translateY(-15px);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 0.5;
   }
}
@keyframes kenburns-top {
   0% {
      -webkit-transform: scale(1) translateY(0);
      transform: scale(1) translateY(0);
      -webkit-transform-origin: 50% 16%;
      transform-origin: 50% 16%;
   }
   75%{
      opacity: 1;
   }
   100% {
      -webkit-transform: scale(1.1) translateY(-15px);
      transform: scale(1.1) translateY(-15px);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 0;
   }
}
@media screen and(min-width: 992px ) {
   .carousel{
      height: 700px;
   }
}
</style>
