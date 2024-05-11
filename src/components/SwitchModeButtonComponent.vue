<template>
    <div>
      <!-- Bouton pour basculer entre le mode sombre et le mode clair -->
      <img
        :src="mode === 'dark' ? '/Portfolio/assets/icons/darktolight.svg' : '/Portfolio/assets/icons/lighttodark.svg'"
        :alt="mode === 'dark' ? 'Mode clair' : 'Mode sombre'"
        @click="toggleMode"
        style="cursor: pointer;"
      />
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      mode() {
        return this.$store.state.mode;
      }
    },
    methods: {
      toggleMode() {
        this.$store.dispatch('toggleDarkMode');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Ajoutez des styles supplémentaires pour le composant si nécessaire */
  </style>
 