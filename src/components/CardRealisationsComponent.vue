<script>
import Icon from '/src/components/icons/Icon.vue'

export default {
  components: {
    Icon
  },
  props: {
    card: Object
  },
  computed: {
    isExternalLink() {
      return this.card.redirectionLink.startsWith('http')
    }
  }
}
</script>

<template>
  <div class="card">
    <template v-if="isExternalLink">
      <a
        :href="card.redirectionLink"
        target="_blank"
        rel="noopener noreferrer"
        :style="card.redirectionLink !== '' ? { cursor: 'pointer' } : {}"
      >
        <h1>{{ card.title }}</h1>
        <img :src="card.imageUrl" alt="Card image" />
        <div class="card-content">
          <p>Statut : {{ card.status }}</p>
          <p>Catégorie : {{ card.category }}</p>
          <p v-html="card.content"></p>
          <div class="icons-container">
            <Icon v-for="(iconTitle, index) in card.iconTitles" :key="index" :title="iconTitle" />
          </div>
        </div>
      </a>
    </template>
    <template v-else>
      <router-link
        v-if="card.redirectionLink !== ''"
        :to="card.redirectionLink"
        :style="{ cursor: 'pointer' }"
      >
        <h1>{{ card.title }}</h1>
        <img :src="card.imageUrl" alt="Card image" />
        <div class="card-content">
          <p>Statut : {{ card.status }}</p>
          <p>Catégorie : {{ card.category }}</p>
          <p v-html="card.content"></p>
          <div class="icons-container">
            <Icon v-for="(iconTitle, index) in card.iconTitles" :key="index" :title="iconTitle" />
          </div>
        </div>
      </router-link>
      <div v-else>
        <h1>{{ card.title }}</h1>
        <img :src="card.imageUrl" alt="Card image" />
        <div class="card-content">
          <p>Statut : {{ card.status }}</p>
          <p>Catégorie : {{ card.category }}</p>
          <p v-html="card.content"></p>
          <div class="icons-container">
            <Icon v-for="(iconTitle, index) in card.iconTitles" :key="index" :title="iconTitle" />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');
.card {
  width: 500px; /* La carte prend 1/4 de la largeur de l'écran */
  border-radius: 18px; /* Ajoute un peu de bord arrondi à la carte */
  padding: 10px; /* Ajoute un peu d'espacement à l'intérieur de la carte */
  display: flex; /* Utilise flexbox pour centrer le contenu */
  flex-direction: column; /* Affiche les éléments en colonne */
  margin-top: 10svh;
  margin-bottom: 5svh;
}

.card h1 {
  margin-top: 0;
  margin-bottom: 10px; /* Supprime la marge supérieure par défaut du titre */
  font-size: 30px; /* Taille de police pour le titre */
  font-family: 'Helvetica', serif;
  font-weight: 700;
  display: flex; /* Utilise flexbox pour centrer le contenu */
  flex-direction: column; /* Affiche les éléments en colonne */
  align-items: center; /* Centre le contenu horizontalement */
  text-align: center;
}

.card img {
  width: 100%; /* L'image à l'intérieur de la carte prendra toute la largeur disponible */
  height: 300px;
  padding: 0;
  margin: -3px;
  border-radius: 8px; /* Ajoute un peu de bord arrondi à l'image */
}

.card p {
  margin-top: 0;
  margin-top: 10px; /* Supprime la marge supérieure par défaut du titre */
  margin-left: 8px;
  margin-right: 8px;
  font-size: 15; /* Taille de police pour le titre */
  font-family: Helvetica, sans-serif;
  font-weight: 700;
}
.card a {
  text-decoration: none;
}
a {
  all: unset;
}
.icons-container {
  display: flex;
  gap: 10px; /* Espacement entre les icônes */
}

.dark-mode .card {
  background-color: #272a29;
  border: 1px solid #363a3f; /* Ajoute une bordure à la carte */
}
.dark-mode .card img {
  border: 4px solid #363a3f;
}

.dark-mode .card h1 {
  color: #eeeeee;
}

.dark-mode .card p {
  color: #cdd0d4;
}

.light-mode .card {
  background-color: #e3dfe6;
  border: 1px solid #dbd8e0; /* Ajoute une bordure à la carte */
}
.light-mode .card img {
  border: 4px solid #363a3f;
}

.light-mode .card h1 {
  color: #65636d;
}

.light-mode .card p {
  color: #58495f;
}
</style>
