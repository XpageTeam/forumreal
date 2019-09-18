import $ from "jquery"
import is from "is_js"
import "selectize/dist/js/selectize.min.js"
import "slick-carousel";
import "slick-carousel/slick/slick.css";

import "./standart-page.js"

window.$ = $;
window.jQuery = $;


$(function(){

	$('#menu_label').click(function(){
		$('body').toggleClass('js__menu-open');
	})

	var menuClone = $('.menu_tLine').clone();
	// var catalogmenuClone = $('.catalog-menu').clone();
	// $('.mobile-menu').prepend(catalogmenuClone);
	$('.mobile-menu').prepend(menuClone);

	$('.mobile-menu .sub_menu').closest('.menu__item').addClass('js__has-sub-menu');
	$('.js__has-sub-menu > a').addClass('js__link');



	$('.menu__item').each(function(i,el){
		var $this = $(el);

		var link = $this.find('.js__link').clone();

		$this.find('.sub_menu').prepend(link);
		
	})

	$('.js__has-sub-menu > a').removeAttr('href');



	$('body').on('click', '.menu__item > a', function(e){
		var $this = $(this);

		$this.closest('.menu__item').addClass('js__sub-menu-open');
		$('body').addClass('js__sub-open');
	})


	$('.mobile-menu .sub_menu').prepend('<li class="js__back"><a class="menu__link">Назад</a></li>');


	$('.js__back').click(function(){

		var $this = $(this);

		$this.closest('.menu__item').removeClass('js__sub-menu-open');
		$('body').removeClass('js__sub-open');
	})





if (!is.touchDevice())
	
	$(".selectize").selectize();


	$(".slider-3").each(function(i,el){

		var $this = $(el);

		$this.find(".slider__list").on('init', slick => {

		}).slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			appendArrows: $this.find('.slider-arrow'),
			responsive: [
		       {
		         breakpoint: 600,
		         settings: {
		           slidesToShow: 1,
		         }
		       },
		       
		    ]
		})



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

	$(".otzyvy ul").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		appendArrows: $('.otzyvy .sl_nav_hold .slider-arrow'),
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

	$('.appartament-slick-cont').each(function(i,el){
		var $this = $(el);

		$this.find(".appartament-slick-list").on('init', slick => {

		}).slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			appendArrows: $this.find('.appartament-slick-arrow'),
			infinite: true,
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
		           // appendArrows: $this.find('.appartament-slick-list'),
		         }
		       },
		       
		    ]
		})

	})









})
