(() => {
  /*if (window.location.href.startsWith("file://")) {
    setTimeout(() => {
      godsEye();
    }, 777);
  }*/

  /*if ((window.location.href !== "altsandro.github.io/qsvu-online-solution")  ||
  (window.location.href !== "altsandro.github.io/qsvu-online-solution/index.html")) {
    setTimeout(() => {
      godsEye()
    }, 777); 
  }*/
  
  function godsEye() {
    for (let elem of fourthArray) {
      let inputElement = document.getElementById("input_" + elem[keys[0]]);
      function inputReactActivate() {

        for (let i = 2; i <= 25; i += 2) {
          let outputElement = document.getElementById(
            "output_" + elem[keys[0]] + "_" + i); 
          let newCalculation = null; 
          outputElement.textContent = newCalculation;
        }
      }

      inputReactActivate();
      inputElement.addEventListener("input", function () {
        inputReactActivate();
      });

      inputElement.addEventListener("change", function () {
        inputReactActivate();
      });
    }
  }
})();
