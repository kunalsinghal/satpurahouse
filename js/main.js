$(document).ready(function() {
	$('#header').load('header.html',function () {
	  var $obj = $('#menu');
	  var top = $obj.offset().top - parseFloat($obj.css('marginTop').replace(/auto/, 0));
	});
}); 