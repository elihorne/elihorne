<template>
  <div class="work-touts p-8 bg-gray-100 bg-opacity-75">
    <div class="mx-auto container">
      <div class="my-10">
        <Kickstarter />
      </div>
      <Google />
      <Experience />
    </div>
  </div>
</template>

<script>
import Kickstarter from '@/components/work/tout-kickstarter'
import Google from '@/components/work/tout-google'
export default {
  name: 'WorkTouts',
  components: {
    Kickstarter,
    Google,
  },
}
</script>

<style>
.work-container {
  @apply bg-gray-200;
  transition: all 0.5s ease-in-out;
  @apply shadow-sm;
}

.work-container .logo svg {
  fill: #222;
  max-width: 200px;
  max-height: 40px;
  text-align: left;
}

.work-container.kickstarter-container .logo svg {
  fill: #05ce78;
}

.work-container:hover {
  transform: scale(1.02);
  @apply shadow-lg;
}

.kickstarter-container {
  background: linear-gradient(to bottom right, #e6faf1, #fff2ec);
}

.google-container {
  background: linear-gradient(to bottom right, rgb(213, 232, 247), #ecf0f8);
}
</style>
