<template>
  <section id="main">
    <FullsizeBox class="p-2">
      <Introduction class="text-center">
        <template #header></template>
        <template #body>
          <nuxt-content :document="intro" />
        </template>
        <template #footer>
          <Logo :width="60" :height="60" />
        </template>
      </Introduction>
    </FullsizeBox>
    <article>
      <LeadCopy class="my-3">
        <nuxt-content :document="leadcopy" />
      </LeadCopy>
      <Characters :contents="characters" />
      <Topics :rows="topics" />
      <Others :contents="others" class="my-3" />
    </article>
    <aside class="bg-info py-5">
      <Information />
    </aside>
  </section>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const intro = await $content('introduction').fetch()
    const leadcopy = await $content('leadcopy').fetch()
    const characters = await $content('characters').sortBy('slug').fetch()
    const topics = await $content('topics').sortBy('slug').fetch()
    const others = await $content('others').fetch()
    return {
      intro,
      leadcopy,
      characters,
      topics: [topics.splice(0, 2), topics],
      others,
    }
  },
}
</script>

<style scoped>
#main {
  background-color: white;
}
</style>
