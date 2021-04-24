<template>
  <div class="work">
    <div class="bg-gray-100">
      <div class="container px-4 md:px-8 py-24 mx-auto">
        <VideoSection :videos="videos" />
      </div>
    </div>
    <Newsletter />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    var filter = params.slug

    filter = filter.replace(/-/g, ' ')
    console.log(filter)
    if (filter == '') {
      //filter = ''
    }
    const videos = await $content('videos')
      //.sortBy('date', 'asc')
      .where({ tags: { $containsAny: [filter] } })
      .fetch()

    return {
      videos,
    }
  },
}
</script>
<style>
.work {
  @apply pt-20;
}
</style>
