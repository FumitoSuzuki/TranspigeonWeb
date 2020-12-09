export const state = () => ({
  selectLimit: 5,
  selectTags: [],
})

export const getters = {}

export const actions = {
  initialize({ commit, state }, payload) {
    if (state.selectTags.length) return
    const tags = payload.slice(0, state.selectLimit)
    commit('selectTags', tags)
  },
}

export const mutations = {
  selectTags(state, payload) {
    state.selectTags = payload
  },
  selectLimit(state, number) {
    state.selectLimit = number
  },
}
