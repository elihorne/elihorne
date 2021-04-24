<template>
  <header class="absolute text-sm top-0 left-0 right-0 global py-6 z-20">
    <div class="container mx-auto px-6 md:px-8">
      <NuxtLink to="/" class="py-1 nav-item item-brand uppercase font-bold"
        >Eli Horne</NuxtLink
      >
      <nav class="float-right">
        <NuxtLink to="/work" class="py-1 mx-3 nav-item uppercase item-work"
          >Work</NuxtLink
        >
        <NuxtLink to="/video" class="py-1 mx-3 nav-item uppercase item-work"
          >Video</NuxtLink
        >
        <!-- <NuxtLink to="/writing" class="py-1 mx-3 nav-item uppercase item-work"
          >Writing</NuxtLink
        > -->
        <NuxtLink to="/about" class="py-1 mx-3 nav-item uppercase item-play"
          >About</NuxtLink
        >
      </nav>
    </div>
  </header>
</template>
<style>
header a {
  border-bottom: 3px solid transparent;
  transition: all 0.35s ease-in-out;
}

header a:hover {
  border-bottom: 3px solid #000;
}

.nuxt-link-exact-active {
  font-weight: bold;
  border-bottom: 3px solid #3cf;
}

header .nuxt-link-active {
  font-weight: bold;
  border-bottom: 3px solid #3cf;
}
</style>
