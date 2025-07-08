<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Insumos y materiales para la fabricación de ropa interior

      .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
        .col-lg-12
          .bloque-texto-g.mk1.color-acento-contenido.p-3.p-lg-5.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema6/i1.png')})`}", alt='Imagen decorativa.'
            )
            .bloque-texto-g__texto.p-lg-5.p-md-4.p-4.mb-4.my-4
              p.mb-4 Actualmente, existe una amplia variedad de insumos en la confección industrial, con artículos de diversos tamaños, colores, materiales, formas y funciones. 

      p.mb-4 Entre los más utilizados en la fabricación de ropa interior se encuentran:
  
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-10
          PasosA.color-primario.pas.mb-0(tipo="n")
            .row.justify-content-between.align-items-center(data-aos="fade-right")
              .col-lg-8.col-md-9
                h4 Aros
                p.mb-0 Se utilizan en el brasier para dar forma al seno, sostener el busto y mejorar la apariencia de la copa. Existen tres tipos: estándar, media copa y #[em magic.]
              .col-lg-3.col-md-3.cel
                figure
                  img(src='@/assets/curso/tema6/1.svg', alt='Texto que describa la imagen')

            .row.justify-content-between.align-items-center(data-aos="fade-right")
              .col-lg-3.col-md-3.cel
                figure
                  img(src='@/assets/curso/tema6/2.svg', alt='Texto que describa la imagen')
              .col-lg-8.text-start.col-md-9
                h4 Varillas plásticas de nailon
                p.mb-0 Material plástico maleable, usado en laterales y frontales para brindar mayor firmeza y elegancia a diseños como los corsés.
            .row.justify-content-between.align-items-center(data-aos="fade-right")
              .col-lg-8.col-md-9
                h4 Argollas y tensores
                p.mb-0 Empleados en la elaboración de cargaderas para brasieres. Los tensores permiten sostener el peso y ajustar la longitud de la cargadera.
              .col-lg-3.col-md-3.cel
                figure
                  img(src='@/assets/curso/tema6/3.svg', alt='Texto que describa la imagen')

            .row.justify-content-between.align-items-center(data-aos="fade-right")
              .col-lg-3.col-md-3.cel
                figure
                  img(src='@/assets/curso/tema6/4.svg', alt='Texto que describa la imagen')
              .col-lg-8.text-start.col-md-9
                h4 Framilón
                p.mb-0 Elástico de poca resistencia debido a su pequeña dimensión. Se usa en brasieres para fruncir la copa y en camisetas para reforzar costuras de hombros en telas delgadas.
            .row.justify-content-between.align-items-center(data-aos="fade-right")
              .col-lg-8.col-md-9
                h4 Broches y ganchos
                p.mb-0 Diseñados para sujetar y ajustar la prenda al cuerpo. En ropa interior existen broches plásticos y de metal, ideales para brasieres convertibles o juveniles, debido a su resistencia y practicidad.
              .col-lg-3.col-md-3.cel
                figure
                  img(src='@/assets/curso/tema6/5.svg', alt='Texto que describa la imagen')

            .row.justify-content-between.align-items-center(data-aos="fade-right")
              .col-lg-3.col-md-3.cel
                figure
                  img(src='@/assets/curso/tema6/6.svg', alt='Texto que describa la imagen')
              .col-lg-8.text-start.col-md-9
                h4 Abrochaduras
                p.mb-0 Fabricadas con tejido de nailon, con o sin espuma. Los ganchos y ojales pueden ser de latón niquelado o hierro galvanizado recubierto con plástico. Disponibles en diferentes tamaños y diseños.
            .row.justify-content-between.align-items-center(data-aos="fade-right")
              .col-lg-8.col-md-9
                h4 Sesgo varilla
                p.mb-0 Protege y sostiene varillas y aros o cubre la costura de unión entre la copa y la cotilla. Se fabrica con un material afelpado en el exterior y un refuerzo interno que amortigua la varilla para mayor comodidad.
              .col-lg-3.col-md-3.cel
                figure
                  img(src='@/assets/curso/tema6/7.svg', alt='Texto que describa la imagen')

            .row.justify-content-between.align-items-center(data-aos="fade-right")
              .col-lg-3.col-md-3.cel
                figure
                  img(src='@/assets/curso/tema6/8.svg', alt='Texto que describa la imagen')
              .col-lg-8.text-start.col-md-9
                h4 Sesgo nailon cristal
                p.mb-0 Utilizado para cubrir costuras y márgenes. Se cose en plana con dos agujas y tiene doblez para mayor funcionalidad.
            .row.justify-content-between.align-items-center(data-aos="fade-right")
              .col-lg-8.col-md-9
                h4 Copa preformada
                p.mb-0 Fabricada en vinil acetato o materiales similares, flexibles y no tóxicos. Se adapta al interior del brasier y presenta una superficie perforada para mejorar la transpiración. Está diseñada conforme a las tallas comerciales de copas de brasier, con diferentes colores y espesores.
              .col-lg-3.col-md-3.cel
                figure
                  img(src='@/assets/curso/tema6/9.svg', alt='Texto que describa la imagen')

            .row.justify-content-between.align-items-center(data-aos="fade-right")
              .col-lg-3.col-md-3.cel
                figure
                  img(src='@/assets/curso/tema6/10.svg', alt='Texto que describa la imagen')
              .col-lg-8.text-start.col-md-9
                h4 Afelpados
                p.mb-0 Poseen un lado con tejido afelpado, recomendado para corsetería. Este lado indica el derecho del elástico y es el que debe estar en contacto con la piel. Uno de sus orillos termina en mora o picot para mejorar el acabado en la prenda. Su porcentaje de elongación varía entre el 4 % y el 18 %, y se denomina afelpado porque ambas caras tienen una textura similar a la felpa.
            .row.justify-content-between.align-items-center(data-aos="fade-right")
              .col-lg-8.col-md-9
                h4 Trenzados
                p.mb-0 Se fabrican con un conjunto de hilos que se entrelazan, alternando de un lado a otro en pasadas paralelas. Su porcentaje de elongación varía entre el 14 % y el 22 %. Se pueden usar con o sin recubrimiento de poliéster o poliamida. Son empleados en la confección de vestidos de baño, cintura y pierna de pantaloncillos, cinturas de sudaderas, ropa interior deportiva y bañadores.
              .col-lg-3.col-md-3.cel
                figure
                  img(src='@/assets/curso/tema6/11.svg', alt='Texto que describa la imagen')

            .row.justify-content-between.align-items-center(data-aos="fade-right")
              .col-lg-3.col-md-3.cel
                figure
                  img(src='@/assets/curso/tema6/12.svg', alt='Texto que describa la imagen')
              .col-lg-8.text-start.col-md-9
                h4 #[em Crochet]
                p.mb-0 Son tejidos de punto con inserción de trama, lo que permite que sean elásticos o no. Si no tienen elastómero, no son recuperables tras su estiramiento. Su textura es suave y se utilizan en la confección de pantis, ropa deportiva y enaguas. El ancho de los elásticos varía según su uso y se mide en milímetros.
            .row.justify-content-between.align-items-center(data-aos="fade-right")
              .col-lg-8.col-md-9
                h4 Elásticos para piernas y costados de panti
                p.mb-0 Generalmente, llevan un lado afelpado para mayor suavidad y se colocan adornados en los orillos. Su ancho es de aproximadamente 1 cm.
              .col-lg-3.col-md-3.cel
                figure
                  img(src='@/assets/curso/tema6/13.svg', alt='Texto que describa la imagen')

            .row.justify-content-between.align-items-center(data-aos="fade-right")
              .col-lg-3.col-md-3.cel
                figure
                  img(src='@/assets/curso/tema6/14.svg', alt='Texto que describa la imagen')
              .col-lg-8.text-start.col-md-9
                h4 Elástico para base de top
                p.mb-0 Puede presentarse con orillos en mora o lisos con grabados. Son más anchos y se utilizan expuestos en el exterior.
            .row.justify-content-between.align-items-center(data-aos="fade-right")
              .col-lg-8.col-md-9
                h4 Elástico para calzoncillo
                p.mb-0 Existen en orillo liso de 2 cm y 1 cm para pierna y cintura, con apariencia sencilla en modelos doblados y recubiertos. Los de cintura en diseños más modernos pueden medir hasta 3 cm de ancho y llevar grabados con logotipos de proveedores o marcas.
              .col-lg-3.col-md-3.cel
                figure
                  img(src='@/assets/curso/tema6/15.svg', alt='Texto que describa la imagen')

            .row.justify-content-between.align-items-center(data-aos="fade-right")
              .col-lg-3.col-md-3.cel
                figure
                  img(src='@/assets/curso/tema6/16.svg', alt='Texto que describa la imagen')
              .col-lg-8.text-start.col-md-9
                h4 Sudaderas y pantalonetas
                p.mb-0 Son sencillos, con anchos variables según el diseño. Van recubiertos y asentados, ofreciendo mayor elongación para sujetar prendas más pesadas.
            .row.justify-content-between.align-items-center(data-aos="fade-right")
              .col-lg-8.col-md-9
                h4 Elásticos para cargadera de brasier
                p.mb-0 Tienen un acabado en los orillos y presentan un brillo estético. Poseen elongación para sostener el peso y pueden ser afelpados en su interior para mayor suavidad. Se elaboran con nailon, #[em lycra], algodón, caucho - nailon, poliéster - nailon.
              .col-lg-3.col-md-3.cel
                figure
                  img(src='@/assets/curso/tema6/17.svg', alt='Texto que describa la imagen')

            .row.justify-content-between.align-items-center(data-aos="fade-right")
              .col-lg-3.col-md-3.cel
                figure
                  img(src='@/assets/curso/tema6/18.svg', alt='Texto que describa la imagen')
              .col-lg-8.text-start.col-md-9
                h4 Elásticos para cintura de panti
                p.mb-0 De 1 cm en adelante, con banda elástica decorativa en pantis juveniles. Pueden incluir aplicaciones de encaje. Algunos están compuestos por fibra de #[em lycra] y nailon para mayor elongación y resistencia, y sus acabados agregan un toque de distinción a la prenda.
            .row.justify-content-between.align-items-center(data-aos="fade-right")
              .col-lg-8.col-md-9
                h4 Elástico para envivar
                p.mb-0 Se usa en prendas sin orillos doblados, como pantis, brasieres y tops, tanto para damas como para niñas.
              .col-lg-3.col-md-3.cel
                figure
                  img(src='@/assets/curso/tema6/19.svg', alt='Texto que describa la imagen')

            .row.justify-content-between.align-items-center(data-aos="fade-right")
              .col-lg-3.col-md-3.cel
                figure
                  img(src='@/assets/curso/tema6/20.svg', alt='Texto que describa la imagen')
              .col-lg-8.text-start.col-md-9
                h4 Broches de presión y ojaletes
                p.mb-0 Se utilizan en ropa deportiva como pantalonetas, sudaderas, camisetas y ropa para gimnasia, proporcionando ajuste y diseño.
            .row.justify-content-between.align-items-center(data-aos="fade-right")
              .col-lg-8.col-md-9
                h4 Cordones y punteras
                p.mb-0 Sujetan la prenda deportiva al cuerpo y se encuentran en pantalonetas, sudaderas y chaquetas. Las punteras añaden un toque estético a los extremos de los cordones. Existen en anchos de orillo lizo de 2 cm y 1 cm.
              .col-lg-3.col-md-3.cel
                figure
                  img(src='@/assets/curso/tema6/21.svg', alt='Texto que describa la imagen')

            .row.justify-content-between.align-items-center(data-aos="fade-right")
              .col-lg-3.col-md-3.cel
                figure
                  img(src='@/assets/curso/tema6/22.svg', alt='Texto que describa la imagen')
              .col-lg-8.text-start.col-md-9
                h4 Cierres y botones
                p.mb-0 Se emplean en la confección de ropa deportiva como camisetas, chaquetas, pantalonetas y sudaderas, permitiendo un ajuste seguro y funcional.
  
  
  </template>

<script>
export default {
  name: 'Tema6',
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
