<template>
    <div class="card">
        <div class="card__image-container">
            <img class="card__image" :src="imageUrl" alt="Yoga Pose">
        </div>
        <div class="card__text-container">
            <p class="card__english-title">{{ englishName }}</p>
            <p class="card__sanskrit-title">{{ sanskritName }}</p>
        </div>
    </div>
</template>
  
<script>
  export default {
    name: 'PoseDetailsCard',
    props: {
        englishName: {
        type: String,
        required: true
        },
        sanskritName: {
        type: String,
        required: true
        },
        imageUrl: {
        type: String,
        required: true
        }
    }
  }
</script>
  
<style lang="scss" scoped>
    .card {
        border: 1px solid #e3e3e3;
        border-radius: 20px;
        margin: 10px;
        padding: 15px 20px 15px 15px;
        display: flex;
        flex-direction: row;
    }
    .card__image-container {
        height: 150px;
        width: 250px;
        border-radius: 10px;
        background-color: #c8baa8;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        text-align: center;
        overflow: hidden;
        flex-shrink: 0;
    }
    .card__image {
        height: 150px;
        width: auto;
        border-radius: 10px;
    }
    .card__text-container {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        justify-content: center;
    }
    .card__english-title {
        font-size: 16px;
        color: #9a9796;

    }
    .card__sanskrit-title {
        font-size: 20px;
        font-weight: 700;
        color: #7a7675;
    }
</style>