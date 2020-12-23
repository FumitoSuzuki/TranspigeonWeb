<template>
  <span>
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: {
    className: {
      type: Array,
      default: () => [],
    },
    trigger: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    trigger: {
      handler(val) {
        this.resetHeight()
      },
      deep: true,
    },
  },
  mounted() {
    this.setStyleHeight()
    window.addEventListener('resize', this.resetHeight)
  },
  methods: {
    setStyleHeight() {
      const length = this.className.length
      for (let i = 0; i < length; i++) {
        const element = this.$el.getElementsByClassName(this.className[i])
        const array = []
        for (let j = 0; j < element.length; j++) {
          array.push(element[j].clientHeight)
        }
        const max = Math.max.apply(null, array)
        for (let j = 0; j < element.length; j++) {
          element[j].style.minHeight = max + 'px'
        }
      }
    },
    resetHeight() {
      const length = this.className.length
      for (let i = 0; i < length; i++) {
        const element = this.$el.getElementsByClassName(this.className[i])
        for (let j = 0; j < element.length; j++) {
          element[j].style.minHeight = 'auto'
        }
      }
      this.setStyleHeight()
    },
  },
}
</script>
