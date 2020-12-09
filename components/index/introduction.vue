<template>
  <b-container fluid class="introduction h-100">
    <b-row align-v="center" class="header">
      <b-col><slot name="header" /></b-col>
    </b-row>
    <b-row align-v="center" class="body">
      <b-col><slot name="body" /></b-col>
    </b-row>
    <b-row align-v="center" class="footer">
      <b-col><slot name="footer" /></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {}
</script>

<style scoped>
.introduction {
  /* background-image: url('/image/abstract-2468874_1920.jpg'); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: var(--secondary);
}
.introduction .header,
.introduction .footer {
  min-height: 25%;
}
.introduction .body {
  min-height: 50%;
}
</style>
