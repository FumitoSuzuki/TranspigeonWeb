<template>
  <b-container>
    <b-row v-for="(item, key) in contents" :key="key">
      <b-col cols="12">
        <h3>{{ item.title }}</h3>
      </b-col>
      <b-col cols="12" md="4" order-md="2" style="overflow: hidden">
        <b-img
          v-if="item.image"
          :src="getImage(item.image.url)"
          :alt="item.image.alt"
          data-aos="fade-left"
          fluid
        />
      </b-col>
      <b-col cols="12" md="8" order-md="1">
        <ResponsiveBreak>
          <nuxt-content :document="item" />
        </ResponsiveBreak>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {
    contents: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getImage(path) {
      return path ? require(`~/static/${path}`) : false
    },
  },
}
</script>
