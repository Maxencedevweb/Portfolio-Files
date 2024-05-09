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
          title: "Interface de Paramétrage PO",
          imageUrl: "../../public/assets/projet-bts.PNG",
          content: "Ce projet a été réalisé dans le cadre de mon BTS, dans le but d'alléger la logistique lors des journées Portes Ouvertes..."
        },
        {
          redirectionLink:"/Projet-PONG",
          title: "Pong POO",
          imageUrl: "../../public/assets/projet-bts-pong.PNG",
          content: "Ce projet a été réalisé dans le cadre de mon BTS, dans le but d'acquérir des compétences en Programmation Orientée Objet..."
        },
        {
          redirectionLink:"/Projet-BN",
          title: "Bataille navale",
          imageUrl: "../../public/assets/projet-bts-bataillenavale.PNG",
          content: "Ce projet a été réalisé dans le cadre de mon BTS, dans le but d'acquérir des compétences en programmation C++..."
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
  <div class="realisations">
    <CardRealisations
      v-for="(card, index) in cards"
      :key="index"
      :redirectionLink="card.redirectionLink"
      :titleCard="card.title"
      :imageUrl="card.imageUrl"
      :contentCard="card.content"
      :class="{ 'card-component': true, 'animated': animatedCards.includes(index) }"
    ></CardRealisations>
  </div>
</template>

<style>
.realisations {
  display: flex; /* Utilise Flexbox */
  flex-wrap: wrap; /* Permet l'enroulement des éléments */
  justify-content: space-between; /* Espace les éléments de manière égale */
}


.card-component {
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px; /* Espacement entre les lignes */
  opacity: 0;
  transition: scale 0.3s ease-out; /* Utilise une transition pour l'effet de zoom */
}

.card:hover {
  scale:1.15; /* Zoom de 150% lorsque la souris survole */
}
  
.animated {
  animation: slideIn 1s ease-out forwards; /* Utilisez une animation pour déplacer la carte du haut et descendre */
}


@keyframes slideIn {
  from {
    transform: translateY(-100vh); /* Position initiale : au-dessus */
    opacity: 0; /* Opacité initiale */
  }
  to {
    transform: translateY(0); /* Position finale : à la position normale */
    opacity: 1; /* Opacité finale */
  }
}
</style>