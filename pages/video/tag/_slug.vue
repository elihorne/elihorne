<template>
  <div class="work">
    <VideoSection :videos="videos" />
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
