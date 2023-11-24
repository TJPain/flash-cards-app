<template>
  <div class="poses__container">
    <PoseDetailsCard 
      v-for="pose in poses" 
      :key="pose.id"
      class="card"
      :english-name="pose.english_name"
      :sanskrit-name="pose.sanskrit_name"
      :image-url="pose.image_url"
    />
  </div>
</template>
  
<script>
import PoseDetailsCard from '@components/cards/PoseDetailsCard.vue';
import getYogaPoses from '@/services/yogaPosesService';

export default {
    components: {
      PoseDetailsCard,
    },
    layout: "DefaultLayout",
    data() {
        return {
            poses: []
        };
    },
    head() {
        return {
            title: `All poses`,
            meta: [
                // titles
                {
                    hid: "og:title",
                    property: "og:title",
                    content: `All poses`,
                },
                {
                    hid: "twitter:title",
                    name: "twitter:title",
                    content: `All poses`,
                },
                // descriptions
                {
                    hid: "description",
                    name: "description",
                    content: "83 yoga pose flash cards to learn their Sanskrit names",
                },
                {
                    hid: "og:description",
                    name: "og:description",
                    content: "83 yoga pose flash cards to learn their Sanskrit names",
                },
                {
                    hid: "twitter:description",
                    name: "twitter:description",
                    content: "83 yoga pose flash cards to learn their Sanskrit names",
                },
                // don't need to edit
                {
                    hid: "author",
                    name: "author",
                    content: "Tom Pain",
                },
                {
                    hid: "robots",
                    name: "robots",
                    content: "index, follow",
                },
                {
                    hid: "og:type",
                    property: "og:type",
                    content: "website",
                },
                {
                    hid: "twitter:card",
                    name: "twitter:card",
                    content: "summary",
                },
                {
                    hid: "og:image",
                    property: "og:image",
                    content: "https://res.cloudinary.com/tom-pain/image/upload/v1700824087/yoga-site/og-image_z29o9n.jpg",
                },
            ],
        };
    },
    created() {
        this.poses = getYogaPoses();
    },
}
</script>

<style lang="scss" scoped>
  .poses__container {
    padding: 0 30px;
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .card {
    width: 45%;
  }
  @media (max-width: 1100px) {
    .card {
      width: 95%;
    }
}
</style>
