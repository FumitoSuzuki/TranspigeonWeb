<template>
  <b-form
    name="testform"
    class="py-5"
    netlify
    netlify-honeypot="bot-field"
    @submit.prevent="onConfirm"
    @reset="onReset"
  >
    <input name="bot-field" />
    <ValidationObserver ref="observer" v-slot="{ invalid }">
      <b-container class="mt-5">
        <b-form-row>
          <b-col>
            <b-form-group label="Name" label-for="name">
              <ValidationProvider
                v-slot="{ errors }"
                rules="required"
                name="Name"
              >
                <b-form-input
                  id="name"
                  v-model="form.name"
                  name="name"
                  type="text"
                />
                <b-form-invalid-feedback :state="!errors.length">
                  <p v-for="(item, key) in errors" :key="key" v-text="item" />
                </b-form-invalid-feedback>
              </ValidationProvider>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="Email" label-for="email">
              <b-form-input
                id="email"
                v-model="form.email"
                type="text"
                name="email"
              />
            </b-form-group>
          </b-col>
        </b-form-row>
        <b-form-row>
          <b-col cols="2">
            <b-button block type="reset" variant="warning">Reset</b-button>
          </b-col>
          <b-col cols="2">
            <b-button block :disabled="invalid" type="submit" variant="info">
              Submit
            </b-button>
          </b-col>
        </b-form-row>
      </b-container>
    </ValidationObserver>
    <!-- Confirm modal -->
    <FormConfitmModal :form="form" @event="onSubmit" />
    <!-- Thanks message modal -->
    <FormThanksModal />
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
      },
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map((key) => {
          if (typeof data[key] === 'object') {
            return this.encode(data[key])
          }
          return `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        })
        .join('&')
    },
    onConfirm() {
      this.$bvModal.show('test-confirm')
    },
    onSubmit() {
      const url = '/'
      const encodeForm = this.encode({
        'form-name': 'testform',
        ...this.form,
      })
      const axiosConfig = {
        header: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
      this.$axios
        .$post(url, encodeForm, axiosConfig)
        .then(() => {
          this.$bvModal.hide('test-confirm')
          this.$bvModal.show('test-thanks')
          this.onReset()
        })
        .catch((error) => {
          if (this.$axios.isCancel(error)) {
            console.log('Request canceled', error)
          } else {
            console.log(error)
          }
        })
    },
    onReset() {
      Object.assign(this.$data, this.$options.data.call(this))
      this.$refs.observer.reset()
    },
  },
}
</script>

<style scoped>
input[name='bot-field'] {
  display: none;
}
</style>
