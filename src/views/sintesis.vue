<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 La confección de ropa interior y deportiva exige una selección minuciosa de telas y materiales, ya que estos influyen directamente en la comodidad, funcionalidad y durabilidad de las prendas. Es fundamental conocer la clasificación de los tejidos, sus propiedades y los insumos empleados en su fabricación para tomar decisiones acertadas en el proceso productivo. La elección adecuada de materiales no solo mejora la calidad y resistencia de las prendas, sino que también garantiza un ajuste óptimo y una mejor experiencia para el usuario. Además, el uso de insumos específicos, como elásticos, broches y refuerzos, contribuye a la ergonomía y estética de cada diseño. Desarrollar habilidades en la identificación y clasificación de estos elementos permite optimizar la producción, asegurando prendas innovadoras, confortables y atractivas, que respondan a las necesidades y tendencias del mercado.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        .row.justify-content-center
          .col-lg-6.mb-5
            img(src="@/assets/curso/sintesis.svg", alt="La elección de telas e insumos es clave en la confección de ropa interior y deportiva, ya que influye en la calidad, comodidad y durabilidad de las prendas. Conocer sus características permite optimizar la producción y garantizar diseños funcionales y atractivos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
