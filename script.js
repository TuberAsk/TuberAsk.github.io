document.addEventListener("DOMContentLoaded", function () {
  const mouse = document.querySelector(".mouse");

  document.addEventListener("mousemove", function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const randomColor = getRandomRainbowColor();
    mouse.style.backgroundColor = randomColor;
    mouse.style.opacity = "1";
    mouse.style.transform = `translate(${x - 10}px, ${y - 10}px)`;
  });

  document.addEventListener("mouseout", function () {
    mouse.style.opacity = "0";
  });

  function getRandomRainbowColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
