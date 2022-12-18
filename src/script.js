const counter = document.getElementById("count");
const btn = document.getElementById("btn");

let count = 0;

btn.addEventListener("click", () => {
  count = count + 1;
  counter.textContent = count;
});
