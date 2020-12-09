<template>
  <b-breadcrumb
    :items="breadcrumb"
    class="bg-transparent m-auto p-0 justify-content-center"
  />
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
    pageNum() {
      return this.$store.state.contentful.pageNumber
    },
    breadcrumb() {
      return [
        { text: 'Top', to: '/' },
        { text: 'Articles', to: '/articles/' + this.pageNum },
        { text: 'Entry', active: true },
      ]
    },
  },
}
</script>

<style scoped>
.breadcrumb-item a {
  color: var(--white);
}
.breadcrumb-item + .breadcrumb-item::before {
  color: white;
}
.breadcrumb-item.active {
  color: white;
}
</style>
