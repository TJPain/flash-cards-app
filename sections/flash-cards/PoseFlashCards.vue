<template>
    <div class="flash-cards__container">
        <div class="flash-cards__top-details-wrapper">
            <p>Card {{ currentCardIndex + 1 }}/{{ poses.length }}</p>
            <div class="toggle-container">
                <span class="toggle-label">Show English Names</span>
                <label class="switch">
                    <input v-model="showEnglishNames" type="checkbox">
                    <span class="slider round"></span>
                </label>
            </div>
        </div>
        <PoseQuizCard
            v-if="poses.length > 0 && currentCardIndex < poses.length"
            :key="poses[currentCardIndex].id"
            :english-name="poses[currentCardIndex].english_name"
            :sanskrit-name="poses[currentCardIndex].sanskrit_name"
            :image-url="poses[currentCardIndex].image_url"
            :show-english-names="showEnglishNames"
            @answerSelected="handleAnswer"
        />
        <p v-if="showResult">{{ resultMessage }}</p>
        <button v-if="showResult" @click="goToNextCard">Next</button>
        <p v-if="quizCompleted">Your score: {{ correctCount }} out of {{ poses.length }}</p>
    </div>
</template>
  
<script>
import PoseQuizCard from '@components/cards/PoseQuizCard.vue';

export default {
    name: 'PoseFlashCards',
    components: {
        PoseQuizCard,
    },
    props: {
        poses: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            currentCardIndex: 0,
            correctCount: 0,
            showResult: false,
            resultMessage: '',
            showEnglishNames: false
        };
    },
    methods: {
        handleAnswer(result) {
            const currentPose = this.poses[this.currentCardIndex];
            if (result === 'correct') {
                this.correctCount++;
                this.resultMessage = 'Correct!';
            } else {
                this.resultMessage = `The correct answer was ${currentPose.sanskrit_name}`;
            }
            this.showResult = true;
            this.nextCardTimeout = setTimeout(() => {
                this.moveToNextCard();
            }, 5000);
        },
        goToNextCard() {
            clearTimeout(this.nextCardTimeout);
            this.moveToNextCard();
        },
        moveToNextCard() {
            this.showResult = false;
            this.currentCardIndex++;

            if (this.currentCardIndex === this.poses.length) {
                this.quizCompleted = true;
            }
        }
    }
}
</script>
  
<style lang="scss" scoped>
.flash-cards__container {
    margin-top: 90px;
    padding: 15px;
}
.flash-cards__top-details-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
}
.toggle-container {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.toggle-label {
    margin-right: 12px;
    font-size: 16px;
}
.switch {
  position: relative;
  display: inline-block;
  width: 45px;
  height: 25px;
}
/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}
input:checked + .slider {
  background-color: #2196F3;
}
input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}
input:checked + .slider:before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}
/* Rounded sliders */
.slider.round {
  border-radius: 25px;
}
.slider.round:before {
  border-radius: 50%;
}
</style>
