(() => {
  let inputThemeSwitcher = document.querySelector("input.themeSwitcher");
  let textSpecModif = document.querySelectorAll("[data-themeSwitchON]");

  inputThemeSwitcher.addEventListener("change", function () {
    for (let elem of textSpecModif) {
      elem.classList.toggle("theme-switchON");
    }
  });
})();
