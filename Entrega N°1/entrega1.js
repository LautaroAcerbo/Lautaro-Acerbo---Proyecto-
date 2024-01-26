//Calcular el valor de tu propiedad segun tu zona de residencia: La gente pone la zona y luego el barrio, cantidad de ambientes, metros de la propiedad, y le tira un aproximado de cuanto sale su propiedad

let nombreUsuario = prompt("Ingrese su nombre de usuario por favor")

if(nombreUsuario){
    alert("Bienvenido " + nombreUsuario + " " + "calculemos el precio de tu propiedad. ")
} 

let esCorrecto = false

let metros = Number(prompt("Ingrese los metros cuadrados totales de su propiedad."))

function zona() {    
    let barrios = prompt("Escriba: ¿En que zona se encuentra? \n CABA \n Zona Norte \n Zona Sur \n Zona Oeste").toLowerCase()
    
    if( barrios === "caba"){
        esCorrecto = true
        let resultado  = (metros * 3000)
        alert(nombreUsuario + " El valor de tu propiedad es de USD" + resultado )
    } else if (barrios === "zona norte"){
        esCorrecto = true
        let resultado = (metros * 2500)
        alert(nombreUsuario + " El valor de tu propiedad es de USD" + resultado )
    } else if (barrios ==="zona sur"){
        esCorrecto = true
        let resultado = (metros * 2000)
        alert(nombreUsuario + " El valor de tu propiedad es de USD" + resultado )
    } else if (barrios ==="zona oeste"){
        esCorrecto = true
        let resultado = (metros * 1500)
        alert(nombreUsuario + " El valor de tu propiedad es de USD" + resultado )
    } else {
        while (esCorrecto === false) {
            alert ("seleccione una respuesta correcta")
            zona()
        }
    }
}

if (!isNaN(metros)) {
    zona();
  } else {
    while(isNaN(metros)){
       alert("ingrese de nuevo los metros de su propiedad")
       metros = Number(prompt("Ingrese los metros cuadrados totales de su propiedad."))
    }
    zona();
} 

// --------------------------------------------------------------------------