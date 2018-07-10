// import * as types from '../mutation-types'
// import api from './../../src/common/regions';

// // initial state
// const state = {
//     regions: {}
// }

// // getters
// const getters = {
//     regions: state => state.regions
// }

// // actions
// const actions = {
//     setUser ({ commit}) {
//         commit(types.REGIONS)
//     }
// }

// // mutations
// const mutations = {
//     [types.REGIONS] (state) {
//         state.regions = state
//     }
// }
import api from './../../fetch/api';
import * as types from './../types.js';

const state = {
  regions: {}
}

const actions = {
  getMineBaseApi({commit}) {
    alert('进入action');
    api.mineBaseMsgApi()
    .then(res => {
        alert('action中调用封装后的axios成功');
        console.log('action中调用封装后的axios成功')
        commit(types.GET_REGIONS, res)
    })
  }
}

const getters = {
    regions: state => state.regions
}

const mutations = {
  [types.GET_REGIONS](state, res) {
    alert('进入mutation');
    state.regions = { ...state.regions, msg: res.data }
    alert('进入mutations修改state成功');
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
