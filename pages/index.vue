<template>
  <div class="home">
    <div class>
      <Intro />
    </div>

    <div class="border-gray-200 border-b">
      <div class="container py-20 mx-auto">
        <WorkTouts :casestudies="casestudies" />
      </div>
    </div>
    <div class="border-gray-200 border-b">
      <div class="container py-20 mx-auto">
        <Experience :experience="experience" />
      </div>
    </div>
    <div class="container py-20 px-6 mx-auto">
      <h4 class="mb-12">Recent videos</h4>
      <video-row :videos="videos" />
      <div class="my-8">
        <nuxt-link to="/video" class="button">See more videos</nuxt-link>
      </div>
    </div>

    <Newsletter />
  </div>
</template>

<script>
import VideoRow from '../components/VideoRow.vue'
export default {
  components: { VideoRow },
  async asyncData({ $content }) {
    const casestudies = await $content('casestudies')
      .sortBy('start', 'desc')
      .fetch()
    const experience = await $content('experience')
      .sortBy('start', 'desc')
      .limit(4)
      .fetch()

    const videos = await $content('videos')
      .sortBy('start', 'desc')
      .limit(3)
      .fetch()
    return { casestudies, experience, videos }
  },
}
</script>
