<script>
import CardRealisations from '../components/CardRealisationsComponent.vue';

export default {
  components: {
    CardRealisations
  },
  data() {
    return {
      cards: [
        {
          redirectionLink:"/Projet-PO",
          title: "Application web paramétrage",
          imageUrl: "../../public/assets/projet-bts.PNG",
          status: "En cours",
          content: "Projet réalisé lors de mes études, une application web pour alléger la logistique lors des journées Portes Ouvertes...",
          iconTitles: ["IconJs", "IconPhp", "IconMariaDb"]
        },
        {
          redirectionLink:"/Projet-PONG",
          title: "Jeu Pong POO",
          imageUrl: "../../public/assets/projet-bts-pong.PNG",
          status: "Fini",
          content: "Projet réalisé lors de mes études, un jeu Pong en C++ Programmation Orientée Objet...",
          iconTitles: ["IconC++", "IconQt"]
        },
        {
          redirectionLink:"/Projet-BN",
          title: "Jeu Bataille navale",
          imageUrl: "../../public/assets/projet-bts-bataillenavale.PNG",
          status: "Fini",
          content: "Projet réalisé lors de mes études, un jeu bataille navale en C++...",
          iconTitles: ["IconC++"]
        },
        {
          redirectionLink:"/Projet-FlappyBirdRA",
          title: "Flappy Bird Réalité Augmentée",
          imageUrl: "../../public/assets/projet-flappybird.PNG",
          status: "Fini",
          content: "Projet réalisé en tant que stagiaire dans l'entreprise Ullo, une copie du jeu mobile Flappy Bird en réalité augmentée.",
          iconTitles: ["IconCSharp"]
        }
      ],
      animatedCards: [] // Tableau pour stocker les index des cartes animées
    };
  },
  mounted() {
    // Ajoutons une classe "animated" à chaque carte après un délai
    this.cards.forEach((_, index) => {
      setTimeout(() => {
        this.animatedCards.push(index);
      }, index * 250); // Ajoutons un délai de 500ms entre chaque animation
    });
  }
};
</script>

<template>
  <div id="container-realisations">
    <CardRealisations
      v-for="(card, index) in cards"
      :key="index"
      :redirectionLink="card.redirectionLink"
      :titleCard="card.title"
      :imageUrl="card.imageUrl"
      :statusCard="card.status"
      :contentCard="card.content"
      :iconTitles="card.iconTitles"
      :class="{ 'card-component': true, 'animatedcard': animatedCards.includes(index) }"
    ></CardRealisations>
  </div>
</template>

<style scoped>

  #container-realisations {
  position: absolute;
  display: flex; /* Utilise Flexbox */
  flex-wrap: wrap; /* Permet l'enroulement des éléments */
  justify-content: space-between; /* Aligne les éléments sur le côté gauche */
}

.card-component {
  margin-top: 100px;
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 20px; /* Espacement entre les lignes */
  opacity: 0;
  transition: scale 0.3s ease-out; /* Utilise une transition pour l'effet de zoom */
}

.card:hover {
  scale:1.15; /* Zoom de 150% lorsque la souris survole */
}
  
.animatedcard {
  animation: slide-to-bottom 1s ease-out forwards; /* Utilisez une animation pour déplacer la carte du haut et descendre */
}

</style>