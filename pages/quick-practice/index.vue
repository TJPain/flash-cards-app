<template>
    <p>See all page</p>
</template>
  
<script>
export default {
layout: 'DefaultLayout',
head() {
    return {
      title: `Quick practice`,
      meta: [
        // titles
        {
          hid: 'og:title',
          property: 'og:title',
          content: `Quick practice`,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `Quick practice`,
        },
        // descriptions
        {
          hid: 'description',
          name: 'description',
          content:
            '83 yoga pose flash cards to learn their Sanskrit names',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            '83 yoga pose flash cards to learn their Sanskrit names',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            '83 yoga pose flash cards to learn their Sanskrit names',
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
}
</script>
