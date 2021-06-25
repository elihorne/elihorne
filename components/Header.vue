<template>
  <header class="text-sm z-20 relative border-b border-gray-200">
    <div class="container flex mx-auto px-6 md:px-8">
      <NuxtLink to="/" class="flex-none nav-item item-brand uppercase font-bold"
        >Eli Horne</NuxtLink
      >
      <nav class="flex-grow text-right">
        <NuxtLink to="/work" class="">Work</NuxtLink>
        <NuxtLink to="/video" class="">Video</NuxtLink>
        <!-- <NuxtLink to="/writing" class="mx-3 nav-item uppercase item-work"
          >Writing</NuxtLink
        > -->
        <NuxtLink to="/about" class="">About</NuxtLink>
      </nav>
    </div>
  </header>
</template>
<style>
header a {
  border-bottom: 3px solid transparent;
  transition: all 0.35s ease-in-out;
  @apply py-4 px-1;
}

header a:hover {
  border-bottom: 3px solid #000;
}

nav a {
  @apply py-4 uppercase px-2 inline-block;
  border-bottom: 3px solid transparent;
}

nav .nuxt-link-exact-active {
  font-weight: bold;
  @apply text-black;
  border-bottom: 3px solid #3cf;
}

header nav .nuxt-link-active {
  font-weight: bold;
  border-bottom: 3px solid #3cf;
}
</style>
