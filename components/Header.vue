<template>
  <header class="absolute top-0 left-0 right-0 global px-4 py-6 z-20">
    <div class="container mx-auto">
      <NuxtLink to="/" class="p-2 nav-item item-brand uppercase font-bold"
        >Eli Horne</NuxtLink
      >
      <nav class="float-right">
        <NuxtLink to="/work" class="p-2 px-4 nav-item uppercase item-work"
          >Work</NuxtLink
        >
        <NuxtLink to="/about" class="p-2 px-4 nav-item uppercase item-play"
          >About</NuxtLink
        >
      </nav>
    </div>
  </header>
</template>
<style>
header a {
  border-bottom: 0;
}
</style>
