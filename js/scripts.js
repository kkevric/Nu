//

/*----------------------------------------------------*/
/* MOBILE DETECT FUNCTION
/*----------------------------------------------------*/
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};



/////////////////////// ready
$(document).ready(function() {

  // touchTouch
  $('.thumb1 .thumbnail a').touchTouch();


  /*----------------------------------------------------*/
  // carouFredSel.
  /*----------------------------------------------------*/

  var o = $('#online .carousel.main ul');
  if (o.length > 0) {
    o.carouFredSel({
      auto: {
        timeoutDuration: 8000
      },
      responsive: true,
      prev: '.online_prev',
      next: '.online_next',
      width: '100%',
      scroll: {
        // fx : "crossfade",
        items: 1,
        duration: 1000,
        easing: "easeOutExpo"
      },
      items: {
            width: '500',
        height: 'variable', //  optionally resize item-height
        visible: {
          min: 1,
          max: 3
        }
      },
      mousewheel: false,
      swipe: {
        onMouse: true,
        onTouch: true
        }
    });
  };

  var o = $('#gallery_inner .carousel.main ul');
  if (o.length > 0) {
    o.carouFredSel({
      auto: {
        timeoutDuration: 8000
      },
      responsive: true,
      prev: '.gallery_prev',
      next: '.gallery_next',
      pagination: '.gallery_pagination',
      width: '100%',
      scroll: {
        // fx : "crossfade",
        items: 1,
        duration: 1000,
        easing: "easeOutExpo"
      },
      items: {
            width: '500',
        height: 'variable', //  optionally resize item-height
        visible: {
          min: 1,
          max: 3
        }
      },
      mousewheel: false,
      swipe: {
        onMouse: true,
        onTouch: true
        }
    });
  };





  $(window).bind("resize",updateSizes_vat).bind("load",updateSizes_vat);
  function updateSizes_vat(){
    $('#online .carousel.main ul').trigger("updateSizes");
    $('#gallery_inner .carousel.main ul').trigger("updateSizes");




  }
  updateSizes_vat();


  /*----------------------------------------------------*/
  // Sticky.
  /*----------------------------------------------------*/
  $("#top2").sticky({
    topSpacing:0,
    getWidthFrom: 'body',
    responsiveWidth: true
  });







  /*----------------------------------------------------*/
  // MENU SMOOTH SCROLLING
  /*----------------------------------------------------*/
  $(".navbar_ .nav a, .menu_bot a, .scroll-to").bind('click',function(event){

      //$(".navbar_ .nav a a").removeClass('active');
      //$(this).addClass('active');
      // var headerH = $('#top1').outerHeight();
      var headerH = $('#top2').outerHeight();

      if ($(this).attr("href")=="#home") {
        $("html, body").animate({
          scrollTop: 0 + 'px'
          // scrollTop: $($(this).attr("href")).offset().top + 'px'
        }, {
            duration: 1200,
            easing: "easeInOutExpo"
        });
      }
      else {
        $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top - headerH + 'px'
          // scrollTop: $($(this).attr("href")).offset().top + 'px'
        }, {
            duration: 1200,
            easing: "easeInOutExpo"
        });
      }



      event.preventDefault();
  });


    $('input[data-plugin="TouchSpin"]').TouchSpin({
        min: 0,
        max: 100,
        step: 1,
        decimals: 0,
        boostat: 5,
        maxboostedstep: 10,
        verticalbuttons: true,
        verticalupclass: 'fa fa-plus',
        verticaldownclass: 'fa fa-minus'
    });

  /*----------------------------------------------------*/
  // Appear
  /*----------------------------------------------------*/
  $('.animated').appear(function() {
    // console.log("111111111111");
      var elem = $(this);
      var animation = elem.data('animation');
      if ( !elem.hasClass('visible') ) {
        var animationDelay = elem.data('animation-delay');
        if ( animationDelay ) {
          setTimeout(function(){
              elem.addClass( animation + " visible" );
          }, animationDelay);
        } else {
          elem.addClass( animation + " visible" );
        }
      }
  });






});

/////////////////////// load
$(window).load(function() {

  /*----------------------------------------------------*/
  // flexslider
  /*----------------------------------------------------*/


  /////// flexslider
  $('#flexslider').flexslider({
    // start: function(){
    //   console.log("start");
    // },
    before: function(){
      // console.log("before");
    },
    after: function(){
      // console.log("after");
    },
    // end: function(){
    //   console.log("end");
    // },

    animation: "fade",
    slideshow: true,
    slideshowSpeed: 7000,
    animationDuration: 600,
    pauseOnAction: true,
    prevText: "",
    nextText: "",
    controlNav: true,
    directionNav: true
  });



});