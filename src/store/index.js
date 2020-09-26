import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [1,2,3,4,5,6],
    index: 0
  },
  mutations: {
    increaseIndex(state){
        state.index ++
    }
  },
  actions: {
    next(store){
        store.commit('increaseIndex')
    }
  },
  getters: {
    getCurrentNum(state){
        return state.list[state.index]
    }
  },
  modules: {

  }
})
