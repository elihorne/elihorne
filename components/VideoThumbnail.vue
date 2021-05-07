<template>
  <nuxt-link :to="`/video/${video.slug}`" class="relative block">
    <img :src="maxResImageUrl" class="w-full" />
    <div
      class="meta p-4 absolute inset-0 transition-all opacity-0 hover:opacity-100 bg-black bg-opacity-80 text-white"
    >
      <span class="tag block uppercase text-sm mb-1">{{ video.tags }}</span>
      <span class="title text-xl md:text-2xl font-bold">{{ video.title }}</span>
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
