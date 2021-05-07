<template>
  <div class="work">
    <VideoSection :videos="videos" />
    <Newsletter />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    var filter = params.slug
    filter = filter.replace(/-/g, ' ')
    const videos = await $content('videos')
      .where({ tags: { $containsAny: [filter] } })
      .fetch()

    return {
      videos,
    }
  },
}
</script>
