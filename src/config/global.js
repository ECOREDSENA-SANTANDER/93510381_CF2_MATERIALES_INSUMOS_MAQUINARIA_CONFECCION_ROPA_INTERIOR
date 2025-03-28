export default {
  global: {
    Name: 'Insumos, materiales y telas',
    Description:
      'La selección de telas y materiales es clave en la confección de ropa interior y deportiva, ya que influye en la comodidad y funcionalidad de las prendas. Para garantizar productos de calidad, es esencial conocer la clasificación y características de los tejidos, así como los insumos utilizados en su fabricación. Adquirir estas habilidades permite identificar las mejores opciones según las necesidades del usuario, asegurando prendas confortables, duraderas y estéticamente atractivas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Evolución histórica del uso de ropa interior',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Ropa interior',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Ropa Interior Femenina',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Pantis',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Brasieres',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Fajas',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Ligueros',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Camisones',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Telas utilizadas en la fabricación de ropa interior femenina',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Ropa interior masculina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Camiseta',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Calzoncillos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Bóxer',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo:
              'Telas utilizadas en la fabricación de ropa interior masculina',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Ropa deportiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Ropa deportiva femenina',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Ropa deportiva masculina',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Insumos y materiales para la fabricación de ropa interior',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Ejemplo proceso de producción de prendas de vestir',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (24 de agosto de 2023). Ejemplo proceso de producción de prendas de vestir [Archivo de Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=-Ae7NYQr10A&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
    {
      tema: 'Consumo de Materiales',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (28 de mayo de 2024). Consumo de Materiales [Archivo de Video]. Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=27428pA7t3I&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
  ],
  glosario: [
    {
      termino: 'Afelpado',
      significado:
        'tejido con una textura suave y aterciopelada que proporciona mayor confort y calidez.',
    },
    {
      termino: 'Broches',
      significado:
        'pequeñas piezas utilizadas para sujetar y ajustar prendas, como brasieres y ropa deportiva.',
    },
    {
      termino: 'Costura',
      significado:
        'unión de piezas de tela mediante hilos para confeccionar prendas de vestir.',
    },
    {
      termino: 'Elástico',
      significado:
        'material flexible que permite la adaptación de las prendas al cuerpo, brindando ajuste y comodidad.',
    },
    {
      termino: 'Encaje',
      significado:
        'tejido decorativo de malla con diseños calados, común en la confección de ropa interior femenina.',
    },
    {
      termino: 'Entretela',
      significado:
        'material colocado entre dos capas de tela para proporcionar mayor rigidez y estabilidad.',
    },
    {
      termino: '<em>Lycra</em>',
      significado:
        'fibra sintética altamente elástica, utilizada para mejorar el ajuste y flexibilidad de las prendas',
    },
    {
      termino: 'Material sintético',
      significado:
        'telas fabricadas con fibras artificiales como poliéster o nailon, caracterizadas por su resistencia y durabilidad.',
    },
    {
      termino: 'Microfibra',
      significado:
        'tejido ligero y transpirable, utilizado en ropa interior y deportiva por su suavidad y capacidad de absorción.',
    },
    {
      termino: 'Nailon',
      significado:
        'fibra sintética resistente y elástica, ideal para confección de prendas deportivas y ropa interior.',
    },
    {
      termino: 'Poliéster',
      significado:
        'fibra sintética ampliamente utilizada en la industria textil por su resistencia, durabilidad y fácil mantenimiento.',
    },
    {
      termino: 'Refuerzo',
      significado:
        'capa adicional de tela o material que se incorpora en las prendas para aumentar su resistencia y durabilidad.',
    },
    {
      termino: 'Ribete',
      significado:
        'acabado en los bordes de las prendas que mejora su estética y evita el deshilachado.',
    },
    {
      termino: 'Satinado',
      significado:
        'tipo de tejido con superficie brillante y lisa, utilizado en prendas de lencería y ropa de lujo.',
    },
    {
      termino: 'Sesgo',
      significado:
        'cinta de tela cortada en diagonal, utilizada para rematar bordes y mejorar la elasticidad en ciertas partes de la prenda.',
    },
    {
      termino: 'Suavizante textil',
      significado:
        'sustancia utilizada en el proceso de fabricación para dar una textura más suave a las telas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Clayton, M. (2009). Coser en casa: fundamentos, técnicas, corte y confección, sastrería avanzada, ropa de hogar y arreglos. Editorial Blume.',
      link: '',
    },
    {
      referencia: 'Coats. (s.f.). Todo sobre ropa interior. Recuperado de',
      link:
        'https://www.coats.com/es/industries/apparel/applications/intimate-and-underwear/',
    },
    {
      referencia: 'Coats. (s.f.). Threads. Recuperado de',
      link: 'https://www.coats.com/es/products/threads/',
    },
    {
      referencia:
        'El baúl de las costureras. (2017). Maquinaria de coser y accesorios. Recuperado de',
      link:
        'https://www.elbauldelacosturera.com/search/label/M%C3%A1quinas%20de%20coser%20y%20accesorios',
    },
    {
      referencia:
        'El baúl de las costureras. (2013). Tejidos elásticos, reconocerlo y calcular elongación. Recuperado de',
      link:
        'https://www.elbauldelacosturera.com/2010/03/tejidos-elasticos-reconocerlo-y.html',
    },
    {
      referencia:
        'Joseluisylute. (23 de octubre de 2009). Impacto ambiental de los materiales textiles. Blogspot. Recuperado de',
      link: 'http://joseluisylute.blogspot.com.co/',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (2013). Modistería: hilos y tela. Centro de Gestión de Mercados, Logística y TIC.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Olga Constanza Bermúdez James',
          cargo: 'Asesora pedagógica',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Gissela del Carmen Alvis Ladino',
          cargo: 'Asesora pedagógica',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar Gonzalez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Johann Sebastián Terán Carvajal',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette González Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
