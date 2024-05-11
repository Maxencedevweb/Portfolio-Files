<script>
import SwitchModeButton from "./SwitchModeButtonComponent.vue";
export default {
  components: {
    SwitchModeButton
  }
};
</script>


<template> 
<div id="container-nav">
        <nav>
          <img alt="Logo site" class="logo" src="../../public/assets/M-icon.png" height="100vh" />
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/Realisations">Mes réalisations</RouterLink>
          <switch-mode-button class="switch-mode-button"></switch-mode-button>
        </nav>
       
    </div>
  </template>
  
  <style scoped>
  #container-nav{
    width: 100%;
  }

  nav {

    padding: 10px 20px;
    display: flex;
    align-items: center;
    font-size: 30px;
    
  }
  
 nav a
  {
    text-decoration: none;
    transition: 0.4s;
    padding: 20px;
  }

.dark-mode nav {
  background-color: #212225;
  border-bottom: 2px solid #363A3F;
}

.dark-mode nav a {
  color: #EEEEEE;
}

.light-mode nav {
  background-color: #F2EFF3;
  border-bottom: 2px solid #D9D9E0;
}
.light-mode nav a {
  color:#65636D;
}
  
  </style>
  