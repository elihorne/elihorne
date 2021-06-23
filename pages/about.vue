<template>
  <div class="about">
    <div class="container mx-auto p-8">
      <div class="md:flex md:flex-cols mx-auto gap-24">
        <div class="rounded-lg pt-6 md:w-1/3 overflow-hidden">
          <img class="w-full" src="~/assets/about/eli-avatar.gif" />
        </div>
        <div class="md:w-2/3 max-w-2xl">
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
          <h3>Career</h3>
          <p>
            I am currently a design manager at Stripe, responsible for
            <a href="http://stripe.com/checkout">Checkout</a>,
            <a href="https://stripe.com/payments/elements">Elements</a>,
            <a href="https://stripe.com/tax">Tax</a> and global payment methods.
          </p>
          <p>
            Previously, as VP of Product and Design at
            <a href="https://kickstarter.com">Kickstarter</a>, I was focused on
            helping bring creative projects to life. I also worked at Google as
            a Design Lead on G Suite's productivity tools - Google Docs, Sheets,
            and Forms.
          </p>
          <p>
            &rarr; <NuxtLink to="/work" class="mr-2">Case studies</NuxtLink>
          </p>
          <h3>Education</h3>
          <p>
            In pursuit of my lifelong interest in storytelling, I majored in
            cinematography at Temple University's School of Communication and
            Design. I moved to New York to follow that dream but realized that
            I'd spent the last 4 years teaching myself how to design websites on
            nights and weekends, and I had loved every minute of it. The rest is
            history.
          </p>
          <h3>Interests</h3>
          <p>
            I think life is best lived through experiences. For me, that means
            traveling and sharing stories through photos and videos. In 2015, I
            spent 3 months backpacking through South East Asia. In 2017, I spent
            6 months driving a 1988 VW Vanagon around America.
          </p>
          <p>
            You can see <nuxt-link to="/video">my videos here</nuxt-link> and
            photos on <a href="https://instagram.com/elihorne">Instagram</a>.
          </p>
          <h3>Misc</h3>
          <p>
            I enjoy keeping up with new web technologies, and this site is my
            playground. The current version is built with
            <a href="https://nuxtjs.org/">Nuxt.js</a>,
            <a href="https://tailwindcss.com/">Tailwind CSS</a>, and hosted on
            <a href="https://firebase.google.com/">Firebase</a>.
          </p>
        </div>
      </div>
      <div
        class="speaking border-gray-400 border-t mt-5 pt-5 md:flex md:flex-cols mx-auto gap-24"
      >
        <div class="w-1/3">
          <h3>Speaking</h3>
        </div>
        <div class="md:w-2/3 max-w-2xl">
          <ul>
            <li class="flex">
              <span class="year">2021</span>
              <span class="event">NOVA Summit, Keynote speaker</span>
              <span class="location">Virtual</span>
            </li>
          </ul>
          <p>
            I'm available to speak at events regarding product design and
            management, building product teams, and consumer applications.
            <a href="mailto:me@elihorne.com">Please get in touch</a>.
          </p>
        </div>
      </div>
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
.about h3 {
  @apply py-0;
  @apply mt-6;
}
.about p {
  @apply py-3;
}

.speaking ul {
  @apply mt-6;
  @apply mb-3;
}

.speaking .year {
  @apply text-gray-700;
  display: inline-block;
  margin-right: 20px;
  @apply font-bold;
  @apply flex-none;
}

.speaking .event {
  @apply flex-1;
}

.speaking .date {
  @apply flex-none;
}
</style>
