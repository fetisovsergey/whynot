$(document).on('turbolinks:load', function() {

  $(".image_gallery").fancybox({
    closeBtn : false,
    openEffect: 'elastic',
     padding : 0,
     parent: 'body'
    });

    $('.dropdown').hover(function() {
        $(this).addClass('open');
    },
    function() {
        $(this).removeClass('open');
    });


///PROGRESSBAR

  var ready;
        ready = function()
        {
             var force = new ProgressBar.Line('#force', {
                color: '#fe0000',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 4,
                trailWidth: 1,
                easing: 'easeInOut',
                duration: 1400,
                text: {
                  style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#fe0000',
                    transform: null
                  },
                  autoStyleContainer: false
                },
                              from: { color: '#ff6666', width: 1 },
                              to: { color: '#fe0000', width: 1 },
                              step: function(state, circle) {
                                circle.path.setAttribute('stroke', state.color);
                                circle.path.setAttribute('stroke-width', state.width);

                                var value = Math.round(circle.value() * 100);
                                if (value === 0) {
                                  circle.setText('');
                                } else {
                                  circle.setText(value + '%');
                                }

                }
            });
           
            force.animate(0.95);

            var rastyajka = new ProgressBar.Line('#rastyajka', {
                color: '#fe0000',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 4,
                trailWidth: 1,
                easing: 'easeInOut',
                duration: 1400,
                text: {
                  style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                     color: '#fe0000',
                    transform: null
                  },
                  autoStyleContainer: false
                },
                              from: { color: '#ff6666', width: 1 },
                              to: { color: '#fe0000', width: 1 },
                              step: function(state, circle) {
                                circle.path.setAttribute('stroke', state.color);
                                circle.path.setAttribute('stroke-width', state.width);

                                var value = Math.round(circle.value() * 100);
                                if (value === 0) {
                                  circle.setText('');
                                } else {
                                  circle.setText(value + '%');
                                }

                }
            });
           
            rastyajka.animate(0.90);


            var cardio = new ProgressBar.Line('#cardio', {
                color: '#fe0000',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 4,
                trailWidth: 1,
                easing: 'easeInOut',
                duration: 1400,
                text: {
                  style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#fe0000',
                    transform: null
                  },
                  autoStyleContainer: false
                },
                              from: { color: '#ff6666', width: 1 },
                              to: { color: '#fe0000', width: 1 },
                              step: function(state, circle) {
                                circle.path.setAttribute('stroke', state.color);
                                circle.path.setAttribute('stroke-width', state.width);

                                var value = Math.round(circle.value() * 100);
                                if (value === 0) {
                                  circle.setText('');
                                } else {
                                  circle.setText(value + '%');
                                }

                }
            });
           
            cardio.animate(0.85);


            var plastika = new ProgressBar.Line('#plastika', {
                color: '#fe0000',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 4,
                trailWidth: 1,
                easing: 'easeInOut',
                duration: 1400,
                text: {
                  style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#fe0000',
                    transform: null
                  },
                  autoStyleContainer: false
                },
                              from: { color: '#ff6666', width: 1 },
                              to: { color: '#fe0000', width: 1 },
                              step: function(state, circle) {
                                circle.path.setAttribute('stroke', state.color);
                                circle.path.setAttribute('stroke-width', state.width);

                                var value = Math.round(circle.value() * 100);
                                if (value === 0) {
                                  circle.setText('');
                                } else {
                                  circle.setText(value + '%');
                                }

                }
            });
           
            plastika.animate(0.9);
        };
        $(document).ready(ready);
//////////

// SLIDESHOW
   $('.carousel').slick({
      dots: true,
      infinite: true,
      lazyLoad: 'ondemand',
      speed: 300,
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
});
