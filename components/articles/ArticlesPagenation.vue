<template>
  <b-pagination-nav
    v-model="pageNumber"
    :link-gen="linkGen"
    :number-of-pages="numberOfPage"
    align="center"
  />
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('contentful', ['numberOfPage']),
    pageNumber() {
      return this.$store.state.contentful.pageNumber
    },
  },
  methods: {
    linkGen(pageNum) {
      return { path: `/posts/${pageNum}` }
    },
  },
}
</script>
