function linkHandling(){
  $(".routing").on('click', function(event){
    event.preventDefault();
    var targetRoute = $(this).attr('href');

    //if(window.location.pathname == '/') {
      // we are already on the requested page
    //  console.log('already on the home page page, scroller')
    //} else {
      gotoRoute(targetRoute)
    //}
  })

  $('.scroll').on('click', function(event){
    event.preventDefault();
    var scrollTarget = $(this).attr('href');

    var scrollTarget = scrollTarget.split('#')[1];
    console.log('scrollTarget = ' + scrollTarget);
    $('html, window').animate({
      scrollTop: $('#core-' + scrollTarget).position().top
    }, 1000)
  })
}



function gotoRoute(targetRoute) {

  console.log('goto: ' + targetRoute)

  $('html, window').animate({
    scrollTop: 0
  }, 1000)

  $('.staging').fadeOut('slow', function(){
    $('.top-level').hide();
    if(targetRoute == '/') {
      $('.staging').fadeIn();

      // show home
      $('.work-logos').removeClass('dark').addClass('pull-up');
      $('.top-level.section-home').fadeIn(500, function(){
        $('.top-level.section-home .content').fadeIn('slow');
        $('.work-logos').animate({
          'opacity' : 0.85
        }, 1000);
      });

    } else {
      $('.work-logos').addClass('dark');
      $('.work-logos').removeClass('pull-up');
      var topLevel = targetRoute.split('/')[1];
      var secondLevel = targetRoute.split('/')[2];
      $('.top-level.work-'+secondLevel).fadeIn();
      $('.top-level.work-'+secondLevel).find('.content').fadeIn();
      $('.staging').fadeIn();
      //console.log('hello?');

    }
    // $('.top-level').fadeOut(function(){
    // });
  });


  history.pushState(null, null, targetRoute);

}

function routing() {
  var targetRoute = window.location.pathname;
  console.log('routing: arrived at ' + targetRoute);
  gotoRoute(targetRoute);
}


function init() {
  // start the engines
  routing();
  linkHandling();
}
