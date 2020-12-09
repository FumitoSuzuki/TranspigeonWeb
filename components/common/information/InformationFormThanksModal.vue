<template>
  <b-modal id="thanks" title="Thanks Contact!">
    <p>
      <ResponsiveBreak>
        Thank you for your inquiry.
        <br />
        We will contact you after confirming the contents.
      </ResponsiveBreak>
    </p>
    <template #modal-footer="{ close }">
      <b-button size="sm" variant="outline-danger" @click="close()">
        Close
      </b-button>
    </template>
  </b-modal>
</template>
