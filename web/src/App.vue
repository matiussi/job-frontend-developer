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
}
* {
   box-sizing: border-box;
   /* text-transform: uppercase; */
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
button {
   cursor: pointer;

   &:focus {
      outline: 2px solid #725bc2;
   }
}
</style>
