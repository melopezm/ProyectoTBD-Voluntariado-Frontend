<template>
    <body>
        <div>
            <button type="submit" v-on:click="signUp">Registrate</button>
        </div>
    </body>
</template>
<script>
export default {
    name: 'click',
    methods:{
        signUp: function(event){
            event.preventDefault();
            alert('Registrando')
        }
    }
    }

</script>