import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // store state
    isPageBack: false // 页面切换 out true  in false
  },
  actions: {},
  mutations: {
    setIsPageBack (state, data) {
      state.isPageBack = data
    }
  },
  getters: {
    isPageBack (state) {
      return state.isPageBack
    }
  }
})
