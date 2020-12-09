import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export const state = () => ({
  entriesLimit: 1000,
  skipEntries: 0,
  allEntries: [],
  allTags: [],
})

export const getters = {}

export const actions = {
  async initialize({ state, commit, dispatch }) {
    const result = await client.getEntries({
      content_type: process.env.CTF_BLOG_POST_TYPE_ID,
      limit: state.entriesLimit,
      skip: state.skipEntries,
    })
    await commit('allEntries', result)
    await commit('allTags', result)
    await commit('skipEntries')
    if (result.total > state.skipEntries) {
      await dispatch('initialize')
    } else {
      await commit('totalEntries', result)
      await commit('makeOrigin', result)
    }
  },
}

export const mutations = {
  totalEntries(state, payload) {
    state.totalEntries = payload.total
  },
  skipEntries(state) {
    state.skipEntries += state.entriesLimit
  },
  allEntries(state, payload) {
    const items = payload.items
    const posts = items.map((item) => {
      return {
        id: item.sys.id,
        locale: item.sys.locale,
        createdAt: item.sys.createdAt,
        updatedAt: item.sys.updatedAt,
        title: item.fields.title,
        discription: item.fields.discription,
        introduct: item.fields.introduct.fields,
        markup: item.fields.markup,
        tags: item.fields.tags.map((tag) => {
          return tag.fields.slug
        }),
      }
    })
    state.allEntries = state.allEntries.concat(posts)
  },
  allTags(state, payload) {
    const includes = payload.includes.Entry
    const items = payload.items
    const tags = includes.map((include) => {
      if (include.sys.contentType.sys.id !== 'tag') return
      const exists = state.allTags.find((tag) => {
        return Boolean(tag.slug === include.fields.slug)
      })
      if (!exists) {
        include.fields.count = 0
        items.forEach((item) => {
          const exists = item.fields.tags.some(
            (tag) => tag.fields.slug === include.fields.slug
          )
          if (exists) include.fields.count++
        })
        return {
          name: include.fields.name,
          slug: include.fields.slug,
          count: include.fields.count,
          updatedAt: include.sys.updatedAt,
        }
      }
    })
    tags.sort(function (a, b) {
      return a.count < b.count ? 1 : -1
    })
    state.allTags = state.allTags.concat(tags)
  },
  makeOrigin(state, payload) {
    state.origin = payload
  },
}
