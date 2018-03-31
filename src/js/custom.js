const {WOW} = require('./wow.min.js');

// ISOTOPE FILTER
jQuery(document).ready(function ($) {
  if ($('.iso-box-wrapper').length > 0) {

    var $container = $('.iso-box-wrapper'),
      $imgs = $('.iso-box img');

    $container.imagesLoaded(function () {

      $container.isotope({
        layoutMode: 'fitRows',
        itemSelector: '.iso-box'
      });

      $imgs.load(function () {
        $container.isotope('reLayout');
      })

    });

    //filter items on button click

    $('.filter-wrapper li a').click(function () {

      var $this = $(this), filterValue = $this.attr('data-filter');

      $container.isotope({
        filter: filterValue,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false,
        }
      });

      // don't proceed if already selected 

      if ($this.hasClass('selected')) {
        return false;
      }

      var filter_wrapper = $this.closest('.filter-wrapper');
      filter_wrapper.find('.selected').removeClass('selected');
      $this.addClass('selected');

      return false;
    });
  }
});

var pagepilingChildrenNum = 0;
jQuery(document).ready(function ($) {
  pagepilingChildrenNum = $("#pagepiling .section").length;
  try {
    $('#pagepiling').pagepiling(function () {
      $('#pagepiling').pagepiling({
        navigation: {
          'position': 'left',
          'bulletsColor': 'white'
        },
        onLeave: function (index, nextIndex, direction) {
          //after leaving section 2
          if (index === pagepilingChildrenNum - 2 && direction == 'down') {
            nextIndex = index;
          }
        }
      });
    });
    $.fn.pagepiling.setKeyboardScrolling(true);
    $.fn.pagepiling.setAllowScrolling(true);
  } catch (e) {
    console.log(e);
  }
});

$(window).load(function () {
  $('#loader').fadeOut(1000); // set duration in brackets  
  $('#overlay-for-loader').fadeOut(1000);

  for (i = 0; i < content.length; i++) {
    if (content[i].useVideo) {
      $('#' + content[i].index).vide({
        mp4: content[i].video,
      }, {
        posterType: 'png'
      });
    }
  }
});


// jQuery to collapse the navbar on scroll //
$(window).scroll(function () {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});


/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function () {

  // ------- WOW ANIMATED ------ //
  wow = new WOW(
    {
      mobile: false
    });
  wow.init();


  // HIDE MOBILE MENU AFTER CLIKING ON A LINK
  $('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
  });


  // NIVO LIGHTBOX
  $('.iso-box-section a').nivoLightbox({
    effect: 'fadeScale',
  });


  // HOME BACKGROUND SLIDESHOW
  $(function () {
    jQuery(document).ready(function () {
      for (i = 0; i < content.length; i++) {
        var images = [];
        if (content[i].useVideo) {
          images.push(content[i].tmpImage.src);
        }
        else {
        for (j = 0; j < content[i].images.length; j++) {
          images.push(content[i].images[j].src);
        }
      }
        $('#' + content[i].index).backstretch(
          images, { duration: 2000, fade: 750 }
        );
      }
    });
  })

});

$(window).resize(function () {
  closeNav();
});


var openNav = function() {
  document.getElementById("pagepiling").style.marginLeft = $('#mySidenav').width() + "px";
  document.getElementById("nav-button").style.marginLeft = $('#mySidenav').width() + "px";
  console.log("\"" + $('#mySidenav').width() + "\"");
  setTimeout(function () {
    $("#nav-button").attr("onclick", "closeNav()");
    $("#pagepiling").attr("onclick", "closeNav()");
  }, 1);
}

var closeNav = function() {
  document.getElementById("pagepiling").style.marginLeft = "0";
  document.getElementById("nav-button").style.marginLeft = "0";
  $("#nav-button").attr("onclick", "openNav()");
  $("#pagepiling").attr("onclick", "null");
}

window.openNav = openNav;
window.closeNav = closeNav;