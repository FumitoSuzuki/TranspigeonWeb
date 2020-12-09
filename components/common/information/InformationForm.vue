<template>
  <b-form ref="form" @submit.prevent="onConfirm" @reset="onReset">
    <!-- This is Input Form. This Form is not submitted. -->
    <ValidationObserver ref="observer" v-slot="{ invalid }">
      <b-form-row>
        <b-col cols="12" md="3">
          <FormInputName v-model="form.name" />
        </b-col>
        <b-col cols="12" md="4">
          <FormInputEmail v-model="form.email" />
        </b-col>
        <b-col cols="12" md="5">
          <FormInputPhone v-model="form.phone" />
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col cols="12">
          <FormTextareaMessage v-model="form.message" />
        </b-col>
      </b-form-row>
      <b-row align-h="center" class="mt-3">
        <b-col cols="4">
          <b-button block :disabled="invalid" type="submit" variant="primary">
            Confirm
          </b-button>
        </b-col>
      </b-row>
    </ValidationObserver>
    <!-- This is Input confirmaition window -->
    <InformationFormConfirmModal :param="form" @event="onSubmit" />
    <!-- This is thanks message window -->
    <InformationFormThanksModal />
    <!-- Stand-in static forms -->
  </b-form>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: {
          country: 'jp',
          number: '',
        },
        message: {
          type: 'How to',
          text: '',
        },
      },
    }
  },
  methods: {
    onConfirm() {
      this.$bvModal.show('confirm')
    },
    onSubmit() {
      const url = '/'
      const encodeForm = this.encode({
        'form-name': 'contact',
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
          this.$bvModal.hide('confirm')
          this.$bvModal.show('thanks')
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
  },
}
</script>
