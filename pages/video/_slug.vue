<template>
  <section class="">
    <div class="article-wrapper">
      <div class="article-main">
        <div
          class="article-body pt-8 px-8 container mx-auto bg-white relative z-10 pb-2 case-study-body"
        >
          <div class="shadow-md rounded-lg overflow-hidden">
            <vue-plyr>
              <div
                data-plyr-provider="youtube"
                data-plyr-allow="autoplay"
                v-bind:data-plyr-embed-id="video.youtube"
              ></div>
            </vue-plyr>
          </div>
          <!-- <nuxt-content :document="video" />  -->
        </div>
      </div>
      <div :class="video.slug" class="intro">
        <div class="py-10 article-header border-b border-grey-900">
          <div class="mx-auto container px-8">
            <h1 class="text-4xl mb-3">{{ video.title }}</h1>
            <p class="meta text-gray-600 text-sm mb-8">
              <span class="tags mr-4 pr-4 uppercase">{{ video.tags }}</span>
              <span class="date"
                >Posted {{ $moment(video.updatedAt).fromNow() }}</span
              >
            </p>
            <!-- <div
              class="feedback bg-gray-100 p-3 border-gray-200 rounded-md border"
            >
              <h3 class="mb-2">Share a private thought</h3>
              <p class="mb-4 text-md">
                Do you have a question about something on this page? Notice
                something that seems out of place? Just want to say hi? Add a
                few words below and I'll take a look.
              </p>
              <textarea
                class="w-full border border-gray-200 rounded-md px-3 py-2"
                placeholder="What would you like to share?"
              />
              <div class="md:flex gap-2 mb-3">
                <input
                  class="px-3 py-1 my-1 w-full md:flex-1 border-gray-200 rounded-md border"
                  type="text"
                  placeholder="Name"
                />
                <input
                  class="px-3 w-full my-1 md:flex-1 border-gray-200 rounded-md border"
                  type="email"
                  placeholder="Email"
                />
                <input
                  class="px-3 w-full my-1 md:flex-1 border-gray-200 rounded-md border"
                  border-gray-200
                  rounded-md
                  border
                  type="text"
                  placeholder="(Optional) Twitter username"
                />
              </div>
              <a
                class="bg-gray-800 rounded-md text-white px-3 py-2 inline-block submit"
                >Send feedback</a
              >
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="bg-white relative z-10 border-t border-gray-400 p-8 py-12">
      <div class="container mx-auto">
        <h4 class="mb-6">Next</h4>
      </div>
    </div> -->
    <div class="bg-white relative z-10 border-t border-gray-200 p-8 py-12">
      <div class="container mx-auto px-6">
        <h3 class="mb-2">Watch this next</h3>
        <VideoRow :videos="videos" />
      </div>
    </div>
    <Newsletter />
  </section>
</template>
<script>
export default {
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/vue-plyr/dist/vue-plyr.css',
        },
      ],
    }
  },
  async asyncData({ $content, params }) {
    const video = await $content('videos', params.slug).fetch()
    const videos = await $content('videos')
      .where({ slug: { $ne: params.slug } })
      .fetch()
    return { video, videos }
  },
}
</script>

<style>
.article-wrapper .plyr__poster {
  top: -2px;
}

.case-study-body h2 {
  @apply my-8;
  @apply max-w-2xl;
  @apply mx-auto;
  @apply text-3xl font-bold;
}

.case-study-body h3 {
  font-weight: 900;
  @apply text-xl;
  @apply my-10;
  @apply max-w-2xl;
  @apply mx-auto;
}

.case-study-body blockquote {
  @apply text-xl;
}

.case-study-body p {
  @apply my-6;
  @apply max-w-2xl;
  @apply mx-auto;
}

.article-wrapper {
  @apply leading-relaxed;
}

.article-wrapper .case-study-body p {
  @apply max-w-4xl;
}

.article-wrapper .case-study-body h2 {
  @apply max-w-4xl;
}

.article-wrapper .case-study-body ul {
  @apply max-w-4xl;
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

.project-template .meta {
  @apply p-6;
}

.project-template .name {
  @apply text-xl font-bold mb-5 block;
}

.project-template .label {
  @apply uppercase text-sm font-bold;
  margin: 0;
}

.project-template .art img {
  margin: 0;
}

.project-template p {
  margin-left: 0;
  margin-right: 0;
}

.project-template ul {
  @apply my-3;
  @apply ml-6;
}

.project-template .button {
  @apply my-3;
}

.project-template li {
  list-style-type: disc;
  margin-left: 0;
}

.research-steps {
}

.research-steps li {
  padding: 8px;
  margin: 6px 0;
  display: block;
}

.design-critique {
  @apply my-10;
}

.design-critique div {
  padding: 8px;
}

.design-critique .early,
.design-critique .mid {
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
}

.design-critique .late {
  border-bottom: 1px solid #eee;
}

.design-critique .last {
  border-bottom: 0;
}

.design-critique .stage {
  text-align: center;
  padding-bottom: 10px;
  @apply font-bold;
}

.design-critique .crit {
  background: #05ce78;
  padding: 10px;
  margin: 3px;
  display: block;
  @apply rounded-md;
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.design-critique .crit:hover {
  background: #444;
}

.design-critique p {
  margin: 5px 0;
}

.design-critique h5 {
  font-weight: bold;
}

.skills-matrix .row-header {
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
  padding: 10px 12px;
  @apply font-bold text-sm;
  @apply bg-gray-200;
}

.skills-matrix .row-header.last {
  border-bottom: 0;
}

.skills-matrix .col-header.last {
  border-right: 0;
}

.skills-matrix .col-header {
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
  padding: 10px 12px;
  @apply font-bold text-sm;
  @apply bg-gray-200;
}

.skills-matrix .redact {
  position: relative;
  padding: 2px;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
  display: block;
}

.skills-matrix .redact:hover {
  @apply bg-gray-600;
}

.skills-matrix .redact:after {
  content: '';
  display: block;
  width: 65%;
  height: 10px;
  background: #ddd;
  margin: 8px;
}

.skills-matrix .redact:before {
  content: '';
  display: block;
  width: 90%;
  height: 10px;
  background: #ddd;
  margin: 8px;
}

.hiring-wizard {
  padding: 15px;
  overflow: hidden;
  @apply text-sm font-bold;
}

.hiring-wizard .step {
  border: 2px solid #ccc;
  background: #fff;
  position: relative;
  z-index: 3;
  width: 30px;
  height: 30px;
  border-radius: 100%;

  display: inline-block;
  line-height: 24px;
}

.hiring-wizard .step.active {
  border: 2px solid #05ce78;
  background: #05ce78;
  color: #fff;
}

.hiring-wizard ol {
  padding: 0;
  margin: 0;
  position: relative;
  overflow: hidden;
}

.hiring-wizard li {
  float: left;
  padding: 0;
  margin: 0;
  width: 100%;
  text-align: center;
}

.hiring-wizard.steps-3 li {
  width: 33%;
}

.hiring-wizard.steps-4 li {
  width: 25%;
}

.hiring-wizard li:after {
  content: '';
  display: block;
  height: 2px;
  background-color: #ccc;
  position: absolute;

  top: 13px;
  z-index: 1;
}

.hiring-wizard li:before {
  content: '';
  display: block;
  height: 2px;
  position: absolute;
  background: #05ce78;
  left: 12%;
  right: 50%;
  top: 13px;
  z-index: 2;
}

.hiring-wizard.steps-3 li:after {
  left: 17%;
  right: 17%;
}

.hiring-wizard.steps-3 li:before {
  left: 17%;
  right: 50%;
}

.hiring-wizard.steps-4 li:before {
  left: 12%;
  right: 12%;
}

.hiring-wizard.steps-4 li:after {
  left: 12%;
  right: 12%;
}
</style>
