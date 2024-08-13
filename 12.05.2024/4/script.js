document.addEventListener("DOMContentLoaded", function () {
  let lights = document.querySelectorAll(".light");
  let colors = ['red', 'yellow', 'green']
  let currentIndex = 0;

  document
    .getElementById("next-traffic")
    .addEventListener("click", function () {
      lights[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % lights.length;
      lights[currentIndex].classList.add("active");

      let prevIndex = (currentIndex === 0) ? lights.length - 1 : currentIndex - 1;
      lights[prevIndex].style.backgroundColor = colors[prevIndex];
      lights[currentIndex].style.backgroundColor = 'gray';
    });
});
