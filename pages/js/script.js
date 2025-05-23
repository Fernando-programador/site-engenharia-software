/* Counter - CountTo */
$(document).ready(function () {
    var a = 0; // Certifique-se de inicializar a variável a
    $(window).scroll(function () {
        if ($('#counter').length) { // Verifica se o elemento existe
            var oTop = $('#counter').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.counter-value').each(function () {
                    var $this = $(this),
                        countTo = $this.attr('data-count');

                    $({ countNum: $this.text() }).animate(
                        { countNum: countTo },
                        {
                            duration: 2000,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function () {
                                $this.text(this.countNum);
                            }
                        }
                    );
                });
                a = 1; // Evita que a contagem aconteça mais de uma vez
            }
        }
    });
});


/*CARRREGAR CARROSEL*/
$(document).ready(function(){
	"use strict";
$('.brand-item').owlCarousel({
    items: 6,
    loop: true,
    smartSpeed: 1000,
    autoplay: true,
    dots: false,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 2
        },
        415: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
});

/*CARROSEL PARA LADO RTL*/
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})

});

$(document).ready(function(){
	"use strict";
$('.brand-item2').owlCarousel({
    items: 6,
    loop: true,
    smartSpeed: 1000,
    autoplay: true,
    dots: false,
    rtl:true,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 2
        },
        415: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
});


$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})

});
