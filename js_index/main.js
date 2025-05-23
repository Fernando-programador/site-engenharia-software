// Remove a preloader após o carregamento
$(window).load(function () {
    $('.preloader').fadeOut('slow');
});

/* =Main INIT Function
-------------------------------------------------------------- */
function initializeSite() {
    "use strict";

    // Função para centralizar elementos na tela
    (function () {
        function centerInit() {
            var sphereContent = $('.sphere'),
                sphereHeight = sphereContent.height(),
                parentHeight = $(window).height(),
                topMargin = (parentHeight - sphereHeight) / 2;

            sphereContent.css({
                "margin-top": topMargin + "px"
            });

            var heroContent = $('.hero'),
                heroHeight = heroContent.height(),
                heroTopMargin = (parentHeight - heroHeight) / 2;

            heroContent.css({
                "margin-top": heroTopMargin + "px"
            });
        }

        // Ajusta ao carregar a página ou redimensionar a janela
        $(document).ready(centerInit);
        $(window).resize(centerInit);
    })();

    // Inicia o efeito parallax
    $('#scene').parallax();
}
/* END ------------------------------------------------------- */

/* =Document Ready Trigger
-------------------------------------------------------------- */
$(window).load(function () {
    initializeSite();
    // Certifique-se de que a página começa no topo
    (function () {
        setTimeout(function () { window.scrollTo(0, 0); }, 0);
    })();
});

/* =Contador e Botão com Texto
-------------------------------------------------------------- */
$('#countdown').countdown({
    date: "october 22, 2026 18:03:26", // Data original (opcional, mas ignorada aqui)
    render: function (data) {
        var el = $(this.el);
        el.empty()
            .append(
                "<div style='font-size: 1em; margin: 10px, font-weight: bold; color: white; text-shadow: 8px 8px 0px black, 10px 10px 2px rgba(0, 0, 0, 0.4); margin-top: 50px;'>" +
                "Engenharia de Software</div>" // Texto com efeito 3D e margem ajustada
            )
    }
});


