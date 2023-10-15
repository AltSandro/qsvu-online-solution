(() => {
  const indicatedAirFlow = document.getElementById("indicatedAirFlow");
  const copyPasteSearchQButton = document.getElementById("copyPasteSearchQButton");
  const pasteFlowInputClass = document.querySelectorAll('input[id*="input_MC"]');

  function pasteSearchFQ(searchFQ) {
    for (let i = 0; i < pasteFlowInputClass.length; i++) {
      pasteFlowInputClass[i].value = searchFQ; 
      const event = new Event("change", { bubbles: true });
      pasteFlowInputClass[i].dispatchEvent(event);
    }
  }

  copyPasteSearchQButton.addEventListener("click", function () {
    if (indicatedAirFlow.value != "") {
      pasteSearchFQ(indicatedAirFlow.value);
    }
  });
})();

(() => {
  const defAirFlow = document.getElementById("defaultQ");
  const pasteFlowInputClass = document.querySelectorAll('input[id*="input_MC"]');

  function pasteDefFQ() {
    for (let i = 0; i < pasteFlowInputClass.length; i++) {
      pasteFlowInputClass[i].value = fourthArray[i]["qA"]; 
      const event = new Event("change", { bubbles: true });
      pasteFlowInputClass[i].dispatchEvent(event);
    }
  }

  defAirFlow.addEventListener("click", function () {
    pasteDefFQ();
  });
})();

(function inputOkCongfirmbyEnter() {
  document.getElementById("indicatedAirFlow").addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        document.getElementById("searchStartButton").click(); 
      }
    });
})();
