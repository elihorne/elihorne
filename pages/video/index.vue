<template>
  <div>
    <div class="work mt-12 py-10">
      <VideoSection :videos="videos" />
    </div>
    <Newsletter />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const videos = await $content('videos')
      //.sortBy('date', 'asc')
      .fetch()

    return {
      videos,
    }
  },
}
</script>
