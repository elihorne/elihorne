<template>
  <div
    class="work-container google-container border border-gray-300 bg-gray-400 rounded-lg overflow-hidden"
  >
    <div class="">
      <div class="flex md:flex-row flex-col items-center justify-between">
        <div class="p-10 min-w-md">
          <span class="logo block">
            <GoogleLogo />
          </span>
          <span class="date text-gray-600 inline-block text-sm"
            >Design Lead, 2010-2017</span
          >
          <p class="my-6 md:max-w-md text-md lg:text-lg">
            I led design on Google Docs, Sheets &amp; Forms and contributed core
            features to Slides. I also explored emerging markets and
            experimental editors.
          </p>
          <NuxtLink to="/work/google" class="button">View case study</NuxtLink>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          class="mock-up p-4 max-w-2xl md:max-w-md lg:max-w-xl"
        >
          <img src="@/assets/work/google/docs-combined.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GoogleLogo from '@/assets/logos/google.svg'
export default {
  components: {
    GoogleLogo,
  },
}
</script>
