'use strict';

function dataPersonal(){
    // Objeto con los datos del usuario:
    const persona = {
        'nombre': 'Eder Lara Trujillo',
        'fotoperfil': '<img src="./assets/media/img/imgperfil.jpg" alt="" class="img-fluid">',
        'profesion': 'Ingeniero de Datos',
        'email': 'eder.lara@fundacionview.org',
        'perfil': 'Máster en Bigdata & analítica, analista de modelos de negocios y administración de bases de datos. Habilidades para trabajar en equipo en comunidades de: Desarrollo de Software, soluciones informáticas, evaluación de proyectos, Gerente de Business Intelligence, Analista Senior, BI Consultant, Analista Big Data, Técnico de Inteligencia de Negocio, Consultor Senior BI, Jefe de Proyecto Big Data.',
        'competencias': {
            'comunicativas': ['Asertivo', 'Persuasivo', 'Actitud Positiva', 'Tolerancia', 'Orden'],
            'gestion':['Organizado', 'Scrumm Máster', 'PowerBI'],
            'informaticas':['Python', 'Machine Learning', 'Desarrollo WEB', 'Hadoop', 'ETL-ELT', 'Bases de Datos']
        },
        'cargos': ['Analista BI', 'Senior BigData Developer', 'Ingeniero de Datos', 'Profesor de Python'],
        'estudios':{
            'posgrado': 'Maestría en BigData y Análitica',
            'pregrado': 'Ingeniería de Sistemas',
            'tecnico': 'Mantenimiento de Hardware',
            'bachillerato': 'Bachiller Técnico'
        }
    }

    // Imprimimos los elementos de la función
    document.getElementById('nombre').innerHTML = persona.nombre;
    document.getElementById('fotoperfil').innerHTML = persona.fotoperfil;
    document.getElementById('profesion').innerHTML = persona.profesion;
    document.getElementById('email').innerHTML = persona.email;
    document.getElementById('perfil').innerHTML = persona.perfil;

    
}