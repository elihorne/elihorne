<template>
  <div>
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
  background: #fff;
}

h1,
h2,
h4 {
  font-family: 'Playfair Display', serif;
  font-weight: bold;
}

h3 {
  font-weight: 900;
}

h4 {
  @apply text-lg;
}
</style>
