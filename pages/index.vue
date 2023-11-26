<template>
  <div class="home">
    <HeroBanner />
  </div>
</template>

<script>
import HeroBanner from '@/components/home/HeroBanner'
export default {
  components: {
    HeroBanner,
  },
  layout: 'DefaultLayout',
  head() {
    return {
      title: `Luci's yoga poses`,
      meta: [
        // titles
        {
          hid: 'og:title',
          property: 'og:title',
          content: `Luci's yoga poses`,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `Luci's yoga poses`,
        },
        // descriptions
        {
          hid: 'description',
          name: 'description',
          content:
            '79 yoga pose flash cards to learn their Sanskrit names',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            '79 yoga pose flash cards to learn their Sanskrit names',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            '79 yoga pose flash cards to learn their Sanskrit names',
        },
        // don't need to edit
        {
          hid: 'author',
          name: 'author',
          content: 'Tom Pain',
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'index, follow',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://res.cloudinary.com/tom-pain/image/upload/v1700824087/yoga-site/og-image_z29o9n.jpg',
        },
      ],
    }
  },
  watch: {
    $route(to, from) {
      if (to.hash) {
        this.scrollToHash()
      }
    },
  },
  mounted() {
    if (this.$route.hash) {
      this.scrollToHash()
    }
  },
  methods: {
    scrollToHash() {
      const hash = this.$route.hash
      this.$nextTick(() => {
        this.$scrollTo(hash, 0, { offset: -120 })
      })
    },
  },
}
</script>
