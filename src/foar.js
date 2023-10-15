'use strict'
combineArraysIntoFourthArray(fourthArray, keys, ...convertMatrixToList(matrix));
console.log(fourthArray);

function convertMatrixToList(matrix) {
    console.log([...matrix]);
    return [...matrix]; 
    
}

function combineArraysIntoFourthArray(fourthArray, keys, ...arrays) {
    for (let i = 0; i < arrays[0].length; i++) {
        let object = {};

        for (let j = 0; j < keys.length; j++) {
            let key = keys[j];
            let value;

            if (j < arrays.length) {
                value = arrays[j][i];
            } else {
                value = undefined;
            }
                object[key] = value;
            }

            fourthArray.push(object);
    }
    console.log(fourthArray);
}

