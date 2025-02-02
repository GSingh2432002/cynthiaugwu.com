var timeout;
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstPageAnimation() {
  var tl1 = gsap.timeline();

  tl1.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut,
  });
  tl1.to(".bounding-element", {
    y: 0,
    ease: Expo.easeInOut,
    duration: 2,
    delay: -1,
    stagger: 0.2,
  });
  tl1.from("#hero-footer", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    delay: -1,
    ease: Expo.easeInOut,
  });
}

function circleScaling() {
  var xscale = 1;
  var yscale = 1;
  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);

    var xdiff = Math.abs(dets.clientX - xprev);
    var ydiff = Math.abs(dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    xscale = gsap.utils.clamp(0.8, 1.2, xdiff / 50);
    yscale = gsap.utils.clamp(0.8, 1.2, ydiff / 50);

    updateCursor(dets.clientX, dets.clientY, xscale, yscale);

    timeout = setTimeout(function () {
      updateCursor(dets.clientX, dets.clientY, 1, 1);
    }, 100);
  });
}

function updateCursor(x, y, xscale, yscale) {
  const cursor = document.querySelector(".cursor");
  if (!cursor) return;

  cursor.style.transform = `translate(${x}px, ${y}px) scale(${xscale}, ${yscale})`;
}

function circleMouseFollower() {
  const cursor = document.querySelector(".cursor");
  if (!cursor) {
    console.error("Cursor element not found!");
    return;
  }

  cursor.style.opacity = 1;

  window.addEventListener("mousemove", (dets) => {
    requestAnimationFrame(() => {
      updateCursor(dets.clientX, dets.clientY, 1, 1);
    });
  });

  window.addEventListener("mouseout", () => {
    cursor.style.opacity = 0;
  });

  window.addEventListener("mouseover", () => {
    cursor.style.opacity = 1;
  });
}

// Handle cursor tracking & visibility.
circleMouseFollower();

// Adds the scaling effect based on movement speed.
circleScaling();

// Runs GSAP animations whenever the page loads.
firstPageAnimation();

// Animation for Second Page Only.
document.querySelectorAll(".element").forEach(function (element) {
  element.addEventListener("mousemove", function (dets) {
    gsap.to(element.querySelector("img"), {
      opacity: 1,
      ease: Power1,
    });
  });
});
