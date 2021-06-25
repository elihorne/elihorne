<template>
  <div class="px-6">
    <h4 class="text-lg font-bold mb-12">Experience</h4>
    <p class="text-2xl md:text-3xl max-w-4xl mb-12">
      I have more than {{ years }} 13 years of experience in the product design
      space, and have been managing teams since 2017.
    </p>
    <div class="my-6 grid grid-cols-1 gap-10 md:grid-cols-2">
      <div v-for="job in experience">
        <span class="font-bold text-xl block"
          ><a href="https://www.stripe.com" :class="job.class">{{
            job.brand
          }}</a></span
        >
        <p class="mb-4 text-sm mt-1 text-gray-600">
          {{ job.role }}, {{ job.start }}-{{ job.end }}
        </p>
        <p class="text-md max-w-lg"><nuxt-content :document="job" /></p>
      </div>
    </div>
    <div class="mt-12">
      <nuxt-link class="button" to="/about">See full bio</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['experience'],
}
</script>
