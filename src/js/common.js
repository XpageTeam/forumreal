import $ from "jquery"
import is from "is_js"
import "selectize/dist/js/selectize.min.js"
import "slick-carousel";
import "slick-carousel/slick/slick.css";

window.$ = $;
window.jQuery = $;


if (!is.touchDevice())
	require("selectize/dist/css/selectize.css")

$(function(){


	$(".slider-3 .slider__list").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		appendArrows: $('.slider-arrow'),
		responsive: [
			{
	         breakpoint: 1200,
	         settings: {
	           slidesToShow: 2,
	         }
	       },
	       {
	         breakpoint: 600,
	         settings: {
	           slidesToShow: 1,
	         }
	       },
	       
	    ]
	})

	$(".best-offer__list").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		appendArrows: $('.best-offer .slider-arrow'),
		responsive: [
			{
	         breakpoint: 1200,
	         settings: {
	           slidesToShow: 2,
	         }
	       },
	       {
	         breakpoint: 600,
	         settings: {
	           slidesToShow: 1,
	         }
	       },
	       
	    ]
	})

})



(function() {

  // проверяем поддержку
  if (!Element.prototype.closest) {

    // реализуем
    Element.prototype.closest = function(css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }

})();

try{
	document.addEventListener("DOMContentLoaded", e => {
		require("./jquery.fancybox.js")
		require("../css/jquery.fancybox.css")

		$(".fancybox").fancybox({
			trapFocus: false,
			touch: false,
			loop: true,
			buttons: ["fullscreen", "slideShow", "close", "thumbs"],
			image: {
				preload: true,
			},
			transitionEffect: "slide",
		})


		// if (!is.touchDevice()){
		// 	window.selectizeOpen = false;
			// $(".selectize").selectize()

		// }

		alert(1)
				
		

		
	})
}catch(e){
	console.log(e)
}