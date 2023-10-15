(() => {
  if (window.location.href.startsWith("file://")) {
    document.documentElement.innerHTML = "";
  }

  if (window.location.pathname !== "/qsvu-online-solution/" && window.location.pathname !== "/qsvu-online-solution/index.html") {
    document.documentElement.innerHTML = ""; 
  }
})();
