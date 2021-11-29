import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Unicon from 'vue-unicons'
import { uniShoppingCart, uniBars, uniSearch, uniMultiply, uniStar, uniStarSolid } from 'vue-unicons/dist/icons'

Unicon.add([uniShoppingCart, uniBars, uniSearch, uniMultiply, uniStar, uniStarSolid])

createApp(App)
   .use(store)
   .use(router)
   .use(Unicon, {
      height: 28,
      width: 28 
   })
   .mount('#app')
