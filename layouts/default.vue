<template>
  <div>
    <Nuxt />
    <!-- <TheNavbar /> -->
  </div>
</template>

<style>
html {
  scroll-snap-type: y proximity;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
