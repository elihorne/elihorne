/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        // Creates Captions from Alt tags
        $(".post-content img").each(function() {
            // Let's put a caption if there is one
            if($(this).attr("alt"))
              $(this).wrap('<figure class="image"></figure>')
              .after('<figcaption>'+$(this).attr("alt")+'</figcaption>');
        });
    });

    var feed = new Instafeed({
      get: 'user',
      userId: '873338',
      limit: 9,
      resolution: 'low_resolution',
      accessToken: '873338.1677ed0.f9bee342403344908de6c751914bf522',
      template: '<a class="insta" href="{{link}}"><img src="{{image}}"</a>'
    });
    //feed.run();

}(jQuery));
