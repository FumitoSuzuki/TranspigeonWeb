export const state = () => ({
  limit: 5,
  relationSlugs: [],
})

export const getters = {
  getRelationItemsFromSlugs(state, getters, rootState, rootGetters) {
    const entries = rootGetters['contentful/allEntries']
    const selects = state.relationSlugs
    const exclusion = rootGetters['contentful/entry'].id

    const selectEntries = entries.filter((entry) => {
      if (entry.id === exclusion) return
      const exists = entry.tags.some((slug) => {
        return selects.some((select) => select === slug)
      })
      if (exists) return entry
    })

    return selectEntries.slice(0, state.limit)
  },
}

export const mutations = {
  setLimit(state, number) {
    state.limit = number
  },
  setRelationSlugs(state, slugs) {
    state.relationSlugs = slugs
  },
}
