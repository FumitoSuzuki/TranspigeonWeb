<template>
  <span class="responsive-br">
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: {
    bp: {
      type: String,
      default: 'md',
    },
  },
  data() {
    return {
      pointList: ['sm', 'md', 'lg', 'xl'],
      classList: {
        sm: 'd-sm-inline',
        md: 'd-md-inline',
        lg: 'd-lg-inline',
        xl: 'd-xl-inline',
      },
    }
  },
  computed: {
    getPoint() {
      let point = this.pointList.find((point) => point === this.bp)
      if (!point) point = this.bp.default
      return { class: this.classList[point] }
    },
  },
  mounted() {
    const elements = this.$el.getElementsByTagName('br')
    this.setClass(elements)
  },
  methods: {
    setClass(elements) {
      elements.forEach((elem) => {
        elem.classList.add(this.getPoint.class)
      })
    },
  },
}
</script>

<style>
.responsive-br br {
  display: none;
}
</style>
