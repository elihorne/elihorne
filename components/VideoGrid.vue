<template>
  <div class="grid">
    <div class="grid gap-6 grid-col-1 md:grid-cols-3 lg:grid-cols-4">
      <div
        v-for="video in videos"
        :key="video.index"
        class="overflow-hidden rounded-md bg-white shadow-md"
      >
        <VideoThumbnail :video="video" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['videos'],
}
</script>
