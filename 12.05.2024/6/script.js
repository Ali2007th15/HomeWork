document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".tooltip");
  buttons.forEach((b) => {
    b.addEventListener("mouseenter", function () {
        const tooltip = b.getAttribute('data-tooltip');
        const toolTipRect = document.createElement('div');
        toolTipRect.style.position = 'absolute';
        toolTipRect.style.visibility = 'hidden';
        toolTipRect.textContent = tooltip;
        toolTipRect.className = 'temp-tooltip';
        document.body.appendChild(toolTipRect);

        const rect = b.getBoundingClientRect();
        const toolTipHeight = toolTipRect.offsetHeight;

        document.body.removeChild(toolTipRect);

        if (rect.top - toolTipHeight > 0) {
          b.setAttribute('data-position', 'top');
        } else {
          b.setAttribute('data-position', 'bottom');
        }
    });

    b.addEventListener("click", function() {
      b.removeAttribute('data-position');
    });

  });
});
