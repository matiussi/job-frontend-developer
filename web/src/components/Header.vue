<template>
   <header :class="showSearchBar ? 'searchbar-open' : ''">
      <nav>
         <button class="toggle-menu" @click="showMenu = true">
            <unicon name="bars"></unicon>
         </button>
         <router-link class="logo" to="/" v-if="isDesktop">
            <img src="../assets/logo.svg" />
         </router-link>
         <transition name="slide-right">
            <ul
               v-if="showMenu || isDesktop"
               :class="isDesktop ? 'categories-desktop' : 'categories-mobile'"
            >
               <div class="categories-top" v-if="!isDesktop">
                  <button class="close-menu" @click="showMenu = false">
                     <unicon name="multiply"></unicon>
                  </button>
               </div>
               <li
                  class="category"
                  v-for="(category, index) in categories"
                  :key="index"
               >
                  <router-link
                     @click="showMenu = false"
                     :to="`/category/${category}`"
                     >{{ category }}</router-link
                  >
               </li>
            </ul>
         </transition>
         <router-link class="logo" to="/" v-if="!isDesktop">
            <img src="../assets/logo.svg" />
         </router-link>
         <div class="button-wrapper">
            <button
               @click="
                  showSearchBar = true;
                  showMenu = false;
                  setFocus();
               "
            >
               <unicon name="search"></unicon>
            </button>
            <button
               class="shopping-cart-button"
               @click="showShoppingCart = true"
            >
               <unicon name="shopping-cart"></unicon>
               <span class="quantity">{{ productsQuantity }}</span>
            </button>
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
            <input
               ref="inputFocus"
               type="text"
               placeholder="Search for products"
            />
            <button class="close-searchbar" @click="showSearchBar = false">
               <unicon name="multiply"></unicon>
            </button>
         </form>
      </nav>
   </header>
   <router-view />
   <div
      v-if="showMenu || showSearchBar || showShoppingCart"
      class="gray-bg"
      :style="showMenu ? 'z-index: 2' : ''"
      @click="
         showMenu = false;
         showSearchBar = false;
         showShoppingCart = false;
      "
   ></div>
   <transition name="slide-left">
      <ShoppingCart
         v-if="showShoppingCart"
         @callCloseShoppingCart="closeShoppingCart"
      />
   </transition>
</template>
<script>
import ShoppingCart from "../components/ShoppingCart.vue";

export default {
   name: "Header",
   components: {
      ShoppingCart,
   },
   data() {
      return {
         showMenu: false,
         showSearchBar: false,
         showShoppingCart: false,
         inputFocus: null,
         isDesktop: false,
         windowWidth: window.innerWidth,
         categories: [
            "electronics",
            "jewelery",
            "men's clothing",
            "women's clothing",
         ],
      };
   },
   created() {
      this.$nextTick(() => {
         window.addEventListener("resize", this.onResize);
      });
      this.onResize();
   },
   beforeUnmount() {
      window.removeEventListener("resize", this.onResize);
   },
   computed: {
      productsQuantity() {
         return this.$store.getters.productsQuantity;
      },
   },
   methods: {
      onResize() {
         this.windowWidth = window.innerWidth;
         this.isDesktop = this.windowWidth > 991 ? true : false;
      },
      setFocus: function () {
         this.$nextTick(() => this.$refs.inputFocus.focus());
      },
      closeShoppingCart() {
         this.showShoppingCart = false;
      },
   },
   watch: {
      showShoppingCart: function () {
         if (this.showShoppingCart) {
            document.documentElement.style.overflow = "hidden";
            return;
         }

         document.documentElement.style.overflow = "auto";
      },
      showMenu: function () {
         if (this.showMenu) {
            document.documentElement.style.overflow = "hidden";
            return;
         }

         document.documentElement.style.overflow = "auto";
      },
      showSearchBar: function () {
         if (this.showSearchBar) {
            document.documentElement.style.overflow = "hidden";
            return;
         }

         document.documentElement.style.overflow = "auto";
      },
   },
};
</script>

<style scoped lang="scss">
header {
   width: 100%;
   height: 60px;
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

      .logo {
         padding: 0px 15px;
      }
      button {
         padding: 5px;
         margin: 5px;
      }

      .categories-mobile {
         height: 100vh;
         width: 80%;
         position: absolute;
         z-index: 4;
         top: 0;
         left: 0;
         display: flex;
         flex-direction: column;
         background: white;

         .categories-top {
            display: flex;
            justify-content: flex-end;
         }
         .category {
            font-size: 20px;
            border-bottom: 1px solid #e6e6e6;
            width: 100%;
            -webkit-animation: slide-bottom 0.5s
                  cubic-bezier(0.25, 0.46, 0.45, 0.94) both,
               fade-in 0.5s;
            animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
                  both,
               fade-in 0.5s;
            animation-delay: 0.5s;
            a {
               display: block;
               padding: 30px 0px 30px 15px;
            }
         }
      }

      .button-wrapper {
         display: flex;
         align-items: center;

         .shopping-cart-button {
            position: relative;
            padding-right: 15px;

            .quantity {
               background-color: #1f1d36;
               color: #fff;
               height: 25px;
               width: 25px;
               border-radius: 50%;

               display: flex;
               align-items: center;
               justify-content: center;
               position: absolute;
               top: 0;
               right: 0;
            }
         }
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
         height: 60px;
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
.searchbar-open {
   position: relative;
   z-index: 3;
}
.gray-bg {
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
   a,
   button {
      &:hover,
      &:focus {
         font-weight: 500;
         -webkit-animation: scale-up-center 0.4s
            cubic-bezier(0.39, 0.575, 0.565, 1) both;
         animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
            both;
      }
   }
   .categories-desktop {
      font-size: 16px;
      width: 80%;

      display: flex;
      justify-content: space-around;
      align-items: center;

      .category {
         height: 80px;
         display: flex;
         align-items: center;

         a {
            padding: 20px 10px;
         }
      }
   }
   .searchbar {
      border-bottom: 1px solid #c6c6c6;
      max-width: 1300px;
   }
}
/* Animations  */
.slide-right-enter-active {
   -webkit-animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
   animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.slide-right-leave-active {
   -webkit-animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      reverse;
   animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse;
}

.slide-left-enter-active {
   -webkit-animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
   animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.slide-left-leave-active {
   -webkit-animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      reverse;
   animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse;
}
</style>
