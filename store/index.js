export const actions = {
  async nuxtServerInit({ dispatch, commit, getters }) {
    await dispatch('contentful/initialize')
  },
}
