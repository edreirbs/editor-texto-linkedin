// script.js
document.addEventListener("DOMContentLoaded", function () {
  const editable = document.getElementById("editable");
  const boldButton = document.getElementById("bold");
  const italicButton = document.getElementById("italic");
  const underlineButton = document.getElementById("underline");
  const copyButton = document.querySelector(".copy");
  const fontSelector = document.querySelector(".dropdown-content");

  function formatText(command) {
    document.execCommand(command, false, null);
    editable.focus();
  }

  function changeCopyButton() {
    copyButton.classList.add("copied");
    copyButton.querySelector("span").textContent = "¡Copiado!";
    setTimeout(() => {
      copyButton.classList.remove("copied");
      copyButton.querySelector("span").textContent = "Copiar texto";
    }, 1500);
  }

  function changeFont(font) {
    editable.style.fontFamily = font;
    fontSelector.classList.remove("show");
  }

  boldButton.addEventListener("click", () => formatText("bold"));
  italicButton.addEventListener("click", () => formatText("italic"));
  underlineButton.addEventListener("click", () => formatText("underline"));
  copyButton.addEventListener("click", changeCopyButton);
  fontSelector.addEventListener("click", (e) => {
    if (e.target.matches("a")) {
      e.preventDefault();
      const font = e.target.textContent;
      changeFont(font);
    }
  });

  new ClipboardJS(".copy");
});