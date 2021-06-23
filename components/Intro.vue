<template>
  <div class="intro py-24 mb-10 border-b border-gray-200">
    <div class="container px-6 mx-auto">
      <h1 class="text-5xl md:text-6xl mb-4 leading-tight">Hi, I'm Eli.</h1>
      <p class="text-2xl mb-4 font-bold">
        I currently work at
        <a class="stripe" href="https://stripe.com">Stripe</a>.
      </p>
      <p class="text-lg text-gray-700 max-w-lg leading-relaxed">
        I'm a product leader focused on design and strategy, creating beautiful,
        usable experiences that provide meaningful value.
      </p>
      <div class="my-6">
        <nuxt-link to="/about" class="button">Learn more about me</nuxt-link>
      </div>
    </div>
  </div>
</template>
<style>
.kickstarter.intro a {
  border-bottom: 3px solid #05ce78;
}

.google.intro a {
  border-bottom: 3px solid #4285f4;
}

.intro h1 {
  font-weight: 800;
}
</style>
