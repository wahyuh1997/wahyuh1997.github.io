$(document).ready(function() {
$('.page-scroll').click (function(e) {

 var tujuan = $(this).attr('href');
 

 $('html, body').animate ({
 	scrollTop: $(tujuan).offset().top - 50
 },1000, 'easeInOutExpo');

 /*var elemenTujuan = $(tujuan);

 $('html,body').animate({
  scrollTop: elemenTujuan.offset().top - 50
*/
  e.preventDefault();
 });

});


//Paralax
//about
$(window).on('load', function() {
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');

});

//Scroll
$(window).scroll(function() {
	var wScroll = $(this).scrollTop();
	
	//jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+wScroll/1.8+'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+wScroll/1.1+'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+wScroll/0.6+'%)'
	});



	//portfolio
	if ( wScroll > $('.portfolio').offset().top - 200) {
		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function(){
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 150 * (i+1));

		});
	


		
	}
	
});