<template>
  <b-container class="text-center">
    <AlignRowItems :class-name="['title']">
      <b-row cols="1" cols-md="3" class="my-3">
        <b-col v-for="(item, key) in contents" :key="key">
          <div class="mb-3">
            <b-icon :icon="item.icon" font-scale="3" />
          </div>
          <h3 class="mb-3 font-weight-bold">
            {{ item.title }}
          </h3>
          <nuxt-content :document="item" class="text-left" />
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

<style scoped>
h3 {
  font-size: 1rem;
  color: var(--info);
}
</style>
