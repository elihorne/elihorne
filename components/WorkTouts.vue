<template>
  <div class="work-touts bg-opacity-75 px-6 lg:flex w-full lg:gap-10">
    <div v-for="casestudy in casestudies" class="my-8 w-full">
      <NuxtLink :to="{ path: '/work/' + casestudy.slug }">
        <div
          :class="casestudy.slug"
          class="work-container border border-gray-300 bg-gray-400 rounded-lg overflow-hidden"
        >
          <div class="">
            <div
              class="flex flex-col md:flex-row flex-grow lg:flex-col items-center justify-between"
            >
              <div class="p-8 md:p-8 lg:p-10">
                <span class="logo block mb-2">
                  <img :src="casestudy.logo" />
                </span>
                <span class="date text-gray-600 inline-block text-sm"
                  >{{ casestudy.role }}, {{ casestudy.start }}-{{
                    casestudy.end
                  }}</span
                >
                <p class="my-6 md:max-w-md lg:max-w-xl text-md lg:text-lg">
                  {{ casestudy.blurb }}
                </p>
                <NuxtLink
                  :to="{ path: '/work/' + casestudy.slug }"
                  class="button"
                  >View case study</NuxtLink
                >
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                class="mock-up p-4 max-w-2xl md:max-w-md lg:max-w-xl"
              >
                <img :src="casestudy.thumbnail" />
              </div>
            </div>
          </div></div
      ></NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ['casestudies'],
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
  max-width: 250px;
  max-height: 50px;
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
