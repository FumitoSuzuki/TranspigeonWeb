<template>
  <b-list-group class="my-3">
    <b-list-group-item
      v-for="(item, key) in relations"
      :key="key"
      :to="item.id"
      variant="secondary"
      class="flex-column align-items-start"
    >
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{ item.title }}</h5>
        <small>{{ updatedAt(item.updatedAt) }}</small>
      </div>
      <p>{{ item.discription }}</p>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    slugs: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapGetters('relation', ['getRelationItemsFromSlugs']),
    relations() {
      this.$store.commit('relation/setRelationSlugs', this.slugs)
      return this.getRelationItemsFromSlugs
    },
  },
  methods: {
    updatedAt(UTC) {
      const inUTC = new Date(UTC)
      return `${inUTC.getFullYear()}/${inUTC.getMonth()}/${inUTC.getDate()}`
    },
  },
}
</script>
