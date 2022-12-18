const counter = document.getElementById("count");
const IncBtn = document.getElementById("inc-btn");
const DecBtn = document.getElementById("dec-btn");

let count = 0;

IncBtn.addEventListener("click", () => {
  count = count + 1;
  counter.textContent = count;
});

DecBtn.addEventListener("click", () => {
  count = Math.max(0, count - 1);
  counter.textContent = count;
});
