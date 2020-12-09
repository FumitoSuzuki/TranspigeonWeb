<template>
  <section ref="box" class="fixid-aspect-box" :style="getBoxHeight">
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    aspectX: {
      type: Number,
      default: 1,
    },
    aspectY: {
      type: Number,
      default: 1,
    },
    aspectSmX: {
      type: Number,
      default: 0,
    },
    aspectSmY: {
      type: Number,
      default: 0,
    },
    aspectMdX: {
      type: Number,
      default: 0,
    },
    aspectMdY: {
      type: Number,
      default: 0,
    },
    aspectlgX: {
      type: Number,
      default: 0,
    },
    aspectLgY: {
      type: Number,
      default: 0,
    },
    aspectXlX: {
      type: Number,
      default: 0,
    },
    aspectXlY: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      boxWidth: 0,
      boxHeight: 0,
      breakPoint: {
        sm: { width: 540 },
        md: { width: 720 },
        lg: { width: 960 },
        xl: { width: 1140 },
      },
    }
  },
  computed: {
    getBoxHeight() {
      return { '--height': `${this.boxHeight}px` }
    },
  },
  mounted() {
    this.setBreakPointInAspect()
    this.setBoxWidth()
    this.setBoxHeight()
    window.addEventListener('resize', this.setBoxWidth)
    window.addEventListener('resize', this.setBoxHeight)
  },
  methods: {
    setBreakPointInAspect() {
      this.breakPoint.sm.aspect = { x: this.aspectSmX, y: this.aspectSmY }
      this.breakPoint.md.aspect = { x: this.aspectMdX, y: this.aspectMdY }
      this.breakPoint.lg.aspect = { x: this.aspectlgX, y: this.aspectLgY }
      this.breakPoint.xl.aspect = { x: this.aspectXlX, y: this.aspectXlY }
    },
    setBoxWidth() {
      this.boxWidth = this.$refs.box.clientWidth
    },
    setBoxHeight() {
      let aspect = { x: this.aspectX, y: this.aspectY }
      Object.entries(this.breakPoint).forEach(([key, value]) => {
        if (this.boxWidth <= value.width) {
          if (value.aspect.x && value.aspect.y) {
            aspect = value.aspect
          }
        }
      })
      this.boxHeight = (this.boxWidth / aspect.x) * aspect.y
    },
  },
}
</script>

<style scoped>
.fixid-aspect-box {
  height: var(--height);
}
</style>
