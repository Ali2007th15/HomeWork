let input = document.getElementById("input-text");
input.addEventListener("input", function (event) {
  const inputField = event.target;
  const inputValue = inputField.value;
  const filteredValue = inputValue.replace(/\d/g, "");
  inputField.value = filteredValue;
});
