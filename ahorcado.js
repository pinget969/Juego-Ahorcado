//PRIMERA PANTALLA

function btnRegla() {
    swal("¡Tienes 9 intentos fallidos! <br> ¡Solo se aceptan letras Mayúsculas!<br>No es posible ingresar Espacios vacios.<br>No es posible ingresar Numero.<br>No es posible ingresar Signos.");
}

function btnRegla() {
    swal({
        title: "¡Reglas!",
        text: "¡Tienes 9 intentos fallidos! \n Solo se aceptan letras Mayúsculas \n No es posible ingresar Espacios vacios. \n No es posible ingresar Numero. \n No es posible ingresar Signos.",
        icon: "warning",
        button: "ENTENDIDO!",
    });
}

function newWord() {
    validarPalabra();
    adionarPalabra();
  
}

function justStart() {
    location.href = "principal.html";
}

// Agregar palabra nueva
function validarPalabra() {
    var palabraAgregada = document.getElementById("inputPalabraExtra").value;
    if ((/^[A-Z_ ]+$/.test(palabraAgregada) && palabraAgregada.length > 2) && !palabraAgregada.includes(" ")) {
        //adionarPalabra();
        console.log(palabraAgregada);
        justStart();
    }else{
        swal({
            title: "Palabra NO agregada!",
            text: "Ingresa una palabra MAYUSCULA!",
            icon: "error",
            button: "Entendido!",
          });
    }
}
 
//Agregando palabra desde otro html.
function adionarPalabra() {
    const texto = document.getElementById("inputPalabraExtra").value;
    localStorage.setItem("nombre", texto);
    const verLocal = localStorage.getItem("nombre");
    localStorage.setItem("nombre", captura);
    location.href = "principal.html";
}
const verLocal = localStorage.getItem("nombre");
///// FIN Agregando palabra desde otro html.

var input = document.getElementById("letraIngresada");
var inpuText = document.getElementById("input-text");
input.addEventListener("keyup", textModified);


//LISTA DE PALABRAS DISPONIBLES 
var ListaPalabras = ["CABALLO", "SPARROW", "PERLA", "ALCACHOFA", "BOOTCAMP"]; // Dificultad media
 

if(verLocal !=null && (/^[A-Z_ ]+$/.test(verLocal) && verLocal.length > 2) && !verLocal.includes(" ")){
    ListaPalabras.push(verLocal);
}

// console.log(ListaPalabras);
var numero = Math.floor(Math.random() * ListaPalabras.length);
//console.log(numero);
//console.log(ListaPalabras[numero]);

var uno = ""
var nombre = ListaPalabras[numero]
let lista = []

// Primer Linea de guiones
function guion() {
    for (var i = 0; i < nombre.length; i++) {
        lista.push("_");

    }
    //console.log(lista);
    var lista1 = lista.join(" ");
    document.getElementById("guion2").innerHTML = lista1;

}
guion();

// Modificando guiones
LetraEnGuion();

// REVISANDO LETRA EN LISTA
let LetrasUsuario = [];
var contador = 0
function textModified() {
    var inpuText = document.getElementById("input-text");
    var uno = inpuText.innerText = input.value;
    var dos = inpuText.innerText = "Último ingreso: " + input.value;


    // Validar Letra Insertada
    var LetraInsertadaValida = validarLetraInsertada(nombre, uno);
    if (/^[A-Z_ ]{1}$/.test(uno) && validarLetraInsertada(nombre, uno) && !validarRepetidas(LetrasUsuario, uno) && !finJuego()) {
        contador += 1
        for (var i = 0; i < nombre.length; i++) {
            if (uno == nombre[i]) {
                miArray.splice(i, 0, uno);
 //               console.log(miArray);
                LetraEnGuion(uno);
            }
        }
        limpiar();
        //Gano
        palabraAcertada(lista);
    }

    //validar repetidas

    var letraValida = validarRepetidas(LetrasUsuario, uno);
    if (/^[A-Z_ ]{1}$/.test(uno) && !validarRepetidas(LetrasUsuario, uno) && !finJuego()) {
        LetrasUsuario.push(uno);
        //imagenes funtion imagenes()

        //
        intentosFallados();
        palabraFallada(LetrasUsuario);
       // console.log(LetrasUsuario);
        cambioImagen();
        limpiar();
        return false;
    } else {
        limpiar();
    };
}
// Cambio de imagen ahorcado

function cambioImagen() {
    limpiar();
 //   console.log(contador);
    if ((LetrasUsuario.length - contador) == 0) {
        element = "img/ahorcado1.png";
    }
    if ((LetrasUsuario.length - contador) == 1) {
        element = "img/ahorcado2.png";
    }
    if ((LetrasUsuario.length - contador) == 2) {
        element = "img/ahorcado3.png";
    }
    if ((LetrasUsuario.length - contador) == 3) {
        element = "img/ahorcado4.png";
    }
    if ((LetrasUsuario.length - contador) == 4) {
        element = "img/ahorcado5.png";
    }
    if ((LetrasUsuario.length - contador) == 5) {
        element = "img/ahorcado6.png";
    }
    if ((LetrasUsuario.length - contador) == 6) {
        element = "img/ahorcado7.png";
    }
    if ((LetrasUsuario.length - contador) == 7) {
        element = "img/ahorcado8.png";
    }
    if ((LetrasUsuario.length - contador) == 8) {
        element = "img/ahorcado9a.png";
    }
    if ((LetrasUsuario.length - contador) == 9) {
        element = "img/jackperdio1.png";
    }
    document.getElementById("horca").src = element;


}

// Nueva palabra
function nuevoJuego() {
    location.reload();
}
// Rendirse
function salir() {
    location.href = "index.html";
}
// Validar repetidas
function validarRepetidas(LetrasUsuario, uno) {
    return LetrasUsuario.includes(uno);
}
// Validar Letra insertada
function validarLetraInsertada(nombre, uno) {
    return nombre.includes(uno);
}

// Limpiar input
function limpiar() {
    document.getElementsByClassName("limpiarinput1")[0].value = "";

}
// Letra falladas
function intentosFallados() {
    document.getElementById("LetrasFalladas").innerHTML = "Utilizadas : " + LetrasUsuario;
}

var miArray = [];

// reemplazo guion
function LetraEnGuion(uno) {

    for (var i = 0; i < nombre.length; i++) {
        if (uno == nombre[i]) {
            lista.splice(i, 1, uno);
           // console.log(lista);
            var lista1 = lista.join(" ");
            document.getElementById("guion2").innerHTML = lista1;
        }
    }
}

//Palabra Acertada
function palabraAcertada(lista) {
    if (nombre == lista.join("")) {
        const message = document.querySelector("#message");
        message.innerHTML = "Ganaste, ¡Felicidades!";
        element = "img/jackGana.png";
        document.getElementById("horca").src = element;
        return true;
    }
}

// Palabra Fallada
function palabraFallada(LetrasUsuario) {
    if ((LetrasUsuario.length - contador) > 8) {
        const message = document.querySelector("#message");
        message.innerHTML = "Has perdido! <br> La palabra era " + nombre;
        return true;
    }
}
//Fin juego
function finJuego() {
    if (palabraFallada(LetrasUsuario) || palabraAcertada(lista)) {
        return true
    }
}




