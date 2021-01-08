<template>
  <footer class="footer relative z-20 global text-white">
    <div class="bg-black bg-opacity-90 text-sm p-8">
      <div class="connect grid grid-cols-2 gap-x-10 mx-auto container py-5">
        <h4 class="text-lg text-opacity-50 text-white">Let's connect</h4>
        <nav class="grid grid-cols-2 gap-4">
          <span>
            <a class="inline" href="https://twitter.com/elihorne">Twitter</a>
          </span>
          <span
            ><a class="inline" href="https://instagram.com/elihorne"
              >Instagram</a
            ></span
          >
          <span
            ><a class="inline" href="https://youtube.com/elihorne"
              >YouTube</a
            ></span
          >
          <span
            ><a class="inline" href="https://linkedin.com/in/elihorne"
              >LinkedIn</a
            ></span
          >
          <span
            ><a class="inline" href="https://elihorne.substack.com"
              >Substack</a
            ></span
          >
          <span><a class="inline" href="mailto:me@elihorne.com">Email</a></span>
        </nav>
      </div>
      <div
        class="wrap-up container mx-auto pt-8 mt-8 grid grid-cols-2 gap-x-10 border-t border-white border-opacity-25 text-opacity-50 text-white"
      >
        <nav>
          <NuxtLink class="font-bold" to="/">Eli Horne&mdash;2021</NuxtLink>
        </nav>
        <p>Made in Brooklyn, NY with bubble gum and duct tape.</p>
      </div>
    </div>
  </footer>
</template>
<style>
a {
  border-bottom: 3px solid #3cf;
  display: inline-block;
  font-weight: bold;
  padding: 1px 2px;
}

a[aria-hidden] {
  border: 0;
  padding: 0;
}

.connect a:hover {
  border-bottom: 3px solid #fff;
}

a.kickstarter {
  border-bottom: 3px solid #05ce78;
}

a.foodnetwork {
  border-bottom: 3px solid #ca2125;
}

a.google {
  border-bottom: 3px solid #4285f4;
}

a.playboy {
  border-bottom: 3px solid #111;
}

.wrap-up a {
  border-bottom: 0;
}
</style>
