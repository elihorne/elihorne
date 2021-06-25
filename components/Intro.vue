<template>
  <div class="intro border-b border-gray-200">
    <div class="container py-20 px-6 mx-auto">
          <h1 class="text-5xl md:text-6xl mb-4 leading-tight">Hi, I'm Eli.</h1>
          <p class="text-2xl mb-4 font-bold">
            Leading design on payments at
            <a class="stripe" href="https://stripe.com">Stripe</a>.
          </p>
          <p class="text-lg text-gray-700 max-w-lg leading-relaxed">
            I'm a product leader focused on design and strategy, creating
            beautiful, usable experiences that provide meaningful value.
          </p>
          <div class="my-8">
            <nuxt-link to="/about" class="button"
              >Learn more about me</nuxt-link
            >
          </div>
      </div>
    </div>
    <!-- <div class="logo-ribbon border-t border-gray-200">
      <div
        class="container text-center mx-auto content-center flex justify-around"
      >
        <div class="p-10 content-center">
          <img
            class="block mx-auto"
            src="//logo.clearbit.com/stripe.com?size=60"
          />
        </div>
        <div class="border-l border-gray-200 p-10 justify-center flex">
          <img class="" src="//logo.clearbit.com/kickstarter.com?size=60" />
        </div>
        <div class="border-l border-gray-200 p-10">
          <img src="//logo.clearbit.com/google.com?size=60" />
        </div>
        <div class="border-l border-gray-200 p-10">
          <img src="//logo.clearbit.com/foodnetwork.com?size=60" />
        </div>
      </div>
    </div> -->
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

.avatar-card {
  transform: rotateX(25deg) rotateZ(-15deg);
}
</style>
