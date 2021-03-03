document.addEventListener("DOMContentLoaded", init);

let elementToPaint;

async function init() {
  let response = await fetch("white-shoe-please-work-01.svg");
  let mySVGData = await response.text();
  document.querySelector("#svg-container").innerHTML = mySVGData;
  addInteractivity();
}

function addInteractivity() {
  document.querySelectorAll(".g-interactive").forEach((hatElement) => {
    hatElement.addEventListener("click", clickingOn);
    hatElement.addEventListener("mouseover", mouseOver);
    hatElement.addEventListener("mouseout", mouseOut);
  });

  document.querySelectorAll(".color-button").forEach((button) => {
    button.addEventListener("click", pickingColor);
  });
}

function clickingOn() {
  elementToPaint = this;
  this.style.fill = "#dee2e6";
}

function mouseOver() {
    this.style.stroke = "#CB997E";
    this.style.cursor = "pointer";
}

function mouseOut() {
  this.style.stroke = "none";
}

function pickingColor() {
  console.log("Color clicked:", this.getAttribute("fill"));
  if (elementToPaint != undefined) {
    elementToPaint.style.fill = this.getAttribute("fill");
  }
}
