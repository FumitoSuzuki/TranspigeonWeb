<template>
  <b-card no-body class="h-100">
    <client-only placeholder="Loading...">
      <b-card-img top :src="item.introduct.file.url" />
    </client-only>
    <b-card-body>
      <nuxt-link :to="`/articles/entry/${item.id}`" class="text-info">
        <b-card-title class="title">{{ item.title }}</b-card-title>
      </nuxt-link>
      <b-card-text class="text text-secondary">
        {{ item.discription }}
      </b-card-text>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          id: String,
          title: String,
          discription: String,
          introduct: {
            file: {
              url: String,
            },
          },
        }
      },
    },
  },
}
</script>
