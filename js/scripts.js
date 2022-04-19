// My Scripts
const banner = document.querySelector('.banner');

const title = document.querySelector('.title');

const letters = document.querySelectorAll('.letters');

const Time_l = new TimelineMax();

Time_l
  .fromTo(banner,1,{height:"0%"},{height:"80%",ease: Power2.easeInOut})
.fromTo(banner, 1.2, {width:"100%"},{width: "80%", ease: Power2.easeInOut}) .staggerFrom(letters, 1, {opacity:0, ease: Back.easeOut.config(1.7)}, 0.2, "-=0.5");