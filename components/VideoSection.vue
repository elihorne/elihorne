<template>
  <div>
    <h1 class="text-3xl mb-8">Video</h1>
    <p class="text-lg md:w-3/4 text-gray-700">
      For as long as I can remember, I've loved moving images and compelling
      stories. I went to film school but ultimately fell in love with technology
      and product design. These short videos are my way of scratching that itch.
    </p>
    <nav class="uppercase my-8 p-3 border-t border-b border-gray-300">
      <nuxt-link class="mr-3" to="/video">All</nuxt-link>
      <nuxt-link class="mr-3" to="/video/tag/noodles-and-bourbon"
        >Noodles &amp; Bourbon</nuxt-link
      >
      <nuxt-link class="mr-3" to="/video/tag/flight-school"
        >Flight School</nuxt-link
      >
      <nuxt-link class="mr-3" to="/video/tag/exploration"
        >Urban Exploration</nuxt-link
      >
      <nuxt-link class="mr-3" to="/video/tag/travel">Travel</nuxt-link>
    </nav>

    <VideoGrid :videos="videos" />
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
