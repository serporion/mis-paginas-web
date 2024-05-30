
// Array con las opiniones de las que disponemos, y en las que queremos guardar las que nos dejen. Dispone de cuatro campos, imagen, nombre, opinion y fecha.

let opiniones = [
 {imagen: './images/Felipe.jpg' ,nombre: 'Felipe Muñoz Segura', opinion: 'Experiencia muy satisfactoria. Proporcionan una base sólida en teoría musical y técnicas del instrumento. ', fecha:'Miercoles, 10 de Abril de 2024'}, 
 {imagen: './images/Manuel.jpg', nombre: 'Manuel Jesús González', opinion: 'Estructuran de manera progresiva, lo que nos permite desarrollar habilidades de manera sistemática, desde lo básico hasta lo avanzado, les doy un 10.', fecha:'Martes, 9 de Abril de 2024'},
 {imagen: './images/Matias.jpg', nombre: 'Matías Ferreira', opinion: 'Cuando avancé en el estudio de las lecciones de batería, pude identificar y corregir malos hábitos de técnica y errores de interpretación. Gracias al equipo!!!',  fecha:'Jueves, 11 de Abril de 2024'}
]


// Índice de la opinión actual
let indiceOpinionActual = 0;


// Función para mostrar la imagen del campo imagen del array opiniones, accediendo a la propiedad src del elemento html carrusel-opiniones0, que es una imagen.
// Le pasamos la dirección desde aquí.
function mostrarOpinionActual0() {
    
    let carrusel0 = document.getElementById("carrusel-opiniones0");
    carrusel0.src = opiniones[indiceOpinionActual].imagen;

    /*carrusel0.textContent = opiniones[indiceOpinionActual].imagen; No ERA un elemento de imagen. Tenerlo en cuenta*/
}


// Función para mostrar el nombre del campo nombre del array opiniones, accediendo a la propiedad textContent del elemento html carrusel-opiniones que es un div.
function mostrarOpinionActual1() {
    let carrusel = document.getElementById("carrusel-opiniones");
    carrusel.textContent = opiniones[indiceOpinionActual].nombre;
}


// Función para mostrar la opinion del campo nombre del array opiniones, accediendo a la propiedad textContent del elemento html carrusel-opiniones2 que es un div.
function mostrarOpinionActual2() {
    let carrusel2 = document.getElementById("carrusel-opiniones2");
    carrusel2.textContent = opiniones[indiceOpinionActual].opinion;
}

// Función para mostrar la fecha del campo nombre del array opiniones, accediendo a la propiedad textContent del elemento html carrusel-opiniones3 que es un div.
function mostrarOpinionActual3() {
    let carrusel3 = document.getElementById("carrusel-opiniones3");
    carrusel3.textContent = opiniones[indiceOpinionActual].fecha;
}


// Se muestra la primera opinión al cargar la página porque el indice (let indiceOpinionActual = 0;) es 0.
mostrarOpinionActual0();
mostrarOpinionActual1();
mostrarOpinionActual2();
mostrarOpinionActual3();


// Botón "Siguiente" para avanzar al siguiente opinión. Se coloca un escuchador (addEventListener) al elemento boton (que es una imagen en nuestro caso en el html), para que 
// al escuchar el click, realice la funcion designada, en nuestro caso volver a mostrar la opinion, pero con un nuevo indice tras modificarlo.
document.getElementById("boton-siguiente").addEventListener("click", function() {
    indiceOpinionActual++;
    if (indiceOpinionActual >= opiniones.length) {
        indiceOpinionActual = 0; // Volver al inicio si se alcanza el final
    }
    mostrarOpinionActual0();
    mostrarOpinionActual1();
    mostrarOpinionActual2();
    mostrarOpinionActual3();
});


// Botón "Siguiente" para avanzar al siguiente opinión. Se coloca un escuchador (addEventListener) al elemento boton (que es una imagen en nuestro caso en el html), para que 
// al escuchar el click, realice la funcion designada, en nuestro caso volver a mostrar la opinion, pero con un nuevo indice tras modificarlo.
document.getElementById("boton-anterior").addEventListener("click", function() {
    indiceOpinionActual--;
    if (indiceOpinionActual < 0) {
        indiceOpinionActual = opiniones.length - 1; 
    }
    mostrarOpinionActual0();
    mostrarOpinionActual1();
    mostrarOpinionActual2();
    mostrarOpinionActual3();
});



//Avance automatico de las opiniones, llamando a la función avanzarOpinion, con un intervalo de 3 segundo.
let carruselAutomatico = setInterval(avanzarOpinion, 3000);


// Funcion que avanza según el índice que tenga el array. Se puede hacer con modulo % también.
function avanzarOpinion() {
    indiceOpinionActual++;
    if (indiceOpinionActual >= opiniones.length) {
        indiceOpinionActual = 0; 
    }
    mostrarOpinionActual0();
    mostrarOpinionActual1();
    mostrarOpinionActual2();
    mostrarOpinionActual3();
}



//Detención y reanudación del avance de las opiniones según la posición del ratón.


// Obtener el elemento de opinión donde nos encontramos. Se lo pasamos a la funcion 'detenerCarrusel' o 'reanudarCarrusel'
// Declaramos la variable.
let elementoOpinion0 = document.getElementById("carrusel-opiniones");
let elementoOpinion = document.getElementById("carrusel-opiniones");
let elementoOpinion2 = document.getElementById("carrusel-opiniones2");
let elementoOpinion3 = document.getElementById("carrusel-opiniones3");


// Agregar un escuchador eventlistener, en este caso un 'mouseover', para detener el carrusel automático cuando el mouse está sobre una opinión llamando a la función detenerCarrusel.
elementoOpinion0.addEventListener("mouseover", detenerCarrusel);
elementoOpinion.addEventListener("mouseover", detenerCarrusel);
elementoOpinion2.addEventListener("mouseover", detenerCarrusel);
elementoOpinion3.addEventListener("mouseover", detenerCarrusel);


// Agregar un escuchador eventlistener, en este caso un 'mouseout', para reanudar el carrusel automático cuando el mouse está sobre una opinión llamando a la función reanudarCarrusel.
elementoOpinion0.addEventListener("mouseout", reanudarCarrusel);
elementoOpinion.addEventListener("mouseout", reanudarCarrusel);
elementoOpinion2.addEventListener("mouseout", reanudarCarrusel);
elementoOpinion3.addEventListener("mouseout", reanudarCarrusel);


// Se hace desaparecer el movimiento con intervalos de 3 segundos que establecimos.
function detenerCarrusel() {
    clearInterval(carruselAutomatico);
}

// Volvemos a generar, crear el intervalo de movimiento con intervalos de 3 segundos.
function reanudarCarrusel() {
    carruselAutomatico = setInterval(avanzarOpinion, 3000);
}



//Mostrar ocultar formulario.

//Establecemos en JavaScript, en lugar de hacerlo en el css con la propiedad display: none., el ocultamiento del formulario al cargar la página.

// Se crea una variable con el agente html a usar. 
let elemento = document.getElementById("elemento");
// Se accede a la propiedad y se le da valor "none".
elemento.style.display = "none";


//Uso del boton mostrar-ocultar

// Se crea una variable con el agente html a User.
let boton_mostrar_ocultar = document.getElementById("boton-mostrar-ocultar");

//No accedemos a ninguna propiedad como en el caso anterior, sino que le añadimos un escuchador eventlistener, que tras el evento click, llamamos a la funcion mostrarOcultar.
boton_mostrar_ocultar.addEventListener('click', mostrarOcultar);


// Función que accede a la propiedad display del elemento, y lo cambia al display correspondiente. En nuestro caso es "flex". Podría ser block, pero lo ncesitabamos flex ya que 
// no se veía bien formateado como queremos.
function mostrarOcultar() {

    // Obtener el valor de display actual
    const actual_display = elemento.style.display;
    //console.log("actual display: " + actual_display);

    //Si está oculto 
    if (actual_display === "none") {
        // Lo muestro
        elemento.style.display = "flex";

        // Cambiar el texto del boton.
        // boton_mostrar_ocultar.innerHTML = "Ocultar";
    }
    else {
        // Si no está oculto, lo oculto.
        elemento.style.display = "none";

        //Cambiar el texto del boton
        //boton_mostrar_ocultar.innerHTML = "Mostrar";
    }

}


// Boton cancelar del formulario oculta el propio formulario

// Creamos una variable con el agente html a usar.
let cancelarFormulario = document.getElementById("boton-ocultar-formulario-reset");    

// Le añadimos en este caso, sin hacer uso directo de sus propiedades, un escuchador evenlistener, que tras el evento click que hemos seleccionado, llamamos a aquella función 
// 'mostrarOcultar'.
cancelarFormulario.addEventListener('click', mostrarOcultar);


// Otra forma de hacer las la creación de variables, añadir escuchador y llamar a una función sería de esta forma, como hicimos con los botones siguiente y retroceso, por ejemplo.
// Directamente se accede al documento, document (referido al html) se recoge el id a usar, se añade el evento, y se usa una función descrita a continución. Un 3 en 1.
document.getElementById("cambiar-tema").addEventListener("click", function() {

    // Se crean las variables a continuacón de los agentes html que se modificarán.
    // Tener en cuenta la manera distinta de hacerlo, si es una clase (querySelector) o si es un id (getElementById).
    let carrusel = document.querySelector('.carrusel');
    let titulo = document.querySelector('.titulo');
    let carruselOpiniones = document.getElementById('carrusel-opiniones');

    // Si la clase tema-oscuro está presente, significa que el tema oscuro está activo
    if (carrusel.classList.contains('tema-oscuro')) {
        // Eliminar la clase tema-oscuro y titulo-oscuro
        carrusel.classList.remove('tema-oscuro');
        titulo.classList.remove('titulo-oscuro');
        // Restaurar el color de fondo y el color del texto de carrusel-opiniones a sus valores originales
        comun.style.backgroundColor = 'white';
        comun.style.color = 'black';
    } else {
        // Si no está presente, significa que el tema oscuro no está activo
        // Aplicar el tema oscuro
        carrusel.classList.add('tema-oscuro');
        titulo.classList.add('titulo-oscuro');
        comun.style.backgroundColor = '#405571'; // Cambiar el color de fondo directamente en Javascript sin usar clases. Es un id.
        comun.style.color = '#fff'; // Cambiar el color del texto directamente en Javascript sin usar clases. Es un id.
    }
});



// Guardar una opinión en el array tras recogerla de nuestro formulario.

// Creamos una variable con el agente html a usar, en este caso el formulario, con un evento 'submit'.
document.getElementById("formulario-opinion").addEventListener("submit", guardarOpinion);


 // Función para guardar una nueva opinión en nuestro array opiniones.

 function guardarOpinion(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores del formulario
    let nombre = document.getElementById("nombress").value;
    let opinion = document.getElementById("opinion").value;
    let fecha = obtenerFechaActual(); // Función para obtener la fecha actual


    // Creo la nueva opinión, añadiendo cada variable a cada campo de mi array. Elijo una imagen por defecto.
    let nuevaOpinion = {
        imagen: './images/joy.jpg', 
        nombre: nombre,
        opinion: opinion,
        fecha: fecha
    };


    // Agregar la nueva opinión al array opiniones.
    // Tener en cuenta que esto no modifica físicamente el fichero javaScript que contiene el array opiniones,
    // sino que se queda en memoria. Luego después si podríamos grabar la opinión en un medio físico si quisieramos, 
    // pero aún no sabemos.
    opiniones.push(nuevaOpinion);


    // Limpiar los campos del formulario para no tenerlos con valores, por si se le da nuevo a Guardar.
    document.getElementById("nombress").value = '';
    document.getElementById("opinion").value = '';

    // Mostrar u ocultar el formulario después de guardar la opinión.
    mostrarOcultar();


    // Mensaje que nos dice que la opinión ha sido guardada.
    alert('¡Opinión guardada!');
}


// Función para obtener la fecha actual en el formato deseado
function obtenerFechaActual() {
    const fechaActual = new Date();
    const opciones = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    return fechaActual.toLocaleDateString('es-ES', opciones);
}


