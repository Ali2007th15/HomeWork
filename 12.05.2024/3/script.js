document.addEventListener("DOMContentLoaded", () => {
  const field = document.getElementById("field");
  const ball = document.getElementById("ball");

  field.addEventListener("click", function (event) {
    const fieldRect = field.getBoundingClientRect();
    const ballSize = ball.offsetWidth;

    let newX = event.clientX - fieldRect.left - ballSize / 2;
    let newY = event.clientY - fieldRect.top - ballSize / 2;

    if (newX < 0) {
      newX = 0;
    }
    if (newY < 0) {
        newY = 0;
    } 
    if (newX + ballSize > fieldRect.width) {
        newX = fieldRect.width - ballSize;
    } 
    if (newY + ballSize > fieldRect.height) {
        newY = fieldRect.height - ballSize;
    }
    

    ball.style.left = `${newX}px`;
    ball.style.top = `${newY}px`;
  });
});
