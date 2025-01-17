<script>
import CardRealisations from '/src/components/CardRealisationsComponent.vue'

export default {
  components: {
    CardRealisations
  },
  data() {
    return {
      cards: [
        {
          redirectionLink: '#',
          title: 'Lettre en lumière',
          imageUrl: '/Portfolio/assets/projet-lel.PNG',
          status: 'En cours',
          content:
            "Projet réalisé en équipe lors de ma formation, pour aider les personnes illétrées à apprendre la lecture et l'écriture de la langue française...",
          iconTitles: ['IconReact', 'IconVite', 'IconSymfony', 'IconJs']
        },
        {
          redirectionLink: '#',
          title: 'JazzInOut',
          imageUrl: '/Portfolio/assets/projet-jazz.PNG',
          status: 'En cours',
          content:
            "Projet réalisé en équipe lors de ma formation, refonte du site web de l'association JazzInOut qui organise le festival de Jazz gratuit JazzInAout à La Rochelle...",
          iconTitles: ['IconWordpress', 'IconFigma']
        },
        {
          redirectionLink: 'https://maxencedevweb.github.io/TicTacToe/',
          activeLink: true,
          title: 'Tic Tac Toe',
          imageUrl: '/Portfolio/assets/projet-tictactoe.PNG',
          status: 'Fini',
          content:
            "Projet réalisé un soir pour m'améliorer sur React, pour comparer avec le tutoriel officiel sur le site de React...",
          iconTitles: ['IconReact', 'IconVite', 'IconJs']
        },
        {
          redirectionLink: '/Projet-PO',
          activeLink: true,
          title: 'Application web paramétrage',
          imageUrl: '/Portfolio/assets/projet-bts.PNG',
          status: 'Fini',
          content:
            'Projet réalisé lors de mes études, une application web pour alléger la logistique lors des journées Portes Ouvertes...',
          iconTitles: ['IconJs', 'IconPhp', 'IconMariaDb']
        },
        {
          redirectionLink: '#',
          title: 'Jeu Pong POO',
          imageUrl: '/Portfolio/assets/projet-bts-pong.PNG',
          status: 'Fini',
          content:
            'Projet réalisé lors de mes études, un jeu Pong en C++ Programmation Orientée Objet...',
          iconTitles: ['IconC++', 'IconQt']
        },
        {
          redirectionLink: '#',
          title: 'Jeu Bataille navale',
          imageUrl: '/Portfolio/assets/projet-bts-bataillenavale.PNG',
          status: 'Fini',
          content: 'Projet réalisé lors de mes études, un jeu bataille navale en C++...',
          iconTitles: ['IconC++']
        },
        {
          redirectionLink: '#',
          title: 'Flappy Bird Réalité Augmentée',
          imageUrl: '/Portfolio/assets/projet-flappybird.PNG',
          status: 'Fini',
          content:
            "Projet réalisé en tant que stagiaire dans l'entreprise Ullo, une copie du jeu mobile Flappy Bird en réalité augmentée.",
          iconTitles: ['IconCSharp']
        }
      ],
      animatedCards: [] // Tableau pour stocker les index des cartes animées
    }
  },
  mounted() {
    // Ajoutons une classe "animated" à chaque carte après un délai
    this.cards.forEach((_, index) => {
      setTimeout(() => {
        this.animatedCards.push(index)
      }, index * 250) // Ajoutons un délai de 500ms entre chaque animation
    })
  }
}
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
      :class="{ 'card-component': true, animatedcard: animatedCards.includes(index) }"
    ></CardRealisations>
  </div>
</template>

<style scoped>
#container-realisations {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 20px;
  padding-left: 50px; /* Ajoute un padding de 50px à gauche */
  padding-right: 50px; /* Ajoute un padding de 50px à droite */
}

.card-component {
  margin-left: auto; /* Déplace le conteneur vers la droite pour aligner le padding à gauche */
  margin-right: auto; /* Déplace le conteneur vers la gauche pour aligner le padding à droite */
  opacity: 0;
  transition: scale 0.3s ease-out; /* Utilise une transition pour l'effet de zoom */
}

.card:hover {
  scale: 1.15; /* Zoom de 150% lorsque la souris survole */
}

.animatedcard {
  animation: slide-to-bottom 1s ease-out forwards; /* Utilisez une animation pour déplacer la carte du haut et descendre */
}
</style>
