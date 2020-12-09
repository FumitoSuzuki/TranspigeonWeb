<template>
  <b-form-group label="Email" label-for="email">
    <ValidationProvider v-slot="{ errors }" rules="required" name="Email">
      <b-form-input id="email" v-model="commit" type="text" name="email" />
      <b-form-invalid-feedback :state="!errors.length">
        <p v-for="(item, key) in errors" :key="key" v-text="item" />
      </b-form-invalid-feedback>
    </ValidationProvider>
  </b-form-group>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  computed: {
    commit: {
      get() {
        return this.value
      },
      set(value) {
        if (this.value !== value) this.$emit('input', value)
      },
    },
  },
}
</script>
