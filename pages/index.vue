<template>
  <div class="home">
    <div class="container p-6 md:p-8 mx-auto">
      <Intro />
    </div>

    <div class="bg-gray-100">
      <div class="container py-4 md:py-10 mx-auto">
        <WorkTouts :casestudies="casestudies" />
        <Experience />
      </div>
    </div>
    <Newsletter />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const casestudies = await $content('casestudies')
      .sortBy('start', 'desc')
      .fetch()
    return { casestudies }
  },
}
</script>
