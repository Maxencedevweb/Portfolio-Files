<script>
import SwitchModeButton from '/src/components/SwitchModeButtonComponent.vue'
export default {
  components: {
    SwitchModeButton
  },
  data() {
    return {
      isHeaderFixed: false, // Indique si le Header est fixé en haut ou non
      headerHeight: 0 // Hauteur du Header initial
    }
  },
  mounted() {
    // Mesurer la hauteur du Header initial
    this.headerHeight = document.getElementById('container-nav').offsetHeight

    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll() // Appel initial de la fonction pour gérer l'état initial
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      // Position de défilement verticale
      const scrollTop = window.scrollY || document.documentElement.scrollTop

      // Définir l'état isHeaderFixed en fonction de la position de défilement
      this.isHeaderFixed = scrollTop > this.headerHeight
    }
  }
}
</script>

<template>
  <div>
    <!-- Espace réservé pour le header fixe -->
    <div v-if="isHeaderFixed" :style="{ height: headerHeight + 'px' }"></div>

    <!-- Header -->
    <div :class="{ 'fixed-header': isHeaderFixed }" id="container-nav">
      <nav>
        <img alt="Logo site" class="logo" src="/assets/M-icon.png" height="100vh" />
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/Realisations">Mes réalisations</RouterLink>
        <switch-mode-button class="switch-mode-button"></switch-mode-button>
      </nav>
    </div>
  </div>
</template>

<style scoped>
#container-nav {
  width: 100%;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
    sans-serif;
}

.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  opacity: 1; /* Garder l'espace du header mais le rendre invisible */
  animation: slide-to-bottom 0.5s ease;
}

nav {
  padding: 10px 20px;
  display: flex;
  align-items: center;
  font-size: 30px;
}

nav a {
  text-decoration: none;
  transition: 0.4s;
  padding: 20px;
}

.switch-mode-button {
  margin-left: auto;
}

.dark-mode nav {
  background-color: #212225;
  border-bottom: 2px solid #363a3f;
}

.dark-mode nav a {
  color: #eeeeee;
}

.light-mode nav {
  background-color: #f2eff3;
  border-bottom: 2px solid #d9d9e0;
}
.light-mode nav a {
  color: #65636d;
}
</style>
