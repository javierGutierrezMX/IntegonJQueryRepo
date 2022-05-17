$(() => {
    // const sizeMap = {
    //   'switcher-small': n => n / 1.4,
    //   'switcher-large': n => n * 1.4,
    //   'switcher-default': () => defaultSize
    // };
    // const $speech = $('div.speech');
    // const defaultSize = parseFloat($speech.css('fontSize'));
    // $('#switcher button')
    // .click((e) => {
    //   const num = parseFloat($speech.css('fontSize'));
    //   $speech.animate({
    //     fontSize: `${sizeMap[e.target.id](num)}px`
    //     });
    // });
    //     //preventeDefault evita comportamiento default, en este caso ir al link

    //     const $firstPara = $('p')
    //     .eq(1)
    //     .hide();

    //     $('a.more')
    //     .click((e) => {
    //     e.preventDefault();
    //     $firstPara.slideToggle('slow');
    //     $(e.target)
    //     .text(
    //     $(e.target).text() === 'read more' ?
    //     'read less' : 'read more'
    //     );
    //     });
      
        // $('div.label')
        // .click((e) => {
        // const $switcher = $(e.target).parent();
        // const paraWidth = $('div.speech p').outerWidth();
        // const switcherWidth = $switcher.outerWidth();
        // $switcher
        // .css('position', 'relative')
        // .animate({ borderWidth: '5px' }, 'slow')
        // .animate({ left: paraWidth - switcherWidth }, 'slow')
        // .animate({ height: '+=20px' }, 'slow');
        // });

        //caso 1
        // $('div.label')
        //   .click((e) => {
        //   const $switcher = $(e.target).parent();
        //   const paraWidth = $('div.speech p').outerWidth();
        //   const switcherWidth = $switcher.outerWidth();
        //   $switcher
        //   .css('position', 'relative')
        //   .fadeTo('fast', 0.5)
        //   .animate(
        //   { left: paraWidth - switcherWidth },
        //   { duration: 'slow', queue: false }
        //   )
        //   .fadeTo('slow', 1.0)
        //   .slideUp('slow')
        //   .css('backgroundColor', '#f00')
        //   .slideDown('slow');
        //   });
            
          //caso2
          // $('div.label')
          // .click((e) => {
          // const $switcher = $(e.target).parent();
          // const paraWidth = $('div.speech p').outerWidth();
          // const switcherWidth = $switcher.outerWidth();
          // $switcher
          // .css('position', 'relative')
          // .fadeTo('fast', 0.5)
          // .animate(
          // { left: paraWidth - switcherWidth },
          // { duration: 'slow', queue: false }
          // )
          // .fadeTo('slow', 1.0)
          // .slideUp('slow')
          // .queue((next) => {
          // $switcher.css('backgroundColor', '#f00');
          // next();
          // })
          // .slideDown('slow');
          // });
          
        //   $('div.label')
        //   .click((e) => {
        //     const $switcher = $(e.target)
        //       .parent();
        //     const paraWidth = $('div.speech p')
        //       .outerWidth();
        //     const switcherWidth = $switcher
        //       .outerWidth();
      
        //     $switcher
        //       .css('position', 'relative')
        //       .fadeTo('fast', 0.5)
        //       .animate(
        //         { left: paraWidth - switcherWidth },
        //         { duration: 'slow', queue: false }
        //       )
        //       .fadeTo('slow', 1.0)
        //       .slideUp('slow', ()  => {
        //         $switcher
        //           .css('backgroundColor', '#f00');
        //       })
        //       .slideDown('slow');
        //   });
      
        // $('p')
        //   .eq(2)
        //   .css('border', '1px solid #333')
        //   .click((e) => {
        //     $(e.target)
        //       .next()
        //       .slideDown('slow', () => {
        //         $(e.target)
        //           .slideUp('slow');
        //       });
        //   });
        // $('p')
        //   .eq(3)
        //   .css('backgroundColor', '#ccc')
        //   .hide();

// 1. Alter the stylesheet to hide the contents of the page initially. When the page is
// loaded, fade in the contents slowly.
//$("#container").fadeTo(5000,0);

// 2. Give each paragraph a yellow background only when the mouse is over it.
$('p').hover(
  function () {
    $(this).css("background-color", "yellow");
    }, function(){
      $(this).css("background-color", "white");
    }
)

// 3. Make a click on the title (<h2>) and simultaneously fade it to 25 percent opacity
// and grow its left-hand margin to 20px. Then, when this animation is complete,
// fade the speech text to 50 percent opacity.
    $('h2')
          .click((e) => {
          const $switcher = $(e.target);
          const paraWidth = $('h2').outerWidth();
          // const switcherWidth = $switcher.outerWidth();
         
          $switcher.queue((next) => {
            $switcher
            .fadeTo('slow', 0.25)
            .animate(
            {marginLeft: "+=20px"},
            { duration: 'fast', queue: true }
            )
          next();
          })
          $switcher
          .animate(
            {marginLeft: "-=20px"},
            { duration: 'fast', queue: true }
            )
            .fadeTo('slow', 50)
          });

// 4. Here's a challenge for you. React to presses of the arrow keys by smoothly
// moving the switcher box 20 pixels in the corresponding direction. The key codes
// for the arrow keys are: 37 (left), 38 (up), 39 (right), and 40 (down).

  });
