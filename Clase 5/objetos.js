// Clase 5 : Objetos ----> Es un conjunto o grupo de datos donde se pueden agrupar variables que esten sueltas. Tambien se pueden anidar y pueden contener datos booleanos

let nombre = "Homero";
let edad = 39;
let peso = 69;
let calle = "Av. Siempre viva 742";

// Estas variables se puede agrupar en...

const personaje1 = {
    nombre: "Homero",
    edad: 39,
    peso: 69,
    calle: "Av. Siempre viva 742",
};

const personaje2 = {
    nombre: "Marge",
    apellido: "Bouvier",
    edad: 38,
    esSoltera: false,
    hijos: {
        primero: "Bart",
        segundo: "Lisa",
        tercero: "Magui",
    },
};

console.log(personaje1);

console.log(personaje2);



// Acceder a propiedades (atributos, caracteristicas) de los objetos, con dos notaciones : punto y corchete

// alert("El peso del personaje es " + personaje1.peso)
// alert("Su nombre es " + personaje2.nombre + ", su edad es " + personaje2.edad + " y su primer hijo es " + personaje2.hijos.primero)
// alert("El nombre del personaje es " + personaje1["nombre"] + " y su peso es " + personaje1["peso"] + " y su hijo es " + personaje2["hijos"]["primero"])



// Modificar el valor de una propiedad de un objeto:
// console.log(personaje1.peso);
// personaje1.peso = 150
// console.log(personaje1.peso);



// Que pasa si intentamos modificiar una propiedad que no existe? LA CREA Y LA INSERTA EN EL OBJETO
// personaje2.camina = true
// console.log(personaje2);



// Funcion constructora de objetos:

function Personajes(nombre, apellido, edad, usaPanial) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.usaPanial = usaPanial;
    this.respira = true;

    //METODOS---->es una accion o comportamiento del objeto.
    this.hablar = function (mensaje) {
        alert(mensaje);
    };
}
// Con esta funcion constructora puedo crear mas objetos ahorrando codigo y solo indico por parametro las caracteristicas del nuevo objeto

const personaje6 = new Personajes("Homero", "Simpson", 39, false)
const personaje7 = new Personajes("Marge", "Bouvie", 39, false)
const personaje3 = new Personajes("Bart", "Simpson", 10, false)
const personaje4 = new Personajes("Lisa", "Simpson", 8) //Si faltan parametros, se completan con undefined, y se van asignando en el orden en el que esta declarado
const personaje5 = new Personajes("Magui", "Simpson")


console.log(personaje3);

// personaje3.hablar("Ay caramba!")
// personaje4.hablar("Todo el maldito sistema esta mal!")
// personaje5.hablar("muak muak")
// personaje6.hablar("Mmmm la rosca prohibida")
// personaje7.hablar("Estuviste toda la noche comiendo queso?")


// Recorrer todo el objeto y mostrar el nombre de la propiedad y el valor:








//Crear un personaje con los datos que nos da el Usuario:

let nombreUsuario = prompt("Ingrese el nombre de su personaje")
let apellidoUsuario = prompt("Ingrese el apellido de su personaje")
let edadUsuario = prompt("Ingrese la edad de su personaje")

const personajeUsuario = new Personajes (nombreUsuario, apellidoUsuario, edadUsuario)
console.log(personajeUsuario);



// Los objetos de JavaScript tienen sus propios metodos y propiedades ------> Objeto STRING:

// let cadena = "Hola soy Lautaro"
// console.log(cadena.toUpperCase()); // Imprime todo en Mayusculas.
// console.log(cadena.toLowerCase()); // Imprime todo en Minusculas.
// console.log(cadena.length); // Te devuelve en number, la cantidad de caracteres que tiene la variable




// Actividad practica de clase 5 OBJETOS: Creear un objeto

// esCorrecto=false

// class Propiedad {
//     constructor(barrios, metros, categoria, ambientes, baños){
//         this.barrios = barrios
//         this.metros = parseFloat(metros)
//         this.categoria = categoria
//         this.ambientes = parseFloat(ambientes)
//         this.baños = parseFloat(baños)
//         this.alquilado = false
//     }
// }



























