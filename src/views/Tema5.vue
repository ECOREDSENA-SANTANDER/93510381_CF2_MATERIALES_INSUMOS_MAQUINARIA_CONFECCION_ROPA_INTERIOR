<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Ropa deportiva
    
    p.mb-4 La ropa deportiva se diseña según las necesidades de cada disciplina, utilizando materiales que brindan comodidad, seguridad y, en algunos casos, mejoran el rendimiento deportivo. Con el tiempo, esta categoría ha evolucionado, incorporando productos que no solo se usan en la práctica deportiva, sino que también forman parte de la moda y el vestuario diario.

    .titulo2.mb-5.ps-5.pe-3(data-aos="fade-right")
      img(src='@/assets/curso/tema1/titulo.png', alt='Imagen decorativa')
      h3.mb-0.text-white.mx-2 Características de la ropa deportiva
    
    p.mb-4 La ropa deportiva debe cumplir con las siguientes características:

    .col-lg-7.mb-0
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

    
    separador
    #t_5_1.titulo-segundo.mb-5
      h2 5.1 Ropa deportiva femenina 

    .row.justify-content-center.mb-0
      .col-lg-4.col-md-6.mb-4
        .overflow-hidden.h-100.bg1.p-4(data-aos="fade-left")
          img.img-a.img-t.mb-3.icono-cambia1(src='@/assets/curso/tema5/1.svg', alt='tema1')
          .bgw1.p-1.mb-4
            h5.text-center.mb-0.my-1.ps-2.pe-2 Camisetas deportivas
          p.mb-p.text-center Son ideales para la práctica del deporte preferido. Se recomienda que estén fabricadas en poliéster o nailon para mayor frescura.
      .col-lg-4.col-md-6.mb-4
        .overflow-hidden.h-100.bg1.p-4(data-aos="fade-left")
          img.img-a.img-t.mb-3.icono-cambia1(src='@/assets/curso/tema5/2.svg', alt='tema1')
          .bgw1.p-1.mb-4
            h5.text-center.mb-0.my-1.ps-2.pe-2 Sudaderas deportivas
          p.mb-p.text-center Se usan para hacer ejercicio en días fríos o después de entrenar.
      .col-lg-4.col-md-6.mb-4
        .overflow-hidden.h-100.bg1.p-4(data-aos="fade-left")
          img.img-a.img-t.mb-3.icono-cambia1(src='@/assets/curso/tema5/3.svg', alt='tema1')
          .bgw1.p-1.mb-4
            h5.text-center.mb-0.my-1.ps-2.pe-2 Pantalones deportivos
          p.mb-p.text-center Existe una gran variedad de diseños para hacer deporte. Su elección debe depender del tipo de actividad a realizar.

    .row.justify-content-center.mb-0
      .col-lg-4.col-md-6.mb-4
        .overflow-hidden.h-100.bg1.p-4(data-aos="fade-left")
          img.img-a.img-t.mb-3.icono-cambia1(src='@/assets/curso/tema5/4.svg', alt='tema1')
          .bgw1.p-1.mb-4
            h5.text-center.mb-0.my-1.ps-2.pe-2 Top deportivo
          p.mb-p.text-center Prenda ideal para mujeres activas. Su diseño con espalda atlética y cargaderas de máximo soporte permite moverse con libertad.
      .col-lg-4.col-md-6.mb-4
        .overflow-hidden.h-100.bg1.p-4(data-aos="fade-left")
          img.img-a.img-t.mb-3.icono-cambia1(src='@/assets/curso/tema5/5.svg', alt='tema1')
          .bgw1.p-1.mb-4
            h5.text-center.mb-0.my-1.ps-2.pe-2 Ropa interior
          p.mb-p.text-center Debe ser fresca, cómoda y brindar el soporte necesario durante la actividad física.
      .col-lg-4.col-md-6.mb-4
        .overflow-hidden.h-100.bg1.p-4(data-aos="fade-left")
          img.img-a.img-t.mb-3.icono-cambia1(src='@/assets/curso/tema5/6.svg', alt='tema1')
          .bgw1.p-1.mb-4
            h5.text-center.mb-0.my-1.ps-2.pe-2 Calcetines deportivos
          p.mb-p.text-center Son esenciales para proteger los pies al realizar cualquier deporte.


    separador
    #t_5_2.titulo-segundo.mb-5
      h2 5.2 Ropa deportiva masculina

    .row.fondo7.p-4.p-lg-5.p-md-4.mb-0(data-aos="fade-down")
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
