// //------------------------------------------------- CLASE 1 --------------------------------------------------------

// // Sintaxis basica de JavaScript                               

// // Comentario con Doble barra.

// // Atajo para generar un comentario ctrl + k + c

// /*Comentario Multilinea que necesita ser cerrado */  



// //VARIABLES: NO SE UTILIZA "VAR", SE UTILIZA PARA DECLARAR UNA VARIABLE QUE PUEDE REDEFINIR "LET"

// let nombre = "Lautaro" //Esto es una asignacion 

// //CAMEL CASE - unNombre -----> unAño, etc

// let unaFrase = "Hola Mundo este es mi mensaje"

// // SE USA "CONST" PARA DECLARAR UNA VARIABLE QUE NO SE PUEDE REDEFINIR


// //Operaciones matematicas con variables

// let numero1 = 4
// let numero2 = 6
// const pi = 3.14

// let suma = numero1 + numero2
// let resta = numero2 - numero1
// let multiplicacion = numero1 * pi
// let modulo = numero1 % 2 


// //USAR LA CONSOLA ---------> En la consola se muestra lo que esta dentro del parentesis

// console.log(suma)
// console.log(resta)


// //CONCATENAR ------> SUMAR STRINGS

// let palabra1= "Hola"
// let palabra2= "Mundo"

// let concatenar = palabra1 + " " + palabra2
// console.log(concatenar)


// //INTERACCION CON EL USUARIO

// //PROMPT -----> Es un pop ap

// // let nombreUsuario = prompt ("Ingrese nombre de Usuario")
// // let edadUsuario = parseInt( prompt ("Ingrese edad de Usuario"))

// //Si imprimimos con console.log las variables con el PROMPT, el resultado se va a imprimir por consola.

// // console.log(nombreUsuario);
// // console.log(edadUsuario);

// //parseInt ------> Te transforma un string a un number entero, EJEMPLO:

// let numberEjemplo = "27"
// let numberEjemploNumber = parseInt(numberEjemplo)

// //parseFloat ------------> Te transforma un string en number decimal, EJEMPLO:
// let altura = "1.80"
// let alturaDecimal= parseFloat(altura)

// console.log(alturaDecimal);

// //ALERTAS ------>Carteles de mensajes
// // alert("Bienvenido a JS Coder House" + " " + nombre)

// //ACTIVIDAD EN CLASE

// // let nombreUsuario = prompt("Ingrese su Nombre")
// // let apellidoUsuario = prompt("Ingrese su Apellido")
// // let edadUsuario = prompt("Ingrese su edad")
// // alert("Bienvenido al sistema " + nombreUsuario + " " + apellidoUsuario)

// //------------------------------------------------- CLASE 2 --------------------------------------------------------

// //Condicionales -------> Cumplir una operacion o accion en base a una condicion.  Si <condicion> entonces <operacion>

// //Valores BOOLEANOS - TRUE O FALSE


// // //Estructura IF (si - condicion)
// //     // if (true){
// //     //     console.log("esto es verdadero");
// //     // }

// // Estructura IF- ELSE --------> Si se cumple la condicion planteada, sino, 

// // //Operador de comparacion -------> 
// //     //    == ----> es igual a... DEBIL (compara valores)
// //     //   === ----> es estrictamente igual a.... ESTRICTO (compara valores y tipos)  


// // .TolowerCase -------> es una propiedad que hace que el programa interprete minuscula o mayuscula por igual.
// // .trim -------> elimina los espacios de adelante y de atras.

// //   Operadores logicos:
// //   Y ----> &&
// //   OR ---> ||
// //   Negacion ---> !

// //------------------------------------------------- AFTERCLASS CALSE II --------------------------------------------------------
// // let condicion = true
// // if(condicion){
// //     console.log("La condicion es verdadera");
// // }


// // let numeroA = 10
// // let numeroB = 20

// // if(numeroA + numeroB == 30){
// //     console.log("El numero final es 30");
// // }

// // let edadMayor = 18
// // let edadUsuario = prompt("Ingrese su edad")

// // if(edadUsuario >= edadMayor){
// //     alert("Bienvenido a la pagina");
// // }   else {
// //     alert("No tiene permitido el acceso");
// // }

// let edadVotante = 18
// let edadMenorVotante = 16
// let edadMayorVotante = 70
// let edadUsuarioVotante = prompt("Ingrese su edad para votar")
// if(edadUsuarioVotante >= edadVotante && edadUsuarioVotante <= edadMayorVotante){
//     alert("Estas habilitado para votar")
// } else if(edadUsuarioVotante >= edadMenorVotante && edadUsuarioVotante < edadVotante) {
//     alert("Podes votar si queres")
// } else {
//     alert("No podes votar")
// }


// //------------------------------------------------- CLASE 3 --------------------------------------------------------
// //BUCLES

// //FOR ----> Por conteo, se repite las veces que le digamos (para)
// //WHILE --> Por repeticion, se repite infinitas veces hasta que le demos un corte.
