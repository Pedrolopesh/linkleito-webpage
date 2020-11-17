import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    urlState: process.env.VUE_APP_SERVICES_URL,
  },

  mutations: {
    setUrlState(state, newSate){
      state.urlState = newSate
    },
  },
  actions: {
  },
  modules: {
  }
})
