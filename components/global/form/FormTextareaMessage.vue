<template>
  <b-form-group label="Message">
    <b-form-radio-group
      id="radio"
      v-model="commitType"
      class="bg-light p-2 top-form"
      :options="type.options"
      name="type"
    />
    <ValidationProvider rules="required" name="question">
      <b-form-textarea
        id="text"
        v-model="commitText"
        placeholder="Please enter your questions."
        rows="6"
        debounce="500"
        class="bottom-form"
        name="text"
      />
    </ValidationProvider>
  </b-form-group>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          type: '',
          text: '',
        }
      },
    },
  },
  data() {
    return {
      type: {
        options: [
          { text: 'How to', value: 'How to' },
          { text: 'Others', value: 'Others' },
        ],
      },
    }
  },
  computed: {
    commitType: {
      get() {
        return this.value.type
      },
      set(type) {
        if (this.value.type !== type) {
          this.$emit('input', { type, text: this.value.text })
        }
      },
    },
    commitText: {
      get() {
        return this.value.text
      },
      set(text) {
        if (this.value.text !== text) {
          this.$emit('input', { type: this.value.type, text })
        }
      },
    },
  },
}
</script>

<style scoped>
.top-form {
  border-radius: 0.25rem;
  border-bottom-left-radius: 0rem;
  border-bottom-right-radius: 0rem;
  border: 1px solid #ced4da;
  border-bottom: none;
}
.bottom-form {
  border-top-left-radius: 0rem;
  border-top-right-radius: 0rem;
}
</style>
