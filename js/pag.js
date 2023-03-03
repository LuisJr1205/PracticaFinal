// Menu desplegable
var btnOpenmenu = document.getElementById("btnMenuOpen"),
    btnClosemenu = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("barra-bar"),
    enalces = document.getElementById("enlaces");
    
    // click abrir 
    btnOpenmenu.addEventListener("click", function () {
        menuResponsive.classList.add("active");
    });

    // Click cerra menu
    btnClosemenu.addEventListener("click", function () {
        menuResponsive.classList.remove("active");
    });

    // Cerrar menu con elementos enlaces
    enalces.addEventListener("click",function () {
        menuResponsive.style.transitionDelay="0.5s";
        menuResponsive.classList.remove("active");
    });


// Slider de productos
 var contenedor = document.querySelector('.slider'),
     btnIzquierdo = document.getElementById("btn-izquierda"),
     btnDerecha = document.getElementById("btn-derecha");
     

    //  Evento para el boton derecho
    btnDerecha.addEventListener("click",function () {
       contenedor.scrollLeft += contenedor.offsetWidth; 
    });

    //  Evento para el boton izquierdo
    btnIzquierdo.addEventListener("click",function () {
        contenedor.scrollLeft -= contenedor.offsetWidth;
     });

     
     
//Validacion de formulario

     var formulario = document.getElementById("formulario");

     function validar(e) {
        var inputNombre = document.getElementById("nombre"),
            inpuEmail = document.getElementById("email"),
            inputComent = document.getElementById("comentarios"),
            alertSuccess = document.getElementById("alertSuccess"),
            alertError = document.getElementById("alertError");

        if (inputNombre.value == 0 || inpuEmail.value == 0 || inputComent.value == 0) {
            e.preventDefault();
            alertError.classList.remove("hide");
            alertError.classList.add("show");

            setTimeout(function () {
                alertError.classList.remove("show");
                alertError.classList.add("hide");  
            },2000);


        }else{
            e.preventDefault();
            alertSuccess.classList.remove("hide");
            alertSuccess.classList.add("show");

            setTimeout(function () {
                alertSuccess.classList.remove("show");
                alertSuccess.classList.add("hide");  
            },2000);
            // Vacia los campos
            inputNombre.value = "";
            inpuEmail.value = "";
            inputComent.value = "";
        }
     }

    //  Eventos del formulario
     formulario.addEventListener("submit", validar);






// Scroll top (para subir la apgina)

     var btnTop = document.getElementById("btn-top"),
            logo = document.getElementById("logo");



// Detectamos scroll en nuestra pagina web
     window.addEventListener("scroll", function () {
        var scroll = document.documentElement.scrollTop,
            fullSize = document.documentElement.offsetHeight,
            sizeVp = document.documentElement.clientHeight;

            // scroll=scroll-.800048828125;

        if (scroll > 100) {
            btnTop.classList.add("show");
        }else{
            btnTop.classList.remove("show");
        }

        // Modificar elemento cuando llegue al final de pagina.
        if (fullSize == (sizeVp + scroll)) {
            btnTop.classList.add("scrollFinal");
        }else{
            btnTop.classList.remove("scrollFinal");
        }

     });


// Detectamos evento click en el botono
    btnTop.addEventListener("click",function () {
        window.scrollTo(0,0);
    });

// Detectar evento click logo
    logo.addEventListener("click",function () {
    window.scrollTo(0,0);   
    });


