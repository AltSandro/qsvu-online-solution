(() => {
  if (window.location.href.startsWith("file://")) {
    document.documentElement.innerHTML = "";
  }

  if ((window.location.href !== "https://altsandro.github.io/qsvu-online-solution/")  ||
  (window.location.href !== "https://altsandro.github.io/qsvu-online-solution/index.html")) {
    document.documentElement.innerHTML = ""; 
  }
})();
