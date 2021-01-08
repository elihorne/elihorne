<template>
  <section class="full-height work-sample work-google top-level">
    <div class="">
      <div
        style="padding-bottom: 15vh"
        :class="casestudy.slug"
        class="fixed z-0 top-0 h-screen left-0 right-0 w-full flex items-center intro"
      >
        <div
          class="vertical-center text-center mx-auto px-10"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <span class="centered inline-block mb-2">
            <img :src="casestudy.logo" />
          </span>
          <p class="text-md md:text-xl max-w-md">
            {{ casestudy.blurb }}
          </p>
          <ol class="toc mt-6 text-md md:text-lg">
            <li
              v-for="link in casestudy.toc"
              v-if="link.depth == 2"
              class="py-2"
            >
              <a :href="'#' + link.id" v-scroll-to="'#' + link.id">{{
                link.text
              }}</a>
            </li>
          </ol>
        </div>
      </div>
      <div
        class="bg-white border-t border-grey-900 relative z-10 shadow-xl px-8 pb-10 md:px-10 case-study-body"
        style="margin-top: 85vh"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <nuxt-content :document="casestudy" />
      </div>
    </div>
    <div class="bg-white relative z-10 border-t border-gray-400 p-8 py-12">
      <div class="container mx-auto">
        <h4 class="mb-6">Next case study</h4>
        <WorkTouts :casestudies="casestudies" />
      </div>
    </div>
  </section>
</template>
<script>
import GoogleLogo from '@/assets/logos/google.svg'
import casestudyVue from '../../layouts/casestudy.vue'
export default {
  components: { GoogleLogo },
  async asyncData({ $content, params }) {
    const casestudy = await $content('casestudies', params.slug).fetch()
    const casestudies = await $content('casestudies')
      .where({ slug: { $ne: params.slug } })
      .fetch()
    return { casestudy, casestudies }
  },
}
</script>

<style>
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
