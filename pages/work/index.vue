<template>
  <div class="work">
    <div class="">
      <div class="container py-8 mx-auto">
        <WorkTouts :casestudies="casestudies" />
        <Experience />
      </div>
    </div>
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
