const counter = document.getElementById("count");
const IncBtn = document.getElementById("inc-btn");
const DecBtn = document.getElementById("dec-btn");
const SaveBtn = document.getElementById("save-btn");
const p = document.createElement("p");
p.textContent = "Previous entries: ";
document.querySelector(".container").appendChild(p);

let count = 0;

IncBtn.addEventListener("click", () => {
  count += 1;
  counter.textContent = count;
});

DecBtn.addEventListener("click", () => {
  count = Math.max(0, count - 1);
  counter.textContent = count;
});

SaveBtn.addEventListener("click", () => {
  let countStr = `${count} - `;
  p.textContent += countStr;
  counter.textContent = 0;
  count = 0;
});
