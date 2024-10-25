document.addEventListener("DOMContentLoaded", function () {
  const colorPicker = document.getElementById("favcolor");
  const changeColorBtn = document.getElementById("changeColorBtn");

  changeColorBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = colorPicker.value;
  });
});
