<template>
  <div class="home">
    <div class>
      <Intro />
    </div>

    <div>
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
