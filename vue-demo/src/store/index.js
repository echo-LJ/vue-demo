import Vue from 'vue'
import Vuex from 'vuex'
import regions from './modules/regions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    regions
  }
})