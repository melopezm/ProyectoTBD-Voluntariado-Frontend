<template> <!-- codigo html del componente, cada vez que se llame al componente Vue inserta el contenido de esta etiqueta dentro del DOM de la página web -->

  <div class="hello">
    <h1>{{ msg }}</h1>
   
    <h3>Registro para voluntarios</h3>
    <ul>
      <router-link to="/VistaRegistro">Ir a registro</router-link>
    </ul>
    <h3>VueJs </h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
    
    </ul>

    <ul>

    </ul>
  </div>
</template>

<!-- la lógica del componente, se crean métodos, variables, llamadas al backend; la funcionalidad y el código js que esta relacionado con el template -->

<script> 

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Estilos del componente, aqui se crean estilos css o scss para los elementos de la etiqueta-->
<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
