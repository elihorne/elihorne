<template>
  <div
    class="work-container kickstarter-container border-4 border-gray-900 rounded-lg overflow-hidden"
  >
    <div class="">
      <div class="flex md:flex-row flex-col items-center justify-between">
        <div class="p-10 min-w-xl lg:max-w-lg">
          <span class="mb-2 block">
            <inline-svg src="logo-kickstarter.svg"></inline-svg>
          </span>
          <span class="date inline-block text-sm block"
            >2017 to present - Director of Product Design</span
          >
          <p class="my-6 md:max-w-lg text-lg">
            I hired and manage a world-class design team, responsible for a
            simple, consistent and maintainable experience across web, iOS and
            Android.
          </p>
          <NuxtLink
            to="/kickstarter"
            class="bg-white bg-opacity-50 p-2 px-4 text-black font-bold rounded-full text-sm inline-block"
            >View case study</NuxtLink
          >
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          class="mock-up max-w-2xl md:max-w-xl lg:max-w-xl"
        >
          <img
            src="@/assets/work/kickstarter/ksr-web-ios-android-lock-up.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
