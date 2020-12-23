<template>
  <b-container>
    <b-row>
      <b-col class="title text-md-center mb-5">
        <slot name="title" />
      </b-col>
    </b-row>
    <b-row cols="1" cols-md="3">
      <b-col v-for="(item, key) in sample" :key="key" class="mb-3">
        <b-card no-body class="border-light sample-img">
          <b-img :src="item.src" :alt="item.alt" class="w-100" />
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {
    sample: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.title >>> h1,
.title >>> h2,
.title >>> h3,
.title >>> h4,
.title >>> h5,
.title >>> h6 {
  color: var(--primary);
}
.sample-img {
  height: 50vh;
  overflow: hidden;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
</style>
