<template>
  <b-container class="my-5">
    <b-row>
      <b-col cols="12" md="8" class="mb-lg-0 mb-5">
        <TheMarkdown :md="entry.markup" />
        <p>Updated at: {{ updatedAt }}</p>
      </b-col>
      <b-col cols="12" md="4">
        <client-only placeholder="Loading...">
          <b-img src="/image/2148237985.jpg" alt="banner" fluid />
        </client-only>
        <EntryRelation :slugs="entry.tags" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {
    entry: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    updatedAt() {
      const inUTC = new Date(this.entry.updatedAt)
      return `${inUTC.getFullYear()}/${inUTC.getMonth() + 1}/${inUTC.getDate()}`
    },
  },
}
</script>
