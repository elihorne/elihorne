<template>
  <div class="about">
    <div class="container mx-auto p-8">
      <div class="md:flex md:flex-cols mx-auto gap-24">
        <div class="rounded-lg pt-6 md:w-1/3 overflow-hidden">
          <img class="w-full" src="~/assets/about/eli-avatar.gif" />
        </div>
        <div class="md:w-2/3 max-w-2xl">
          <h2>About</h2>
          <p class="text-2xl">
            I am a product design leader with over 13 years in the industry.
          </p>
          <p>
            After growing up in New Orleans, I've spent the last decade in New
            York City, where I live with my
            <a href="https://liztan.com">wife</a>, our daughter, and a dog named
            <a href="https://www.instagram.com/clarkamuskent/">Clark Kent</a>.
          </p>
          <p>
            I believe in the democratization of access and knowledge that
            technology can bring to the world. Something that was once
            artificially scarce and prohibitively expensive can be made
            available to every person with a screen and an internet connection.
          </p>
          <h2>Career</h2>
          <p>
            As VP of Product and Design at Kickstarter, I'm focused on helping
            bring creative projects to life. Before that, I worked at Google as
            a Design Lead on G Suite's productivity tools - Google Docs, Sheets,
            and Forms.
          </p>
          <p>
            &rarr; <NuxtLink to="/work" class="mr-2">Case studies</NuxtLink>
          </p>
          <h2>Education</h2>
          <p>
            In pursuit of my lifelong interest in storytelling, I majored in
            cinematography at Temple University's School of Communication and
            Design. I moved to New York to follow that dream but realized that
            I'd spent the last 4 years teaching myself how to design websites on
            nights and weekends, and I had loved every minute of it. The rest is
            history.
          </p>
          <h2>Interests</h2>
          <p>
            I think life is best lived through experiences. For me, that means
            traveling and sharing stories through photos and videos. In 2015, I
            spent 3 months backpacking through South East Asia. In 2017, I spent
            6 months driving a 1988 VW Vanagon around America.
          </p>
          <p>
            You can see my photos on
            <a href="https://instagram.com/elihorne">Instagram</a>, and my
            videos on <a href="https://youtube.com/elihorne">YouTube</a>.
          </p>
          <h2>Misc</h2>
          <p>
            I enjoy keeping up with new web technologies, and this site is my
            playground. The current version is built with
            <a href="https://nuxtjs.org/">Nuxt.js</a>,
            <a href="https://tailwindcss.com/">Tailwind CSS</a>, and hosted on
            <a href="https://firebase.google.com/">Firebase</a>.
          </p>
        </div>
      </div>
      <p></p>
    </div>
    <Newsletter />
  </div>
</template>

<script>
export default {}
</script>

<style>
.about {
  @apply pt-20;
}
.about h2 {
  @apply py-6;
}
.about p {
  @apply py-3;
}
</style>
