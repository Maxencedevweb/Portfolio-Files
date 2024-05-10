<script>
import Icon from "./icons/Icon.vue"; // Importez votre composant Icon

export default {
  components: {
    Icon
  },
  props: {
    redirectionLink: String,
    titleCard: String,
    imageUrl: String,
    contentCard: String,
    iconTitles: Array // Utilisez une liste de titres d'icônes
  }
};
</script>

<template> 
    <div class="card">
        <a :href="redirectionLink">
        <h1>{{ titleCard }}</h1>
        <img :src="imageUrl" alt="Card image">
         <div class="card-content">
           <p> {{ contentCard }}</p>
           <div class="icons-container">
            <Icon v-for="(iconTitle, index) in iconTitles" :key="index" :title="iconTitle" />
           </div>
         </div>
        </a>
  </div>
  </template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');
.card {
  width: 500px; /* La carte prend 1/4 de la largeur de l'écran */
  background-color: #272A29;
  border: 1px solid  #363A3F; /* Ajoute une bordure à la carte */
  border-radius: 8px; /* Ajoute un peu de bord arrondi à la carte */
  padding: 10px; /* Ajoute un peu d'espacement à l'intérieur de la carte */
  display: flex; /* Utilise flexbox pour centrer le contenu */
  flex-direction: column; /* Affiche les éléments en colonne */
  margin-top: 10svh;
  margin-bottom: 5svh;
  }  

  .card h1 {
  margin-top: 0;
  margin-bottom: 10px; /* Supprime la marge supérieure par défaut du titre */
  color:  #EDEEF0;
  font-size: 30px; /* Taille de police pour le titre */
  font-family: "Libre Baskerville", serif;
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
  border: 4px solid #363A3F;
  border-radius:8px; /* Ajoute un peu de bord arrondi à l'image */
}

.card p {
    margin-top: 0;
  margin-top: 10px; /* Supprime la marge supérieure par défaut du titre */
  margin-left: 8px;
  margin-right: 8px;
  color: #52607a;
  font-size: 15; /* Taille de police pour le titre */
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
}
.card a {
    text-decoration: none;
}
.icons-container {
  display: flex;
  gap: 10px; /* Espacement entre les icônes */
}

</style>