<template>
  <footer class="footer relative z-20 global text-sm text-white">
    <div class="bg-black bg-opacity-90 p-8">
      <div class="connect mx-auto container py-12 px-4 md:px-8">
        <nav class="mb-6">
          <NuxtLink class="font-bold uppercase" to="/">Eli Horne</NuxtLink>
        </nav>
        <div class="grid md:grid-cols-2 gap-x-10">
          <div class="copy text-opacity-75 text-white max-w-md">
            <p class="mb-4">
              I'm a product leader focused on design and strategy, creating
              beautiful, usable experiences that provide meaningful value.
              <NuxtLink to="/about">More &rarr;</NuxtLink>
            </p>
            <p class="mb-4">
              Made in Brooklyn, NY with bubble gum and duct tape.
            </p>
          </div>

          <nav class="grid grid-cols-3 gap-4 text-sm block mt-6 md:mt-0">
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
            <span
              ><a class="inline" href="mailto:me@elihorne.com">Email</a></span
            >
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>
<style>
.footer a {
  display: inline-block;
  font-weight: bold;
  padding: 1px 2px;
  border-bottom: 3px solid #000;
  transition: all 0.35s ease-in-out;
}

.footer a:hover {
  border-bottom: 3px solid #3cf;
}

a[aria-hidden] {
  border: 0;
  padding: 0;
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
