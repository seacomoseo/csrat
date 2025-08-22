//import { formularioR } from "./milibjs_2.js";


function ms_a_kmh (metros_segundo) {
    return metros_segundo * 3.6
}

function mm_a_m (milimetros) {
    return milimetros / 1000
}

function carga_ms_a_kmh (id) {
    const celda_origen = document.getElementById(id) ;
    const celda_destino = document.getElementById(id + "-kmh") ;
    celda_origen.addEventListener("keyup", (event) => {
        setTimeout(() => {
                            let texto = celda_origen.value ;
                            let converso = ms_a_kmh(texto);
                            celda_destino.textContent = converso;
                         }, 200);
    })
    return celda_destino
}

function carga_mm (id) {
    const celda_origen = document.getElementById(id) ;
    const celda_destino = document.getElementById(id + "-metros") ;
    celda_origen.addEventListener("keyup", (event) => {
        setTimeout(() => {
                            let texto = celda_origen.value ;
                            let converso = mm_a_m(texto);
                            celda_destino.textContent = converso;
                         }, 200);
    })
    return celda_destino
}

function resultado_voladizo_delantero(long_total , batalla , voladizo_trasero){
    let voladizo_delantero;
    voladizo_delantero = long_total - (batalla + voladizo_trasero);
    return voladizo_delantero 
}
// resultado_voladizo_delantero(4100 , 2500 , 688) ; 
// => 912
/*
    const celda_voladizo_trasero = document.getElementById("voladizo-trasero") ;
    let cifra_voladizo_trasero = + celda_voladizo_trasero.value ;
    let diferencia = cifra_batalla + cifra_voladizo_trasero;
    celda_voladizo_delantero.textContent = cifra_longitud_total - diferencia;
    console.log ()

 document.getElementById("voladizo-delanero").textContent  = document.getElementById("voladizo-trasero").value - ( document.getElementById("voladizo-trasero").value + document.getElementById("batalla").value )
*/

function voladizo_delantero(){
    const celda_longitud_total = document.getElementById("longitud-total") ;
    const celda_batalla = document.getElementById("batalla") ;
    const celda_voladizo_trasero = document.getElementById("voladizo-trasero") ;
    const celda_voladizo_delantero = document.getElementById("voladizo-delantero") ;

    celda_batalla.addEventListener("keyup", (event) => {
        setTimeout(() => {
                            //let cifra_batalla = +celda_batalla.value ;
                            //let cifra_voladizo_trasero =  +celda_voladizo_trasero.value ;
                            //let diferencia = cifra_batalla + cifra_voladizo_trasero;
                            //let cifra_longitud_total = +celda_longitud_total.value ;
                            let vol_delantero = resultado_voladizo_delantero ( 
                               +celda_longitud_total.value,
                               +celda_batalla.value ,
                               +celda_voladizo_trasero.value)
                            celda_voladizo_delantero.textContent = vol_delantero
                         }, 100); })

    celda_voladizo_trasero.addEventListener("keyup", (event) => {
        setTimeout(() => {
                            let cifra_batalla = +celda_batalla.value ;
                            let cifra_voladizo_trasero = + celda_voladizo_trasero.value ;
                            let diferencia = cifra_batalla + cifra_voladizo_trasero;
                            let cifra_longitud_total = +celda_longitud_total.value ;
                            celda_voladizo_delantero.textContent = cifra_longitud_total - diferencia;
                         }, 100); })

    celda_longitud_total.addEventListener("keyup", (event) => {
        setTimeout(() => {
                            let cifra_batalla = +celda_batalla.value ;
                            let cifra_voladizo_trasero = + celda_voladizo_trasero.value ;
                            let diferencia = cifra_batalla + cifra_voladizo_trasero;
                            let cifra_longitud_total = +celda_longitud_total.value ;
                            celda_voladizo_delantero.textContent = cifra_longitud_total - diferencia;
                         }, 100); })
    return true 
}


function set_test_voladizo_delantero() {
    document.getElementById("tipo-medicion").setAttribute("value", "real") ;
    console.log ("document.getElementById(\"tipo-medicion\").textContent ") ;
    console.log ( document.getElementById("tipo-medicion").textContent[1] ) ;
    document.getElementById("longitud-total").setAttribute("value", 4238) ;
    document.getElementById("tara").setAttribute("value", 1370) ;
    document.getElementById("pesoocupantes").setAttribute("value", 225) ;
    document.getElementById("anchura").setAttribute("value", 1765) ;
    document.getElementById("batalla").setAttribute("value", 2578)  ;
    document.getElementById("voladizo-trasero").setAttribute("value", 688) ;
    //document.getElementById("voladizo-delantero").textContent = 1 ;
    document.getElementById("cprima1").setAttribute("value", 470) ;
    document.getElementById("cprima2").setAttribute("value", 620) ;
    document.getElementById("cprima3").setAttribute("value", 810) ;
    document.getElementById("cprima4").setAttribute("value", 820) ;
    document.getElementById("cprima5").setAttribute("value", 610) ;
    document.getElementById("cprima6").setAttribute("value", 460) ;
    document.getElementById("cprimamax").setAttribute("value", 970) ;
    document.getElementById("c1").setAttribute("value", 470) ;
    document.getElementById("c2").setAttribute("value", 620) ;
    document.getElementById("c3").setAttribute("value", 810) ;
    document.getElementById("c4").setAttribute("value", 470) ;
    document.getElementById("c5").setAttribute("value", 620) ;
    document.getElementById("c6").setAttribute("value", 810) ;
    document.getElementById("cmax").setAttribute("value", 810) ;
    document.getElementById("distancia").setAttribute("value", 250) ;
    return "carga terminada"
} 
// => 912
function comprobar_test_voladizo_delantero() {
    //console.log ( document.getElementById("voladizo-delantero").textContent ? "voladizo-delantero"  ) ;
    console.log ( document.getElementById("medida-referencia").textContent == 588 ? " OK " : " medida-referencia mal ") ;
    console.log ( document.getElementById("voladizo-delantero").textContent == 912 ? " OK " : " voladizo-delantero mal ") ;
    console.log ( document.getElementById("c1_resta").textContent == -118 ? " OK " : " c1_resta mal ") ;
    console.log ( document.getElementById("c2_resta").textContent == 32 ? " OK " : " c2_resta mal ") ;
    console.log ( document.getElementById("c3_resta").textContent == 222 ? " OK " : " c3_resta mal ") ;
    console.log ( document.getElementById("c4_resta").textContent == 232 ? " OK " : " c4_resta mal ") ;
    console.log ( document.getElementById("c5_resta").textContent == 22 ? " OK " : " c5_resta mal ") ;
    console.log ( document.getElementById("c6_resta").textContent == -128 ? " OK " : " c6_resta mal ") ;
    console.log ( document.getElementById("cmax_resta").textContent == 382 ? " OK " : " cmax_resta mal ") ;
    return " mira arriba"
} 
// => 912

function la_x(){
    const medida_referencia = 4000;
    const celda_longitud_total = document.getElementById("longitud-total") ;
    const celda_batalla = document.getElementById("batalla") ;
    const celda_voladizo_trasero = document.getElementById("voladizo-trasero") ;
    const celda_x = document.getElementById("medida-referencia") ;

    celda_batalla.addEventListener("keyup", (event) => {
        setTimeout(() => {
                            let batalla = +celda_batalla.value ;
                            let voladizo_trasero =  +celda_voladizo_trasero.value ;
                            let voladizo_delantero = +celda_longitud_total.value - (batalla + voladizo_trasero)
                            let diferencia = batalla  + voladizo_delantero;
                            celda_x.textContent = medida_referencia - diferencia;
                         }, 150); })
    celda_voladizo_trasero.addEventListener("keyup", (event) => {
        setTimeout(() => {
                            let batalla = +celda_batalla.value ;
                            let voladizo_trasero =  +celda_voladizo_trasero.value ;
                            let voladizo_delantero = +celda_longitud_total.value - (batalla + voladizo_trasero)
                            let diferencia = batalla  + voladizo_delantero;
                            celda_x.textContent = medida_referencia - diferencia;
                         }, 150); })
    celda_longitud_total.addEventListener("keyup", (event) => {
        setTimeout(() => {
                            let batalla = +celda_batalla.value ;
                            let voladizo_trasero =  +celda_voladizo_trasero.value ;
                            let voladizo_delantero = +celda_longitud_total.value - (batalla + voladizo_trasero)
                            let diferencia = batalla  + voladizo_delantero;
                            celda_x.textContent = medida_referencia - diferencia;
                         }, 150); })

/*
    celda_longitud_total.addEventListener("keyup", (event) => {
        setTimeout(() => {
                          }, 100); })*/
    return true 
}


function c_es_a_menos_b (id_c , id_a , id_b) {
    const celda_c = document.getElementById(id_c) ;
    const celda_a = document.getElementById(id_a) ;
    const celda_b = document.getElementById(id_b) ;

    celda_a.addEventListener("keyup", (event) => {
        setTimeout(() => {
                            let cifra_a = +celda_a.value ;
                            let cifra_b = +celda_b.value ;
                            let diferencia = cifra_a - cifra_b;
                            celda_c.textContent = diferencia;
                         }, 200);
    })
    celda_b.addEventListener("keyup", (event) => {
        setTimeout(() => {
                            let cifra_a =  +celda_a.value ;
                            let cifra_b = +celda_b.value ;
                            let diferencia = cifra_a - cifra_b;
                            celda_c.textContent = diferencia;
                         }, 200);
    })
}


function c_formula (c_prima , referencia , batalla, long_total , voladizo_trasero) {
   //console.log ("arguments: " );
   //console.log ( arguments);
   //console.log (typeof arguments[2]);
   let voladizo_delantero = long_total - (batalla + voladizo_trasero );
   //console.log ("voladizo_delantero: " + voladizo_delantero);
   let x = referencia - (batalla + voladizo_delantero);
   //console.log ("x: " + x);
   let c = c_prima - x ;
   return c
}
// c_formula (1, 2, 3, 4, 5) ;
//=> -2 



function c_es_prima_menos_x (id_c , id_prima , referencia, id_batalla, id_long_total , id_voladizo_trasero) {
    const celda_c = document.getElementById(id_c) ;
    const celda_prima = document.getElementById(id_prima) ;
    const celda_batalla = document.getElementById(id_batalla) ;
    const celda_long_total = document.getElementById(id_long_total) ;
    const celda_voladizo_trasero = document.getElementById(id_voladizo_trasero) ;

    celda_prima.addEventListener("keyup", (event) => {
        setTimeout(() => {
                            let c_prima =  + celda_prima.value ;
                            let batalla =  +celda_batalla.value ;
                            let long_total =  Number(celda_long_total.value) ;
                            let voladizo_trasero = parseInt(celda_voladizo_trasero.value) ;
                            celda_c.textContent = c_formula(c_prima , referencia , batalla, long_total , voladizo_trasero);
                         }, 150);
    })

    celda_batalla.addEventListener("keyup", (event) => {
        setTimeout(() => {
                            let c_prima =  + celda_prima.value ;
                            let batalla =  +celda_batalla.value ;
                            let long_total =  Number(celda_long_total.value) ;
                            let voladizo_trasero = parseInt(celda_voladizo_trasero.value) ;
                            celda_c.textContent = c_formula(c_prima , referencia , batalla, long_total , voladizo_trasero);
                         }, 150);
    })

    celda_long_total.addEventListener("keyup", (event) => {
        setTimeout(() => {
                            let c_prima =  + celda_prima.value ;
                            let batalla =  +celda_batalla.value ;
                            let long_total =  Number(celda_long_total.value) ;
                            let voladizo_trasero = parseInt(celda_voladizo_trasero.value) ;
                            celda_c.textContent = c_formula(c_prima , referencia , batalla, long_total , voladizo_trasero);
                         }, 150);
    })

    celda_voladizo_trasero.addEventListener("keyup", (event) => {
        setTimeout(() => {
                            let c_prima =  + celda_prima.value ;
                            let batalla =  +celda_batalla.value ;
                            let long_total =  Number(celda_long_total.value) ;
                            let voladizo_trasero = parseInt(celda_voladizo_trasero.value) ;
                            celda_c.textContent = c_formula(c_prima , referencia , batalla, long_total , voladizo_trasero);
                         }, 150);
    })
}

function inyecto (){
    const selector = document.getElementById("tipo-medicion");
    const form_real = document.getElementById("entrada-datos-real");
    const form_medicion = document.getElementById("entrada-datos-medicion");
    selector.addEventListener("change", (evnt) => {
        const elegido = evnt.target.value ;
        console.log(elegido); 
        console.log(selector); 
        console.log(elegido)
    if (elegido == "real" )
        { console.log ("ahora es real entrada-datos-real:")
         console.log (form_real);
         form_real.style.visibility =  "hidden";
         form_medicion.style.visibility =  "visible";
        }
    if (elegido == "medicion") {
         console.log ("ahora es medición entrada-datos-medicion")
         console.log (form_medicion);
         form_real.style.visibility = "visible";
         form_medicion.style.visibility = "hidden";

        }
    if (elegido == "") {
         console.log ("ahora es medición entrada-datos-medicion")
         console.log (form_medicion);
         form_real.style.visibility = "hidden";
         form_medicion.style.visibility = "hidden";

        }
    })
}

function cargaTodos() {
    var time = new Date();
    console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
    console.log("cargando ...");
    inyecto();
    carga_mm("longitud-total");
    carga_mm("anchura");
    carga_mm("voladizo-trasero");
    carga_mm("batalla");
    carga_mm("voladizo-delantero");
    carga_mm("medida-referencia");
    carga_mm("batalla");
    carga_mm("anchura");
    carga_mm("cprima1");
    carga_mm("cprima2");
    carga_mm("cprima3");
    carga_mm("cprima4");
    carga_mm("cprima5");
    carga_mm("cprima6");
    carga_mm("cprimamax");
    carga_mm("c1");
    carga_mm("c2");
    carga_mm("c3");
    carga_mm("c4");
    carga_mm("c5");
    carga_mm("c6");
    carga_mm("cmax");
    carga_mm("distancia");
    voladizo_delantero();
    la_x();
    c_es_prima_menos_x("c1_resta" , "cprima1" , 4000, "batalla", "longitud-total" , "voladizo-trasero"); 
    c_es_prima_menos_x("c2_resta" , "cprima2" , 4000, "batalla", "longitud-total" , "voladizo-trasero"); 
    c_es_prima_menos_x("c3_resta" , "cprima3" , 4000, "batalla", "longitud-total" , "voladizo-trasero"); 
    c_es_prima_menos_x("c4_resta" , "cprima4" , 4000, "batalla", "longitud-total" , "voladizo-trasero"); 
    c_es_prima_menos_x("c5_resta" , "cprima5" , 4000, "batalla", "longitud-total" , "voladizo-trasero"); 
    c_es_prima_menos_x("c6_resta" , "cprima6" , 4000, "batalla", "longitud-total" , "voladizo-trasero"); 
    c_es_prima_menos_x("cmax_resta" , "cprimamax" , 4000, "batalla", "longitud-total" , "voladizo-trasero"); 
    console.log("cargados Todos");
    // set_test_voladizo_delantero() ;
}

// <<<<<< tengo que meter esto en el HTML 
//        justo antes de cerrar la etiqueta body
/*
<script> 
    document.body.onload = function() {    
    cargaTodos() ;
    alert('La página terminó de cargar');
  }
</script>
*/
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
// = = = = = = = = = = = = = =      APRENDIENDO JAVASCRIPT      = = = = = = = = = = = = = = = = = = = = = = = = 
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
// comentario en línea
/* comentario en varias líneas
Cada línea acaba en ; excepto los bloques o definición de función
Declaración de variables  var, let , const
var x = 1 ;   scope global. Mejor no usar
let y = 2 ;   scope del bloque. 
const z = 3 ; creo que scope de bloque pero no modificable.

fuentes: 
* [arxanet](https://axarnet.es/blog/insertar-javascript-html#cómo-insertar-javascript-en-html) es en español y trata el **Lazy Loading**, **Debounce** y **Throttle** 
* [hostinger.mx](https://www.hostinger.mx/tutoriales/insertar-javascript-en-html/#:~:text=JavaScript%20con%20HTML.-,Agregar%20JavaScript%20directamente%20a%20un%20archivo%20HTML,el%20código%20JavaScript%20que%20escribas.)en español pero los métodos .text , .css y .bind no funcionan.
* [oficial Mozilla](https://developer.mozilla.org/es/docs/Web/JavaScript)

*/
let saludo = "¡Hola Mundo!"
function saluda() {
	alert(saludo)
}

// saluda() ;

//var time = new Date();
//console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());


function cambio_todo_html () {
    console.log( "Los Strings son " +  " concatenables con +");
    document.body.innerHTML = "<h1>Time right now is:  " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
}

   
function localizo_id_metodo_1 () {
    console.log( " cambio el id validate usando variables de html ");
    console.log( " o sea con $(\"#\") no sé si se puede con $(\".\")  ");
    console.log( " es decir con un id (#) o con un class (.)");

    const localizado_metodo1 = $("#miidentificador");
    const localizado_metodo2 = $("#miidentificador");

    if (localizado_metodo1 === localizado_metodo2)
        console.log( "Todos los métodos localizan el misma elemento");
    return localizado_metodo1 

    //localizado_metodo1.css("color", "blue")
    /* equivaldría a la sencilla
    const localizado = $("#validate").bind("click", validate);
    */
}

function cambio_codigo_html () {
    console.log( "se usa la variable .innerHTML para cambiar"  );
    console.log( "OJO es una variable así que el cambio es por una igualdad"  );
    var time = new Date();
    document.body.innerHTML = "<h1>Time right now is:  " + time.getHours() + ":" + time.getMinutes();
}



function cambio_att () {
    console.log( "Los Strings son " +  " concatenables con +"  );
}


function add_event_click_id_metodo_1 () {
    console.log( " cambio el id validate usando variables de html ");
    console.log( " o sea con $(\"#\") no sé si se puede con $(\".\")  ");
    console.log( " es decir con un id (#) o con un class (.)");
    $("#validate").bind("click", validate);
}


/*      .        EJEMPLO INTERESANTE
  algo más complejo. Ejemplo validar una dirección de correo electrónico
  fuente https://www.hostinger.mx/tutoriales/insertar-javascript-en-html/#:~:text=JavaScript%20con%20HTML.-,Agregar%20JavaScript%20directamente%20a%20un%20archivo%20HTML,el%20código%20JavaScript%20que%20escribas.
  No me funciona porque creo que la sintaxis de $("...") solo funciona para el REPL (console del navegador) o ni eso 
  Solo si cargas tal o cual lib.
*/
// primero creo un regex y lo filtro aceptándo el texto o rechazándolo
function validateEmailAddress(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    }


// luego busco las etiquetas con el id que tiene la dirección a validar y el receptor del cambio y escribo la respuesta.
function validate() {
  $("#result").text("");
  var emailaddress = $("#email").val();
  if (validateEmailAddress(emailaddress)) {
    $("#result").text(emailaddress + " is valid :)");
    $("#result").css("color", "green");
  } else {
    $("#result").text(emailaddress + " is not correct, please retry:(");
    $("#result").css("color", "red");
  }
  return false;
}

// inyecto en la etiqueta con id "validate" el evento "click" y la función que se ejecutará ("validate")
//$("#validate").bind("click", validate);

// funcionará con el código de html:
/*
<form>
<p>Enter an email address:</p>
<input id='email'>
<button type='submit' id='validate'>Validate!</button>
</form>
<h2 id='result'></h2>
*/