<script>
export default {
  props: {
    title: String // Le titre de l'icône
  },
  computed: {
    // Calcule le chemin de l'icône SVG en fonction de son titre
    iconPath() {
      // Map des titres d'icônes aux chemins SVG correspondants
      const icons = {
        "IconPhp": "../../../public/assets/icons/php.svg",
        "IconJs": "../../../public/assets/icons/javascript.svg",
        "IconMariaDb": "../../../public/assets/icons/mariadb.svg",
        "IconC++": "../../../public/assets/icons/c++.svg",
        "IconCSharp": "../../../public/assets/icons/csharp.svg",
        "IconQt": "../../../public/assets/icons/qt.svg"
        // Ajoutez d'autres titres d'icônes avec leur chemin SVG associé
      };
      // Retourne le chemin de l'icône correspondant au titre ou null s'il n'existe pas
      return icons[this.title] || null;
    }
  },
  methods: {
    // Méthode pour retourner le texte alt et title approprié en fonction du titre de l'icône
    getImgText() {
      const altTexts = {
        "IconPhp": "Icone PHP",
        "IconJs": "Icone JavaScript",
        "IconMariaDb": "Icone MariaDB",
        "IconC++": "Icone C++",
        "IconCSharp": "Icone C#",
        "IconQt": "Icone Qt5"
        // Ajoutez d'autres titres d'icônes avec leur texte alt approprié
      };
      // Retourne le texte alt correspondant au titre de l'icône ou une chaîne vide si le titre n'est pas trouvé
      return altTexts[this.title] || "";
    }
    
  }
};
</script>

<template>
  <div class="container-icons">
    <!-- Utilisation d'une balise img pour afficher l'icône -->
    <img v-if="iconPath" :src="iconPath" width="auto" height="60px" :alt="getImgText()" :title="getImgText()" />
  </div>
</template>



<style scoped>
.container-icons img{
  margin-bottom: 0px;
  display: flex;
}
</style>
