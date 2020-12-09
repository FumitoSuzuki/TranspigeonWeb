<template>
  <b-modal id="test-confirm" title="Please Confirm." scrollable>
    <p>Name: {{ form.name }}</p>
    <p>Email: {{ form.email }}</p>
    <template v-slot:modal-footer>
      <b-button @click="$bvModal.hide('confirm')">Cancel</b-button>
      <b-button variant="info" @click="onSubmit">Submit! 🤩</b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    onSubmit() {
      this.$emit('event')
    },
  },
}
</script>
