import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// import axios from 'axios'
export default createStore({
  state: {
    serverPath:'https://158.101.150.132:8008',
    cart:[]
  },
  getters: {
    currentQuantity(state) {
      let total = 0;
      for(let i =0; i< state.cart.length; i++) {
        total += state.cart[i].number
      }
      return total
    }
  },
  mutations: {
    addCart(state, data){
      let isNewProduct = true;
      console.log(data);
      state.cart.map(function(product){
        console.log(product);
        if(product.id === data.product.id){
          product.number += data.number;
          isNewProduct = false;
        }
        return product;
      })
      console.log(isNewProduct);
      if(isNewProduct){
        let newProduct = data.product;
        newProduct.number = data.number;
        state.cart.push(newProduct);
      }

      console.log(state.cart);
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    createPersistedState()
  ]
})
