<template>
<body>
  <div class="container">
    <div class="text-center">
        <img src="../assets/Voluntariado.png" class="rounded" alt="responsive image" width="650" height="250">
    </div>
<br>
 <div class="row">
    <div class="mx-auto">
      <HelloWorld msg="Bienvenido"/>
    </div>
  </div>

<br><br>
<div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-interval="5000">
      <img src="../assets/VoluntariadoA.jpg" class="d-block w-100"  alt="responsive image" width="..." height="...">
    </div>
    <div class="carousel-item" data-interval="2000">
      <img src="../assets/VoluntariadoB.jpg" class="d-block w-100"  alt="responsive image" width="..." height="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/VoluntariadoC.jpg" class="d-block w-100"  alt="responsive image" width="..." height="...">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


 





<br>
    <h2>Quiénes somos</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat vel possimus error alias voluptas, rem aut explicabo? Aut dignissimos sequi ad illum dolorum, veritatis, autem facilis odio accusantium, ut aliquam!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis aliquam aliquid sit illo atque minus velit dolorem deserunt, unde vero impedit a non adipisci nesciunt nihil pariatur aut fuga! Maxime consectetur nesciunt natus fuga! Tempora reiciendis doloribus nam veritatis veniam officia similique vel ullam, perspiciatis corrupti sed facere, error molestiae explicabo sit porro tenetur est numquam exercitationem nobis quas odio minus! Minima non at dicta natus consequatur aperiam dolorum atque recusandae excepturi facere molestiae veniam eaque itaque, debitis iste mollitia rerum voluptas obcaecati, odio accusamus unde, ipsa architecto quas. Voluptatum alias distinctio sequi eius minima sed nostrum quis debitis dolor vel provident modi doloribus veniam excepturi ratione labore, ab fugit expedita aliquam exercitationem ullam! Accusantium, ducimus cupiditate porro ipsum, asperiores totam nihil dolorum voluptatum, similique veniam dolorem dignissimos iusto at! Tempora modi similique repudiandae ratione harum sed nam dolore eum, soluta, adipisci iste dolor ducimus pariatur voluptatibus incidunt sit labore expedita suscipit molestiae maiores amet sint qui? Sint vel nemo minus officia fugit nesciunt impedit aspernatur, possimus ipsa, id doloribus hic! Nulla harum sed necessitatibus dolorum fugiat repellat voluptatem aut ea quae, repudiandae aspernatur itaque reprehenderit numquam quas illum quam quod voluptas. Quae perspiciatis beatae omnis mollitia in, doloribus vero.</p>

    
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

<style  >
body{
  background-color:lightblue;
}

</style>

