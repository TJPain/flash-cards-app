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
            default: false,
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
        margin: 10px 10px 20px 10px;
        padding: 25px 30px 25px 25px;
        display: flex;
        flex-direction: row;
    }
    .card__image-container {
        height: auto;
        width: auto;
        border-radius: 10px;
        text-align: center;
        overflow: hidden;
        flex-shrink: 0;
    }
    .card__image {
        width: 780px;
        height: auto;
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
        font-size: 15px;
    }
    .card__answer-button:hover {
        cursor: pointer;
        background-color: #e0dbda;
        color: #8b8988;
    }

    @media (max-width: 1200px) {
        .card__image {
            width: 700px;
        }
    }
    @media (max-width: 1100px) {
        .card__image {
            width: 600px;
        }
    }
    @media (max-width: 1000px) {
        .card__image {
            width: 500px;
        }
    }
    @media (max-width: 900px) {
        .card {
            flex-direction: column;
        }
        .card__image-container {
            margin-bottom: 20px;
        }
        .card__image {
            width: 100%;
        }
        .card__text-wrapper {
            margin-left: 0;
        }
    }
    @media (max-width: 600px) {
        .card__answer-button:hover {
            background-color: #f2efee;
            color: #9a9796;
        }
    }
</style>