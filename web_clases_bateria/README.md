# Clases de batería School and Rock.

Descripción detallada de la web School and Rock. 
Se crea una web que ofrece servicios de enseñanza presencial de batería. Ofrece informaición y contacto, al igual que la inclusión gracias a JavaScript, de comentarios en la página


## Estructura del Proyecto

```plaintext
/
web_clases_bateria/
├── css/
│ ├── basicas.css
│ ├── estados.css
│ ├── layout.css
│ ├── modulos.css
│ ├── opiniones.css
│ ├── temas.css
├── docs/
├── html/
│ ├── asisomos.html
│ ├── formulario.html
│ ├── nosotros.html
│ ├── nuestrasclasesdebateria.html
├── images/
├── javaScript/
│ ├── script.js
├── music/


```

## Archivos HTML
- `index.html`: Página principal de la web School and Rock.
- `formulario.html`: Página donde los usuarios nos pueden mandar mensajes. Muestra nuestra ubicación.
- `nosotros.html`: Página donde se habla de quienes son los que administrar y gestionan la página y las clases de bateria.
- `nuestrasclasesdebateria`: Página donde se habla de qué ofrecemos y como lo ofresemos.


## Directorio CSS
  El css está dividido siguiendo la metodología SMACSS (Scalable and Modular Architecture for CSS), definida por Jonathan Snook en su libro Scalable and Modular Architecture for CSS, en 2011. De esta forma, los estilos se dividen en cinco partes.
  
- `css/basicas.css`: Hoja de estilo donde se establecen los estilos por defecto de los elementos HTML individuales, los típicos selectores CSS de tipo. Por ejemplo, html, body, button, h1, etc..
- `css/estados.css`: Archivo que se encarga de dar estilos según se defina el comportamiento del layout y sus módulos en diferentes estados: hover, link, visited, diferentes resoluciones, etc.
- `css/layout.css`: Archivo donde se asignan los estilos relacionados con la estructura de la página que se ha dividido en secciones (header, main content, footer, navigation. La siguiente página indica alguno de los tipos de layout que se pueden usar en el diseño de nuestra página: http://dis.um.es/~lopezquesada/documentos/IES_1213/LMSGI/curso/UT5/libroswebcss/www.librosweb.es/css/capitulo12/estructura_o_layout.html (link activo).
- `css/modulos.css`: Archivo que se encarga de dar estilo a los elementos que pueden ser reusables, modulares e independientes del contexto. Por ejemplo: barras de navegación o galerías de imágenes.
- `css/temas.css`: Archivos con los estilos que afectan al layout y módulos. Para nuestro caso, tema claro/oscuro.


## Directorio docs
- Aparecen reseñados pero sin contenido, los documentos como `Aviso Legal`, `Politica de Cookies` y otro con `Información Adicional`.


## Directorio javaScript

- `js/script.js`: Archivo JavaScript que se encarga de manejar las opiniones en un carrusel, y añadirlas para ser vistas en la página. Existen 3 opiniones grabadas en un array. Se pueden añadir nuevas opiniones pero estas no se almacenan. Contiene también funciones para cambio de tema claro/oscuro.


## Directorio images

- Imágenes a disposición de la página del proyecto.


## Directorio music

- Archivo de musica a disposición de la página del proyecto.


## Cómo Usar la Página

Instrucciones sobre cómo usar o instalar esta web.

- Tienes que clonar el respositio completo o usar alguna aplicación disponible para solo hacer una descarga del directorio en el que estés interesado.

### Clonar el Repositorio

```sh
git clone https://github.com/serporion/mis-paginas-web.git
```

Navega hasta el directorio del web clases bateria y abre el archivo index.html en tu navegador preferido

```sh
cd mis-paginas-web/web_clases_bateria
open index.html  # o simplemente abrirlo con tu navegador
```


## Licencia
Este proyecto está licenciado bajo la Licencia MIT - ver el archivo `LICENSE` del repositorio general para más detalles.

## Contacto y Soporte

Para más información o preguntas sobre este repositorio, puedes contactar de las siguientes maneras:

- **Nombre**: Oscar
- **Correo Electrónico**: [serporionGit@hotmail.com](mailto:serporionGit@hotmail.com)
- **GitHub**: [serporion](https://github.com/serporion)


Si tienes alguna pregunta, encuentras un problema o tienes una sugerencia, por favor, abre un issue en este repositorio. Seguiremos el progreso y las discusiones a través de los issues para mantener todo organizado.

Puedes abrir un nuevo issue [aquí](https://github.com/serporion/mis-paginas-web/issues/new).
