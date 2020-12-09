<template>
  <section id="main">
    <header>
      <EntryHeader>
        <template #title>
          <h1 class="text-dark">{{ entry(id).title }}</h1>
        </template>
      </EntryHeader>
    </header>
    <nuxt-child :entry="entry(id)" />
    <aside class="bg-info py-5">
      <Information />
    </aside>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  scrollToTop: true,
  async asyncData({ store, params }) {
    const id = await params.id
    return {
      id,
    }
  },
  computed: {
    ...mapGetters('contentful', ['entry']),
  },
  beforeRouteUpdate(to, from, next) {
    this.$nuxt.refresh()
    next()
  },
}
</script>
