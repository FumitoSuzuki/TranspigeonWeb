<template>
  <b-form-group label="Phone" label-for="phone">
    <b-input-group>
      <template v-slot:prepend>
        <ValidationProvider vid="phoneCountry">
          <b-form-select
            v-model="commitCountry"
            class="left-form"
            :options="country.options"
            name="country"
          />
        </ValidationProvider>
      </template>
      <ValidationProvider
        v-slot="{ errors }"
        :rules="{ phone_jp: ['@phoneCountry', commitNumber] }"
        name="Phone"
        class="w-100"
      >
        <b-form-input
          id="phone"
          v-model="commitNumber"
          type="text"
          class="right-form"
          name="number"
        />
        <b-form-invalid-feedback :state="!errors.length">
          <p v-for="(item, key) in errors" :key="key" v-text="item" />
        </b-form-invalid-feedback>
      </ValidationProvider>
    </b-input-group>
  </b-form-group>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          country: 'jp',
          number: '',
        }
      },
    },
  },
  data() {
    return {
      country: {
        options: [
          { text: 'Japan', value: 'jp' },
          { text: 'Other', value: 'other' },
        ],
      },
    }
  },
  computed: {
    commitCountry: {
      get() {
        return this.value.country
      },
      set(country) {
        if (this.value.country !== country) {
          this.$emit('input', { country, number: this.value.number })
        }
      },
    },
    commitNumber: {
      get() {
        return this.value.number
      },
      set(number) {
        if (this.value.number !== number) {
          this.$emit('input', { country: this.value.country, number })
        }
      },
    },
  },
}
</script>

<style scoped>
.left-form {
  border-top-right-radius: 0rem;
  border-bottom-right-radius: 0rem;
}
.right-form {
  border-top-left-radius: 0rem;
  border-bottom-left-radius: 0rem;
}
.input-group {
  flex-wrap: nowrap;
}
</style>
