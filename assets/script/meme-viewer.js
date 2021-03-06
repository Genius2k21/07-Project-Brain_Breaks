mySwiper = new Swiper('.swiper-container', {
	direction: "vertical",
  loop: false,
  observer: true,
  observeParents: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

})

setTimeout(() => {
	mySwiper.update()
}, 500)