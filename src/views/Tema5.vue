<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Ropa deportiva
    
    p.mb-5 La ropa deportiva se diseña según las necesidades de cada disciplina, utilizando materiales que brindan comodidad, seguridad y, en algunos casos, mejoran el rendimiento deportivo. Con el tiempo, esta categoría ha evolucionado, incorporando productos que no solo se usan en la práctica deportiva, sino que también forman parte de la moda y el vestuario diario.

    
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-7
        .titulo2.mb-5.ps-5.pe-3(data-aos="fade-right")
          img(src='@/assets/curso/tema1/titulo.png', alt='Imagen decorativa')
          h3.mb-0.text-white.mx-2 Características de la ropa deportiva
    
        p.mb-4 La ropa deportiva debe cumplir con las siguientes características:

        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex
            .lista-ol--cuadro__vineta
              span 1
            | Ser cómoda.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span 2
            | Estar confeccionada con materiales suaves y elásticos.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span 3
            | Ajustarse a la forma del cuerpo para permitir libertad de movimiento al ejercitarse.
      .col-lg-5
        img.d-none.d-lg-block(src='@/assets/curso/tema5/13.png', alt='Imagen decorativa')
  
    
    separador
    #t_5_1.titulo-segundo.mb-5
      h2 5.1 Ropa deportiva femenina 

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12    
        TabsA.color-acento-botones.mod
          .tarjeta.color-acento-botones.bg4.p-lg-5.p-4(titulo="Camisetas deportivas")
            .row.justify-content-center.mb-0
              .col-lg-7.mb-4
                h4.mb-4 Camisetas deportivas
                p.mb-0 Son ideales para la práctica del deporte preferido. Se recomienda que estén fabricadas en poliéster o nailon para mayor frescura.
              .col-lg-5.col-md-7.col-10.mb-0
                img(src='@/assets/curso/tema5/14.png', alt='Imagen decorativa')
          .tarjeta.color-acento-botones.bg4.p-lg-5.p-4(titulo="Camisetas deportivas")
            .row.justify-content-center.mb-0
              .col-lg-7.mb-4
                h4.mb-4 Sudaderas deportivas
                p.mb-0 Se usan para hacer ejercicio en días fríos o después de entrenar.
              .col-lg-5.col-md-7.col-10.mb-0
                img(src='@/assets/curso/tema5/15.png', alt='Imagen decorativa')
          .tarjeta.color-acento-botones.bg4.p-lg-5.p-4(titulo="Camisetas deportivas")
            .row.justify-content-center.mb-0
              .col-lg-7.mb-4
                h4.mb-4 Pantalones deportivos
                p.mb-0 Existe una gran variedad de diseños para hacer deporte. Su elección debe depender del tipo de actividad a realizar.
              .col-lg-5.col-md-7.col-10.mb-0
                img(src='@/assets/curso/tema5/16.png', alt='Imagen decorativa')
          .tarjeta.color-acento-botones.bg4.p-lg-5.p-4(titulo="Camisetas deportivas")
            .row.justify-content-center.mb-0
              .col-lg-7.mb-4
                h4.mb-4 Top deportivo
                p.mb-0 Prenda ideal para mujeres activas. Su diseño con espalda atlética y cargaderas de máximo soporte permite moverse con libertad.
              .col-lg-5.col-md-7.col-10.mb-0
                img(src='@/assets/curso/tema5/17.png', alt='Imagen decorativa')
          .tarjeta.color-acento-botones.bg4.p-lg-5.p-4(titulo="Camisetas deportivas")
            .row.justify-content-center.mb-0
              .col-lg-7.mb-4
                h4.mb-4 Ropa interior
                p.mb-0 Debe ser fresca, cómoda y brindar el soporte necesario durante la actividad física.
              .col-lg-5.col-md-7.col-10.mb-0
                img(src='@/assets/curso/tema5/18.png', alt='Imagen decorativa')
          .tarjeta.color-acento-botones.bg4.p-lg-5.p-4(titulo="Camisetas deportivas")
            .row.justify-content-center.mb-0
              .col-lg-7.mb-4
                h4.mb-4 Calcetines deportivos
                p.mb-0 Son esenciales para proteger los pies al realizar cualquier deporte.
              .col-lg-5.col-md-7.col-10.mb-0
                img(src='@/assets/curso/tema5/19.png', alt='Imagen decorativa')


    separador
    #t_5_2.titulo-segundo.mb-5
      h2 5.2 Ropa deportiva masculina

    .row.fondo7.p-4.p-lg-5.p-md-4.mb-0(data-aos="fade-left")
      .col-lg-12
        
        .tarjetaf.p-4.mb-2
          SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-7.col-12
                h4.mb-4 Camisetas deportivas
                p.mb-4 Ideales para la práctica del deporte preferido. Se recomienda que estén fabricadas en poliéster o nailon para mayor frescura.
              .col-lg-4.col-md-7
                img(alt="" src="@/assets/curso/tema5/7.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-7.col-12
                h4.mb-4 Sudaderas deportivas
                p.mb-4 Se usan para hacer ejercicio en días fríos o después de entrenar.
              .col-lg-4.col-md-7
                img(alt="" src="@/assets/curso/tema5/8.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-7.col-12
                h4.mb-4 Pantalones deportivos
                p.mb-4 Existen diversos diseños para la práctica deportiva. Su elección debe depender del tipo de actividad a realizar.
              .col-lg-4.col-md-7
                img(alt="" src="@/assets/curso/tema5/9.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-7.col-12
                h4.mb-4 Pantaloneta deportiva
                p.mb-4 Prenda ideal para hacer ejercicio, permite moverse con libertad.
              .col-lg-4.col-md-7
                img(alt="" src="@/assets/curso/tema5/10.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-7.col-12
                h4.mb-4 Ropa interior
                p.mb-4 Debe ser fresca y cómoda para mejorar el movimiento.
              .col-lg-4.col-md-7
                img(alt="" src="@/assets/curso/tema5/11.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-7.col-12
                h4.mb-4 Calcetines deportivos
                p.mb-4 Son esenciales para proteger los pies al realizar cualquier deporte.
              .col-lg-4.col-md-7
                img(alt="" src="@/assets/curso/tema5/12.png")


</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
