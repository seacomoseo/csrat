
//console.log ("Cargando TestColisionFrontoLateral") ; 


function cargarDatosTestFrontoLateral4_01 (){
    console.log("Estoy en función cargarDatosTest_01");
    //const campo_001 = document.querySelector('#vel-limit-A');
    document.getElementById("croquis-datos-vel-limit-A").setAttribute("value", 225) ;
    document.getElementById("croquis-datos-peso-A").setAttribute("value", 226) ;
    document.getElementById("croquis-datos-angulo-entrada-alfa-A").setAttribute("value", 227) ;
    document.getElementById("croquis-datos-angulo-salida-Beta-A").setAttribute("value", 228) ;
    document.getElementById("croquis-datos-huella-frenada-A").setAttribute("value", 229) ;
    document.getElementById("coef-frenada-A").setAttribute("value", 0.8) ;
    //alert('Los datos de test terminaron de cargar');
}

/*
document.body.onload = function() {    
    cargarDatosTest_01()
    alert('La lib de test terminó de cargar');
  } ;
*/








// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
// = = = = = = = = = = = = = =      APRENDIENDO JAVASCRIPT      = = = = = = = = = = = = = = = = = = = = = = = = 
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
/* = = = = = = = = = = = = = = = = = =  FORMULARIO */

/* primero creo el objeto que contiene el formulario*/
// const formulario = document.querySelector('#formulario');
/* ahora creo la función que recibe el evento y actua en consecuencia */
const procesaTodo = (evento) => {
    //impido que el evento actue por defecto que es ejecutar lo que hay en <form ...
    evento.preventDefault();
    //saco los datos de los formularios
    const datos = new FormData(evento.target);
    // console.log (evento.target);
    // console.log (datos);
    //ahora creo un objeto con los valores del formulario .fromEntries usa pares de pares datos,valor:
    const datosCompletos = Object.fromEntries(datos.entries()) ;
    //
    console.log (datosCompletos) ;// nos da un objeto clásico de JS
    // si solo quiero un campo uso: correo = datos.get('email') ; //OJO en este caso es el :name y no el :id
    // console.log({correo})

    // ahora lo paso a JSON
    const enJson = JSON.stringify(datosCompletos) ;// nos da un objeto clásico de JS
    // console.log ( enJson ) ;// nos da un objeto clásico de JS

    //si quiero borrar el formulario:
    // formulario.reset();
} 


//Ahora construyo una función como la de antes pero más sucinta:
const getData = (formulario) => {
    const datos = new FormData(formulario) ;
    const datosProcesados = Object.fromEntries(datos.entries()) ;
    return datosProcesados
}


// Si ahora quiero enviar estos datos al servidor:
// https://youtu.be/Dvv2TvPD8C0
const postData = async (formulario) => {
    const nuevoAccidente = getData(formulario);
    try {
        const response = await fetch('http://localhost:8000/request', 
            {method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(nuevoAccidente),
        });
        if (response.ok){
            console.log("la respuesta es la siguiente:");
            console.log(response);
            console.log("y su JSON es:");

            //Si el servidor responde con un JSON
            //const jsonResponse = await response.json() ;
            //console.log("jsonResponse");
            //console.log(jsonResponse);
            //const {email, nombre, telefono} = jsonResponse;
            //respuesta.innerHTML = `
                //<ul>
                    //<li> ${email}</li>
                    //<li> ${nombre}</li>
                //</ul> ` 

                
        }
    } catch (error) {
        console.time();
        console.log("error");
        console.log({error});
        console.error({error});
        console.warn({error});
        console.timeEnd();
    } 
}






/*Ahora solo queda añadir la función de evento al objeto en cuestión*/

function cargarJSFrontoLateral4(){
    const formulario = document.querySelector('#formulario');
    //formulario.addEventListener('submit', procesaTodo);
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        postData(formulario);
    });
}


function cargarJSTestFrontoLateral4(){
    //cargarJSFrontoLateral4();
    cargarDatosTestFrontoLateral4_01();
}