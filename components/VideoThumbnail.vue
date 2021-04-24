<template>
  <nuxt-link :to="`/video/${video.slug}`">
    <img :src="maxResImageUrl" class="w-full" />
    <div class="meta p-3">
      <span class="tag block uppercase text-sm text-gray-500 mb-1">{{
        video.tags
      }}</span>
      <span class="title text-lg font-bold truncate">{{ video.title }}</span>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['video'],
  data: function () {
    return {
      maxResImageUrl:
        'https://i.ytimg.com/vi/' + this.video.youtube + '/mqdefault.jpg',
    }
  },
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
