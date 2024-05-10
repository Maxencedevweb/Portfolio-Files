<script>

</script>


<template> 
<div id="container-nav">
        <nav>
          <img alt="Logo site" class="logo" src="../../public/assets/alpaca-icon.png" height="100vh" />
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/Realisations">Mes réalisations</RouterLink>
        </nav>
    </div>
  </template>
  
  <style scoped>
  #container-nav{
    width: 100%;
  }

  nav {
    background-color: #212225;
    color: #EEEEEE;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    font-size: 30px;
    border-bottom: 2px solid #363A3F;
  }
  
  a
  {
    text-decoration: none;
    color: #EEEEEE;
    transition: 0.4s;
    padding: 20px;
  }
  
  
  </style>
  