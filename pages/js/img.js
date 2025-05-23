
/*TRANSIÇÃO DA IMAGEM COM ATRASO */
document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll(".lazy-load");

    const lazyLoad = (image) => {
        setTimeout(() => {
            image.src = image.dataset.src;
            image.classList.remove("lazy-load");
        }, 3000);
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                lazyLoad(entry.target);
                observer.unobserve(entry.target); // Parar de observar após carregar
            }
        });
    });

    lazyImages.forEach((image) => {
        observer.observe(image);
    });
});   

/*TRANSIÇÃO PARA TEXTO COM ATRASO COM animated-asl-slideInUp  */
document.addEventListener("DOMContentLoaded", function () {
    const slideUpElements = document.querySelectorAll(".animated-asl-zoomIn");

    const slideUp = (element) => {
        element.classList.add("visible"); // Adiciona a classe para iniciar a animação
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                slideUp(entry.target);
                observer.unobserve(entry.target); // Para de observar após a animação
            }
        });
    });

    slideUpElements.forEach((element) => {
        observer.observe(element); // Observa cada elemento
    });
});


let myElement = document.querySelector("header");
let headroom = new Headroom(myElement);
headroom.init();

