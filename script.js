function circleMouseFollower() {
  const cursor = document.querySelector(".cursor");
  cursor.style.opacity = 0;

  window.addEventListener("load", () => {
    cursor.style.opacity = 1;
  });

  window.addEventListener("mousemove", (dets) => {
    // Using requestAnimationFrame for smooth animation
    requestAnimationFrame(() => {
      cursor.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) translate(-50%, -50%)`;
    });
  });
  window.addEventListener("mouseout", () => {
    cursor.style.opacity = 0;
  });

  window.addEventListener("mouseover", () => {
    cursor.style.opacity = 1;
  });
}

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
circleMouseFollower();
