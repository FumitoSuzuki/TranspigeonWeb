<template>
  <b-container class="my-5">
    <AlignRowItems :class-name="['title', 'text']" :trigger="onThisPage">
      <b-row class="px-1">
        <b-col
          v-for="(item, key) in onThisPage"
          :key="key"
          cols="13"
          md="6"
          lg="3"
          class="mb-4 px-2"
        >
          <ArticlesList :item="item" />
        </b-col>
      </b-row>
    </AlignRowItems>
    <b-row>
      <b-col>
        <ArticlesPagenation />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  async asyncData({ store, params }) {
    const pageNum = params.pageNumber || '1'
    await store.commit('contentful/pageNumber', pageNum)
  },
  computed: {
    ...mapGetters('contentful', ['onThisPage']),
  },
}
</script>
