<template>
  <div class="overflow-x-scroll flex">
    <div class="flex flex-nowrap px-1 py-4">
      <div
        v-for="video in videos"
        :key="video.index"
        class="rounded-md overflow-hidden bg-white mr-4 w-72 lg:w-96 shadow-md"
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
