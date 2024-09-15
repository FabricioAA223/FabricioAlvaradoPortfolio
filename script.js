function navbarOption(e, idTarget){ //Si el elemento clickeado no es un li del navbar, trae el id del target a donde ir
    document.querySelectorAll('#navbar-ul li').forEach(item => {
        item.classList.remove('active');
    });
    let target;
    if(idTarget)
        target = document.getElementById(idTarget);
    else
        target = e.currentTarget.closest('li');
    if (target) {
        target.classList.add('active');
    }
    
    const navbarOptionSelected = e.target.textContent
    const animationElement = document.getElementById('section-name-animation');

    animationElement.style.width = "0px";       // Establecer el ancho inicial
    animationElement.style.transition = "none"; // Quitar la transicion para que no se vea esta modificacion inicial
    animationElement.style.transitionTimingFunction = "none";

    // Retrasar el cambio de tamaño con setTimeout para que la animación sea visible
    setTimeout(() => {
        animationElement.style.transition = "width 0.5s";  // Aplicar la transición
        animationElement.style.transitionTimingFunction = "ease-out";
        animationElement.style.width = "200px";            // Cambiar el ancho después de un retraso
    }, 1);  // Retraso de 1 milisegundos

    document.getElementById('div-home').style.display = "none";
    document.getElementById('div-about').style.display = "none";
    document.getElementById('div-portfolio').style.display = "none";
    document.getElementById('div-blog').style.display = "none";
    document.getElementById('div-contact').style.display = "none";

    switch (navbarOptionSelected){
        case 'Home':
            document.getElementById('div-home').style.display = "flex";
            document.getElementById('section-name').innerHTML = "Home";
            break;
        case 'Learn more about me': //Esto hace que esta opcion tambien dentra al about
        case 'About':
            document.getElementById('div-about').style.display = "block";
            document.getElementById('section-name').innerHTML = "About Me";
            break;
        case 'See my Portfolio':
        case 'Portfolio':
            document.getElementById('div-portfolio').style.display = "flex";
            document.getElementById('section-name').innerHTML = "My Portfolio";
            break;
        case 'Blog':
            document.getElementById('div-blog').style.display = "flex";
            document.getElementById('section-name').innerHTML = "My Blog";
            break;
        case 'Costa Rica':
        case 'LOCATION':
        case 'Contact':
            document.getElementById('section-name').innerHTML = "Contact Me";
            initMap();
            emailjs.init("AesEBf750c7czMqwO");
            document.getElementById('div-contact').style.display = "block";
            break;
        default:
            document.getElementById('section-name').innerHTML = "Home";
            document.getElementById('div-home').style.display = "flex";
            break;
    }
}

function downloadCV(){
    const url = 'files/CV.pdf';

    // Crear un enlace temporal para descargar el archivo
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Fabricio Alvarado CV.pdf'; // Nombre con el que se guardará el archivo
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Función para inicializar el mapa
function initMap() {
    // Estilo oscuro personalizado
    const darkModeStyle = [
        { elementType: 'geometry', stylers: [{ color: '#212121' }] },
        { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#757575' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#212121' }] },
        {
            featureType: 'administrative',
            elementType: 'geometry',
            stylers: [{ color: '#757575' }]
        },
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#000000' }]
        },
        {
            featureType: 'road',
            elementType: 'geometry.fill',
            stylers: [{ color: '#2c2c2c' }]
        },
    ];

    // Opciones del mapa
    const mapOptions = {
        center: { lat: 9.926285066678863, lng: -84.09310538964152 }, // Ubicación de ejemplo (San Francisco)
        zoom: 12,
        styles: darkModeStyle // Aplica el estilo oscuro
    };

    // Crea el mapa en el elemento con id "map"
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Crea un marcador en la ubicación especificada
    const marker = new google.maps.Marker({
        position: { lat: 9.926285066678863, lng: -84.09310538964152 }, // Ubicación del marcador
        map: map,  // El mapa donde se colocará el marcador
        title: 'Aquí está tu marcador!'  // Texto que aparece al pasar sobre el marcador
    });
}

const originalConsoleWarn = console.warn;

console.warn = function (message) {
    if (message.includes('google.maps.Marker is deprecated')) {
        return; // Ignorar el warning que muestra la key en consola (No se pudo resolver)
    }
    originalConsoleWarn.apply(console, arguments); // Mantener los otros warnings
};

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir que la página se recargue
    const serviceID = 'service_cvxpuuo';
    const templateID = 'template_fga8ngg';
    const userTemplateID = 'template_gdsiduo'; 
    
    // Enviar el formulario a mi correo
    emailjs.sendForm(serviceID, templateID, this)
    .then(function() {
        alert("Your message has been sent successfully!");
    }, function(error) {
        alert("There was an error sending the message: " + JSON.stringify(error));
    });

    // Enviar la respuesta automática al usuario
    emailjs.sendForm(serviceID, userTemplateID, this)
        .then(function() {
            console.log("Respuesta automática enviada con éxito!");
        }, function(error) {
            console.log("Error al enviar la respuesta automática: " + JSON.stringify(error));
        });
});

function toggleCard(card) {
    const cardInner = card.querySelector('.card-inner');
    cardInner.classList.toggle('flipped');
}