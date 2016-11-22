//Check if it's mobile - don't display fullscreen on mobile
var isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
if (!isMobile) {
	//Display fullscreen div with selected image full screen when clicked
	$('.pic img').click(function () {
		$('#Fullscreen').css('height', $(window).height());
		$('#Fullscreen').css('width', $(window).width());
		var src = $(this).attr('src');
		$('#Fullscreen').css('background-image', 'url(' + src + ')');
		$('#Fullscreen').fadeIn();
		$('#dimBackground').fadeIn();
	});
	//Hide when clicked again
	$('#Fullscreen').click(function () {
		$(this).fadeOut();
		$('#dimBackground').fadeOut();
	});
}