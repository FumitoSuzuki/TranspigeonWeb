<template>
  <div>
    <b-container fluid class="bg-info">
      <b-row align-v="center">
        <b-col class="text-center py-5">
          <h2>Comparison with Other Frameworks</h2>
        </b-col>
      </b-row>
      <b-row align-v="end" align-h="center">
        <b-col cols="8" md="5">
          <b-img
            src="/image/img_pcsp.svg"
            class="w-100"
            style="position: relative; left: 15%"
          />
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row align-v="center" class="py-5">
        <b-col
          v-for="(item, key) in contents"
          :key="key"
          cols="12"
          md="4"
          class="text-center body"
        >
          <h3 class="title">
            <b-badge pill variant="info">{{ item.title }}</b-badge>
          </h3>
          <p class="price">
            <span>{{ item.price }}</span>
            point
          </p>
          <nuxt-content :document="item" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    contents: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.body .title > * {
  font-size: 1rem;
}
.body >>> .price {
  font-size: 1.5rem;
  font-weight: 700;
}
.body >>> .price span {
  font-size: 2.5rem;
}
.body >>> .nuxt-content ul {
  padding-left: 0;
  list-style: none;
}
.body >>> .nuxt-content li {
  border-bottom: 1px solid;
}
.body >>> .nuxt-content p {
  text-align: left;
}
.body >>> .nuxt-content blockquote {
  display: flex;
}
.body >>> .nuxt-content blockquote::before {
  content: '※';
  margin-right: 0.5em;
}
</style>
