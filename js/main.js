function addTag(e,input) {
    if(e.which == 13 && input.value) {
        $('.team-members').append('<span>'+ input.value +'</span>')
        input.value = ''
    }    
}

function openBrowsing(btn) {
    let input = $(btn).closest('.input-group').find('.file-control');
    let label = $(btn).closest('.input-group').find('.file-label');
    console.log(label);
    label.addClass('d-block');
    label.removeClass('d-none');
    input.trigger("click");
    $(btn).closest('.input-group').find('.custom-text').css('display','none');
}

function changeInput(label) {
    let input = $(label).closest('.input-group').find('.custom-text');
    input.css('display','block');
    $(label).addClass('d-none');
    $(label).removeClass('d-block');
}

function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#image_selected')
          .attr('src', e.target.result)
          .css('display','block');

      };
      reader.readAsDataURL(input.files[0]);
    }
}  

function readName(e) {
    $(e).closest('div').find('span').text(e.files[0].name);
}
function readNameImage(e) {
    $(e).closest('div').find('label').text(e.files[0].name);
}

function addDay() {
    let counter = parseInt($('.days-count').text());
    counter += 1;
    $('.days-count').text(counter)
}
function deleteDay() {
    let counter = parseInt($('.days-count').text());
    if (counter > 1) {
        counter -= 1;
    $('.days-count').text(counter)
    } else {
        $('.days-count').text("1")
    }
    
}

$(document).ready(function () {
   'use strict';
   $('header .nav .dropdown-toggle').on('mouseover', function () {
       $(this).next('.dropdown-menu').addClass('show')
   })
   
   $('header .nav li').on('mouseleave', function () {
       $(this).find('.dropdown-menu').removeClass('show')
   })

   $('header .header-btns a').on('mouseover', function () {
       $(this).next('.dropdown-menu').addClass('show')
   })

   $('header .header-btns .dropdown').on('mouseleave', function () {
       $(this).find('.dropdown-menu').removeClass('show')
   })

   $('.main-carousel').owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        items : 1, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        rtl: true,
        lazyLoad: true,
     
    })

    $('.header-carousel').owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        items : 1, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        rtl: true,
        lazyLoad: true,
        
    })

    $('.intro-carousel').owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        nav: true,
        items : 1, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        rtl: true,
        lazyLoad: true,
      
    })

    $('.courses-carousel').owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        nav: true,
        dots: false,
        margin: 15,
        items : 3, 
        rtl: true,
        lazyLoad: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    $('.riada-carousel').owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        nav: true,
        dots: false,
        margin: 15,
        items : 5, 
        rtl: true,
        lazyLoad: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    $('.other-courses-carousel').owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        nav: true,
        dots: false,
        margin: 15,
        items : 4, 
        rtl: true,
        lazyLoad: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    $('.riadiat-tv-carousel').owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        nav: true,
        dots: false,
        margin: 15,
        items : 4, 
        rtl: true,
        lazyLoad: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    $('.pioneers-carousel').owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        nav: true,
        dots: false,
        margin: 20,
        items : 5, 
        rtl: true,
        lazyLoad: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    $('.customer-carousel').owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        nav: true,
        dots: true,
        margin: 20,
        items : 6, 
        rtl: true,
        lazyLoad: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    $('.testimonials-carousel').owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        items : 1, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        rtl: true,
        lazyLoad: true,
        nav: true,
        dots: false,
      
    })

    $('.interviews-carousel').owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        items : 3, 
        margin: 20,
        rtl: true,
        lazyLoad: true,
        nav: true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    $('.podcast-carousel').owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        items : 5, 
        margin: 20,
        rtl: true,
        lazyLoad: true,
        nav: true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })

    $('.partners-offers-carousel').owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        items : 3, 
        margin: 20,
        rtl: true,
        lazyLoad: true,
        nav: true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    $('.exhibitions-carousel').owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        items : 3, 
        margin: 20,
        rtl: true,
        lazyLoad: true,
        nav: true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })

    $('.projects-carousel').owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        items : 4, 
        margin: 12,
        rtl: true,
        lazyLoad: true,
        nav: true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })

    $('.templates-carousel').owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        items : 4, 
        margin: 20,
        rtl: true,
        lazyLoad: true,
        nav: true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    $('.blogs-carousel').owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        items : 3, 
        margin: 20,
        rtl: true,
        lazyLoad: true,
        nav: true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    $('.success-carousel').owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        items : 4, 
        margin: 20,
        rtl: true,
        lazyLoad: true,
        nav: true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    }),

    $('.sign-carousel').owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        nav: false,
        loop: true,
        autoplay: true,
        items : 1, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        rtl: true,
        lazyLoad: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })  
    
    $('.services-carousel').owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        nav: true,
        dots: false,
        margin: 15,
        items : 4, 
        rtl: true,
        lazyLoad: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })

    $('.providers-carousel').owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        nav: true,
        dots: false,
        margin: 20,
        items : 4, 
        rtl: true,
        lazyLoad: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4          }
        }
    })

    $('.companies-carousel').owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        nav: true,
        dots: false,
        margin: 20,
        items : 5, 
        rtl: true,
        lazyLoad: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })

    $('.offers-carousel').owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        nav: true,
        dots: false,
        margin: 20,
        items : 3, 
        rtl: true,
        lazyLoad: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
    
    $('.providers-features-carousel').owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        nav: true,
        dots: false,
        margin: 20,
        items : 3, 
        rtl: true,
        lazyLoad: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    var slider = $('#slider');
  // reference for thumbnail items
  var thumbnailSlider = $('#thumbnailSlider');
  //transition time in ms
  var duration = 300;

  // carousel function for main slider
  slider.owlCarousel({
   loop:false,
   nav:false,
   items: 1,
   rtl: true,
   margin: 20,
   lazyLoad: true,
  }).on('changed.owl.carousel', function (e) {
   //On change of main item to trigger thumbnail item
   thumbnailSlider.trigger('to.owl.carousel', [e.item.index, duration, true]);
  });

  // carousel function for thumbnail slider
  thumbnailSlider.owlCarousel({
   loop:false,
   nav:true,
   rtl: true,
   lazyLoad: true,
   margin: 20,
   items: 4,
  }).on('click', '.owl-item', function () {
   // On click of thumbnail items to trigger same main item
   slider.trigger('to.owl.carousel', [$(this).index(), duration, true]);

  }).on('changed.owl.carousel', function (e) {
   // On change of thumbnail item to trigger main item
   slider.trigger('to.owl.carousel', [e.item.index, duration, true]);
  });


  //These two are navigation for main items
  $('.slider-right').click(function() {
   slider.trigger('next.owl.carousel');
  });
  $('.slider-left').click(function() {
   slider.trigger('prev.owl.carousel');
  });






    

    $('#fileinput').change(function() {
        $('#selected_filename').text($('#fileinput')[0].files[0].name);
    });


    var current_fs, next_fs, previous_fs;
    var left, opacity, scale;
    var animating;

    $("#msform .next").click(function(){
        if(animating) return false;
        animating = true;
        
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();
        
        next_fs.show(); 
        current_fs.animate({opacity: 0}, {
            step: function(now, mx) {
                scale = 1 - (1 - now) * 0.2;
                left = (now * 50)+"%";
                opacity = 1 - now;
                current_fs.css({
            'transform': 'scale('+scale+')',
            'position': 'absolute'
        });
                next_fs.css({'left': left, 'opacity': opacity});
            }, 
            duration: 800, 
            complete: function(){
                current_fs.hide();
                animating = false;
            }, 
            easing: 'easeInOutBack'
        });
    });

    $(".previous").click(function(){
        if(animating) return false;
        animating = true;
        
        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();
        
        previous_fs.show(); 
        current_fs.animate({opacity: 0}, {
            step: function(now, mx) {
                
                scale = 0.8 + (1 - now) * 0.2;
                left = ((1-now) * 50)+"%";
                opacity = 1 - now;
                current_fs.css({'left': left});
                previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
            }, 
            duration: 800, 
            complete: function(){
                current_fs.hide();
                animating = false;
            }, 
            easing: 'easeInOutBack'
        });
    });

    $(".submit").click(function(){
        return false;
    })

    $('.add-question').on('click', function () {
        $(this).next('form').css({'display': 'block'});
        $(this).css({'display': 'none'})
    });

    $('.uploaded-content').on('click', '.submit-question', function () {
        $(this).parent('form').parent('div').find('.add-question').css({'display': 'block'});
        $(this).parent('form').css({'display': 'none'})
    })

    $('.expand').on('click', function () {
        $(this).parent('h5').parent('.session-data').toggleClass('expanded')
    })



});



// steps 
