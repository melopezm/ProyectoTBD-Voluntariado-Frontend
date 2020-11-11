<template>
    
    <form action="">
        <h1>Postular a voluntariado</h1>
        <div class="form-row">
            <div class="form-group col-md-3">
                <label for="nombreInput">Ingresa tu nombre</label>
                <input type="email" class="form-control" id="nombreInput" placeholder="John Doe">
            </div>
            <div class="form-group col-md-6">
                <label for="apellidoMInput">Ingresa tu apellido materno</label>
                <input type="email" class="form-control" id="nombreInput" placeholder="John Doe">
            </div>
        </div>
        <button type="button" class="btn btn-primary">Registrarse</button>
    </form>
</template>


<script>
    export default {
        name: 'FormularioVoluntario',
        props: {
            
        }
    }
</script>