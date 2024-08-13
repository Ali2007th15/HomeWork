let modalButton = document.getElementById("openmodal");
let modalCloseButton = document.getElementById("closemodal");
let modal = document.querySelector(".container-modal");

modalButton.addEventListener("click", function () {
  modal.style.display = `flex`;
});

modalCloseButton.addEventListener("click", function () {
  modal.style.display = `none`;
});
