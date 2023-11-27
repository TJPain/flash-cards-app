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
                :class="{ 'selected-answer': selected && answer === selectedAnswer }"
                @click="!selected && selectAnswer(answer)"
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
            additionalAnswers: [],
            selected: false,
            selectedAnswer: null
        };
    },
    computed: {
        shuffledAnswers() {
            const answers = [...this.additionalAnswers, this.sanskritName];
            return answers.sort(() => 0.5 - Math.random());
        }
    },
    created() {
        this.additionalAnswers = getRandomAnswers(this.sanskritName);
    },
    methods: {
        selectAnswer(answer) {
            if (this.selected) return;

            this.selectedAnswer = answer;
            this.selected = true;

            const result = answer === this.sanskritName ? 'correct' : 'incorrect';
            this.$emit('answerSelected', result);
        },
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
    .selected-answer {
        background-color: #e0dbda;
        color: #8b8988;
    }
    @media only screen and (max-width: 1200px) {
        .card__image {
            width: 700px;
        }
    }
    @media only screen and (max-width: 1100px) {
        .card__image {
            width: 600px;
        }
    }
    @media only screen and (max-width: 1000px) {
        .card__image {
            width: 500px;
        }
    }
    @media only screen and (max-width: 900px) {
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
    @media only screen and (max-width: 600px) {
        .card__answer-button:hover {
            background-color: #f2efee;
            color: #9a9796;
        }
        .card {
            margin: 10px 0 20px 0;
            padding: 12px;
        }
    }
</style>