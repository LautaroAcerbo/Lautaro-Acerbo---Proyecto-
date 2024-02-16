const materiales = [
    { id: 1, nombre: "Cemento", precio: 1000, categoria: "construccion", imagen:"https://bercovichsa.vteximg.com.br/arquivos/ids/156354-3000-3000/cem-loma-30.jpg?v=637242327290770000" },
    { id: 2, nombre: "Ceramica - unidad", precio: 200, categoria: "interior", imagen:"https://mlstaticquic-a.akamaihd.net/ceramica-piso-pared-gris-31x31-oferta-D_NQ_NP_720782-MLU26707142812_012018-F.jpg" },
    { id: 3, nombre: "Chapa", precio: 300, categoria: "exterior", imagen:"https://ferroscarp.com.ar/wp-content/uploads/2020/06/chapa-trapezoidal-cincalum.jpg" },
    { id: 4, nombre: "Madera", precio: 500, categoria: "construccion", imagen:"https://images.adsttc.com/media/images/5dc9/8978/3312/fd4f/6000/0012/newsletter/shutterstock_1232153032.jpg?1573489012" },
    { id: 5, nombre: "Porcelanato", precio: 1500, categoria: "interior", imagen:"https://cdn.leroymerlin.com.br/products/porcelanato_esmaltado_polido_ptr71006_71x71cm_artens_90064331_be00_original.jpeg" },
    { id: 6, nombre: "Aluminio", precio: 1400, categoria: "construccion", imagen:"https://www.dolphinpack.net/upload/alluminio-294.jpg" },
    { id: 7, nombre: "Metal", precio: 2000, categoria: "construccion", imagen:"https://userscontent2.emaze.com/images/f024a44d-e8f4-469d-8a7f-a16d7a19f29e/2b196609c1e4e9e27c081f5d2901fd73.jpeg" },
    { id: 8, nombre: "Arena", precio: 450, categoria: "construccion", imagen:"https://www.materialesparaconstruccion.com.mx/wp-content/uploads/2020/03/Arena-2048x1365.jpg" },
    { id: 9, nombre: "Cal", precio: 700, categoria: "construccion", imagen:"https://cdn.homedepot.com.mx/productos/568409/568409-z.jpg" },
    { id: 10, nombre: "Ladrillo", precio: 300, categoria: "construccion", imagen:"https://www.mndelgolfo.com/blog/wp-content/uploads/2016/11/Ladrillo-Barro-Rojo-Recocido-5-cm-x-12-cm-x-23-cm.jpg" },
    { id: 11, nombre: "Acero", precio: 1500, categoria: "construccion", imagen:"https://blog.laminasyaceros.com/hubfs/Laminas%20y%20aceros%20redondos%20de%20acero%20inoxidable.jpg#keepProtocol" },
]

let contenidoProductos = document.getElementById("contenidoProductos");

for (const producto of materiales) {
    let elemento = document.createElement("div")
    elemento.className
    elemento.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body text-center">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">$${producto.precio}</p>
            <a href="#" class="btn btn-primary">Añadir</a>
        </div>
    </div>`

    contenidoProductos.appendChild(elemento);
}

// ----------------------------------------------------------------------------

function calor() {
    let resultado = document.getElementById("resultado");
        resultado.innerHTML = `<div class="alert alert-warning" role="alert">
        Que calor que esta haciendo!!!
    </div>`;
}


let boton = document.getElementById("boton1")

boton.onmouseover = () => {
    boton.className ="btn btn-danger";
}


