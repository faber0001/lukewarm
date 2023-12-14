// Variables
var x = 0;
var c0 = 0, c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0, c7 = 0, c8 = 0, c9 = 0;
var c10 = 0, c11 = 0, c12 = 0, c13 = 0, c14 = 0, c15 = 0, c16 = 0, c17 = 0, c18 = 0, c19 = 0;
var c20 = 0, c21 = 0, c22 = 0, c23 = 0, c24 = 0, c25 = 0, c26 = 0, c27 = 0, c28 = 0, c29 = 0;
var c30 = 0, c31 = 0, c32 = 0, c33 = 0, c34 = 0, c35 = 0, c36 = 0, c37 = 0;
var general=0;
// Agrega más contadores según sea necesario...

// Función principal
function procesarDatos() {
    var datos = obtenerDatos();
    mostrarMensaje("Datos a consultar: " + datos);

    var i = 0;

    function procesarSiguiente() {
        if (i < datos) {
            x = obtenerDatoValidado();
            mostrarMensaje("Valor de x: " + x);
            procesarContador();
            i++;

            // Introducir un pequeño retraso antes de la siguiente iteración
            setTimeout(procesarSiguiente, 10);
        }
    }

    // Iniciar el procesamiento
    procesarSiguiente();
}

// Función para obtener datos
function obtenerDatos() {
    while (true) {
        var datos = prompt("Ingresa un número de datos:");
        datos = parseInt(datos);

        if (Number.isInteger(datos) && datos > 0) {
            return datos;
        } else {
            alert("Número no válido. Vuelve a intentarlo.");
        }
    }
}

// Función para obtener datos validados
function obtenerDatoValidado() {
    while (true) {
        x = prompt("Ingresa un dato");
        x = parseInt(x);

        if (x >= 0 && x <= 37 && !isNaN(x)) {
            return x;
        } else {
            alert("El número no es válido. Ingresa datos entre 0 y 37");
        }
    }
}

// Función para procesar el contador y mostrarlo en el DOM
function procesarContador() {
    general++;
    switch (x) {
    
        case 0:
            c0++;
            mostrarContador("0", c0);
            break;
        case 1:
            c1++;
            mostrarContador("1", c1);
            break;
        case 2:
            c2++;
            mostrarContador("2", c2);
            break;
        case 3:
            c3++;
            mostrarContador("3", c3);
            break;
        case 4:
            c4++;
            mostrarContador("4", c4); 
            break;
        case 5:
            c5++;
            mostrarContador("5", c5);
            break;
        case 6:
            c6++;
            mostrarContador("6", c6);
            break;
        case 7:
            c7++;
            mostrarContador("7", c7);
            break;
        case 8:
            c8++;
            mostrarContador("8", c8);
            break;
         case 9:
            c9++;
            mostrarContador("9", c9);
            break;
         case 10:
            c10++;
            mostrarContador("10", c10);
            break;
         case 11:
            c11++;
            mostrarContador("11", c11);
            break;
        case 12:
            c12++;
            mostrarContador("12", c12);
            break;
        case 13:
            c13++;
            mostrarContador("13", c13);
            break;
        case 14:
            c14++;
            mostrarContador("14", c14); 
            break;
        case 15:
            c15++;
            mostrarContador("15", c15);
            break;
        case 16:
            c16++;
            mostrarContador("16", c16);
            break;
        case 17:
            c17++;
            mostrarContador("17", c17);
            break;
        case 18:
            c18++;
            mostrarContador("18", c18);
            break;
        case 19:
            c19++;
            mostrarContador("19", c19);
            break;
        case 20:
                c20++;
                mostrarContador("20", c20);
                break;
        case 21:
            c21++;
            mostrarContador("21", c21);
            break;
        case 22:
            c22++;
            mostrarContador("22", c22);
            break;
        case 23:
            c23++;
            mostrarContador("23", c23);
            break;
        case 24:
            c24++;
            mostrarContador("24", c24); 
            break;
        case 25:
            c25++;
            mostrarContador("25", c25);
            break;
        case 26:
            c6++;
            mostrarContador("26", c26);
            break;
        case 27:
            c27++;
            mostrarContador("27", c27);
            break;
        case 28:
            c28++;
            mostrarContador("8", c8);
            break;
        case 9:
            c9++;
            mostrarContador("29", c29);
            break;
        case 30:
            c30++;
            mostrarContador("30", c30);
            break;
        case 31:
            c31++;
            mostrarContador("31", c31);
            break;
        case 32:
            c32++;
            mostrarContador("32", c32);
            break;
        case 33:
            c33++;
            mostrarContador("33", c33);
            break;
        case 34:
            c34++;
            mostrarContador("34", c34); 
            break;
        case 35:
            c35++;
            mostrarContador("35", c35);
            break;
        case 36:
            c36++;
            mostrarContador("36", c36);
            break;
        case 37:
            c37++;
            mostrarContador("37", c37);
            break;
        // Agrega más casos según tus necesidades
    }
}

// Función para mostrar un mensaje en el DOM
function mostrarMensaje(mensaje) {
    document.getElementById("development").innerHTML = mensaje;
}

// Función para mostrar el contador en el DOM
function mostrarContador(id, contador) {
    if (contador > 2) {
        var elemento = document.getElementById(id);
        elemento.innerHTML = id + " - " + "- "+ general;
        if (contador >= 4) {
            elemento.style.color = "black"; // Cambiar a color negro, por ejemplo
        }
    } 
}
function cerrarVentana() {
    document.getElementById("custom-input-container").style.display = "none";
  }

// Llamar a la función principal
procesarDatos();




