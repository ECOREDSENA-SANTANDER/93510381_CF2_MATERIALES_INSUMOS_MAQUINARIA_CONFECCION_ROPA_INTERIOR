<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Telas utilizadas en la fabricación de ropa interior femenina
    
    p.mb-4 Una tela es una estructura compuesta por fibras textiles, las cuales pueden ser elaboradas mediante diversas técnicas de fabricación (SENA, 2013).

    .titulo1.mb-5.ps-5.pe-3(data-aos="fade-right")
      img(src='@/assets/curso/tema1/titulo.png', alt='Imagen decorativa')
      h3.mb-0.text-white.mx-2 Tipos de fabricación de telas

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12    
        TabsA.color-acento-botones.mod
          .tarjeta.color-acento-botones.bg4.p-4(titulo="Aglutinamiento")
            p.mb-3 #[b Aglutinamiento]
            p.mb-0 Este método utiliza fibras sin hilar, las cuales se humedecen y someten a presión y calor para adherirse y formar la tela. Un ejemplo de este proceso es el fieltro y algunas entretelas como el interlón.
          .tarjeta.color-acento-botones.bg4.p-4(titulo="Tejido plano")
            p.mb-3 #[b Tejido plano]
            p.mb-0 Las telas de tejido plano se elaboran en un telar, entrelazando dos hilos en ángulos rectos: los hilos de urdimbre y los de trama. El orillo, ubicado a lo largo de la tela, evita que esta se deshilache. Este tipo de tejido es resistente y con poca elongación, lo que lo hace ideal para prendas exteriores como camisas, pantalones, vestidos, delantales y jeans, así como para vestimenta de gala como vestidos de novia y trajes de etiqueta. Algunas telas comunes en este grupo son el dacrón, dril, lino, satén, chifón, organza, crepé, sarga, lamé, tafetán y lurex.
          .tarjeta.color-acento-botones.bg4.p-4(titulo="Tejido de punto")
            p.mb-3 #[b Tejido de punto]
            p.mb-0 Este método consiste en entrelazar un hilo mediante lazadas, formando una malla similar al tejido a mano, pero realizado con maquinaria industrial. Las telas de punto son flexibles y adaptables al cuerpo, aunque difíciles de manejar al cortarlas debido a su textura resbaladiza. Cuando el entrelazamiento genera un diseño, se denomina "tejido de doble punto". La tela Knit es especialmente popular en ropa deportiva y ropa interior por su elasticidad y comodidad (SENA, 2013).


    .titulo.mb-5.ps-5.pe-3(data-aos="fade-right")
      img(src='@/assets/curso/tema1/titulo.png', alt='Imagen decorativa')
      h3.mb-0.text-white.mx-2 Otras telas
    
    p.mb-5 Después de conocer los tipos de tejido utilizados en la fabricación de telas, es posible identificar las más empleadas en la producción de prendas de ropa interior femenina, según el material y el uso que el mercado les otorga.

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-3.col-md-7.col-8
        img(src='@/assets/curso/tema3/1.png', alt='')
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-0(data-aos="fade-right")
          .row.col-xl-11.m-auto(titulo="Rayón")
            p.mb-4 El rayón es una fibra de origen celulósico, versátil y con un tacto similar a la seda. Es suave, fresco, cómodo, fácil de teñir, conserva el calor y tiene una alta capacidad de absorción. Existen varios tipos de rayón:
            ul.lista-ul.mb-0
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 #[b Rayón viscoso:] al combinarse con materiales como algodón, lana o poliéster, se utiliza en la fabricación de ropa interior, abrigos y vestidos.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 #[b Rayón acetato y rayón triacetato:] las telas de acetato se derivan de la pulpa de madera o algodón, y se combinan con acetato de anhídrido. Este tipo de fibra no encoge, es resistente, presenta buena elongación, no se destiñe ni se arruga, y su brillo imita la seda natural.
          .row.col-xl-11.m-auto(titulo="Nailon")
            p.mb-0 Es un polímero termoplástico de la familia de las poliamidas. Es suave, resistente al uso, no se arruga, durable, fácil de lavar y se seca rápidamente. Sin embargo, no soporta altas temperaturas, tiene baja capacidad de absorción de humedad y se utiliza principalmente para fabricar medias y lencería.
          .row.col-xl-11.m-auto(titulo="Poliéster")
            p.mb-0 Es un polímero termoestable. Es durable, resistente al roce, no se arruga ni destiñe, y se lava y seca fácilmente. Presenta baja capacidad de absorción de humedad y no resiste altas temperaturas. Se utiliza comúnmente en la fabricación de trajes, camisas, vestidos y blusas.
          .row.col-xl-11.m-auto(titulo="<em>Lycra</em>, elastano o spandex")
            p.mb-0 Conocido comercialmente como spandex, es una fibra elastomérica de la familia de los poliuretanos. Tiene gran elasticidad, se ajusta al cuerpo, es ligera, resistente al roce y durable. Generalmente, se mezcla con otras fibras como poliéster, nailon o algodón. Aunque el color blanco tiende a volverse amarillo con el tiempo, es de baja absorción de humedad. Se utiliza en la fabricación de corsetería, medias y trajes de baño.
          .row.col-xl-11.m-auto(titulo="Microfibra")
            p.mb-0 Es un polímero elastómero compuesto en su mayoría por 80 % de poliéster y 20 % de poliamida. Es ligera, flexible, suave e indeformable. Posee una gran capacidad de limpieza, resiste altas temperaturas y tiene una excelente capacidad de absorción. Se usa en la fabricación de ropa interior, imitaciones de cuero para abrigos, guantes y tejidos para muebles tapizados.
          .row.col-xl-11.m-auto(titulo="Seda")
            p.mb-5 Es una fibra natural compuesta de proteínas. Su origen proviene de la oruga, que se cría en grandes cantidades y se alimenta especialmente de hojas de morera. Cada capullo produce una fibra que, al ser hilada con otras cuatro, forma un hilo. Este material se considera un producto de lujo por su textura y brillo.
            .bloque-texto-f.color-acento-contenido.pt-4.px-5.mb-0
              .bloque-texto-f__comillas
                i.fas.fa-quote-left
                i.fas.fa-quote-right
              h4.text-regular.bloque-texto-f__texto La seda es la única fibra continua de la naturaleza. Es lavable y teñible, y se utiliza como lienzo para pintar. Se emplea en la fabricación de trajes, faldas, blusas, camisas, corbatas, abrigos, chaquetas, cortinas, mantelería, entre otros.
              .bloque-texto-f__autor.mb-3
                h3.mb-0 - Joseluisylute, 2009

                
          .row.col-xl-11.m-auto(titulo="Tela bordada")
            p.mb-0 Es un tejido compuesto por hilos de seda, algodón, lino, oro o plata, que se trenzan para crear diversos diseños. Esta tela se utiliza comúnmente en la confección de ropa interior, trajes de fiesta y vestidos de novia.
           




</template>

<script>
export default {
  name: 'Tema3',
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
