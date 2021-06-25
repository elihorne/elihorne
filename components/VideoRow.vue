<template>
  <div class="">
    <div class="grid grid-cols-1 gap-6 md:grid-cols-3 px-1 py-4">
      <div
        v-for="video in videos"
        :key="video.index"
        class="rounded-md overflow-hidden bg-white h-autoshadow-md"
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
