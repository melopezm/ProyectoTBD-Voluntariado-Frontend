<template>

  <div id="app">
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">VolunteerApp</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="/">Inicio <span class="sr-only">(current)</span></a>
      </li>
       <li class="nav-item">
        <a class="nav-link" href="#">Log in</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Mi perfil</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#">Instituciones</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Voluntarios</a>
      </li>


    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
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