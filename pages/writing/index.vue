<template>
  <div class="work">
    <div class="bg-gray-100">
      <div class="container px-4 md:px-8 py-24 mx-auto">
        <h1 class="text-3xl mb-8">Writing</h1>
        <h2 class="mb-2">In Review</h2>
        <p class="mb-6">
          Weekly musings on recent events, also available as a
          <a href="https://elihorne.substack.com">newsletter</a>.
        </p>
        <ul>
          <li v-for="article in articles">
            <NuxtLink :to="{ path: '/writing/' + article.slug }">{{
              article.title
            }}</NuxtLink>
            <p class="my-1">{{ article.description }}</p>
            <p class="text-sm text-gray-500">
              Posted {{ $moment(article.updatedAt).fromNow() }}
            </p>
          </li>
        </ul>
      </div>
    </div>
    <Newsletter />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('writing').sortBy('start', 'desc').fetch()
    return { articles }
  },
}
</script>
<style>
.work {
  @apply pt-20;
}
</style>
