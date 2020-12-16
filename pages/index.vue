<template>
  <section id="main">
    <FullsizeBox :ratio="100" class="p-2">
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
      <section id="leadcopy-block" class="p-5">
        <LeadCopy :content="leadcopy" />
      </section>
      <section id="characters-block" class="p-5">
        <Characters :contents="characters" />
      </section>
      <section>
        <PlanTable :contents="plantable" />
      </section>
      <Topics :rows="topics" v-pre />
      <Others :contents="others" class="my-3" v-pre />
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
    const plantable = await $content('plantable').sortBy('slug').fetch()
    const topics = await $content('topics').sortBy('slug').fetch()
    const others = await $content('others').fetch()
    return {
      intro,
      leadcopy,
      characters,
      plantable,
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
#leadcopy-block {
  background-color: #eee;
}
</style>
