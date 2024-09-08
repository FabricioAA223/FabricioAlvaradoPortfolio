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
        case 'Contact':
            document.getElementById('section-name').innerHTML = "Contact Me";
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