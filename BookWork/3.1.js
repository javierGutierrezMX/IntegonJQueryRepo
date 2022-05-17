$(() => {
  $('#switcher-default')
  .addClass('selected')
  .on('click', () => {
  $('body')
  .removeClass('narrow')
  .removeClass('large');
  });

  $('#switcher-narrow')
  .on('click', () => {
  $('body')
  .addClass('narrow')
  .removeClass('large');
  });

  $('#switcher-large')
  .on('click', () => {
  $('body')
  .removeClass('narrow')
  .addClass('large');
  });
  
  //this no funciona con arrow
  $('#switcher button')
  .on('click', function () {
  $('#switcher button')
  .removeClass('selected');
  $(this)
.addClass('selected');


  const triggers = {
  D: 'default',
  N: 'narrow',
  L: 'large'
  };

  $(document)
  .keyup((e) => {
  const key = String.fromCharCode(e.which);
  if (key in triggers) {
  $(`#switcher-${triggers[key]}`).click();
  }
  });
  });

  //1. When Charles Dickens is clicked, apply the selected style to it.
  $('#header')
  .on(('click.autor'),(e) => {
    $(e.currentTarget).children('div').addClass('selected');
  })
  //2. When a chapter title (<h3 class="chapter-title">) is double-clicked, toggle
  //the visibility of the chapter text.
    $('.chapter-title')
    .dblclick(function(){
      $(this).nextAll('p')
      .toggleClass('hidden');
    })

  //3. When the user presses the right arrow key, cycle to the next body class. The key
 //code for the right arrow key is 39.

 let Clases = function () {
   let body = $('body');
   if(body.hasClass('narrow')){
     body.removeClass().addClass('large');
   }
   else if(body.hasClass('large')){
     body.removeClass()
   }
   else {
     body.removeClass().addClass('narrow');
   }
 }

 $(document).keyup( function (event){
      if(event.which == 39){
        Clases();
      }
   }
 )

});
