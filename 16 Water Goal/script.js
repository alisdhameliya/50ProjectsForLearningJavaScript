const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => {
    highlightCup(idx);
  });
});

function highlightCup(idx) {
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
      liters.innerText = 2 - idx * 0.25 - 0.25 + "L";
      percentage.innerText = (((idx * 0.25 + 0.25) / 2) * 100).toFixed(2) + "%";
      percentage.style.height = ((idx * 0.25 + 0.25) / 2) * 100 + "%";
      remained.style.height = ((2 - idx * 0.25 - 0.25) / 2) * 100 + "%";
    } else {
      cup.classList.remove("full");
      liters.innerText = 2 - idx * 0.25 - 0.25 + "L";
      percentage.innerText = (((idx * 0.25 + 0.25) / 2) * 100).toFixed(2) + "%";
      percentage.style.height = ((idx * 0.25 + 0.25) / 2) * 100 + "%";
      remained.style.height = ((2 - idx * 0.25 - 0.25) / 2) * 100 + "%";
    }
  });
  if (percentage.innerText === "0.00%") {
    percentage.style.visibility = "hidden";
  } else {
    percentage.style.visibility = "visible";
  }
}
