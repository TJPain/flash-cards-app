<template>
  <PoseFlashCards 
    :poses="poses"
  />
</template>

<script>
import PoseFlashCards from '@sections/flash-cards/PoseFlashCards.vue'
import getYogaPoses from '@/services/yogaPosesService';

export default {
  components: {
    PoseFlashCards,
  },
  layout: 'DefaultLayout',
  data() {
      return {
          poses: [],
      };
  },
  head() {
      return {
        title: `Practice 79 yoga poses in Sanskrit`,
        meta: [
          // titles
          {
            hid: 'og:title',
            property: 'og:title',
            content: `Practice 79 yoga poses in Sanskrit`,
          },
          {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: `Practice 79 yoga poses in Sanskrit`,
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
  created() {
    this.poses = getYogaPoses().sort(() => 0.5 - Math.random());
  }
}
</script>
