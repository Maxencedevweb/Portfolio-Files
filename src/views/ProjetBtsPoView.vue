<script>
export default {
  data() {
    return {
      lastScrollTop: 0, // Garde en mémoire la position du dernier scroll
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); // Appel initial de la fonction pour gérer l'état initial
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const elements = document.querySelectorAll('.animatedLtoR');
      const windowHeight = window.innerHeight;
      const middleOfWindow = windowHeight /2.5;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect();

        if (scrollTop > this.lastScrollTop) {
          // Scroll vers le bas
          if (elementPosition.top < middleOfWindow && !element.classList.contains('active')) {
            element.classList.add('active');
          }
        } else {
          // Scroll vers le haut
          if (elementPosition.top > middleOfWindow && element.classList.contains('active')) {
            element.classList.remove('active');
          }
        }
      });

      this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Garde à jour la position du dernier scroll
    },
  },
};
</script>


<template>
  <div id="container"> 
    <h1 class="animated">Interface de paramétrage pour les journées Portes Ouvertes du Lycée Léonce Vieljeux</h1>
    <h2 class="animated">Dans le cadre de mon projet de BTS, j'ai réalisé une application web en PHP/JS/MariaDB.<br> Cette application permet de configurer les différents points d'intéret du lycée pour ensuite être guidé automatiquement lors des journées portes ouvertes.</h2>
    <h2 class="animated">L'application web est doté d'un système de connexion.</h2>
    <img class="animated" src="../../public/assets/projet-bts.PNG">
    <h2 class="animatedLtoR slide-to-left-scroll">Une fois connecté, l'utilisateur accède à l'interface de paramétrage des points d'intêrets.</h2>
    <img class="animatedLtoR slide-to-left-scroll"  src="../../public/assets/projet-bts-param.PNG">
    <h2 class="animatedLtoR slide-to-left-scroll">Il peut ensuite placer les points graphiquement et y renseigner leurs informations.</h2>
    <img class="animatedLtoR slide-to-left-scroll"  src="../../public/assets/projet-bts-param-ajouter.PNG">
    <h2 class="animatedLtoR slide-to-left-scroll">Une fois tous les points placés, il suffit de les relier en cliquant sur les points pour former des chemins.</h2>
    <img class="animatedLtoR slide-to-left-scroll"  src="../../public/assets/projet-bts-chemins.PNG">
  </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');


h1 {
  color: #EEEEEE;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 30px;
  justify-content: center;
}

h1.animated {
  animation: slide-to-left 1s ease-out forwards;
}

h2 {
  color: #B4B4B4;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 20px;
}

h2.animated {
  animation: slide-to-left 1.35s ease-out forwards;
}
img.animated {
  animation: slide-to-bottom 1s ease-out forwards;
}

@media (min-width: 1240px) {
  #container {
    position: absolute; /* Positionnement absolu par rapport à la page */
    top: 20%; /* Déplace le contenu de moitié de la hauteur de la page */
    padding-left: 10%;
    padding-right: 10%;
    text-align: left; /* Centre le contenu horizontalement */
    
  }
  img {

    display: flex;
    margin: auto;
    width: 90%;
    margin-bottom: 60px;

  }
}

.slide-to-left-scroll {
  opacity: 0;
  transform: translateX(-100svh); /* Déplace l'élément de -100px vers la gauche */
  transition: opacity 0.3s ease-in, transform 0.8s ease; /* Transition de l'opacité et de la transformation */
}

.active.slide-to-left-scroll {
  opacity: 1;
  transform: translateX(0); /* Réinitialise la position à 0 pour afficher l'élément */
}
</style>
