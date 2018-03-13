function linkHandling(){
  $(".routing").on('click', function(event){
    event.preventDefault();
    var targetRoute = $(this).attr('href');

    //if(window.location.pathname == '/') {
      // we are already on the requested page
    //} else {
      gotoRoute(targetRoute)
    //}
  })

  $('.scroll').on('click', function(event){
    event.preventDefault();
    var scrollTarget = $(this).attr('href');

    var scrollTarget = scrollTarget.split('#')[1];
    $('html, window').animate({
      scrollTop: $('#core-' + scrollTarget).position().top
    }, 1000)
  })
}



function gotoRoute(targetRoute) {

  
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
      
    }
    // $('.top-level').fadeOut(function(){
    // });
  });


  history.pushState(null, null, targetRoute);

}

function routing() {
  var targetRoute = window.location.pathname;
  gotoRoute(targetRoute);
}

function weather() {
  var weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?zip=11211,us&APPID=4dc3da012d000e076504731cc55840e2';
  var wordAPI = 'https://api.datamuse.com/words?rel_jjb=';
  $.get(weatherAPI, function (response) {
    var currentWeather = response.weather[0].main
    $.get(wordAPI + currentWeather + '&topics=weather', function (response) {
      var weatherAdjective = response[0].word.toLowerCase();
      var weatherEmoji = '☁️';

      if(weatherAdjective.indexOf('rain') > -1) {
        weatherEmoji = '🌧';
      }
      if (weatherAdjective.indexOf('cold') > -1) {
        weatherEmoji = '🌬️';
      }
      if (weatherAdjective.indexOf('sun') > -1) {
        weatherEmoji = '🌞';
      }
      if (weatherAdjective.indexOf('cloud') > -1) {
        weatherEmoji = '🌥️';
      }
      if (weatherAdjective.indexOf('snow') > -1) {
        weatherEmoji = '❄️';
      }
      if (weatherAdjective.indexOf('wet') > -1) {
        weatherEmoji = '💦';
      }
      $('.weather').text(weatherEmoji + ' ' + weatherAdjective);
    });

  })
}


function init() {
  // start the engines
  routing();
  weather();
  linkHandling();
}
