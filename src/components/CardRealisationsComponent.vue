<script>
export default {
  props: {
    redirectionLink: String, // 
    titleCard: String, // Définir une prop 'title' pour recevoir le titre de la card
    imageUrl: String,
    contentCard: String // Prop pour l'URL de l'image
  }
}
</script>

<template> 
    <div class="card">
        <a :href="redirectionLink">
        <h1>{{ titleCard }}</h1>
        <img :src="imageUrl" alt="Card image">
         <div class="card-content">
           <p> {{ contentCard }}</p>
           
         </div>
        </a>
  </div>
  </template>

<style scoped>

.card {
    
background-color: #161b22;
  width: 25%; /* La carte prend 1/4 de la largeur de l'écran */
  border: 1px solid  #0d1d31; /* Ajoute une bordure à la carte */
  border-radius: 8px; /* Ajoute un peu de bord arrondi à la carte */
  padding: 10px; /* Ajoute un peu d'espacement à l'intérieur de la carte */
  display: flex; /* Utilise flexbox pour centrer le contenu */
  flex-direction: column; /* Affiche les éléments en colonne */
  align-items: center; /* Centre le contenu horizontalement */

  }  
  .card h1 {
  margin-top: 0;
  margin-bottom: 10px; /* Supprime la marge supérieure par défaut du titre */
  color:  #0090FF;
  font-size: 30px; /* Taille de police pour le titre */
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  display: flex; /* Utilise flexbox pour centrer le contenu */
  flex-direction: column; /* Affiche les éléments en colonne */
  align-items: center; /* Centre le contenu horizontalement */
}

.card img {
  width: 100%; /* L'image à l'intérieur de la carte prendra toute la largeur disponible */
  height: 30svh;
  padding: 0;
  margin: -3px;
  border: 3px solid #30363d;
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

</style>