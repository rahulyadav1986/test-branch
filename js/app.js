
$('.mobile_menu').slicknav({
    label: '',
    prependTo: 'header .container',
    closedSymbol: '+',
    openedSymbol: '-',
    allowParentLinks:"true",
});

/* On Scroll Js */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    var header= document.getElementById("header");
    header.classList.add('active');
  } else {
    var header= document.getElementById("header");
    header.classList.remove('active');
  }
}
/* On Scroll Js */




var owlBanner = $('#banner-slider');
owlBanner.owlCarousel({
     loop: false,
     dots: false,
     nav: true,
     navText: [
         ("<img src='images/arrow1.png' />"),
         ("<img src='images/arrow2.png' />")
     ],
     autoplay:true,
     center:false,
     margin: 0,
     animateOut: 'fadeOut',
     responsive:{
         0:{
             items: 1,
             margin: 0,
         },
         600:{
             items: 1,
             margin: 0,
         },
         1000:{
             items: 1
         }
     }
 });



var owlAbout = $('#about-slider');
owlAbout.owlCarousel({
     loop: false,
     dots: false,
     nav: true,
     navText: [
         ("<img src='images/arrow1.png' />"),
         ("<img src='images/arrow2.png' />")
     ],
     autoplay:true,
     center:false,
     margin: 0,
     responsive:{
         0:{
             items: 1,
             margin: 0,
         },
         600:{
             items: 1,
             margin: 0,
         },
         1000:{
             items: 1
         }
     }
 });

var owlTesti = $('#testimonial-slider');
owlTesti.owlCarousel({
     loop: false,
     dots: true,
     nav: true,
     navText: [
         ("<img src='images/slim_arrow1.png' />"),
         ("<img src='images/slim_arrow2.png' />")
     ],
     autoplay:true,
     center:false,
     margin: 46,
     responsive:{
         0:{
             items: 1,
             margin: 20,
             dots: false,
         },
         600:{
             items: 2,
             margin: 30,
         },
        
        1024:{
            items: 3,
            margin: 20,
        },
         1600:{
            items: 4,
        }
     }
 });

 var owlWhy = $('#why-slider');
 owlWhy.owlCarousel({
      loop: true,
      dots: false,
      center: true,
      nav: true,
      navText: [
          ("<img src='images/slim_arrow1.png' />"),
          ("<img src='images/slim_arrow2.png' />")
      ],
      autoplay:true,
      margin: 65,
      responsive:{
          0:{
              items: 1,
              margin: 20,
              dots: false,
              center: false,
          },
          600:{
              items: 2,
              margin: 30,
              center: false,
          },
         
         1024:{
             items: 3,
             margin: 20,
         },
          1600:{
             items: 3,
         }
      }
  });


/*Fancybox.bind('[data-fancybox="gallery"]', {
    Toolbar: {
      display: [
        { id: "prev", position: "center" },
        { id: "counter", position: "center" },
        { id: "next", position: "center" },
        "zoom",
        "slideshow",
        "fullscreen",
        "download",
        "thumbs",
        "close",
      ],
    },
  });*/



