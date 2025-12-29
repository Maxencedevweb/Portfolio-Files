<script setup></script>

<template>
  <div id="container-home">
    <h1>À propos de moi.</h1>
    <h2>
      Passionné par l'informatique depuis toujours. <br />
      A la recherche d'opportunités dans le développement web.
    </h2>
    <div class="icons">
      <a href="https://github.com/Maxencedevweb" target="_blank">
        <img src="/assets/icons/github.svg" title="Mon github" alt="Icone github" class="icon" />
      </a>
      <a href="https://linkedin.com/in/maxence-hirault-90b66324b" target="_blank">
        <img
          src="/assets/icons/linkedin.svg"
          title="Mon linkedin"
          alt="Icone linkedin"
          class="icon"
        />
      </a>
    </div>
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

#container-home {
  position: absolute; /* Positionnement absolu par rapport à la page */
  top: 35%; /* Déplace le contenu de moitié de la hauteur de la page */
  padding-left: 10%;
  text-align: left; /* Centre le contenu horizontalement */
  min-width: 400px;
  max-width: 50vw;
}

.icons {
  display: flex;
}

.icon {
  height: 48px; /* Définit la hauteur de toutes les icônes */
  width: 48px;
  margin-right: 8px; /* Ajoute un espace entre les icônes */
  animation: opacity 1.8s ease-in forwards;
}

h1 {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 60px;
  justify-content: center;
  animation: opacity 0.5s ease-in forwards;
}

h2 {
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 20px;
  animation: opacity 0.9s ease-in forwards;
}

.dark-mode h1 {
  color: #ffffff;
}
.dark-mode h2 {
  color: #b4b4b4;
}

.light-mode h1 {
  color: #65636d;
}
.light-mode h2 {
  color: #211f26;
}
</style>
