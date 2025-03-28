<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Ropa interior masculina
    
    p.mb-0 A continuación, se presentan las principales prendas utilizadas por el género masculino.

    separador
    #t_4_1.titulo-segundo.mb-5
      h2 4.1 Camiseta

    .row.justify-content-center.mb-0
      .col-lg-4.col-md-6.mb-4
        .overflow-hidden.h-100.bg1.p-4(data-aos="fade-left")
          img.img-a.img-t.mb-3.icono-cambia1(src='@/assets/curso/tema4/1.svg', alt='tema1')
          .bgw1.p-1.mb-4
            h5.text-center.mb-0.my-1.ps-2.pe-2 a. Camiseta cuello V
          p.mb-p.text-center Prenda ideal tanto para vestir como para hacer ejercicio. Su confección en algodón la hace fresca y cómoda.
      .col-lg-4.col-md-6.mb-4
        .overflow-hidden.h-100.bg1.p-4(data-aos="fade-left")
          img.img-a.img-t.mb-3.icono-cambia1(src='@/assets/curso/tema4/2.svg', alt='tema1')
          .bgw1.p-1.mb-4
            h5.text-center.mb-0.my-1.ps-2.pe-2 b. Camiseta cuello redondo
          p.mb-p.text-center Perfecta para vestir o hacer ejercicio. Gracias a su confección en algodón, ofrece frescura y comodidad.
      .col-lg-4.col-md-6.mb-4
        .overflow-hidden.h-100.bg1.p-4(data-aos="fade-left")
          img.img-a.img-t.mb-3.icono-cambia1(src='@/assets/curso/tema4/3.svg', alt='tema1')
          .bgw1.p-1.mb-4
            h5.text-center.mb-0.my-1.ps-2.pe-2 c. Camisilla deportiva
          p.mb-p.text-center Diseñada especialmente para la actividad física, suele estar elaborada en algodón. En climas cálidos se usa como prenda de vestir, mientras que en climas fríos se lleva debajo de la camisa para mayor abrigo.


    separador
    #t_4_2.titulo-segundo.mb-5
      h2 4.2 Calzoncillos

    .tarjeta--container.row.mb-4
      .col-md.tarjeta.color-primario.p-4.p-md-4.p-lg-5(data-aos="fade-right")
        .row.justify-content.mb-4
          .col-12
            .row.align-items-end
              .col-lg-3.mb-4
                img.img-a.img-t(src='@/assets/curso/tema4/4.svg', alt='Imagen decorativa.')
              .col-lg-9.mb-4
                .bg5.p-1
                  h3.mb-0.ps-3.pe-3.text-white Estilo #[em Brief]
            p.mb-0.text-white Es el estilo más clásico, ya que tiene una alta cobertura en los laterales y deja las piernas completamente expuestas para mayor libertad de movimiento. Cuenta con una abertura frontal, lo que lo hace muy práctico y cómodo.
      .col-md.tarjeta.color-acento-contenido.tar.p-4.p-md-4.p-lg-5(data-aos="fade-right")
        .row.justify-content.mb-4
          .col-12
            .row.align-items-end
              .col-lg-3.mb-4
                img.img-a.img-t(src='@/assets/curso/tema4/5.svg', alt='Imagen decorativa.')
              .col-lg-9.mb-4
                .bg5.p-1
                  h3.mb-0.ps-3.pe-3.text-white Clásico
            p.mb-0 Es un diseño atemporal que se mantiene vigente. Es alto en las piernas, con cobertura media en la cadera y un buen ajuste.
    .tarjeta--container.row.mb-4
      .col-md.tarjeta.color-primario.p-4.p-md-4.p-lg-5(data-aos="fade-right")
        .row.justify-content.mb-4
          .col-12
            .row.align-items-end
              .col-lg-3.mb-4
                img.img-a.img-t(src='@/assets/curso/tema4/6.svg', alt='Imagen decorativa.')
              .col-lg-9.mb-4
                .bg5.p-1
                  h3.mb-0.ps-3.pe-3.text-white Clásico con abertura
            p.mb-0.text-white Es el estilo más clásico, ya que tiene una alta cobertura en los laterales y deja las piernas completamente expuestas para mayor libertad de movimiento. Cuenta con una abertura frontal, lo que lo hace muy práctico y cómodo.
      .col-md.tarjeta.color-acento-contenido.tar.p-4.p-md-4.p-lg-5(data-aos="fade-right")
        .row.justify-content.mb-4
          .col-12
            .row.align-items-end
              .col-lg-3.mb-4
                img.img-a.img-t(src='@/assets/curso/tema4/7.svg', alt='Imagen decorativa.')
              .col-lg-9.mb-4
                .bg5.p-1
                  h3.mb-0.ps-3.pe-3.text-white Bikini
            p.mb-0 Aunque no es un modelo muy popular, muchos hombres lo prefieren porque no se marca bajo la ropa. Ofrece máxima comodidad y un ajuste perfecto para cualquier ocasión.


    separador
    #t_4_3.titulo-segundo.mb-5
      h2 4.3 Bóxer
      
    .row.justify-content-center.align-items-end.mb-0
      .col-lg-4.col-md-6.col-9.mb-4
        img(src='@/assets/curso/tema4/8.png', alt='')
      .col-lg-8.col-md-10
        SlyderF.custom(columnas="col-lg-6 col-md-6 col-xl-6")
          .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
            .row.justify-content-center.mb-3
              .col-8.my-4
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema4/12.svg' alt='AvatarTop')
            .bg51.p-2.mb-4
              h4.text-center.mb-0.text-white Bóxer suelto
            p.mb-5.text-center(data-aos="fade-right") Toma este nombre por su similitud con los usados por los boxeadores. Es suelto, tiene abertura frontal, elástico en la cintura y regularmente está elaborado en fibra de algodón.
          .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
            .row.justify-content-center.mb-3
              .col-8.my-4
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema4/13.svg' alt='AvatarTop')
            .bg51.p-2.mb-4
              h4.text-center.mb-0.text-white Bóxer #[em brief] corto
            p.mb-0.text-center(data-aos="fade-right") Es un estilo clásico similar al calzoncillo #[em brief], pero un poco más largo.
          .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
            .row.justify-content-center.mb-3
              .col-8.my-4
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema4/14.svg' alt='AvatarTop')
            .bg51.p-2.mb-4
              h4.text-center.mb-0.text-white Bóxer corto
            p.mb-0.text-center(data-aos="fade-right") Es como un bóxer #[em brief] corto, pero más ajustado y con piernas más largas.
          .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
            .row.justify-content-center.mb-3
              .col-8.my-4
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema4/15.svg' alt='AvatarTop')
            .bg51.p-2.mb-4
              h4.text-center.mb-0.text-white Bóxer largo
            p.mb-0.text-center(data-aos="fade-right") Es uno de los favoritos de los hombres, se ajusta al cuerpo y tiene apariencia de short de ciclista.
          .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
            .row.justify-content-center.mb-3
              .col-8.my-4
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema4/16.svg' alt='AvatarTop')
            .bg51.p-2.mb-4
              h4.text-center.mb-0.text-white Bóxer extralargo
            p.mb-0.text-center(data-aos="fade-right") Tiene mayor cobertura en el área de las piernas. Está elaborado en lycra, un material que se ajusta perfectamente a la forma del cuerpo, brindando comodidad y mayor libertad de movimiento.
          .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
            .row.justify-content-center.mb-3
              .col-8.my-4
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema4/17.svg' alt='AvatarTop')
            .bg51.p-2.mb-4
              h4.text-center.mb-0.text-white Calzoncillo largo
            p.mb-0.text-center(data-aos="fade-right") Es una prenda interior única que cubre completamente las piernas, ajustándose perfectamente a la forma del cuerpo. Está diseñado para su uso en climas fríos.



    separador
    #t_4_4.titulo-segundo.mb-5
      h2 4.4 Telas utilizadas en la fabricación de ropa interior masculina

    p.mb-5 A continuación, se presentan los materiales más utilizados en la confección de ropa interior masculina, según su composición y funcionalidad en el mercado.
    
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        .row.justify-content-center.mb-3
          .col-lg-5.mb-3
            img.img-a.img-t.mb-3.mov(src='@/assets/curso/tema4/9.svg' alt='AvatarTop')
            p.mb-4 #[b 1. 77 % algodón, 14 % poliamida y 9 % elastano:] material elástico y resistente, ampliamente utilizado en ropa interior masculina debido a su suavidad y capacidad de transpiración.
            img.img-a.img-t.mb-3.mov(src='@/assets/curso/tema4/11.svg' alt='AvatarTop')
            p.mb-0 #[b 2. Algodón 100 %:] fibra natural empleada especialmente en la confección de bóxeres sueltos. Permite la respiración de la piel, evita irritaciones y ofrece una textura suave al tacto.
          .col-lg-1.col-md-1.col-1.icono.d-none.d-lg-block
            .br-cus.mb-5.my-5
          .col-lg-5
            img.img-a.img-t.mb-3.mov(src='@/assets/curso/tema4/10.svg' alt='AvatarTop')
            p.mb-0 #[b 3. #[em Lycra] Spandex:]fibra sintética destacada por su alta elasticidad y resistencia, ideal para la fabricación de ropa interior ajustada.
       
</template>

<script>
export default {
  name: 'Tema4',
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
