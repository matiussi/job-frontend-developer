<template>
  <Header />
</template>

<script>

import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}
* {
  box-sizing: border-box;
}
body{
  margin: 0;
  padding: 0;
}

a,
button, 
ul, 
li{
  all: unset;
}
a, button{
  cursor: pointer;
  &:focus{
    outline: 2px solid #725bc2;;
  }
}
</style>
