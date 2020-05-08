import Vuex from 'vuex'

export default Vuex.createStore({
  state: {
    count:2
  },
  mutations: {
    ADD:(state)=>{
      state.count++
    }
  },
  actions: {
  },
  modules: {
  }
});
