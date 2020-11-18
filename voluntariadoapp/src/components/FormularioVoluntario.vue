<template>
   <body>
  
    <div>
        <h1>Registro de voluntariado</h1> <br> <br>
  <form action="/">
  <div class="col-xs12 col-sm-8 col-md-6">
      <div class="form-group">
        <label for="nombre"> Ingrese su nombre</label>
        <input type="text" id="nombre" name="nombre" placeholder="Nombre.." v-model='datosUser.nombre'>
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
  <div class="col">
    <div class="panel panel-default">
    <div class="form-goup">
      <label for="Habilidad 1"></label>
     <input type="checkbox" id="Habilidad 1" value="1" v-model="abilities">Habilidad 1
        <label for="Habilidad 2"></label>
     <input type="checkbox" id="Habilidad 2" value="2" v-model="abilities">Habilidad 2
      <label for="Habilidad 3"></label>
     <input type="checkbox" id="Habilidad 3" value="3" v-model="abilities">Habilidad 3
        <label for="Habilidad 4"></label>
      <input type="checkbox" id="Habilidad 4" value="4" v-model="abilities">Habilidad 4
        <label for="Habilidad 5"></label>
      <input type="checkbox" id="Habilidad 5" value="5" v-model="abilities">Habilidad 5
        <label for="Habilidad 6"></label>
      <input type="checkbox" id="Habilidad 6" value="6" v-model="abilities">Habilidad 6
      <label for="Habilidad 7"></label>
      <input type="checkbox" id="Habilidad 7" value="7" v-model="abilities">Habilidad 7
        <label for="Habilidad 8"></label>
      <input type="checkbox" id="Habilidad 8" value="8" v-model="abilities">Habilidad 8
      <label for="Habilidad 1"></label>
      <input type="checkbox" id="Habilidad 9" value="9" v-model="abilities">Habilidad 9
        <label for="Habilidad 2"></label>
      <input type="checkbox" id="Habilidad 10" value="10" v-model="abilities">Habilidad 10
      <label for="Habilidad 3"></label>
      <input type="checkbox" id="Habilidad 11" value="11" v-model="abilities">Habilidad 11
        <label for="Habilidad 4"></label>
      <input type="checkbox" id="Habilidad 12" value="12" v-model="abilities">Habilidad 12
    </div>
  </div>
  </div>

    </div>

    <div class="row"> 
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3>DATOS</h3>
          <div class="panel-body">
            <p>Nombre: {{datosUser}}</p>
            
            <p>opcion de envio:
              <ul>
                <li v-for= "item in abilities" :key="item"> {{item}}</li>
              </ul>
            </p>
          </div>
        </div>
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


        <input type="submit" @click="register" value="Registrarse">
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
//import Axios from 'axios'
import axios from "axios";
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
            rut:''},
            
            abilities:[],
            
            errors:[]
            }
            
          },
        methods:{
          register(){
            axios.post('http://localhost:8081/volunteers', {
              nombre:this.datosUser.nombre,
              apellido:this.datosUser.apellido,
              correo_electronico:this.datosUser.email,
              celular:this.datosUser.telefono,
              fnacimiento:this.datosUser.fnacimiento,
              rut:this.datosUser.rut,
              habilidad: this.abilities
            })
            .then(Response => {
              console.log(Response.data);
            })
            .catch(err =>{
              console.log(err);
            })

          },
          pepe(){
            if(this.nombre && this.apellido && this.email && this.telefono && this.fnacimiento && this.rut){
              return true;
            }
            this.errors = [];
            if(!this.nombre){
              this.errors.push('El nombre es obligatorio');
            }
            if(!this.apellido){
              this.errors.push('El apellido es obligatorio');
            }
            if(!this.email){
              this.errors.push('El mail es obligatorio');
            }
            if(!this.telefono){
              this.errors.push('El telefono es obligatorio');
            }
            if(!this.fnacimiento){
              this.errors.push('La fecha de nacimiento es obligatoria');
            }
            if(!this.rut){
              this.errors.push('El RUT es obligatorio');
            }
            return false;
          }

        }


      /*created() {
        let post = {
        title: 'foo',
        body: 'bar',
        userId: 1
        };
        axios.post("https://jsonplaceholder.typicode.com/posts", post).then((result) => {
        console.log(result);
  });
} */




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
