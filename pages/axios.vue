<template>
  <b-container class="vh-100">
    <b-row class="h-100 justify-content-center" align-v="center">
      <b-col cols="4">
        <h1>Axios Example</h1>
        <b-button block @click="onSubmit()">Button</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    onSubmit() {
      const url = '/'
      const axiosConfig = {
        header: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
      this.$axios
        .$post(url, { name: 'OK' }, axiosConfig)
        .then(() => {
          alert('POST!')
        })
        .catch((error) => {
          alert(error)
        })
    },
  },
}
</script>
