<script>
import CardRealisations from '/src/components/CardRealisationsComponent.vue'
import FilterRealisations from '/src/components/FilterRealisationsComponent.vue'

export default {
  components: {
    CardRealisations,
    FilterRealisations
  },
  data() {
    return {
      selectedCategory: 'Tous',
      cards: [
        {
          redirectionLink:
            'https://chromewebstore.google.com/detail/twitter-refresh-button/jomfhefgipgnncbbaengandkapohjkod?authuser=3&hl=fr',
          activeLink: true,
          title: 'Extension Chrome - X (Twitter) Refresh Feed',
          imageUrl: '/Portfolio/assets/projet-twitterrefresh.PNG',
          status: 'Fini',
          category: 'Plugins',
          content:
            'Une simple extension chrome qui permet de réactualiser son fil sur <a href="https://x.com/home" target="_blank">X.com</a> (twitter) avec un bouton...',
          iconTitles: ['IconJs']
        },
        {
          redirectionLink: 'https://maxencedevweb.github.io/LettreEnLumiere/',
          activeLink: true,
          title: 'Lettre en lumière',
          imageUrl: '/Portfolio/assets/projet-lel.PNG',
          status: 'En cours',
          category: 'Sites',
          content:
            "Projet réalisé en équipe lors de ma formation, pour aider les personnes illétrées/analphabètes et atteintes d'illectronisme à apprendre la lecture et l'écriture de la langue française...",
          iconTitles: ['IconReact', 'IconVite', 'IconSymfony', 'IconJs']
        },
        {
          redirectionLink: '',
          activeLink: false,
          title: 'JazzInOut',
          imageUrl: '/Portfolio/assets/projet-jazz.PNG',
          status: 'En cours',
          category: 'Sites',
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
          category: 'Jeux',
          content:
            "Projet réalisé un soir pour m'améliorer sur React, pour comparer avec le tutoriel officiel sur le site de React...",
          iconTitles: ['IconReact', 'IconVite', 'IconJs']
        },
        {
          redirectionLink: '/Projet-PO',
          activeLink: false,
          title: 'Application web paramétrage',
          imageUrl: '/Portfolio/assets/projet-bts.PNG',
          status: 'Fini',
          category: 'Sites',
          content:
            'Projet réalisé lors de mes études, une application web pour alléger la logistique lors des journées Portes Ouvertes...',
          iconTitles: ['IconJs', 'IconPhp', 'IconMariaDb']
        },
        {
          redirectionLink: '',
          title: 'Jeu Pong POO',
          imageUrl: '/Portfolio/assets/projet-bts-pong.PNG',
          status: 'Fini',
          category: 'Jeux',
          content:
            'Projet réalisé lors de mes études, un jeu Pong en C++ Programmation Orientée Objet...',
          iconTitles: ['IconC++', 'IconQt']
        },
        {
          redirectionLink: '',
          title: 'Jeu Bataille navale',
          imageUrl: '/Portfolio/assets/projet-bts-bataillenavale.PNG',
          status: 'Fini',
          category: 'Jeux',
          content: 'Projet réalisé lors de mes études, un jeu bataille navale en C++...',
          iconTitles: ['IconC++']
        },
        {
          redirectionLink: '',
          title: 'Flappy Bird Réalité Augmentée',
          imageUrl: '/Portfolio/assets/projet-flappybird.PNG',
          status: 'Fini',
          category: 'Jeux',
          content:
            "Projet réalisé en tant que stagiaire dans l'entreprise Ullo, une copie du jeu mobile Flappy Bird en réalité augmentée.",
          iconTitles: ['IconCSharp']
        }
      ],
      animatedCards: [] // Tableau pour stocker les index des cartes animées
    }
  },
  computed: {
    // Récupérer toutes les catégories uniques
    categories() {
      return [...new Set(this.cards.map((card) => card.category))]
    },
    // Filtrer les cartes selon la catégorie sélectionnée
    filteredCards() {
      if (this.selectedCategory === 'Tous') {
        return this.cards
      }
      return this.cards.filter((card) => card.category === this.selectedCategory)
    }
  },
  methods: {
    filterByCategory(category) {
      this.selectedCategory = category
      this.animatedCards = [] // Réinitialiser les animations

      // Réappliquer les animations pour les cartes filtrées
      this.$nextTick(() => {
        this.filteredCards.forEach((_, index) => {
          setTimeout(() => {
            this.animatedCards.push(index)
          }, index * 250)
        })
      })
    }
  },
  mounted() {
    // Ajoutons une classe "animated" à chaque carte après un délai
    this.cards.forEach((_, index) => {
      setTimeout(() => {
        this.animatedCards.push(index)
      }, index * 250)
    })
  }
}
</script>

<template>
  <div>
    <FilterRealisations
      :categories="categories"
      :selectedCategory="selectedCategory"
      @filter-category="filterByCategory"
    />
    <div id="container-realisations">
      <CardRealisations
        v-for="(card, index) in filteredCards"
        :key="index"
        :card="card"
        :class="{ 'card-component': true, animatedcard: animatedCards.includes(index) }"
      ></CardRealisations>
    </div>
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

@keyframes slide-to-bottom {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
