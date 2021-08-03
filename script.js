var Puntuaciones = document.getElementById("Puntuaciones");
var puntuacionbtn1 = document.getElementById("puntuacionbtn1");
var puntuacionbtn2 = document.getElementById("puntuacionbtn2");
var enviar1 = document.getElementById("enviar1");
var enviar2 = document.getElementById("enviar2");
var enviar3 = document.getElementById("enviar3");
var enviar4 = document.getElementById("enviar4");
var enviar5 = document.getElementById("enviar5");

var siguiente1 = document.getElementById("siguiente1");
var siguiente2 = document.getElementById("siguiente2");
var siguiente3 = document.getElementById("siguiente3");
var siguiente4 = document.getElementById("siguiente4");
var siguiente5 = document.getElementById("siguiente5");

var pregunta1 = document.getElementById("pregunta1");
var pregunta2 = document.getElementById("pregunta2");
var pregunta3 = document.getElementById("pregunta3");
var pregunta4 = document.getElementById("pregunta4");
var pregunta5 = document.getElementById("pregunta5");

var modalExplicacion1 = document.getElementById("modalExplicacion1");
var modalExplicacion2 = document.getElementById("modalExplicacion2");
var modalExplicacion3 = document.getElementById("modalExplicacion3");
var modalExplicacion4 = document.getElementById("modalExplicacion4");
var modalExplicacion5 = document.getElementById("modalExplicacion5");

var respuestaCorrecta1 = document.getElementById("respuesta-correcta1");
var respuestaCorrecta2 = document.getElementById("respuesta-correcta2");
var respuestaCorrecta3 = document.getElementById("respuesta-correcta3");
var respuestaCorrecta4 = document.getElementById("respuesta-correcta4");
var respuestaCorrecta5 = document.getElementById("respuesta-correcta5");

var resp1 = document.getElementById("resp1");
var resp2 = document.getElementById("resp2");
var resp3 = document.getElementById("resp3");

var resp1_2 = document.getElementById("resp1_2");
var resp2_2 = document.getElementById("resp2_2");
var resp3_2 = document.getElementById("resp3_2");
var resp4_2 = document.getElementById("resp4_2");

var resp1_3 = document.getElementById("resp1_3");
var resp2_3 = document.getElementById("resp2_3");
var resp3_3 = document.getElementById("resp3_3");
var resp4_3 = document.getElementById("resp4_3");

var resp1_4 = document.getElementById("resp1_4");
var resp2_4 = document.getElementById("resp2_4");
var resp3_4 = document.getElementById("resp3_4");

var resp1_5 = document.getElementById("resp1_5");
var resp2_5 = document.getElementById("resp2_5");
var resp3_5 = document.getElementById("resp3_5");

var resp3_5 = document.getElementById("resp3_5");

var contador = 0;
var porcentaje = 0;

var pregLibre1 = document.getElementById("pregLibre1");
var respLibre1 = document.getElementById("respLibre1");
var enviarRespLibre1 = document.getElementById("enviarRespLibre1");

var classRespLibre1 = document.getElementById("classRespLibre1");
var modalExplicacion6 = document.getElementById("modalExplicacion6");
var siguiente6 = document.getElementById("siguiente6");
var Parte2PregLibre1 = document.getElementById("Parte2PregLibre1");
var Parte2PregLibre2 = document.getElementById("Parte2PregLibre2");

var TituloRespuestasAbiertas = document.getElementById("TituloRespuestasAbiertas");
var TituloMultipleChoise = document.getElementById("TituloMultipleChoise");


var VF1resp1 = document.getElementById("VF1resp1");
var VF1resp2 = document.getElementById("VF1resp2");
var correcto = document.getElementsByClassName("correcto");
var radio = document.getElementsByClassName("radio");
var Explicacion = document.getElementsByClassName("Explicacion");
var VFSiguiente1 = document.getElementById("VFSiguiente1");
var Preguntas = document.getElementById("Preguntas");


enviar1.onclick = function() {
    modalExplicacion1.classList.remove("display-none");
    siguiente1.classList.remove("display-none");
    enviar1.disabled = true;
    resp1.disabled = true;
    resp2.disabled = true;
    resp3.disabled = true;
    respuestaCorrecta1.classList.add("respuesta-correcta");
    if (resp3.checked) {
        contador++;
    }
}
siguiente1.onclick = function() {
    pregunta2.classList.remove("display-none");
    pregunta1.classList.add("display-none");
}

enviar2.onclick = function() {
    modalExplicacion2.classList.remove("display-none");
    siguiente2.classList.remove("display-none");
    enviar2.disabled = true;
    resp1_2.disabled = true;
    resp2_2.disabled = true;
    resp3_2.disabled = true;
    resp4_2.disabled = true;
    respuestaCorrecta2.classList.add("respuesta-correcta");
    if (resp4_2.checked) {
        contador++;
    }
}
siguiente2.onclick = function() {
    pregunta3.classList.remove("display-none");
    pregunta2.classList.add("display-none");
}

enviar3.onclick = function() {
    modalExplicacion3.classList.remove("display-none");
    siguiente3.classList.remove("display-none");
    enviar3.disabled = true;
    resp1_3.disabled = true;
    resp2_3.disabled = true;
    resp3_3.disabled = true;
    resp4_3.disabled = true;
    respuestaCorrecta3.classList.add("respuesta-correcta");
    if (resp4_3.checked) {
        contador++;
    }
}
siguiente3.onclick = function() {
    pregunta4.classList.remove("display-none");
    pregunta3.classList.add("display-none");
}

enviar4.onclick = function() {
    modalExplicacion4.classList.remove("display-none");
    siguiente4.classList.remove("display-none");
    enviar4.disabled = true;
    resp1_4.disabled = true;
    resp2_4.disabled = true;
    resp3_4.disabled = true;
    respuestaCorrecta4.classList.add("respuesta-correcta");
    if (resp2_4.checked) {
        contador++;
    }
}
siguiente4.onclick = function() {
    pregunta5.classList.remove("display-none");
    pregunta4.classList.add("display-none");
}

enviar5.onclick = function() {
    modalExplicacion5.classList.remove("display-none");
    siguiente5.classList.remove("display-none");
    enviar5.disabled = true;
    resp1_5.disabled = true;
    resp2_5.disabled = true;
    resp3_5.disabled = true;
    respuestaCorrecta5.classList.add("respuesta-correcta");
    if (resp2_5.checked) {
        contador++;
    }
}
siguiente5.onclick = function() {
    Puntuaciones.classList.remove("display-none");
    pregunta5.classList.add("display-none");
    porcentaje = parseInt((contador * 100) / 5);

    const PorcentajeAcertado = document.createElement("H3");
    PorcentajeAcertado.innerHTML = "Usted acertó el " + porcentaje + " % ";

    const Puntuacion = document.querySelector(".PuntuacionTexto1");
    Puntuacion.appendChild(PorcentajeAcertado);

}
puntuacionbtn1.onclick = function() {
    Puntuaciones.classList.add("display-none");
    Parte2PregLibre1.classList.remove("display-none");
    TituloRespuestasAbiertas.classList.remove("display-none");
    TituloMultipleChoise.classList.add("display-none");

}

puntuacionbtn2.onclick = function() {
    Puntuaciones.classList.add("display-none");
    TituloRespuestasAbiertas.classList.remove("display-none");
    Preguntas.classList.remove("display-none");

}

function habilitar() {
    text1 = document.getElementById("text1").value;
    text2 = document.getElementById("text2").value;

    if (text1 == "") {
        enviarRespLibre1.disabled = true;
    } else {
        enviarRespLibre1.disabled = false;
    }

    if (text2 == "") {
        enviarRespLibre2.disabled = true;
    } else {
        enviarRespLibre2.disabled = false;
    }
}
document.getElementById("text1").addEventListener("keyup", habilitar);
document.getElementById("text2").addEventListener("keyup", habilitar);


enviarRespLibre1.onclick = function() {

    pregLibre1.classList.add("display-none");
    respLibre1.classList.remove("display-none");
    enviarRespLibre1.disabled = true;
    siguiente6.classList.remove("display-none");
    modalExplicacion6.classList.remove("display-none");
    const texto = document.createElement("H3");
    const texto2 = document.createElement("P")
    texto.innerHTML = "Respuestas correctas:";
    texto2.innerHTML = "Sangre <br> Secreciones vaginales <br> Semen <br> Leche materna";
    const classRespLibre1 = document.querySelector(".classRespLibre1");
    classRespLibre1.appendChild(texto);
    classRespLibre1.appendChild(texto2);
}
siguiente6.onclick = function() {

    siguiente6.classList.add("display-none");
    Parte2PregLibre1.classList.add("display-none");
    Parte2PregLibre2.classList.remove("display-none");


}

enviarRespLibre2.onclick = function() {

    pregLibre2.classList.add("display-none");
    respLibre2.classList.remove("display-none");
    enviarRespLibre2.disabled = true;
    siguiente7.classList.remove("display-none");
    modalExplicacion7.classList.remove("display-none");
    const texto = document.createElement("H3");
    const texto2 = document.createElement("P");
    texto.innerHTML = "Respuestas correctas:";
    texto2.innerHTML = "Sexo sin protección con una persona con VIH  <br> Uso de agujas infectadas o sin esterilizar para el consumo de drogas inyectables u otras sustancias. <br> Transmisión materno-infantil durante el embarazo, parto y la lactancia materna <br> Exposición a sangre infectada";
    const classRespLibre2 = document.querySelector(".classRespLibre2");
    classRespLibre2.appendChild(texto);
    classRespLibre2.appendChild(texto2);
}
siguiente7.onclick = function() {

    siguiente7.classList.add("display-none");
    Parte2PregLibre2.classList.add("display-none");
    Puntuaciones.classList.remove("display-none");
    puntuacionbtn1.classList.add("display-none");
    puntuacionbtn2.classList.remove("display-none");
    Puntuacion2.classList.remove("display-none");
    const RL = document.createElement("H3");
    RL.innerHTML = "¡¡¡Respuestas Libres!!!";

    const P2 = document.querySelector(".PuntuacionTexto2");
    P2.appendChild(RL);

}
VFenviar.onclick = function() {


    /* VFsiguiente.classList.remove("display-none");*/
    VFenviar.disabled = true;
    for (x = 0; x < radio.length; x++) {

        radio[x].disabled = true;
    }
    for (x = 0; x < correcto.length; x++) {
        correcto[x].classList.add("respuesta-correcta");
    }
    for (x = 0; x < Explicacion.length; x++) {
        Explicacion[x].classList.remove("display-none");
    }
    VFSiguiente1.classList.remove("display-none");

}

var VF1resp2 = document.getElementById("1VFresp2");
var VF2resp2 = document.getElementById("2VFresp2");
var VF3resp2 = document.getElementById("3VFresp2");
var VF4resp1 = document.getElementById("4VFresp1");
var VF5resp1 = document.getElementById("5VFresp1");
var VF6resp2 = document.getElementById("6VFresp2");
var VF7resp2 = document.getElementById("7VFresp2");
var VF8resp2 = document.getElementById("8VFresp2");
var VF9resp1 = document.getElementById("9VFresp1");
var VF10resp1 = document.getElementById("10VFresp1");
var VF11resp2 = document.getElementById("11VFresp2");
var VF12resp2 = document.getElementById("12VFresp2");
var VF13resp1 = document.getElementById("13VFresp1");
var VF14resp2 = document.getElementById("14VFresp2");
var VF15resp2 = document.getElementById("15VFresp2");
var VF16resp2 = document.getElementById("16VFresp2");
var VF17resp2 = document.getElementById("17VFresp2");

var Inicio = document.getElementById("Inicio");

VFSiguiente1.onclick = function() {
    Preguntas.classList.add("display-none");
    Puntuaciones.classList.remove("display-none");
    puntuacionbtn2.classList.add("display-none");
    Inicio.classList.remove("display-none");
    var porcentaje2 = 0;
    var contador2 = 0;
    if (VF1resp2.checked) {
        contador2++;
    }
    if (VF2resp2.checked) {
        contador2++;
    }
    if (VF3resp2.checked) {
        contador2++;
    }
    if (VF4resp1.checked) {
        contador2++;
    }
    if (VF5resp1.checked) {
        contador2++;
    }
    if (VF6resp2.checked) {
        contador2++;
    }
    if (VF7resp2.checked) {
        contador2++;
    }
    if (VF8resp2.checked) {
        contador2++;
    }
    if (VF9resp1.checked) {
        contador2++;
    }
    if (VF10resp1.checked) {
        contador2++;
    }
    if (VF11resp2.checked) {
        contador2++;
    }
    if (VF12resp2.checked) {
        contador2++;
    }
    if (VF13resp1.checked) {
        contador2++;
    }
    if (VF14resp2.checked) {
        contador2++;
    }
    if (VF15resp2.checked) {
        contador2++;
    }
    if (VF16resp2.checked) {
        contador2++;
    }
    if (VF17resp2.checked) {
        contador2++;
    }
    porcentaje2 = parseInt((contador2 * 100) / 17);


    Puntuacion3.classList.remove("display-none");
    const VR = document.createElement("H3");
    VR.innerHTML = "Usted acertó el " + porcentaje2 + " % ";

    const P3 = document.querySelector(".PuntuacionTexto3");
    P3.appendChild(VR);
}