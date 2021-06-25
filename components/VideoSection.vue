<template>
  <div>
    <div class="container px-8 mb-8 mx-auto">
      <h1 class="mb-8 text-3xl">Video</h1>
      <p class="text-lg w-full md:max-w-3xl text-gray-700">
        For as long as I can remember, I've loved recording visuals and telling
        stories. I went to film school but ultimately fell in love with
        technology and product design. These short videos are my way of
        scratching that itch.
      </p>
      <nav class="my-8 mb-10 border-gray-300 border-b text-gray-500 bg-white">
        <nuxt-link class="" to="/video">All</nuxt-link>
        <nuxt-link class="" to="/video/tag/noodles-and-bourbon"
          >Noodles &amp; Bourbon</nuxt-link
        >
        <nuxt-link class="" to="/video/tag/flight-school"
          >Flight School</nuxt-link
        >
        <nuxt-link class="" to="/video/tag/exploration"
          >Urban Exploration</nuxt-link
        >
        <nuxt-link class="" to="/video/tag/travel">Travel</nuxt-link>
      </nav>
      <VideoGrid :videos="videos" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['videos'],
}
</script>
