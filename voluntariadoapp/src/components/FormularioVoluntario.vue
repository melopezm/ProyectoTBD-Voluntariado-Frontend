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
  <form action="/">
      <div class="form-group">
        <label for="fname"> Ingrese su nombre</label>
        <input type="text" id="fname" name="fname" placeholder="Nombre.." v-model='datosUser.nombre'>
      </div>
      <div class="form-group">
    <label for="lname">Ingrese su apellido</label>
    <input type="text" id="lname" name="lastname" placeholder="Apellido.." v-model='datosUser.apellido'>
      </div>
    <div class="form-group">
      <label for="rut">RUT</label>
      <input type="text" id="rut" name="rut" placeholder="11.111.111-1" v-model='datosUser.rut'>
    </div>

    <div class="form-group">
        <label for="lmail">Ingrese su correo electronico</label>
        <input type="text" id="lmail" name="mail" placeholder="name@ins.com" v-model='datosUser.email'>
    </div>

    <div class="form-group">
        <label for="ltelefono">Ingrese su telefono</label>
        <input type="text" id="ltelefono" name="telefono" placeholder="987654321" v-model='datosUser.telefono'>
    </div>

    <div class="form-group">
    <label for="ldate" class="mr-3"> Ingrese su fecha de nacimiento</label>
    <input id="ldate" name="date" type="date" v-model='datosUser.fnacimiento'>
    </div>
    <div class="row"> 
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3>DATOS</h3>
          <div class="panel-body">
            <p>Nombre: {{datosUser}}</p>
            <p>Apellido: {{habilities}}</p>
          </div>
        </div>
      </div>
    </div>

    

    <div class= "row">
      <div class= "col-sm">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" v-model="habilities.hab1">
            <label class="form-check-label" for="defaultCheck1"> Habilidad 1</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" v-model="habilities.hab2">
          <label class="form-check-label" for="defaultCheck1"> Habilidad 2</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" v-model="habilities.hab3">
          <label class="form-check-label" for="defaultCheck1"> Habilidad 3</label>
        </div>
      </div>

      <div class="col-sm">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" v-model="habilities.hab4">
          <label class="form-check-label" for="defaultCheck1"> Habilidad 4</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" v-model="habilities.hab5">
          <label class="form-check-label" for="defaultCheck1"> Habilidad 5</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" v-model="habilities.hab6">
          <label class="form-check-label" for="defaultCheck1"> Habilidad 6</label>
        </div>
      </div>

      <div class="col-sm">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" v-model="habilities.hab7">
          <label class="form-check-label" for="defaultCheck1"> Habilidad 7</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" v-model="habilities.hab8">
          <label class="form-check-label" for="defaultCheck1"> Habilidad 8</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" v-model="habilities.hab9">
          <label class="form-check-label" for="defaultCheck1"> Habilidad 9</label>
        </div>
      </div>

      <div class="col-sm">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" v-model="habilities.hab10">
          <label class="form-check-label" for="defaultCheck1"> Habilidad 10</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" v-model="habilities.hab11">
          <label class="form-check-label" for="defaultCheck1"> Habilidad 11</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" v-model="habilities.hab12">
          <label class="form-check-label" for="defaultCheck1"> Habilidad 12</label>
        </div>
      </div>

    </div>
    
 <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Registrarse
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">¿Estas seguro?</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Estas opciones se podrán modificar posteriormente.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>


        <input type="submit" value="Registrarse">
      </div>
    </div>
  </div>
</div>

<div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<!--    <input type="submit" value="Registrarse"> -->
  </form>
</div>

   </body>
</template>


<script>
    export default {
        name: 'FormularioVoluntario',
        data(){
          return{
            datosUser:{
              nombre:'',
            apellido:'',
            email:'',
            telefono:'',
            fnacimiento:'',
            rut:'',
            },
            
            habilities:{
                 hab1:'',
             hab2:'',
              hab3:'',
               hab4:'',
                hab5:'',
                 hab6:'',
                  hab7:'',
                   hab8:'',
                    hab9:'',
                     hab10:'',
                      hab11:'',
                       hab12:'',
            }
         



          }
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

label {
  font : .8em "typewriter", sans-serif;
}

input, textarea {
  font    : .9em/1.5em "handwriting", sans-serif;

  border  : none;
  padding : 0 10px;
  margin  : 0;
  width   : 240px;

  background: none;
}
input:focus, textarea:focus {
  background   : rgba(0,0,0,.1);
  border-radius: 5px;
  outline      : none;
}

input {
    height: 2.5em; /* for IE */
    vertical-align: middle; /* This is optional but it makes legacy IEs look better */
}

textarea {
  display : block;

  padding : 10px;
  margin  : 10px 0 0 -10px;
  width   : 340px;
  height  : 360px;

  resize  : none;
  overflow: auto;
}






</style>>
