<template>
  <div class="home">
    <div class="container p-4 md:p-8 mx-auto">
      <Intro />
    </div>
    <div class="bg-gray-100">
      <div class="container p-4 md:p-8 mx-auto">
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
