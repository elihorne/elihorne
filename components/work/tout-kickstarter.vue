<template>
  <div
    class="work-container kickstarter-container border border-gray-300 rounded-lg overflow-hidden"
  >
    <div class="">
      <div class="flex md:flex-row flex-col items-center justify-between">
        <div class="p-10 min-w-xl lg:max-w-lg">
          <span class="mb-2 logo block">
            <KickstarterLogo />
          </span>
          <span class="date text-gray-600 inline-block text-sm block"
            >Director of Product Design, 2018-present</span
          >
          <p class="my-6 md:max-w-lg text-md lg:text-lg">
            I hired and led a world-class product design team, responsible for a
            clean, consistent and accessible experience across web, iOS and
            Android
          </p>
          <NuxtLink to="/work/kickstarter" class="button"
            >View case study</NuxtLink
          >
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          class="mock-up max-w-2xl md:max-w-xl lg:max-w-2xl"
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
import KickstarterLogo from '@/assets/logos/kickstarter.svg'
export default {
  components: {
    KickstarterLogo,
  },
}
</script>
