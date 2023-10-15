'use strict'
function calcAirVel(airFlow, width, height) {
    if (width == 0 || height == 0 || width == null || height == null ) {
        return "-";
    } 
    const speed = (airFlow / ((width / 1000) * (height / 1000)) / 3600).toFixed(2);
    return parseFloat(speed); 
}

( () => {
    for (let elem of fourthArray) {
        let tableRow = "<tr><td class='tbCol-1'>" + elem[keys[0]] + "</td><td class='tbCol-2'><input class='excludeClickEffect soundtableSelectInpS' type='number' id='input_" + elem[keys[0]] + "' value='" + elem[keys[1]] + "'></td>";
    
    for (let i = 2; i <= 25; i += 2) { 
        let n = 2 + i * 0.5; 
        tableRow += "<td class='tbCol-" + (n) +"' id='output_" + elem[keys[0]] + "_" + i + "'>" + calcAirVel(elem[keys[1]], elem[keys[i]], elem[keys[i + 1]]) + "</td>";
    }
    
    tableRow += "<td class='tbCol-15'>" + elem[keys[0]] + "</td></tr>";
    
    document.write(tableRow);
    }
})();

( () => {
    for (let elem of fourthArray) {
        let inputElement = document.getElementById('input_' + elem[keys[0]]);
        function inputReactActivate() {
            let newValue = parseFloat(inputElement.value);
            
            for (let i = 2; i <= 25; i += 2) {
                let outputElement = document.getElementById('output_' + elem[keys[0]] + '_' + i); 
                let newCalculation = calcAirVel(newValue, elem[keys[i]], elem[keys[i + 1]]);
                outputElement.textContent = newCalculation;
            }
        }

        inputElement.addEventListener('input', function () {
            inputReactActivate();
        });

        inputElement.addEventListener('change', function () {
            inputReactActivate();
        });
    }
} )();

    (() => {
        const applyStyles = (cell, content, isHot, isCold, isFreon) => {
            const highOutsideClass = isHot ? 'highOutsideH' : (isCold ? 'highOutsideC' : (isFreon ? 'highOutsideF' : ''));
            const highLimClass = isHot ? 'highLimH' : (isCold ? 'highLimC' : (isFreon ? 'highLimF' : ''));

            if (!isNaN(content)) {
                if (content > (isHot ? options["vFallH"] : (isCold ? options["vFallC"] : (isFreon ? options["vFallF"] : 0)))) {
                    cell.classList.remove(highLimClass);
                    cell.classList.add(highOutsideClass);
                } else if (content > (isHot ? options["vNormH"] : (isCold ? options["vNormC"] : (isFreon ? options["vNormF"] : 0)))) {
                    cell.classList.remove(highOutsideClass);
                    cell.classList.add(highLimClass);
                } else {
                    cell.classList.remove(highOutsideClass);
                    cell.classList.remove(highLimClass);
                }
            }
        };

        const applyStylesToCells = (isHot, isCold, isFreon) => {
            const cells = [];

            for (let i = isHot ? 2 : (isCold ? 8 : (isFreon ? 18 : 0));
                i <= (isHot ? 6 : (isCold ? 16 : (isFreon ? 24 : 0))); i++) {
                const cellSelector = `td[id^="output_"][id*="_"][id$="_${i}"]`;
                const selectedCells = document.querySelectorAll(cellSelector);
                cells.push(...selectedCells);
            }

            cells.forEach(cell => {
                const content = parseFloat(cell.textContent);
                applyStyles(cell, content, isHot, isCold, isFreon);
            });
        };

        const createObserver = (selector, isHot, isCold, isFreon) => {
            const observer = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                    const cell = mutation.target;
                    const content = parseFloat(cell.textContent);
                    applyStyles(cell, content, isHot, isCold, isFreon);
                });
            });

            const cells = [];

            for (let i = isHot ? 2 : (isCold ? 8 : (isFreon ? 18 : 0));
                i <= (isHot ? 6 : (isCold ? 16 : (isFreon ? 24 : 0))); i++) {
                const cellSelector = `td[id^="output_"][id*="_"][id$="_${i}"]`;
                const selectedCells = document.querySelectorAll(cellSelector);
                cells.push(...selectedCells);
            }

            cells.forEach(cell => {
                observer.observe(cell, { childList: true });
            });
        };

        createObserver(null, true, false, false);
        createObserver(null, false, true, false);
        createObserver(null, false, false, true);

        document.addEventListener('DOMContentLoaded', () => {
            applyStylesToCells(true, false, false);
            applyStylesToCells(false, true, false);
            applyStylesToCells(false, false, true);
        });

        const selector = document.getElementById('typeExchange');
        const selectedValue = selector.value; 
        selector.addEventListener('change', () => {
            applyStylesToCells(true, false, false);
            applyStylesToCells(false, true, false);
            applyStylesToCells(false, false, true);
        });

    })();

(() => {
    let highFlowInputClass = document.querySelectorAll('#input_MC-060, #input_MC-0100, #input_MC-0130, #input_MC-0150, #input_MC-07, #input_MC-09');
    const iterArrOfFlowRes = aFR;
    const arrFlowWarnOfTSizes = fWTS;
    const arrFlowBanOfTSizes = fBTS;
    function highSomeFlowClass() {
        for (let i = 0; i < highFlowInputClass.length; i++) {
            if (iterArrOfFlowRes.includes(i)) {
                if ( (arrFlowBanOfTSizes[i] > (highFlowInputClass[i].value) ) && (highFlowInputClass[i].value >= arrFlowWarnOfTSizes[i]) ){
                    highFlowInputClass[i].classList.remove("highQBan");
                    highFlowInputClass[i].classList.add("highQWarn");
                } else if ( (highFlowInputClass[i].value) >= arrFlowBanOfTSizes[i] ) {
                    highFlowInputClass[i].classList.remove("highQWarn");
                    highFlowInputClass[i].classList.add("highQBan");
                } else {
                    highFlowInputClass[i].classList.remove("highQWarn");
                    highFlowInputClass[i].classList.remove("highQBan");
                }
            }
        }
    }

    document.addEventListener('DOMContentLoaded', () => { 
        highSomeFlowClass();
    })

    highFlowInputClass.forEach(function(elem, i, array) {
        elem.addEventListener('change', highSomeFlowClass); 
    });
    
})();
    
(() => {
    const CurAirFlowArr = [];
    function CurFlowVelSpot(inputAirFlow) {
        for (let elem of fourthArray) {
            let a = {};
            for (let i = 1; i <= 12; i++) {
                let index = 2 * i;
                a[rVtitles[i-1]] = calcAirVel(inputAirFlow, elem[keys[index]], elem[keys[index + 1]]);
            }
            CurAirFlowArr.push(a);
        }
        for (let sz = 0; sz < fourthArray.length; sz++) {
        CurAirFlowArr[sz][keys[0]] = matrix[0][sz]; 
        }
    };

    function freonAirFlowCheck() {

        function checkArrBack(arr, i, propArr) {
            return propArr.map(prop => arr[i][prop]);
        }

        function getIterationInputParametr() {
            let i;
            if (options.useDeepCooling === false) {
                if (options.unitType === "anytype") {
                    i = 0;
                } else if (options.unitType === "ceiling") {
                    i = 0;
                } else if (options.unitType === "floor") {
                    i = 12;
                }
            } else if (options.useDeepCooling === true) {
                if (options.unitType === "anytype") {
                    i = 12;
                } else if (options.unitType === "ceiling") {
                    i = 12;
                } else if (options.unitType === "floor") {
                    i = 12;
                } 
            }
            return i;
        }

        for (let i = getIterationInputParametr(); i < CurAirFlowArr.length; i++) {
            
            let skipPVCValues = [4, 5];
            let skipPVRValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
            let skipSupplyValues = [0, 1, 2, 3, 9, 10, 11];
            let skipPVNarrValues = [4, 5, 6, 7, 8];

            if ((options.exhaust === "PVC") && (skipPVCValues.includes(i))) {
                continue;
            } else if ((options.exhaust === "PVR") && (skipPVRValues.includes(i))) {
                continue;
            } else if ((options.exhaust === "PVNarr") && (skipPVNarrValues.includes(i))) {
                continue;
            } else if ( (options.exhaust === "supply") && (skipSupplyValues.includes(i)) ) {
                continue;
            }
            
            let inputFlowQ = document.getElementById("indicatedAirFlow").value;
            const iterArrOfFlowRes = aFR;
            const arrFlowWarnOfTSizes = fWTS;
            const arrFlowBanOfTSizes = fBTS;

            if ( ( iterArrOfFlowRes.includes(i) ) && (options.fallselected === false) ) {
                if ( inputFlowQ >= arrFlowWarnOfTSizes[i] ){
                    continue;
                }
            } else if ( ( iterArrOfFlowRes.includes(i) && (options.fallselected === true) ) ) {
                if ( inputFlowQ >= arrFlowBanOfTSizes[i] ){
                    continue;
                }
            }

            let freonArrToCheck = [ coilsRtitles[8], coilsRtitles[9]];
            let freonAltArrToCheck = [ coilsRtitles[11]];
            let coolArrToCheck = [ coilsRtitles[3], coilsRtitles[4]];

            let coolArr3020ToCheck = [ coilsRtitles[5]];
      
            let coolAltArrToCheck = [coilsRtitles[6]];
         
            let heatMainArrToCheck = [ coilsRtitles[0], coilsRtitles[1]]; 
            let heatAltArrToCheck = [coilsRtitles[2]];
            let heatAltHeavyPowerArrToCheck = [ coilsRtitles[0], coilsRtitles[1], coilsRtitles[3] ];

            let valuesToCheck; 

            if ( (options.useFreon === true) && (options.useCool === true) && (options.onlyHeat === false) ) {                         
       
                if ( (i === 27) || (i === 28) || (i === 29) ) { 
                    if (options.useDeepCooling === false) {
                        valuesToCheck = checkArrBack(CurAirFlowArr, i, coolArrToCheck);
                    } else if (options.useDeepCooling === true) {
                        valuesToCheck = checkArrBack(CurAirFlowArr, i, coolAltArrToCheck);
                    }
                } else {
                    if (options.useDeepCooling === false) { 
                        valuesToCheck = checkArrBack(CurAirFlowArr, i, freonArrToCheck);
                    } else if (options.useDeepCooling === true) { 
                        valuesToCheck = checkArrBack(CurAirFlowArr, i, freonAltArrToCheck);
                    }
                }
            } else if ( (options.useFreon === true) && (options.useCool === false) && (options.onlyHeat === false) ) {
                if (options.useDeepCooling === false) {
                    valuesToCheck = checkArrBack(CurAirFlowArr, i, freonArrToCheck);
                } else if (options.useDeepCooling === true) {
                    valuesToCheck = checkArrBack(CurAirFlowArr, i, freonAltArrToCheck);
                }

            } else if ( (options.useFreon === false) && (options.useCool === true) && (options.onlyHeat === false) ) {
                if (i === 23) {
                    if (options.useDeepCooling === false) {
                        valuesToCheck = checkArrBack(CurAirFlowArr, i, coolArr3020ToCheck);
                    } else if (options.useDeepCooling === true) {
                        valuesToCheck = checkArrBack(CurAirFlowArr, i, coolAltArrToCheck);
                    }
                } else {
                    if (options.useDeepCooling === false) {
                        valuesToCheck = checkArrBack(CurAirFlowArr, i, coolArrToCheck);
                    } else if (options.useDeepCooling === true) {
                        valuesToCheck = checkArrBack(CurAirFlowArr, i, coolAltArrToCheck);
                    }
                }
            } else if ( (options.useFreon === false) && (options.useCool === false) && (options.onlyHeat === true) ) {
                if ( (i === 4) || (i === 5) ) { 
                    valuesToCheck = checkArrBack(CurAirFlowArr, i, heatAltArrToCheck); 
                } else {
                    if ( ( options.onlyHeavyPowerHeat === true) ) {
                        valuesToCheck = checkArrBack(CurAirFlowArr, i, heatAltHeavyPowerArrToCheck);
                    } else if (( options.onlyHeavyPowerHeat === false) ){
                        valuesToCheck = checkArrBack(CurAirFlowArr, i, heatMainArrToCheck);
                    } 
                }
            }   

            const filteredValues = valuesToCheck.filter(value => !isNaN(value) && value !== "-");
            
            function isNoneContent(elem) {
                return elem !== "-";
            }
            
            if (filteredValues.length > 0) {
                const maxNonNaN = Math.max(...filteredValues);
                if (maxNonNaN <= options.vMax) { 
                    let choiceTsize = CurAirFlowArr[i]["uS"];
                    return choiceTsize;
                } else if ( (maxNonNaN > options.vMax) && (i === (CurAirFlowArr.length - 1)) ) {
                    return "не подобран - для МС80 превышен максимальный расход для данной конфигурации";
                }
            } else if ( filteredValues.every(isNoneContent) && (CurAirFlowArr[i]["uS"] == CurAirFlowArr[27]["uS"]) ) {
                return "не подобран - в МС70-50 и выше возможно только водяное охлаждение";
            }
        }
    }


    const searchStartButton = document.getElementById("searchStartButton");
    const indicatedAirFlow = document.getElementById("indicatedAirFlow");
    let foundedTypeSize = document.getElementById("typeSize");
    searchStartButton.addEventListener ("click", function () {
        CurAirFlowArr.length = 0; 
        if (indicatedAirFlow.value != "") {
            CurFlowVelSpot(indicatedAirFlow.value);

            setTimeout(() => {
                foundedTypeSize.innerHTML = freonAirFlowCheck();
            }, 137);
        } else if ((indicatedAirFlow.value == "") && (foundedTypeSize.innerHTML != "")) {
            setTimeout(() => {
                foundedTypeSize.innerHTML =""; 
            }, 137);
        }
    } );
}) ();
