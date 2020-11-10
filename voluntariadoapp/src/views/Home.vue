<template>
<body style="background-color:rgb(250,128,114);">
  <div class="home">
    <img alt="Vue logo" src="../assets/Voluntariado.png">
    <HelloWorld msg="Bienvenido Voluntario"/>
    

    
  </div>
</body>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import MiComponente from '@/components/MiComponente.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    //MiComponente
  }
} 
</script>