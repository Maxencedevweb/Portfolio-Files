<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue';
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
.dark-mode h1 {
  color: #ffffff;
}
.dark-mode h2 {
  color: #B4B4B4;
}

.light-mode h1 {
  color:#65636D;
}
.light-mode h2 {
  color:#211F26;
}
</style>
