document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const trailSize = 10; // Number of trail elements
  const trail = createTrail(trailSize);

  document.addEventListener("mousemove", function (e) {
    const x = e.clientX;
    const y = e.clientY;

    updateTrail(x, y);
  });

  document.addEventListener("mouseout", function () {
    clearTrail();
  });

  function createTrail(size) {
    const trail = [];
    for (let i = 0; i < size; i++) {
      const trailElement = document.createElement("div");
      trailElement.className = "trail";
      body.appendChild(trailElement);
      trail.push(trailElement);
    }
    return trail;
  }

  function updateTrail(x, y) {
    for (let i = trail.length - 1; i > 0; i--) {
      const prevTrail = trail[i - 1];
      const currentTrail = trail[i];

      currentTrail.style.left = prevTrail.style.left;
      currentTrail.style.top = prevTrail.style.top;
    }

    trail[0].style.left = x - 5 + "px";
    trail[0].style.top = y - 5 + "px";
  }

  function clearTrail() {
    for (const trailElement of trail) {
      trailElement.style.left = "-100px";
      trailElement.style.top = "-100px";
    }
  }
});
