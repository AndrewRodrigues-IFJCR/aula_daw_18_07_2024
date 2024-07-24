
// 11. Escreva uma função que remova duplicatas de um array.

/**
 * Essa função remove duplicatas de um array de numérico qualquer.
 * @param {Array<Number>} oldArray É o array com as duplicatas que queremos remover.
 * @returns {Number}
*/

function removeDuplicates(oldArray) {

    /** @type {Array<Number>} */
    let newArray = [];

    for (let indexInOldArray = 0; indexInOldArray < oldArray.length; indexInOldArray++) {
        let numberCurrentInOldArray = array[indexInOldArray];
        let addNumberInNewArray = true;

        for (let indexInNewArray = 0; indexInNewArray < newArray.length; indexInNewArray++) {
            let numberCurrentInNewArray = newArray[indexInNewArray];

            if( numberCurrentInOldArray == numberCurrentInNewArray){
                addNumberInNewArray = false;
            }
        }

        if(addNumberInNewArray){
            newArray.push(numberCurrentInOldArray);
        }
    }

    return newArray;
}
