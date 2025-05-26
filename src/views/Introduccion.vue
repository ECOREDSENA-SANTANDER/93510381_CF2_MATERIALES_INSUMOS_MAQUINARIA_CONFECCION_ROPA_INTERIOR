<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4 La ropa interior y deportiva debe ser cada vez más cómoda y confortable, lo que requiere un amplio conocimiento para seleccionar telas con mezclas de materiales, estampados y colores que satisfagan las necesidades del usuario. Por ello, es fundamental que los aprendices desarrollen habilidades básicas para identificar y clasificar los diferentes insumos, materiales y telas utilizados en la producción de ropa interior.
    p.mb-4 Los tejidos son un componente esencial en la industria de la confección, pero para optimizar su uso es necesario conocer su clasificación y características. La elección de las telas y materiales es una de las primeras decisiones a considerar en la elaboración de un producto de alta calidad.
    
    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-12.col-12.col-md-12
        figure(data-aos="fade-right")
          .video
            <iframe width="560" height="315" src="https://www.youtube.com/embed/rq1vIUmubJM?si=_rUSZNZBtDChJ1ut" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          figcaption Video. Insumos, materiales y telas

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
