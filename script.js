"use strict";

const addBtn = document.getElementById("counter-plus");
const reduceBtn = document.getElementById("counter-minus");
const counterDisplay = document.querySelector(".counter-output");

let initialValue = 0;
const maxItem = 10;
const minItem = 1;

addBtn.addEventListener("click", function () {
  if (initialValue < maxItem) {
    initialValue++;
    counterDisplay.textContent = initialValue;
  }
});

reduceBtn.addEventListener("click", function () {
  if (counterDisplay.textContent > minItem) {
    initialValue--;
    counterDisplay.textContent = initialValue;
  }
});
