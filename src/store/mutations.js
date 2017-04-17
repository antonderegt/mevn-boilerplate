import * as types from './mutation-types'

export const mutations = {
  [types.GET_COUNT] (state, count_payload) {
    state.counts = count_payload
  },
  [types.INC_COUNT] (state, count_payload) {
    state.counts.count = count_payload
  },
  [types.API] (state, data) {
    state.joke = data
  }
}
