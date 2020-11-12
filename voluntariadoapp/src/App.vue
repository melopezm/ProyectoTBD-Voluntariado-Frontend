<template>

  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-link active" href="/">Inicio <span class="sr-only">(current)</span></a>
      <a class="nav-link active" href="/login">Log in <span class="sr-only">(current)</span></a>
      <a class="nav-link" href="#">Voluntarios</a>
      <a class="nav-link" href="#">Instituciones</a>
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </div>
  </div>
</nav>
    <!-- Estilos del componente, aqui se crean estilos css o scss para los elementos de la etiqueta
    <nav id="navbar navbar-expand-lg navbar-light bg-dark">
      <router-link to="/">Inicio</router-link> 
    </nav>-->
    <router-view/> 
    
  </div>

  
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #b85d5d;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #000000;
    }
  }
}
</style>