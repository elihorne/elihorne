<template>
  <section class="full-height work-sample work-google top-level">
    <div class="">
      <div
        style="padding-bottom: 15vh"
        class="fixed z-0 top-0 h-screen left-0 right-0 google-container w-full flex items-center intro"
      >
        <div
          class="vertical-center text-center mx-auto px-10"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <span class="centered inline-block mb-2">
            <GoogleLogo />
          </span>
          <p class="text-xl max-w-md">
            I led design on Google Docs, Sheets & Forms and contributed core
            features to Slides. I also explored emerging markets and
            experimental editors.
          </p>
          <ol class="toc mt-6 text-lg">
            <li class="py-2">
              <a href="#" v-scroll-to="'#consistency'">Consistency</a>
            </li>
            <li class="py-2">
              <a href="#" v-scroll-to="'#utility'">Utility</a>
            </li>
            <li class="py-2">
              <a href="#" v-scroll-to="'#experimentation'">Experimentation</a>
            </li>
          </ol>
        </div>
      </div>
      <div
        class="bg-white border-t border-grey-900 relative z-10 shadow-xl px-10 case-study-body"
        style="margin-top: 85vh"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div class="relative mx-auto py-10">
          <h2 class="text-3xl font-bold mb-6" id="consistency">Consistency</h2>
          <p class="text-xl">
            During my time on the G Suite team, I was design lead for Docs,
            Sheets and Forms. I also contributed features to Slides, and led
            experimental initiatives.
          </p>

          <h3 class="text-xl mt-4">Swinging the pendulum towards mobile</h3>
          <p>
            Our web experience was the flagship platform, but mobile usage was
            growing rapidly - especially in emerging markets.
          </p>
          <p>
            The mobile apps supported significantly fewer features than the web
            versions, and the experience was randomly different between iOS and
            Android. You could edit a table on Android, but not add one. You
            could view hightlighted text on iOS but not edit it.
          </p>

          <p>
            I designed a palette system for Docs that accomodated the incoming
            features, and worked with design leads on the other editors to make
            sure we were consistent.
          </p>
        </div>
        <img
          class="max-w-2xl mx-auto"
          src="@/assets/work/google/neo-palettes.png"
        />
        <span class="caption">
          A selection of updated palettes from Project Neo.
        </span>
        <div>
          <div class="mx-auto max-w-2xl">
            <h2 class="text-3xl font-bold mb-6" id="utility">Utility</h2>
            <h3 class="text-xl mt-4">Making mobile creation faster</h3>
            <p>
              Styling text and working with lists in the mobile editor was
              harder than it needed to be, and we had the data to prove it.
            </p>
          </div>
          <div class="grid grid-cols-2 mx-auto max-w-3xl">
            <div class="col">
              <img
                class="demo"
                src="@/assets/work/google/formatting-stats-fade.png"
              />
            </div>
            <div class="col mx-auto max-w-2xl">
              <div class="col-inline">
                <p>
                  I gathered stats on the top 10% formatting actions on desktop
                  and compared them to mobile. I then designed a contextual tool
                  strip that appeared above the on-screen keyboard, making
                  popular actions much faster to access.
                </p>
                <p>
                  The toolbar was particularly useful for surfacing secondary
                  options like indentation when inside of a list.
                </p>
                <p>
                  After launch, documents containing rich formatting increased
                  significantly.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src="@/assets/work/google/contextual-keyboard-1.png"
          class="max-w-2xl mx-auto my-4"
        />
        <img
          src="@/assets/work/google/contextual-keyboard-2.png"
          class="max-w-2xl mx-auto my-4"
        />
        <div class="my-8 mx-auto max-w-2xl">
          <h3 class="text-xl mt-4">Making conversations easier</h3>
          <div class="grid grid-cols-2 gap-8">
            <div class="col">
              <div class="col-inline">
                <p>
                  Commenting was very powerful feature, but usage was
                  dissapointlingly low. I suspected it was because discovery and
                  access to the feature was buried.
                </p>
                <p>
                  I designed this feature which appeared near the margin when
                  you hovered in that area, or selected content on the canvas.
                </p>
                <p>After launch, comment usage went up significantly.</p>
              </div>
            </div>
            <div class="col">
              <img src="@/assets/work/google/instant-comments.gif" />
            </div>
          </div>
        </div>

        <div class="mx-auto max-w-2xl">
          <h2 class="text-3xl font-bold mb-6" id="experimentation">
            Experimentation
          </h2>
          <h3 class="text-xl mt-4">
            Pushing on the boundaries of productivity
          </h3>
          <div class="grid grid-cols-2">
            <div class="col">
              <p>
                I led several initiatives to explore what productivity tools
                might look like in the future - faster, smarter, better.
              </p>
              <p>
                While these features didn't launch in this exact format, they
                influenced other "assistive" initiatives at Google.
              </p>
            </div>
            <div class="col">
              <img
                class="vertical-center-image"
                src="@/assets/work/google/experimental-screen-2.gif"
              />
            </div>
          </div>
          <div class="py-6">
            <img
              style="max-width: 400px; margin: 0 auto; display: block"
              src="@/assets/work/google/experimental-screen-3-crop.gif"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white relative z-10 border-t border-gray-400 p-8 py-12">
      <div class="container mx-auto">
        <h4 class="mb-6">Next case study</h4>
        <ToutKickstarter />
      </div>
    </div>
  </section>
</template>
<script>
import GoogleLogo from '@/assets/logos/google.svg'
export default {
  components: { GoogleLogo },
}
</script>
