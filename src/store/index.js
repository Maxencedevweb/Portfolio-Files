import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      mode: 'dark' // Par défaut, le mode est défini sur 'sombre'
    };
  },
  mutations: {
    toggleMode(state) {
      // Change le mode entre 'clair' et 'sombre'
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
    }
  },
  actions: {
    toggleDarkMode({ commit }) {
      // Appelle la mutation pour changer le mode
      commit('toggleMode');
    }
  }
});
