<template>
   <body>
       
     <!--
    <form action="">
        <h1>Postular a voluntariado</h1>
        <div class="form-row">
            <div class="form-group col-md-3">
                <label for="nombreInput">Ingresa tu nombre</label>
                <input type="email" class="form-control" id="nombreInput" placeholder="Your name..">
            </div>
            <div class="form-group col-md-6">
                <label for="apellidoMInput">Ingresa tu apellido</label>
                <input type="email" class="form-control" id="nombreInput" placeholder="Your last name..">
            </div>
        </div>
        <button type="button" class="btn btn-primary">Registrarse</button>
    </form>
   --> 
    <div>
        <h1>Registro de voluntariado</h1> <br> <br>
  <form action="/action_page.php"> 
    <label for="fname"> Ingrese su nombre</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name..">

    <label for="lname">Ingrese su apellido</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name..">

    <label for="rut">RUT</label>
    <input type="text" id="rut" name="rut" placeholder="11.111.111-1">

    <label for="lmail">Ingrese su correo electronico</label>
    <input type="text" id="lmail" name="mail" placeholder="name@ins.com">
    
    <label for="ltelefono">Ingrese su telefono</label>
    <input type="text" id="ltelefono" name="telefono" placeholder="987654321">

    <label for="ldate" class="mr-3"> Ingrese su fecha de nacimiento</label>
    <input id="ldate" name="date" type="date">
    

    
    <!---
    <label for="categoria">Categoria Voluntariado</label>
    <select id="category" name="category">
      <option value="InForestal">Incendios forestales</option>
      <option value="Derrumbes">Derrumbes</option>
      <option value="Inundaciones">Inundaciones</option>
    </select>
    --->

    <div class= "row">
      <div class= "col-sm">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
            <label class="form-check-label" for="defaultCheck1"> Habilidad 1</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
          <label class="form-check-label" for="defaultCheck1"> Habilidad 2</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
          <label class="form-check-label" for="defaultCheck1"> Habilidad 3</label>
        </div>
      </div>

      <div class="col-sm">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
          <label class="form-check-label" for="defaultCheck1"> Habilidad 4</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
          <label class="form-check-label" for="defaultCheck1"> Habilidad 5</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
          <label class="form-check-label" for="defaultCheck1"> Habilidad 6</label>
        </div>
      </div>

      <div class="col-sm">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
          <label class="form-check-label" for="defaultCheck1"> Habilidad 7</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
          <label class="form-check-label" for="defaultCheck1"> Habilidad 8</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
          <label class="form-check-label" for="defaultCheck1"> Habilidad 9</label>
        </div>
      </div>

      <div class="col-sm">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
          <label class="form-check-label" for="defaultCheck1"> Habilidad 10</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
          <label class="form-check-label" for="defaultCheck1"> Habilidad 11</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
          <label class="form-check-label" for="defaultCheck1"> Habilidad 12</label>
        </div>
      </div>

    </div>
  
    <input type="submit" value="Registrarse">
  </form>
</div>

   </body>
</template>


<script>
    export default {
        name: 'FormularioVoluntario',
        props: {
            
        }
    }
</script>

<style scoped>
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

</style>>
