let miImage = document.querySelector ('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/perro.jpg') {
        miImage.setAttribute('src', 'images/puppy.jpg');
    } else {
        miImage.setAttribute('src', 'images/pero.jpg');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableceNombreUsuario() {
    let miNombre = prompt('por favor, ingresa tu nombre. ');
    if (!miNombre) {
        estableceNombreUsuario();
    }
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'Los perros son geniales, ' + miNombre;
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
} 
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Los perros son geniales, ' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}