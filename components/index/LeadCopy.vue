<template>
  <b-container>
    <b-row>
      <b-col class="text-md-center">
        <h2 class="mb-5">{{ content.title }}</h2>
        <ResponsiveBreak>
          <nuxt-content :document="content" />
        </ResponsiveBreak>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped>
h2,
strong {
  color: var(--primary);
}
.container >>> strong {
  color: var(--primary);
}
</style>
