document.addEventListener("DOMContentLoaded", e => {

	if (document.querySelector('.cart-cont'))
		return

	if($(window).width() < 1000){
		$(".text-page table").wrap('<div class="table-wrap"><div class="table-wrap__track"></div></div>')

		$(".table-wrap")
			.prepend('<div class="table-wrap__shadow table-wrap__shadow--left"></div>')
			.append('<div class="table-wrap__shadow table-wrap__shadow--right"></div>')

		let tableWrapTracks = document.querySelectorAll(".table-wrap__track");

		if (!tableWrapTracks.length)
			return

		for (let i = 0; i < tableWrapTracks.length; i++){

			let track = tableWrapTracks[i];
			
			if (track.scrollWidth > track.clientWidth){
				let wrap = track.closest(".table-wrap");

				let shadows = {
					right: wrap.querySelector(".table-wrap__shadow--right")
				};

				setShadowOpacity(shadows.right, track.scrollWidth - track.clientWidth)
			}

			track.addEventListener("scroll", function(e){
				let wrap = this.closest(".table-wrap");

				let shadows = {
					left: wrap.querySelector(".table-wrap__shadow--left"),
					right: wrap.querySelector(".table-wrap__shadow--right")
				};

				setShadowOpacity(shadows.right, this.scrollWidth - this.clientWidth - this.scrollLeft)
				setShadowOpacity(shadows.left, this.scrollLeft)
			})
		}
		
	}

})

const setShadowOpacity = (element, scrollWidth, offsetWidth = 30) => {
	element.style.opacity = scrollWidth / offsetWidth <= 1 ? scrollWidth / offsetWidth : 1
}