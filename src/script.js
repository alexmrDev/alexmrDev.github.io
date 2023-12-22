/* NAVBAR SCROLLS */
function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);
  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener("click", () => {
  scrollToElement(".header");
});

link2.addEventListener("click", () => {
  scrollToElement(".header", 1);
});

link3.addEventListener("click", () => {
  scrollToElement(".column");
});

/* TEXT ANIMATION */
const separator = document.querySelector(".separator");
const hr = separator.querySelector("hr");
const spanInsideSeparator = separator.querySelector("span");
const desplegable = document.querySelector(".desplegable");
let spanVisible = true;

separator.addEventListener("click", () => {
  desplegable.classList.toggle("open");
  spanInsideSeparator.style.display = "none";

  if (spanVisible) {
    spanInsideSeparator.style.display = "none";
    hr.style.borderTop = "2px solid #1d4ed8";
  } else {
    spanInsideSeparator.style.display = "inline";
    const text = spanInsideSeparator.textContent;
    spanInsideSeparator.textContent = "";

    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        spanInsideSeparator.textContent += text[i];
      }, i * 100);
    }
  }

  spanVisible = !spanVisible;
});

/* BUTTON REDIRECT */
document.querySelectorAll(".btn").forEach(function (button) {
  button.addEventListener("click", function () {
    var url = this.getAttribute("data-url");
    if (url) {
      var newTab = window.open(url, "_blank");
      newTab.focus();
    }
  });
});
