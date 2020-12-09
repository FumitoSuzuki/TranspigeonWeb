<template>
  <b-modal id="confirm" title="Please Confirm." scrollable>
    <p>Name: {{ param.name }}</p>
    <p>Email: {{ param.email }}</p>
    <p>Phone: {{ param.phone.number }}</p>
    <p>Message: {{ param.message.type }}</p>
    <p>{{ param.message.text }}</p>
    <template v-slot:modal-footer>
      <b-button @click="$bvModal.hide('confirm')">Cancel</b-button>
      <b-button variant="info" @click="onSubmit">Submit! 🤩</b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  props: {
    param: {
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
