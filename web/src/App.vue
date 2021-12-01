<template>
   <Header />
</template>

<script>
import Header from "@/components/Header.vue";

export default {
   name: "Home",
   components: {
      Header,
   },
};
</script>

<style lang="scss">
#app {
   font-family: 'Raleway', Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
}
* {
   box-sizing: border-box;
   color: #1F1D36;
}

body {
   margin: 0;
   padding: 0;
}
main {
   margin: 0 auto;
   padding: 40px 0px;
   width: 100%;
   max-width: 1300px;
}

a,
button,
ul,
li,
figure {
   all: unset;
}
a,
button,
select {
   cursor: pointer;

   &:focus {
      outline: 2px solid #2C272E;
   }
}

button{
   display: flex;
   align-items: center;
   justify-content: center;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
.category{
   text-transform: uppercase;
}

@media screen and (min-width: 992px){
   main{
      padding-top: 80px;
   }
}


@-webkit-keyframes slide-right {
  0% {
    -webkit-transform: translateX(-999px);
            transform: translateX(-999px);
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
}
@keyframes slide-right {
  0% {
    -webkit-transform: translateX(-999px);
            transform: translateX(-999px);
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
}

@-webkit-keyframes slide-left {
  0% {
    -webkit-transform: translateX(999px);
            transform: translateX(999px);
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
}
@keyframes slide-left {
  0% {
    -webkit-transform: translateX(999px);
            transform: translateX(999px);
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
}

@-webkit-keyframes slide-bottom {
  0% {
    -webkit-transform: translateY(100px);
            transform: translateY(100px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-bottom {
  0% {
    -webkit-transform: translateY(100px);
            transform: translateY(100px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}

@-webkit-keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes slide-out-right {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
}
@keyframes slide-out-right {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
}
@-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    -webkit-transform: scale(1.1);
            transform: scale(1.1);
  }
}
@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    -webkit-transform: scale(1.1);
            transform: scale(1.1);
  }
}
</style>
