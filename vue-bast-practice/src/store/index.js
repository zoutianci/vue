import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)
const state = {
  totalTime: 100,
  list: [
    {
      name: '邹天赐',
      avatar: '',
      date: '2018-7-10',
      totalTime: '100',
      comment: '7月10日晚上, 在范家新村苦逼的敲代码, 需要坚持100个小时'
    }
  ] 
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
