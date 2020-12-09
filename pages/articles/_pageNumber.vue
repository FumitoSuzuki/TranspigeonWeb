<template>
  <section id="main">
    <header>
      <ArticlesHeader>
        <template #title>
          <h1 class="text-dark">Blog Posts</h1>
        </template>
      </ArticlesHeader>
    </header>
    <nuxt-child />
    <aside class="bg-info py-5">
      <Information />
    </aside>
  </section>
</template>

<script>
export default {
  scrollToTop: true,
}
</script>
