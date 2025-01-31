// Smooth Scrolling
// GSAP
// Scroll Trigger

// function cursor() {
//   window.addEventListener("mousemove", function (dets) {
//     console.log(dets);
//   });
// }
// cursor();

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
