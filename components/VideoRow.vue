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

<style>
.work-container {
  @apply bg-gray-200;
  transition: all 0.5s ease-in-out;
  @apply shadow-sm;
}

.work-container img {
  width: 100%;
}

.work-container .logo img {
  width: 100%;
  max-width: 260px;
  height: 40px;
  text-align: left;
}

.work-container:hover {
  transform: scale(1.02);
  border: 1px solid #aaa;
  @apply shadow-lg;
}

.work-container.kickstarter,
.intro.kickstarter {
  background: linear-gradient(to bottom right, #e6faf1, #fff2ec);
}

.work-container.google,
.intro.google {
  background: linear-gradient(to bottom right, rgb(213, 232, 247), #ecf0f8);
}
</style>
