<template>
   <header :class="showSearchBar ? 'searchbar-open': ''">
      <nav>
         <button class="toggle-menu" @click="showMenu = true">
            <unicon name="bars"></unicon>
         </button>
         <router-link class="logo" to="/" v-if="isDesktop">
            <img src="../assets/logo.svg" />
         </router-link>
         <ul v-if="showMenu || isDesktop" :class="isDesktop ? 'categories-desktop' : 'categories-mobile'">
            <div class="categories-top" v-if="!isDesktop">
               <button class="close-menu" @click="showMenu = false">
                  <unicon name="multiply"></unicon>
               </button>
            </div>
            <li class="category">
               <router-link to="/about">Category 1</router-link>
            </li>
            <li class="category">
               <router-link to="/about">Category 2</router-link>
            </li>
            <li class="category">
               <router-link to="/about">Category 3</router-link>
            </li>
            <li class="category">
               <router-link to="/about">Category 4</router-link>
            </li>
         </ul>
         <router-link class="logo" to="/" v-if="!isDesktop">
            <img src="../assets/logo.svg" />
         </router-link>

         <div class="button-wrapper">
            <button
               @click="
                  showSearchBar = true;
                  showMenu = false;
               "
            >
               <unicon name="search"></unicon>
            </button>
            <button><unicon name="shopping-cart"></unicon></button>
         </div>
         <form
            v-on:submit.prevent="onSubmit"
            v-if="showSearchBar"
            class="searchbar"
            role="search"
         >
            <button @click="showSearchBar = true">
               <unicon name="search"></unicon>
            </button>
            <input ref="inputFocus" type="text" placeholder="Buscar produtos" />
            <button class="close-searchbar" @click="showSearchBar = false">
               <unicon name="multiply"></unicon>
            </button>
         </form>
      </nav>
   </header>
   <router-view />
   <div 
      v-if="showMenu || showSearchBar" 
      class="gray-bg" 
      :style="showMenu ? 'z-index: 2': ''"
      @click="showMenu = false; showSearchBar = false"
   >
   </div>
</template>
<script>
import { nextTick, onUpdated, ref, onMounted, onUnmounted, computed} from "vue";

export default {
   setup() {
      const showMenu = ref(false);
      const showSearchBar = ref(false);

      const inputFocus = ref(null);

      let windowWidth = ref(window.innerWidth);
      
      const onWidthChange = () => {
         return windowWidth.value = window.innerWidth
      }
      const isDesktop = computed(() => {
         return windowWidth.value > 991 ? true : false
      })
      onMounted(() => {
         return window.addEventListener('resize', onWidthChange)
      })
      onUnmounted(() => {
         return window.removeEventListener('resize', onWidthChange)
      })
  
      onUpdated(() => {
         nextTick(() => {
            if (inputFocus.value) {
               inputFocus.value.focus();
            }
         });
      });

      return {
         showMenu,
         showSearchBar,
         inputFocus,
         isDesktop
      };
   }
};
</script>

<style scoped lang="scss">
header {
   width: 100%;
   height: 80px;
   border-bottom: 1px solid #c6c6c6;
   background-color: #fff;
   display: flex;
   align-items: center;
   justify-content: center;
   
   nav {
      width: 100%;
      max-width: 1300px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      .logo{
         padding: 0px 15px;
      }
      button {
         padding: 5px;
         margin: 5px;
      }

      .categories-mobile{
         height: 100vh;
         width: 80%;
         position: absolute;
         z-index: 4;
         top: 0;
         left: 0;
         display: flex;
         flex-direction: column;
         background: white;
         border-right: 2px solid #c6c6c6;

         .categories-top{
            display: flex;
            justify-content: flex-end;
         }
         .category {
            font-size: 20px;
            border-bottom: 1px solid #e6e6e6;
            width: 100%;
            a {
               display: block;
               padding: 30px 0px 30px 15px;
            }
         }
      }

      .button-wrapper{
         display: flex;
         align-items: center;
      }
      .show {
         display: none;
      }
      .categories .show {
         display: flex;
      }
      .searchbar {
         position: absolute;
         background-color: #fff;
         width: 100%;
         height: 80px;
         display: flex;
         align-items: center;
         justify-content: center;

         input {
            height: 100%;
            border: none;
            padding-left: 15px;
            outline: none;
            width: 90%;
            font-size: 16px;
         }
      }
   }
}
.searchbar-open{
   position: absolute;
   z-index: 3;
}
.gray-bg{
   position: fixed;
   top: 0;
   left: 0;
   height: 100vh;
   width: 100%;
   background: #c6c6c6;
   opacity: 0.4;
}

@media screen and (min-width: 992px) {
   .toggle-menu {
      display: none;
   }
   .categories-desktop{
      font-size: 18px;
      width: 80%;

      display: flex;
      justify-content: space-around;
      align-items: center;

      .category{
         height: 80px;
         display: flex;
         align-items: center;
         a{
            padding: 20px 10px;
         }
      }
   }
   .searchbar{
      border-bottom: 1px solid #c6c6c6;
      max-width: 1300px;
   }
}
</style>
