<template>
  <div class="work">
    <div class="border-gray-200 border-b">
      <div class="container py-20 mx-auto">
        <WorkTouts :casestudies="casestudies" />
      </div>
    </div>
    <div class="">
      <div class="container py-20 mx-auto">
        <Experience :experience="experience" />
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
    const experience = await $content('experience')
      .sortBy('start', 'desc')
      .limit(4)
      .fetch()
    return { casestudies, experience }
  },
}
</script>
