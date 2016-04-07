var n = 1,
	w,x,l, lw;

var cont_width = 298,
	cont_height = 212,
	speed = 'slow';
		
/* Zoom Effect */		
var zoom_width = 350,
    zoom_height = 250;
	
$(document).ready(function(e) {
		lw = $('.slider ul li').outerWidth() + 60;
		$('.slider ul li:first-child').addClass('show');
		sw = $(window).outerWidth();
		x = (sw - lw)/2 - (zoom_width - cont_width) - 10;
		l = $('.slider ul li').length;
		w = l * lw + (zoom_width - cont_width);
		console.log(l)
	$('.slider ul').attr('style','left:'+x+'px');
	$('.slider ul').width(w);
});


$('.next').bind('click', function(el,ev) {
		anNext($(this),ev)
})
	
function anNext(obj,ev) {
	if(n==l || n > 1) {
		obj.unbind(ev);
		$('.slider ul').animate({ "left": "+="+lw+"" }, speed, function(){
			obj.click( function() {anNext(obj)})
		});
		n = n - 1;
		show(n)
	} 
}

$('.prev').bind('click', function(el,ev) {
		anim($(this),ev)
})
	
function anim(obj,ev) {
	if(n == 1 || n < l) {
		obj.unbind(ev);
		$('.slider ul').animate({ "left": "-="+lw+"" }, speed, function(){
			obj.click( function() { anim(obj)})
		});
		n = n + 1;
		show(n);
	}
}


function show(n) {
	$('.slider ul li.show img').animate({width: cont_width, height: cont_height},speed)
	$('.slider ul li:nth-child('+n+') img').animate({width: zoom_width, height: zoom_height,},speed)
	
	$('.slider ul li.show').animate({marginTop: "0"})
	$('.slider ul li:nth-child('+n+')').animate({marginTop: "-20px"})
	
	$('.slider ul li.show').removeClass('show');
	$('.slider ul li:nth-child('+n+')').addClass('show');
}