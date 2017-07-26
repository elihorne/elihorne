function brandNav() {
  var brandName = 'Eli Horne';
  var navItems = ['work', 'video', 'articles', 'contact'];

  var brandNameHTML = '<a href="/" class="brand-name">'+brandName+'</a>';
  var navHTML = '<ol class="brand-nav"></ol>';

  $('.brand-nav-wrapper').append(brandNameHTML + navHTML);
  $.each(navItems, function(index, item){
    $('.brand-nav').append('<li><a href="#'+item+'-section">'+item+'</a></li>');
  });
}

function fetchYouTube(){
  $(document).ready(function(){
	$(".youmax").youmax({
		tabs:[
			{
			type:"youtube-channel-uploads",
			link:"https://www.youtube.com/user/elihorne",
			name:"Uploads",
			}
		],
		defaultTab:"Uploads",
		channelLinkForHeader:"https://www.youtube.com/user/google",
		apiKey:"AIzaSyDTJ1iUb2Mb5MYhD1k_IEDMUi3BC_LT79M",
		maxResults:"3",
		videoDisplayMode:"popup",
		hideHeader:true,
		hideTabs:true,
		hideLoadingMechanism:true,
	});
});
}


function init() {
  // start the engines
  brandNav();
  fetchYouTube();
}
