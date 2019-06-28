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
	         breakpoint: 600,
	         settings: {
	           slidesToShow: 1,
	         }
	       },
	       
	    ]
	})

	$(".slider-2 .slider__list").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		appendArrows: $('.slider-2 .slider-arrow'),
		responsive: [
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
	         breakpoint: 1000,
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
// 	var calculator = new Vue({
// 		el: '#calculator',
// 		data: {
// 			price: '',
// 			downPayment: '',
// 			tradeIn: '',
// 			length: '60',
// 			rate: '',
// 			calcPayment: ''
// 		},
// 		computed: {
// 			calcPayment: function(e){
// 				var p = this.price - this.downPayment - this.tradeIn;
// 				var r = this.rate / 1200;
// 				var n = this.length;
// 				var i = Math.pow((1+r),n);
// 				var payment = ( p * r * i) / (i - 1) || 0;
// 				return currencyFormat(payment);
// 			},
// 			numFormat: function(e){
// 				e.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
// 			}
// 		}
		
// 	});

// function currencyFormat (num) {
//     return "$" + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
// }


// (function() {

//   // проверяем поддержку
//   if (!Element.prototype.closest) {

//     // реализуем
//     Element.prototype.closest = function(css) {
//       var node = this;

//       while (node) {
//         if (node.matches(css)) return node;
//         else node = node.parentElement;
//       }
//       return null;
//     };
//   }

// })();

// try{
// 	document.addEventListener("DOMContentLoaded", e => {
// 		require("./jquery.fancybox.js")
// 		require("../css/jquery.fancybox.css")

// 		$(".fancybox").fancybox({
// 			trapFocus: false,
// 			touch: false,
// 			loop: true,
// 			buttons: ["fullscreen", "slideShow", "close", "thumbs"],
// 			image: {
// 				preload: true,
// 			},
// 			transitionEffect: "slide",
// 		})


// 		// if (!is.touchDevice()){
// 		// 	window.selectizeOpen = false;
// 			// $(".selectize").selectize()

// 		// }

// 		alert(1)
				
		

		
// 	})
// }catch(e){
// 	console.log(e)
// }