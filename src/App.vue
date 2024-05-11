<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from '/src/components/HeaderComponent.vue';
import { useStore } from 'vuex';
import { computed, onMounted, watch } from 'vue';

const store = useStore();
const mode = computed(() => store.state.mode);

// Fonction pour mettre à jour les classes en fonction du mode
const updateModeClasses = (newMode) => {
  const htmlElement = document.querySelector('html');
  if (newMode === 'dark') {
    htmlElement.classList.add('dark-mode');
    htmlElement.classList.remove('light-mode');
  } else {
    htmlElement.classList.add('light-mode');
    htmlElement.classList.remove('dark-mode');
  }
};

// Appliquer les classes au chargement du composant
onMounted(() => {
  updateModeClasses(mode.value);
});

// Mettre à jour les classes lorsque le mode change
watch(mode, (newMode) => {
  updateModeClasses(newMode);
});

</script>
<template>
  <div>
    <HeaderComponent/>
    <RouterView/>
  </div>
</template>

<style>

.main-container {
  height: 100%;
}

.dark-mode {
  background-color: #18191B;
 
}
.light-mode {
  background-color:#FAF9FB;
}

</style>
