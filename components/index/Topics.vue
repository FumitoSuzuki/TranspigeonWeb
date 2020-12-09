<template>
  <b-container>
    <AlignRowItems
      v-for="(row, rowKey) in rows"
      :key="rowKey"
      :class-name="alignTargetClass"
    >
      <b-row align-v="stretch">
        <b-col
          v-for="(item, key) in row"
          :key="key"
          v-bind="item.columnAttr"
          class="my-2 px-2"
        >
          <b-card no-body class="h-100">
            <b-card-img
              v-if="item.image"
              :src="getImage(item.image.url)"
              :alt="item.image.alt"
              top
            />
            <b-card-body>
              <b-card-title v-text="item.title" />
              <b-card-text text-tag="div">
                <ResponsiveBreak>
                  <nuxt-content :document="item" />
                </ResponsiveBreak>
              </b-card-text>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </AlignRowItems>
  </b-container>
</template>

<script>
export default {
  props: {
    rows: {
      type: Array,
      default: () => [
        [
          {
            title: '',
            image: {
              url: '',
              alt: '',
            },
            columnAttr: {},
            body: '',
          },
        ],
      ],
    },
  },
  data() {
    return {
      alignTargetClass: ['card-title'],
    }
  },
  methods: {
    getImage(path) {
      return path ? require(`~/static/${path}`) : false
    },
  },
}
</script>
