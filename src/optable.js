'use strict'
const options = {};
( () => {
    const defSettings = {
        vFallF: 3.58,
        vFallC: 3.58,
        vFallH: 3.7,
        vNormF: 3.55,
        vNormC: 3.55,
        vNormH: 3.58,
        vFallDeepCooling: 3.05,
        vDeepCooling: 2.999,
    }
    options.def = {};
    for (let prop in defSettings) {
        options.def[prop] = defSettings[prop];
    }

} ) ();

( () => {
    const selector = document.getElementById('typeExchange');
    function mainTableLimitLightingChange() { 
        const selectedValue = selector.value; 

        if ( (selectedValue === '1') || (selectedValue === '2') || (selectedValue === '3') || (selectedValue === '7') ) {
            options.useDeepCooling = false;
            
            options.vFallF = options.def.vFallF; 
            options.vFallC = options.def.vFallC;
            options.vNormF = options.def.vNormF;
            options.vNormC = options.def.vNormC;
            options.vFallH = options.def.vFallH;
            options.vNormH = options.def.vNormH;

        } else if ( (selectedValue === '4' ) || (selectedValue === '5') || (selectedValue === '6')) {
            options.useDeepCooling = true;

            options.vFallF = options.def.vFallDeepCooling;
            options.vFallC = options.def.vFallDeepCooling;
            options.vNormF = options.def.vDeepCooling;
            options.vNormC = options.def.vDeepCooling;
            options.vFallH = options.def.vFallH;
            options.vNormH = options.def.vNormH;
        } 
    }


selector.addEventListener('change', mainTableLimitLightingChange);


mainTableLimitLightingChange();

} )();


(() => {
    const selector = document.getElementById('exhaustPartOptionSelect');
    
    function changeExhaustPartOptionSelectParam() {
        const selectedValue = selector.value;
       
        if (selectedValue === '1') {
            options.exhaust = "mayby";
        
        } else if (selectedValue === '2') {
            options.exhaust = "PVC";
       
        } else if (selectedValue === '3') {
            options.exhaust = "PVR";
      
        } else if (selectedValue === '4') {
            options.exhaust = "supply";
      
        } else if (selectedValue === '5') {
            options.exhaust = "PVNarr";
        }

    }

   
    selector.addEventListener('change', changeExhaustPartOptionSelectParam);

   
    changeExhaustPartOptionSelectParam();
   
})();


( () => {
    const selector = document.getElementById('typeExchange');
    const fallSelector = document.getElementById('fallSelect');
            function handleSelectorChange() {
                const selectedValue = selector.value; 
                const fallselectedValue = fallSelector.value; 
               
                if (fallselectedValue === '1') {
                    options.fallselected = false;

                    if (selectedValue === '1') {
                        (options.def.vNormF) <= (options.def.vNormC) ? (options.vMax = options.def.vNormF) : (options.vMax = options.def.vNormC); //3.55
                    } else if (selectedValue === '2') {
                        options.vMax = options.def.vNormF; 
                    } else if (selectedValue === '3') {
                        options.vMax = options.def.vNormC; 
                    } else if (selectedValue === '4') {
                        options.vMax = options.def.vDeepCooling;
                    } else if (selectedValue === '5') {
                        options.vMax = options.def.vDeepCooling;
                    } else if (selectedValue === '6') {
                        options.vMax = options.def.vDeepCooling; 
                    } else if ( (selectedValue === '7') || (selectedValue === '8') ) {
                        options.vMax = options.def.vNormH;
                    }
                } else if (fallselectedValue === '2') {
                    options.fallselected = true;

                    if (selectedValue === '1') {
                        (options.def.vFallF) <= (options.def.vFallC) ? (options.vMax = options.def.vFallF) : (options.vMax = options.def.vFallC); //3.55
                    } else if (selectedValue === '2') {
                        options.vMax = options.def.vFallF; 
                    } else if (selectedValue === '3') {
                        options.vMax = options.def.vFallC; 
                    } else if (selectedValue === '4') {
                        options.vMax = options.def.vFallDeepCooling;
                    } else if (selectedValue === '5') {
                        options.vMax = options.def.vFallDeepCooling; 
                    } else if (selectedValue === '6') {
                        options.vMax = options.def.vFallDeepCooling; 
                    } else if (selectedValue === '7' || (selectedValue === '8')) {
                        options.vMax = options.def.vFallH; 
                    }
                }  
            }

    selector.addEventListener('change', handleSelectorChange);
    fallSelector.addEventListener('change', handleSelectorChange);

    handleSelectorChange();          
})();

(() => {
        const selector = document.getElementById('typeExchange');

        function changeExchangersSelectorParametrs() {
            const selectedValue = selector.value;

            if (selectedValue === '1' || selectedValue === '4') {
                options.useFreon = true;
                options.useCool = true;
                options.onlyHeat = false;
            } else if (selectedValue === '2' || selectedValue === '5') {
                options.useFreon = true;
                options.useCool = false;
                options.onlyHeat = false;
            } else if (selectedValue === '3' || selectedValue === '6') {
                options.useFreon = false;
                options.useCool = true;
                options.onlyHeat = false;
            } else if (selectedValue === '7') {
                options.useFreon = false;
                options.useCool = false;
                options.onlyHeat = true;
                options.onlyHeavyPowerHeat = false;
            } else if (selectedValue === '8' ) {
                options.useFreon = false;
                options.useCool = false;
                options.onlyHeat = true;
                options.onlyHeavyPowerHeat = true; 
            }

        }
        selector.addEventListener('change', changeExchangersSelectorParametrs);

        changeExchangersSelectorParametrs();
})();

(() => {
    const selector = document.getElementById('unitTypeSelect');
    
    function changeUnitTypeSelectorPar() {
        const selectedValue = selector.value;
        if (selectedValue === '1') {
            options.unitType = "anytype";
        } else if (selectedValue === '2') {
            options.unitType = "ceiling";
        } else if (selectedValue === '3') {
            options.unitType = "floor";
        } 
    }

    selector.addEventListener('change', changeUnitTypeSelectorPar);

    changeUnitTypeSelectorPar();
   
})();


