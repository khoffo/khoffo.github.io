
const toggleBtn = document.querySelector(".toggle-btn");
const basicPrice = document.querySelector(".first-div h1");
const profPrice = document.querySelector("#second-div h1");
const masterPrice = document.querySelector(".third-div h1");

let isMonthly = true;

toggleBtn.addEventListener("click", function () {
  isMonthly = !isMonthly;

  if (isMonthly) {
    basicPrice.innerHTML = "<span class='dollar'>$</span> 19.99";
    profPrice.innerHTML = "<span class='dollar'>$</span> 24.99";
    masterPrice.innerHTML = "<span class='dollar'>$</span> 39.99";
    toggleBtn.classList.remove("slide-right");
  } else {
    basicPrice.innerHTML = "<span class='dollar'>$</span> 199.99";
    profPrice.innerHTML = "<span class='dollar'>$</span> 249.99";
    masterPrice.innerHTML = "<span class='dollar'>$</span> 399.99";
    toggleBtn.classList.add("slide-right");
  }
});






