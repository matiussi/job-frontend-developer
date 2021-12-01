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

</style>
