// document.body imprime la etiqueta body
// console.log(document.body);

//document.head imprime la etiqueta head
// console.log(document.head);



// LAS ETIQUETAS QUE HAY EN UN HTML SE LLAMAN NODOS Y SE PUEDE ACCEDER A ELLAS DESDE JS PARA MODIFICARLOS.

// console.log(document.body.children[1]);



// POR OTRO LADO TAMBIEN SE PUEDEN MODIFICAR CON INNER.HTML

// document.body.children[1].innerHTML = "<span style = 'color: red;' > CLASE 9 DE DOM </span>";




// getElementById --> Accede a un elemento mediante su ID y tambien poder modificarlo

// let titulo = document.getElementById("titulo")
// console.log(titulo);
// titulo.innerHTML = "LA CLASE DE DOM ESTA RE PIOLA"

// document.getElementById("parrafo").innerHTML="Aguante River Plate"


// document.getElementById("contenido").innerHTML= '<div class="alert alert-primary" role="alert">TEXTO DE PRUEBA</div>'



//getElementsByClassName --> Accede a un elemento mediante su CLASE y tambien puede modificiarlo

// let paises = document.getElementsByClassName("paises");
// console.log(paises);
// paises[1].innerHTML="GUATEMALA"

//getElementsByTagName ---> Accede a un elemento mediante su ETIQUETA y tambien se puede modificiar

// let paises = document.getElementsByTagName("li");
// console.log(paises);
// paises[1].innerHTML="GUATEMALA"


// RECORRER TODO EL ELEMENTO CON FOR OF::::::::::::::::::::

// let itemPaises = document.getElementsByTagName("ul");

// for (const pais of itemPaises) {
//     pais.className = "list-group"
// }



// for (const pais of paises) {
//     pais.className ="list-group-item"
// }

// paises[2].innerHTML = '<button type="button" class="btn btn-primary">Francia</button>'



// CREANDO - ELIMINANDO NODOS:::::::

// let paisNuevo = document.createElement('p');
// console.log(paisNuevo);
// paisNuevo.innerHTML = '<button type="button" class="btn btn-danger">Republica Checa</button>'
// document.body.append(paisNuevo);


// let paisNuevo2 = document.createElement('p');
// paisNuevo2.innerHTML = '<button type="button" class="btn btn-danger">Belgica</button>'
// document.body.append(paisNuevo2);


// let paisNuevo3 = document.createElement('p');
// paisNuevo3.innerHTML = '<button type="button" class="btn btn-danger">Canada</button>'
// document.body.prepend(paisNuevo3);


// AGREGANDO NODOS A ELEMENTOS YA EXISTENTES :::::::::::::

// let agregando = document.getElementById('countrys');
// let paisNuevo4 = document.createElement('p');
// paisNuevo4.innerHTML = '<button type="button" class="btn btn-success">Hungria</button>'
// agregando.appendChild(paisNuevo4)
// paisNuevo4.className = "border"

// paisNuevo4.remove();


// ITERANDO ARRAYS ::::::::::::::::AGREGO UN ARRAY AL BODY

// let equipos = ["River", "Racing", "Banfield", "Lanus"]
// let listaEquipos = document.getElementById("equipos")

// for (const item of equipos) {
//     let agregado = document.createElement("li")
//     agregado.innerHTML = item;
//     listaEquipos.appendChild(agregado)
// }





// PLANTILLAS DE TEXTO O TEMPLATE STRINGS::::::::::::::::

// let producto = {id:1, nombre: "Coca Cola", precio: 1200};
// console.log("Producto: " + producto.nombre + " $" + producto.precio); Concatenacion variables y Texto

// console.log(`Prodcuto ${producto.nombre}
// $${producto.precio}`); //Template Strings o Plantilla de texto



// QUERY SELECTOR::::::::::::::::::::

// let traerPaises = document.querySelectorAll("#countrys li");
// console.log(traerPaises);


// RENDER DE PRODUCTOS::::::::::::::::::::


const materiales = [
    { id: 1, nombre: "cemento", precio: 1000, categoria: "construccion", imagen: "https://images.homify.com/images/a_0,c_fit,f_auto,q_auto,w_1108/v1563477938/p/photo/image/3132464/EXTRA/fotos-de-techos-de-estilo-clasico-de-pide-cemento.jpg" },
    { id: 2, nombre: "hormigon", precio: 1500, categoria: "construccion", imagen: "https://www.arquitecturapura.com/wp-content/uploads/2019/08/hormig%C3%B3n-1-1140x713.jpg" },
    { id: 3, nombre: "ceramica", precio: 200, categoria: "interior", imagen: "https://tse4.mm.bing.net/th?id=OIP.1dQXSZXcn78HbiyJKdmUxwHaHY&pid=Api&P=0&h=180" },
]


let contenidoProductos = document.getElementById("contenidoProductos");

for (const producto of materiales) {
    let elemento = document.createElement("div");
    elemento.className= "col-md-3";
    elemento.innerHTML = `<div class="card">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">$${producto.precio}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`
    contenidoProductos.appendChild(elemento);
}





