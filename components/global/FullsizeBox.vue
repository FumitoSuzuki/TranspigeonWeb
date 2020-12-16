<template>
  <section class="fullsize-box" v-bind="boxHeight">
    <slot ref="box"></slot>
    <div
      v-show="false"
      class="bg-dark text-light p-2"
      style="position: absolute; left: 1rem; bottom: 1rem"
    >
      <p>Window: {{ getWindowHeight }}px</p>
      <p>Client: {{ getClientHeight }}px</p>
      <p>Scroll: {{ getScrollHeight }}px</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    ratio: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return { boxHeight: false }
  },
  computed: {
    getWindowWidth() {
      return this.$window.width || false
    },
    getWindowHeight() {
      return this.$window.height || false
    },
    getClientHeight() {
      return this.$el ? this.$el.clientHeight : 0
    },
    getScrollHeight() {
      return this.$el ? this.$el.scrollHeight : 0
    },
    getBoxHeight() {
      const windowHeight = this.getWindowHeight
      const clientHeight = this.getClientHeight
      const scrollHeight = this.getScrollHeight
      // Do not run if not mounted.
      if (!windowHeight) return false
      // iOS measures.
      let innerHeight = scrollHeight
      if (this.ratio === 100) {
        if (scrollHeight === clientHeight) {
          innerHeight = windowHeight
        }
      }
      // Calculate the ratio to window height.
      const targetHeight = Math.round((windowHeight * this.ratio) / 100)
      /*
       * If the value of Scroll height is larger than height,
       * set height to auto.
       */
      return innerHeight <= targetHeight ? `${targetHeight}px` : 'auto'
    },
  },
  watch: {
    getWindowWidth() {
      this.setBoxHeight()
    },
  },
  mounted() {
    this.setBoxHeight()
  },
  methods: {
    setBoxHeight() {
      this.boxHeight = {
        style: { '--boxHeight': this.getBoxHeight },
      }
    },
  },
}
</script>

<style scoped>
.fullsize-box {
  --boxHeight: auto;
  height: var(--boxHeight);
}
</style>
