<template>
    <div class="flash-cards__container">
        <div class="flash-cards__top-settings-wrapper">
            <div class="flash-cards__progress-bar-wrapper">       
                <p class="flash-cards__progress-bar-text">Progress</p>
                <div class="flash-cards__progress-bar-container">
                    <div class="flash-cards__progress-bar-inner" :style="progressBarStyle">
                        <p v-if="progressPercentage > 19" class="flash-cards__progress-bar-inner-text">{{ progressPercentage }}%</p>
                    </div>
                </div>
            </div>
            <button
                id="settings-btn"
                ref="settingsButton"
                v-click-outside="hideSettings"
                class="flash-cards__settings-btn"
                @click.prevent="toggleSettings"
            >
            </button>
            <div v-if="showSettings" ref="settingsDropdown" class="flash-cards__settings-dropdown">
                <button class="flash-cards__settings-close-icon" @click.prevent="toggleSettings">X</button>
                <div class="flash-cards__bottom-settings-wrapper">
                    <div class="toggle-container">
                        <span class="toggle-label">Auto transition to next question</span>
                        <label class="switch">
                            <input v-model="autoTransition" type="checkbox" @change="saveAutoTransitionSetting">
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div class="toggle-container">
                        <span class="toggle-label">Show English Names</span>
                        <label class="switch">
                            <input v-model="showEnglishNames" type="checkbox" @change="saveShowEnglishNamesSetting">
                            <span class="slider round"></span>
                        </label>
                    </div>
                </div>
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
        <button v-if="showResult" @click="goToNextCard">Next question</button>
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
            showSettings: false,
        };
    },
    computed: {
        progressPercentage() {
            return this.currentCardIndex / this.poses.length * 100;
        },
        progressBarStyle() {
            const borderRadius = this.progressPercentage === 100 ? '15px' : '15px 0 0 15px';
            return {
                width: this.progressPercentage + '%',
                'border-radius': borderRadius
            };
        }
    },
    watch: {
        autoTransition(newVal) {
            this.saveAutoTransitionSetting();
        },
        showEnglishNames(newVal) {
            this.saveShowEnglishNamesSetting();
        }
    },
    mounted() {
        window.addEventListener('click', this.handleClickOutside);
        if (typeof window !== 'undefined') {
            this.autoTransition = localStorage.getItem('autoTransition') === 'true';
            this.showEnglishNames = localStorage.getItem('showEnglishNames') === 'true';
        }
    },
    beforeDestroy() {
        window.removeEventListener('click', this.handleClickOutside);
    },
    created() {
        if (typeof window !== 'undefined') {
            this.autoTransition = localStorage.getItem('autoTransition') === 'false';
            this.showEnglishNames = localStorage.getItem('showEnglishNames') === 'false';
        }
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
            if (this.autoTransition) {
                this.nextCardTimeout = setTimeout(() => {
                    this.moveToNextCard();
                }, 2000);
            }
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
        },
        toggleSettings() {
            this.showSettings = !this.showSettings;
        },
        hideSettings() {
            if (this.showSettings) {
                this.showSettings = false;
            }
        },
        handleClickOutside(event) {
            if (!this.showSettings) return;

            const settingsButton = this.$refs.settingsButton;
            const settingsDropdown = this.$refs.settingsDropdown;

            if (settingsButton && !settingsButton.contains(event.target) &&
                settingsDropdown && !settingsDropdown.contains(event.target)) {
                this.showSettings = false;
            }
        },
        saveAutoTransitionSetting() {
        localStorage.setItem('autoTransition', this.autoTransition);
        },
        saveShowEnglishNamesSetting() {
            localStorage.setItem('showEnglishNames', this.showEnglishNames);
        },
    },
}
</script>
  
<style lang="scss" scoped>
.flash-cards__container {
    margin-top: 90px;
    padding: 15px;
}
.flash-cards__top-settings-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    margin-bottom: 30px;
    position: relative;
}
.flash-cards__bottom-settings-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 15px;
    margin: 15px 0;
}
.toggle-container {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    justify-content: space-between;
}
.toggle-label {
    margin-right: 30px;
    font-size: 16px;
    color: #9a9796;
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
  background-color: #ddd6d4;
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
  background-color: #9a9796;
}
input:focus + .slider {
  box-shadow: 0 0 1px #9a9796;
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
.flash-cards__progress-bar-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.flash-cards__progress-bar-text {
    margin: 0 10px 0 0;
    font-size: 16px;
    color: #9a9796;
}
.flash-cards__progress-bar-container {
    width: 250px;
    height: 30px;
    padding: 5px;
    border-radius: 15px;
    background-color: #f2efee;
}
.flash-cards__progress-bar-inner {
    width: 70%;
    height: 100%;
    background-color: #9a9796;
}
.flash-cards__progress-bar-inner-text {
    color: #f2efee;
    margin-left: 8px;
    font-size: 14px;
}
.flash-cards__settings-btn {    
    background-image: url(~@/assets/images/icons/settings.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 25px;
    width: 25px;
    border: none;
    background-color: unset;
    transition: all 0.4s ease;
}
.flash-cards__settings-btn:hover {
  cursor: pointer;
}
.flash-cards__settings-btn:hover {
  animation-duration: 0.5s;
  animation-name: BounceArrow;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  cursor: pointer;
}
.flash-cards__settings-dropdown {
    position: absolute;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 10;
    top: 40px;
    right: 0px;
    text-align: right;
    min-width: 380px;
}
.flash-cards__settings-close-icon {
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 5px;
    transition: all 0.4s ease;
    color: #9a9796;
}
.flash-cards__settings-close-icon:hover {
    background-color: #f2efee;
    border: 1px solid #9a9796;
    cursor: pointer;
}
</style>
