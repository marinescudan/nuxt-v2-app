<template>
  <div class="bx--grid bx--grid--full-width landing-page">
    <div class="bx--row landing-page__banner">
      <div class="bx--col-lg-16">
        <cv-breadcrumb noTrailingSlash>
          <cv-breadcrumb-item>
            <cv-link href="/">Getting started</cv-link>
          </cv-breadcrumb-item>
        </cv-breadcrumb>
        <h1 class="landing-page__heading">Design &amp; build with Carbon</h1>
      </div>
    </div>
    <div class="bx--row landing-page__r2">
      <div class="bx--col bx--no-gutter">
        <cv-tabs selected="0">
          <cv-tab label="About">
            <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
              <div class="bx--row landing-page__tab-content">
                <div class="bx--col-md-4 bx--col-lg-7">
                  <h2 class="landing-page__subheading">What is Carbon?</h2>
                  <p class="landing-page__p">
                    Carbon is IBM’s open-source design system for digital
                    products and experiences. With the IBM Design Language as
                    its foundation, the system consists of working code, design
                    tools and resources, human interface guidelines, and a
                    vibrant community of contributors.
                  </p>
                  <cv-button>Learn more</cv-button>
                </div>
                <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
                  <img
                    class="landing-page__illo"
                    src="../../assets/images/tab-illo.png"
                    alt="Carbon illustration"
                  />
                </div>
              </div>
            </div>
          </cv-tab>
          <cv-tab label="Design">
            <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
              <div class="bx--row landing-page__tab-content">
                <div class="bx--col-lg-16">
                  Rapidly build beautiful and accessible experiences. The Carbon kit
                  contains all resources you need to get started.
                </div>
              </div>
            </div>
          </cv-tab>
          <cv-tab label="Develop">
            <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
              <div class="bx--row landing-page__tab-content">
                <div class="bx--col-lg-16">
                  Carbon provides styles and components in Vanilla, React, Angular,
                  and Vue for anyone building on the web.
                </div>
              </div>
            </div>
          </cv-tab>
        </cv-tabs>
      </div>
    </div>
    <div class="bx--row landing-page__r3">
      <div class="bx--col-md-4 bx--col-lg-4">
        <h3 class="landing-page__label">The Principles</h3>
      </div>
      <div class="bx--col-md-4 bx--col-lg-4">Carbon is Open</div>
      <div class="bx--col-md-4 bx--col-lg-4">Carbon is Modular</div>
      <div class="bx--col-md-4 bx--col-lg-4">Carbon is Consistent</div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'Landing',
  components: {},
  head() {
    return {
      title: 'Landing',
    }
  },
  computed: {},
}
</script>

<style lang="scss">
@import '@/assets/styles/carbon-utils';
@import '@/assets/styles/carbon-overrides';
@import '@/assets/styles/mixins';

.landing-page__illo {
  max-width: 100%;
}

.landing-page__banner {
  padding-top: $spacing-05;
  padding-bottom: $spacing-07 * 4;
  @include landing-page-background;
}

.landing-page__heading {
  @include carbon--type-style('productive-heading-05');
}

.landing-page__r2 {
  margin-top: rem(-40px);
}

.landing-page__tab-content {
  padding-top: $layout-05;
  padding-bottom: $layout-05;
}

.landing-page__subheading {
  @include carbon--type-style('productive-heading-03');
  @include carbon--font-weight('semibold');
}

.landing-page__r3 {
  padding-top: $spacing-09;
  padding-bottom: $spacing-09;
  @include landing-page-background;
}

.landing-page__label {
  @include carbon--type-style('heading-01');
}
</style>