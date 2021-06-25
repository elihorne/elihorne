f
<template>
  <div class="case-study">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;800&family=Source+Sans+Pro:wght@400;700;900&display=swap');

body {
  color: #000;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
}

h1,
h2,
h4 {
  font-family: 'Playfair Display', serif;
  @apply text-5xl;
}

.button {
  @apply border shadow-none border-gray-300 bg-white bg-opacity-50 text-sm p-3 px-6 text-sm text-black font-bold rounded-lg inline-block;
  animation: transform all 0.5s ease-in-out;
}

.button:hover {
  @apply shadow-md border-gray-400;
}

[data-aos='fade-up'] {
  -webkit-transform: translate3d(0, 10px, 0);
  transform: translate3d(0, 10px, 0);
}

.case-study-body h2 {
  @apply my-8;
  @apply max-w-2xl;
  @apply mx-auto;
}

.case-study-body h3 {
  font-weight: 900;
  @apply my-10;
  @apply max-w-2xl;
  @apply mx-auto;
}

.case-study-body p {
  @apply my-6;
  @apply max-w-2xl;
  @apply mx-auto;
}

.case-study-body img {
  @apply w-full;
  @apply max-w-4xl;
  @apply mx-auto;
  @apply mt-8;
  @apply mb-4;
  @apply block;
}

.case-study-body ul {
  @apply max-w-2xl;
  @apply mx-auto;
}

.case-study-body li {
  @apply ml-6;
}

.case-study-body .caption {
  @apply text-center;
  @apply block;
  @apply mt-2;
  @apply mb-10;
  @apply text-sm;
  @apply text-gray-700;
}
</style>
