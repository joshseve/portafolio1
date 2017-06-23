$(document).ready(function () {

           //Menú responsivo
           $(".button-collapse").sideNav();
           //Animaciones
           var options = [
               {
                   selector: '.portafolio-holder img',
                   offset: 0,
                   callback: 'fadeInImage(".portafolio-holder img")'
               },
               {
                   selector: '.habilidades li',
                   offset: 0,
                   callback: 'showStaggeredList(".habilidades ul")'
               }
                      ];
            scrollFire(options);
           //Parallax
           $('.parallax').parallax();
           //Scroll
           $('section').scrollSpy();
          //  contacto
           $('.collapsible').collapsible();
       });
