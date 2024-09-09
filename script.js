function navbarOption(e){
    const navbarOptionSelected = e.target.textContent
    console.log(navbarOptionSelected)
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

    document.getElementById('navbar-home').style.color = 'white'
    document.getElementById('navbar-about').style.color = 'white'
    document.getElementById('navbar-portfolio').style.color = 'white'
    document.getElementById('navbar-blog').style.color = 'white'
    document.getElementById('navbar-contact').style.color = 'white'

    switch (navbarOptionSelected){
        case 'Home':
            document.getElementById('div-home').style.display = "flex";
            document.getElementById('section-name').innerHTML = "Home";
            document.getElementById('navbar-home').style.color = '#CE9C29';
            break;
        case 'Learn more about me': //Esto hace que esta opcion tambien dentra al about
        case 'About':
            document.getElementById('div-about').style.display = "block";
            document.getElementById('section-name').innerHTML = "About Me";
            document.getElementById('navbar-about').style.color = '#CE9C29';
            break;
        case 'See my Portfolio':
        case 'Portfolio':
            document.getElementById('div-portfolio').style.display = "block";
            document.getElementById('section-name').innerHTML = "My Portfolio";
            document.getElementById('navbar-portfolio').style.color = '#CE9C29';
            break;
        case 'Blog':
            document.getElementById('div-blog').style.display = "block";
            document.getElementById('section-name').innerHTML = "My Blog";
            document.getElementById('navbar-blog').style.color = '#CE9C29';
            break;
        case 'Costa Rica':
        case 'Contact':
            document.getElementById('section-name').innerHTML = "Contact Me";
            initMap();
            emailjs.init("AesEBf750c7czMqwO");
            document.getElementById('navbar-contact').style.color = '#CE9C29';
            document.getElementById('div-contact').style.display = "block";
            break;
        default:
            document.getElementById('section-name').innerHTML = "Home";
            document.getElementById('div-home').style.display = "flex";
            document.getElementById('navbar-home').style.color = '#CE9C29';
            break;
    }
}

function downloadCV(){
    // URL del archivo PDF. Asegúrate de que esta URL sea accesible desde el navegador.
    const url = 'files/CV.pdf';

    // Crear un enlace temporal para descargar el archivo
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Fabricio Alvarado CV.pdf'; // Nombre con el que se guardará el archivo
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

//AIzaSyCAAh-Rp5BrBoJxLeJIgOm5ghPBr6xEzxo
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
        // Agrega más personalización aquí según sea necesario
    ];

    // Opciones del mapa
    const mapOptions = {
        center: { lat: 9.994525269355865, lng: -85.25287212907321 }, // Ubicación de ejemplo (San Francisco)
        zoom: 12,
        styles: darkModeStyle // Aplica el estilo oscuro
    };

    // Crea el mapa en el elemento con id "map"
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    const marker = new google.maps.Marker({
        position: { lat:  9.994525269355865, lng: -85.25287212907321 }, // Ubicación del marcador
        map: map,  // El mapa donde se colocará el marcador
        title: 'My Approximate Location'  // Texto que aparece al pasar sobre el marcador
    });
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir que la página se recargue
    const serviceID = 'service_cvxpuuo';
    const templateID = 'template_fga8ngg';
    const userTemplateID = 'template_gdsiduo'; // ID de la plantilla de respuesta automática
    
    // Enviar el formulario a tu correo
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