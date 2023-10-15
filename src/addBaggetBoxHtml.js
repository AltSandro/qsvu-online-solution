(() => {
    function waitForCreativeCarysScrool() {
        if (typeof baguetteBox === 'undefined') {
            setTimeout(waitForCreativeCarysScrool, 100);
        } else {
            addPreviousCodeFromTemplate();
        }
    }

    /*function addPreviousCodeFromTemplate() {
        let baguetteBoxOverlay = document.getElementById('baguetteBox-overlay'); 

        if (baguetteBoxOverlay) {
            fetch('addBaggetBoxHtml.html')
                .then(function(response) {
                    return response.text();
                })
                .then(function(buttonHTML) {
                    baguetteBoxOverlay.insertAdjacentHTML('beforeend', buttonHTML);
                });
        }
    }*/
    //VER.2
    function addPreviousCodeFromTemplate() {
      let baguetteBoxOverlay = document.getElementById("baguetteBox-overlay");

      if (baguetteBoxOverlay) {
        const buttonHTML = `
            <div class="d-flex justify-content-center" id="gameLToFetch">
                <a id="myGameLink" class="rounded myGameLink soundMyGameLink-hover" role="button" href="https://www.pvz.com.ua/units-compact-mc035-0150">
                    <span class="myGameLinkSpan"></span><span id="myGameLink-textContent">Title</span><span class="myGameLinkSpan"></span>
                </a>
            </div>
        `;
        baguetteBoxOverlay.insertAdjacentHTML("beforeend", buttonHTML);
      }
    }

    waitForCreativeCarysScrool();

    (() => {
      const dataArray = tsLinks;

      function updateMyGameLinkHref(href) {
        document.getElementById("myGameLink").setAttribute("href", href);
      }
     
      function updateTitleClassNameForFone(currentClassValue) {
        let myGameLink = document.getElementById("myGameLink");
        if (!myGameLink.hasAttribute('data-bagetteBoxTitleFoneClass')) {
          myGameLink.setAttribute('data-bagetteBoxTitleFoneClass', currentClassValue);
        } else {
          myGameLink.setAttribute('data-bagetteBoxTitleFoneClass', currentClassValue);
        }
      }
      
      const awrSliderItems = document.querySelectorAll(".portfolio-box.awSlider-item");

      let currentIndex = 0; 
      
      awrSliderItems.forEach(function (awrSliderItem, index) {
        awrSliderItem.addEventListener("click", function () {
          const buttonText = awrSliderItem.getAttribute("data-caption");
          updateMyGameLinkTextContent(buttonText);
          currentIndex = index;
          updateMyGameLinkHref(dataArray[currentIndex]);
          updateTitleClassNameForFone(currentIndex);
        });
      });

      function updateMyGameLinkTextContent(text) {
        document.getElementById("myGameLink-textContent").textContent = text;
      }

      function handleNextBaggetButtonClick() {
        if (currentIndex < awrSliderItems.length - 1) {
          currentIndex++; 
          const spanText = awrSliderItems[currentIndex].getAttribute("data-caption");
          updateMyGameLinkTextContent(spanText);
          updateMyGameLinkHref(dataArray[currentIndex]);
          updateTitleClassNameForFone(currentIndex);
        }
      }

      function handlePreviousBaggetButtonClick() {
        if (currentIndex > 0) {
          currentIndex--; 
          const spanText = awrSliderItems[currentIndex].getAttribute("data-caption");
          updateMyGameLinkTextContent(spanText);
          updateMyGameLinkHref(dataArray[currentIndex]);
          updateTitleClassNameForFone(currentIndex);
        }
      }

      const nextButton = document.querySelector("#next-button.baguetteBox-button");
      const previousButton = document.querySelector("#previous-button.baguetteBox-button");

      nextButton.addEventListener("click", handleNextBaggetButtonClick);
      previousButton.addEventListener("click", handlePreviousBaggetButtonClick);
      (() => {
        document.addEventListener("keydown", function (event) {
          if (event.target === document || event.target === previousButton || event.target === nextButton) {
            if (event.key === "ArrowLeft") {
              handlePreviousBaggetButtonClick();
            } else if (event.key === "ArrowRight") {
              handleNextBaggetButtonClick();
            }
          }
        });
      }) ();
      let startX = 0;
      let endX = 0;

      document.body.addEventListener("touchstart", function (event) {
        startX = event.touches[0].clientX;
      });

      document.body.addEventListener("touchend", function (event) {
        endX = event.changedTouches[0].clientX;
        const deltaX = endX - startX;

        const swipeThreshold = 44;
        if (deltaX > swipeThreshold) {
            handlePreviousBaggetButtonClick();
        } else if (deltaX < -swipeThreshold) {
            handleNextBaggetButtonClick();

        }
      });

    })();
    
})();



