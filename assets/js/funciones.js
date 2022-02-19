'use strict';

function dataPersonal(){
    // Objeto con los datos del usuario:
    const persona = {
        'nombre': 'Eder Lara Trujillo',
        'fotoperfil': '<img src="./assets/media/img/imgperfil.jpg" alt="" class="img-fluid">',
        'profesion': 'Ingeniero de Datos',
        'email': 'eder.lara@fundacionview.org'
    }

    // Imprimimos los elementos de la función
    document.getElementById('nombre').innerHTML = persona.nombre;
    document.getElementById('fotoperfil').innerHTML = persona.fotoperfil;
    document.getElementById('profesion').innerHTML = persona.profesion;
    document.getElementById('email').innerHTML = persona.email;
}