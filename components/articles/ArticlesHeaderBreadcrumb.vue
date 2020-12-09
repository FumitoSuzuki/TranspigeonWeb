<template>
  <b-breadcrumb
    :items="breadcrumb"
    class="bg-transparent m-auto p-0 justify-content-center"
  />
</template>

<script>
export default {
  computed: {
    pageNumber() {
      return this.$store.state.contentful.pageNumber
    },
    breadcrumb() {
      return [
        { text: 'Top', to: '/' },
        { text: 'Articles', to: '/articles/' },
        { text: this.pageNumber, active: true },
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
