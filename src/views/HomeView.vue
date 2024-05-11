<script setup>

</script>


<template>
  <div id="container-home"> 
    <h1>À propos de moi.</h1>
    <h2>Passionné par l'informatique depuis toujours. Actuellement édudiant en BTS SNIR.</h2>
    <a href="https://github.com/Maxencedevweb" target="_blank"><img src="/assets/icons/github.svg" title="Mon github" alt="Icone github" height="48px"></a>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

@keyframes descendre {
  0% {
    transform: translateX(-120vh); /* Déplace le texte en dehors de l'écran vers la gauche */
  }
  100% {
    transform: translateX(0); /* Déplace le texte au milieu de l'écran */
  }
}

a {
  animation: opacity 1.5s ease-in forwards;
}

h1 {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 60px;
  justify-content: center;
  animation: descendre 1s ease-out forwards;

}

h2 {
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 20px;
  animation: descendre 1.2s ease-out forwards;
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

@media (min-width: 993px) {
  #container-home {
    position: absolute; /* Positionnement absolu par rapport à la page */
    top: 35%; /* Déplace le contenu de moitié de la hauteur de la page */
    padding-left: 10%;
    text-align: left; /* Centre le contenu horizontalement */
  }
}
</style>
