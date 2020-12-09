<template>
  <b-container>
    <AlignRowItems :class-name="['title']">
      <b-row cols="1" cols-md="3" class="my-3">
        <b-col v-for="(item, key) in contents" :key="key">
          <h3 class="title">{{ item.title }}</h3>
          <nuxt-content :document="item" />
        </b-col>
      </b-row>
    </AlignRowItems>
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
}
</script>
