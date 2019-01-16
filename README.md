## UX Developer Challenge

En este proyecto se utlizaron las herramientas requeridas por el    cliente, CSS, HTML y JS.
Se resolvieron vistas tablet y mobile según lo solicitado.
Se utilizo Gulp como automatizador de tareas, SASS    para preprocesar CSS.

> 
> ## Breakpoints

Se creo un mapa con los breakpoints necesarios y un @mixin para la creación de media-queries:

    /*
    Breakpoint
    */
    $breakpoints: (
      small: 'max-width: 480px',
      medium: 'max-width: 768px',
      large: 'max-width: 1024px',
      xlarge: 'max-width: 1440px'
    );
    @mixin media-query($breakpoint) {
      @if map-has-key($breakpoints, $breakpoint) {
        @media screen and(map-get($breakpoints, $breakpoint)) {
          @content;
        }
      } @else {
        @error "Breakpoint does not exist";
      }
    }

> ## Variables

Se crearon las variables necesarias para su posterior uso:

    /* Variables */
    $first-color: #5da552;
    $second-color: #333333;
    $font-light: 'OpenSans-Light', Arial;
    $font-regular: 'OpenSans-Regular', Arial;
    $font-semibold: 'OpenSans-SemiBold', Arial;

> ## Fonts

Se implementaron todas las fuentes requeridas "Open Sans" en su formato correspondiente según el Mockup:

    /* fonts*/
        @font-face {
          font-family: 'OpenSans-Regular';
          src: url("../fonts/OpenSans-Regular.eot");
          src: url("../fonts/OpenSans-Regular.woff2") format('woff2'), url("../fonts/OpenSans-Regular.woff") format('woff'), url("../fonts/OpenSans-Regular.ttf") format('truetype'), url("../fonts/OpenSans-Regular.svg#OpenSans-Regular") format('svg'), url("../fonts/OpenSans-Regular.eot?#iefix") format('embedded-opentype');
          font-weight: normal;
          font-style: normal;
        }






> ## Estructura del proyecto

        + -- dev
        |    + -- fonts
        |          |-- Open-sans
        |    + -- img
        |          |-- imagenes
        |    + -- js
        |          |-- main.js
        |    + -- scss
                  |-- _settings
                  |-- _base
                  |-- _fonts
                  |-- _layout
                  |-- style
        + -- node-modules
        + -- public
        |    + -- fonts
        |          |-- Open-sans
        |    + -- img
        |          |-- imagenes
        |    + -- js
        |          |-- main.js
        |    + -- css
                  |-- style
        index.html
        gulpfile.js
        package-lock.json
        package.json

> ## Especificidad

Se utilizo la nomenclatura de clases de **BEM**, descendiendo máximo un nivel para mantener la especificidad del código:

    .content {
      display: flex;
    }
    
    .content_title {
      font-family: $font-regular;
    }
    
    .content__subtitle {
      text-align: center;
    }

> ## ShareCount

Para la implementación de ShareCount se creo una cuenta Free para obtener la key y se introdujo la url del cliente para poder obtener un resultado, ya que el requisito que pide ShareCount es que la pagina tiene que estar online.
> url = encodeURIComponent('https://makingsense.com/');


 
> ## Consideraciones estéticas

Para detalles como SharedCount, modal y botones se intento homogeneizar la estética con el mockup ya brindado por el cliente.

> ## Opciones descartadas

Se descarto la utilización de Clip-path en CSS por no tener compatibilidad con Edge.
Se descarto la creación de una mascara SVG para la implementación de las imágenes poligonales.


> #DeveloperOffTheRecord: "En la mente del desarrollador resonaron las palabras de Nazareno diciendo: *No te compliques, hacelo fácil...*"
