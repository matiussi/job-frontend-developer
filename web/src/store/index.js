import { createStore } from 'vuex'

export default createStore({
   state: {
      cart: []
   },
   mutations: {
      addProduct(state, payload) {
         state.cart.push(payload)
      },
      incrementQuantity(state, payload) {
         payload.cartItem.quantity += payload.quantity;
      },
      decrementQuantity(state, product) {
         product.quantity--;
      },
      removeFromCart(state, cartItem) {
         state.cart = state.cart.filter(item => item !== cartItem)

      }
   },
   actions: {
      addToCart(context, payload) {
         const cartItem = context.state.cart.find(item => {
            return item.product.id === payload.product.id
         });
         if (!cartItem) {
            context.commit('addProduct', payload);
         } else {
            const increment = {
               cartItem,
               'quantity': payload.quantity
            }
            context.commit('incrementQuantity', increment);
         }
      },
      decrementQuantity(context, payload) {
         const cartItem = context.state.cart.find(item => {
            return item.product.id === payload.product.id
         });
         if (cartItem.quantity > 1) {
            context.commit('decrementQuantity', cartItem);
         } else {
            context.commit('removeFromCart', cartItem);
         }
      }
   },
   getters: {
      cartTotal(state) {

         let total = 0;
         state.cart.map(cartItem => {
            const { product, quantity } = cartItem;
            total += product.price * quantity
         });

         return total;
      },
   }

})
