<template>
  <section id="main">
    <FullsizeBox class="bg-primary">
      <PsHeader class="text-white">
        <template #title>
          <h1>Production support</h1>
        </template>
        <template #body>
          <h2 class="copy">{{ header.copy }}</h2>
          <p class="sub">{{ header.sub }}</p>
          <ResponsiveBreak>
            <nuxt-content :document="header" />
          </ResponsiveBreak>
        </template>
      </PsHeader>
    </FullsizeBox>
    <PsSample :sample="LayoutSample" class="p-5">
      <template #title>
        <ResponsiveBreak>
          <nuxt-content :document="LayoutSampleTitle" />
        </ResponsiveBreak>
      </template>
    </PsSample>
    <aside class="py-5 bg-secondary text-white scroll-snap-start">
      <Information>
        <template #procedure>
          <nuxt-content :document="information" />
        </template>
      </Information>
    </aside>
    <ScrollSwitchBg bg-color="rgba(23,162,184,0.7)">
      <b-breadcrumb class="bg-transparent m-3 p-0">
        <li><b-icon icon="chevron-left" font-scale="１" />&nbsp;</li>
        <b-breadcrumb-item to="/">Top</b-breadcrumb-item>
      </b-breadcrumb>
    </ScrollSwitchBg>
  </section>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const header = await $content('production-support/header').fetch()
    const LayoutSampleTitle = await $content(
      'production-support/layout-sample/title'
    ).fetch()
    const LayoutSample = await $content(
      'production-support/layout-sample/sample'
    ).fetch()
    const information = await $content('information').fetch()
    return {
      header,
      LayoutSampleTitle,
      LayoutSample,
      information,
    }
  },
}
</script>

<style scoped>
.breadcrumb,
.breadcrumb a {
  color: white;
  font-size: 1rem;
}
</style>
