//Clase 6 : ARRAY----> Es un tipo de dato que sirve para almacenar valores en forma de lista

const  miArray = [1, "a", true, {a: 0}, [1, 6]]

console.log(miArray.length);
console.log(miArray[3]);





// Ingresar un elemento dentro de un ARRAY ------> .PUSH

miArray.push(8)
console.log(miArray);

//Quitar EL PRIMER elemento dentro del ARRAY -----> .SHIFT
miArray.shift()
console.log(miArray);

//Quitar EL ULTIMO elemento dentro del ARRAY -----> .POP
miArray.pop()
console.log(miArray);

// Eliminar uno o varios elementos de un ARRAY en cualquier posicion. Funciona con 2 parametros, el primero es el indice y el segundo es la cantidad de elementos a eliminar ---------> .SPLICE

miArray.splice(2, 1)
console.log(miArray);

//Generar un string con todos los elementos del ARRAY, separados por el valor que pasamos como parametro -----> .JOIN

const string = miArray.join(" + ")
console.log(string);

//Poder generar 1 ARRAY de 2 ARRAYS ----> .CONCAT

const perros = ["Pedro", "Laika"]
const gatos = ["Valentino", "Kity"]

const mascotas = perros.concat(gatos)

console.log(mascotas);


// const nombres    = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];

// const nombres    = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
// const masculinos = nombres.slice(1, 3); // Nuevo array desde la posición 1 a 3.
// // masculinos contiene ['Pedro','Miguel']

// console.log(masculinos);


//Buscar en que indice se encuentra ese valor dentro de ARRAY ----> INDEXOF

// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];

// console.log( nombres.indexOf('Rita') ) // ⇒ 0
// console.log( nombres.indexOf('Ana') ) // ⇒ 3
// console.log( nombres.indexOf('Julieta') ) // ⇒ -1

//Saber si un valor pertenece al ARRAY -----> INCLUDES

// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

// console.log( nombres.includes('Rita') ) // ⇒ true
// console.log( nombres.includes('Miguel') ) // ⇒ true
// console.log( nombres.includes('Julieta') ) // ⇒ false

// invierte el orden de los elementos dentro de un array. -----> .REVERSE

// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']
// nombres.reverse()
// console.log( nombres ) 
// ⇒ ['Vanesa', 'Ana','Miguel', 'Pedro','Rita']



// Eliminar cualquier elemento

const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

// recibo el elemento a borrar por parámetro
const eliminar = (nombre) => {
    // busco su índice en el array
    let index = nombres.indexOf(nombre)

     // si existe, o sea es distinto a -1, lo borro con splice
    if (index != -1 ) {
        nombres.splice(index, 1)
    } else{
        alert("Ese nombre no existe")
    }
}
const nombre = prompt("A quien queres eliminar?")

eliminar('Pedro')
alert(nombres);













