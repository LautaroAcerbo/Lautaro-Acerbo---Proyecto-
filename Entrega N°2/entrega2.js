// //COMPRA DE MATERIALES PARA OBRA - SEGUNDA PRE-ENTREGA
let esCorrecto = false
let nombre = "";

while (nombre === "" || nombre === null) {
    nombre = prompt("Binvenido/a, por favor, ingresa tu nombre:");

    if (nombre === "" || nombre === null) {
        alert("El nombre no puede estar vacío. Por favor, inténtalo de nuevo.");
    }
}

alert("¡ Hola, " + nombre + " Bienvenido/a !.");


const carrito = []

const materiales = [
    { id: 1, nombre: "cemento", precio: 1000, categoria: "construccion" },
    { id: 2, nombre: "hormigon", precio: 1500, categoria: "construccion" },
    { id: 3, nombre: "ceramica", precio: 200, categoria: "interior" },
    { id: 4, nombre: "chapa", precio: 300, categoria: "exterior" },
    { id: 5, nombre: "madera", precio: 150, categoria: "construccion" },
    { id: 6, nombre: "porcelanato", precio: 500, categoria: "interior" },
    { id: 7, nombre: "dvh", precio: 400, categoria: "interior" },
    { id: 8, nombre: "aluminio", precio: 1400, categoria: "construccion" },
    { id: 9, nombre: "metal", precio: 400, categoria: "construccion" },
    { id: 10, nombre: "arena", precio: 150, categoria: "construccion" },
    { id: 11, nombre: "cal", precio: 100, categoria: "construccion" },
    { id: 12, nombre: "ladrillo", precio: 300, categoria: "construccion" },
    { id: 13, nombre: "acero", precio: 300, categoria: "construccion" },
    { id: 14, nombre: "vigas", precio: 2000, categoria: "construccion" },
    { id: 15, nombre: "losa", precio: 1600, categoria: "exterior" },
]

function comprar() {
    let seleccion = prompt("Seleccione los materiales que desea comprar: \n -Cemento \n -Hormigon \n -Ceramica \n -Chapa \n -Madera \n -Porcelanato \n -Dvh \n -Aluminio \n -Metal \n -Arena \n -Cal \n -Ladrillo \n -Acero \n -Vigas \n -Losa")
    const productoSeleccionado = materiales.find((item) => item.nombre === seleccion);
    if(seleccion != materiales.nombre){
        alert("ingrese materiales que integren la lista por favor")
        comprar();
    }
    alert("Usted agrego " + seleccion + " al carrito")
    carrito.push(seleccion)
}
comprar();


function otraVez() {
    let seguir = prompt("¿Desea seguir añadiendo materiales a su carrito de compra? SI/NO")
    switch (seguir) {
        case "si":
            comprar();
            otraVez();
            break;
        case "no":
            alert("Procedemos a realizar el pago")
            break;
        default:
            if (seguir != "si" || seguir != "no") {
                alert("El nombre no puede estar vacío o ingresó un valor incorrecto. Por favor, inténtalo de nuevo.");
                otraVez();
            }
    }
}

otraVez();
console.log(carrito);
// switch (seguir) {
//     case "si":
//             comprar();
//             seguir = prompt("¿Desea seguir añadiendo materiales a su carrito de compra? SI/NO")
//     case "no":
//         alert("Procedemos a realizar el pago")
//         break;
//     default:
//         alert("El nombre no puede estar vacío o ingresó un valor incorrecto. Por favor, inténtalo de nuevo.");
//         seguir = prompt("¿Desea seguir añadiendo materiales a su carrito de compra? SI/NO");
// }


// if(seguir != "si" || seguir != "no"){
//     alert("El nombre no puede estar vacío o ingresó un valor incorrecto. Por favor, inténtalo de nuevo.");
//     otraVez();
// }


// if (seguir === "si") {
//     comprar();
//     seguir = prompt("¿Desea seguir añadiendo materiales a su carrito de compra? SI/NO")
// }










