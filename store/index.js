export const state = () => ({
    autoTransition: false,
    showEnglishNames: false,
});

export const mutations = {
    setAutoTransition(state, value) {
        state.autoTransition = value;
    },
    setShowEnglishNames(state, value) {
        state.showEnglishNames = value;
    },
};
