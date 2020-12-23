<template>
  <b-container class="text-md-center h-100">
    <b-row align-v="center" class="title">
      <b-col>
        <slot name="title" />
      </b-col>
    </b-row>
    <b-row align-v="center" class="body">
      <b-col>
        <slot name="body" />
      </b-col>
    </b-row>
    <b-row align-v="end" align-h="center" class="footer">
      <b-col cols="8" md="5">
        <b-img
          src="/image/img_pcsp.svg"
          class="w-100"
          style="position: relative; left: 15%"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.title {
  min-height: 25%;
}
.body {
  min-height: 50%;
}
.footer {
  min-height: 25%;
}

.copy {
  font-size: 1.5rem;
  font-weight: 700;
}
</style>
