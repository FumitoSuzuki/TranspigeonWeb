export const state = () => ({
  displayLimit: 12,
  pageNumber: 1,
})

export const getters = {
  // entry: (state) => (id) => {
  //   const entries = state.contents.allEntries
  //   return entries.find((entry) => entry.id === id)
  // },
  entry(state) {
    return (id) => {
      const entries = state.contents.allEntries
      return entries.find((entry) => entry.id === id)
    }
  },
  allEntries(state) {
    return state.contents.allEntries
  },
  allTags(state) {
    return state.contents.allTags
  },
  selectTags(state) {
    return state.tags.selectTags
  },
  selectEntries(state) {
    const entries = state.contents.allEntries
    const selects = state.tags.selectTags
    return entries.filter((entry) => {
      const exists = entry.tags.some((slug) => {
        return selects.some((select) => select.slug === slug)
      })
      if (exists) return entry
    })
  },
  onThisPage(state, getters) {
    const start = (state.pageNumber - 1) * state.displayLimit
    const limit = state.displayLimit + start
    return getters.selectEntries.slice(start, limit)
  },
  numberOfPage(state, getters) {
    const displayLimit = state.displayLimit
    let totalEntries = getters.selectEntries.length
    if (!totalEntries) totalEntries = 1
    return Math.ceil(totalEntries / displayLimit)
  },
  entryCount(state, getters) {
    return getters.selectEntries.length
  },
}

export const actions = {
  async initialize({ dispatch, commit, getters }) {
    await dispatch('contents/initialize')
    await dispatch('tags/initialize', getters.allTags)
  },
}

export const mutations = {
  delTag(state, slug) {
    const deleted = state.tags.selectTags.filter((item) => item.slug !== slug)
    state.tags.selectTags = deleted
  },
  addTag(state, slug) {
    const allTags = state.contents.allTags
    const selected = state.tags.selectTags
    const isAlready = selected.some((item) => item.slug === slug)
    if (!isAlready) {
      const insert = allTags.find((item) => item.slug === slug)
      selected.push(insert)
    }
    state.tags.selectTags = selected
  },
  pageNumber(state, number) {
    state.pageNumber = number
  },
}
