<template>
  <section id="main">
    <FullsizeBox class="p-2 scroll-snap-start">
      <Introduction class="text-center bg_star">
        <template #body>
          <nuxt-content :document="intro" />
        </template>
        <template #footer>
          <Logo :width="60" :height="60" />
        </template>
      </Introduction>
    </FullsizeBox>
    <article>
      <section class="scroll-snap-start">
        <div id="leadcopy-block" class="p-5">
          <LeadCopy :content="leadcopy" />
        </div>
        <div class="p-5 bg-white text-secondary">
          <Characters :contents="characters" />
        </div>
      </section>
      <section class="scroll-snap-start">
        <PlanTable :contents="plantable" />
      </section>
      <Topics :rows="topics" v-pre />
      <Others :contents="others" class="my-3" v-pre />
    </article>
    <aside class="py-5 bg-secondary text-white scroll-snap-start">
      <Information>
        <template #procedure>
          <nuxt-content :document="information" />
        </template>
      </Information>
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
    const information = await $content('information').fetch()
    return {
      intro,
      leadcopy,
      characters,
      plantable,
      topics: [topics.splice(0, 2), topics],
      others,
      information,
    }
  },
}
</script>

<style scoped>
.bg_star {
  background-repeat: no-repeat;
  background-image: url('/image/bg_star.svg');
  background-size: cover;
  background-position: center;
}
#leadcopy-block {
  background-color: #eee;
}
.scroll-snap-start {
  scroll-snap-align: start;
}
</style>
