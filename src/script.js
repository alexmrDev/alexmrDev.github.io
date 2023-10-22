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

/* TEXTS ANIMATION */
const separator = document.querySelector(".separator");
const spanInsideSeparator = separator.querySelector("span");
const desplegable = document.querySelector(".desplegable");
let spanVisible = true;

separator.addEventListener("click", () => {
  desplegable.classList.toggle("open");
  spanInsideSeparator.style.display = "none";

  if (spanVisible) {
    spanInsideSeparator.style.display = "none";
  } else {
    spanInsideSeparator.style.display = "inline";
    const text = spanInsideSeparator.textContent;
    spanInsideSeparator.textContent = "";

    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        spanInsideSeparator.textContent += text[i];
      }, i * 75);
    }
  }

  spanVisible = !spanVisible;
});
