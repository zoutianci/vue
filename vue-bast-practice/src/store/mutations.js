import * as types from './mutations-types'

export default {
  [types.ADD_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime + parseInt(time)
  },
  // 减少总时间
  [types.DEC_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime - parseInt(time)
  },
  // 新增计划
  [types.SAVE_PLAN] (state, plan) {
    const avatar = 'http://pic21.photophoto.cn/20111225/0005018314205529_b.jpg'
    state.list.push(
      Object.assign({ name: '邹天赐', avatar }, plan)
    )
  },
  // 删除计划
  [types.DELETE_PLAN] (state, idx) {
    state.list.splice(idx, 1)
  }
}
