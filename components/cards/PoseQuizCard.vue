<template>
    <div class="card">
        <div class="card__image-container">
            <img class="card__image" :src="imageUrl" alt="Yoga Pose">
        </div>
        <div class="card__text-wrapper">
            <p v-if="showEnglishNames" class="card__english-title">{{ englishName }}</p>
            <div class="card__answers-wrapper">
                <button 
                v-for="answer in shuffledAnswers" 
                :key="answer" 
                class="card__answer-button"
                @click="selectAnswer(answer)"
                >
                    {{ answer }}
                </button>
            </div>
        </div>  
    </div>
</template>
  
<script>
import getRandomAnswers from '@/services/randomAnswersService';

export default {
    name: 'PoseQuizCard',
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
        },
        showEnglishNames: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
        additionalAnswers: []
        };
    },
    computed: {
        shuffledAnswers() {
        const answers = [...this.additionalAnswers, this.sanskritName];
        return this.shuffleArray(answers);
        }
    },
    created() {
        this.additionalAnswers = getRandomAnswers(this.sanskritName);
    },
    methods: {
        shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
        },
        selectAnswer(answer) {
        const result = answer === this.sanskritName ? 'correct' : 'incorrect';
        this.$emit('answerSelected', result);
        }
    }
}
</script>
  
<style lang="scss" scoped>
    .card {
        border: 1px solid #e3e3e3;
        border-radius: 20px;
        margin: 10px;
        padding: 25px 30px 25px 25px;
        display: flex;
        flex-direction: row;
    }
    .card__image-container {
        height: 450px;
        width: auto;
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
        height: 450px;
        width: auto;
        border-radius: 10px;
    }
    .card__text-wrapper {
        display: flex;
        flex-direction: column;
        margin-left: 30px;
        width: 100%;
    }
    .card__english-title {
        font-size: 22px;
        font-weight: 700;
        color: #9a9796;

    }
    .card__answers-wrapper {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    .card__answer-button {
        margin-bottom: 12px;
        min-height: 40px;
        width: 100%;
        border-radius: 10px;
        border: 1px solid #9a9796;
        padding: 10px;
        background-color: #f2efee;
        color: #9a9796;
        transition: 0.25s ease-in-out;
    }
    .card__answer-button:hover {
        cursor: pointer;
        background-color: #e0dbda;
        color: #8b8988;
    }
</style>