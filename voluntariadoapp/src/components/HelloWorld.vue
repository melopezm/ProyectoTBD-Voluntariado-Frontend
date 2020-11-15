<template> <!-- codigo html del componente, cada vez que se llame al componente Vue inserta el contenido de esta etiqueta dentro del DOM de la página web -->
  <body>
    
  <div class="hello">
    <h1>{{ msg }}</h1>
   
    <h2>¿Quieres ser parte del voluntariado de emergencias?</h2>
     <h6>Laa gestión de voluntarios en contexto de emergencia
      resulta ser de vital importancia, nos interesa tu colaboración, únete a nosotros.</h6>
      <ul>
       <div class="row">
               <div class="mx-auto">
                <router-link to="/Formulario"> <button class="btn btn-primary">Ir a formulario de registro </button></router-link>
              </div>
          </div>
     
        </ul>
    </div>
  </body>
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
body{
  background-color: lightblue;
}

</style>
