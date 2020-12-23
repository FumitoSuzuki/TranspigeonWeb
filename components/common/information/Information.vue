<template>
  <b-container>
    <b-row>
      <b-col class="mb-5 text-center">
        <h2>Information</h2>
        <p>How to use external resources?</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mb-5">
        <slot name="procedure"></slot>
      </b-col>
    </b-row>
    <InformationForm class="mb-5" />
    <b-row>
      <b-col class="mb-5 text-center">
        <Logo width="200" height="200" />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mb-5 text-center">
        <p>Vue.js Web Design © 2020</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {}
</script>

<style scoped>
.container >>> .nuxt-content ol {
  padding-left: 20px;
}
</style>
