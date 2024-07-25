// 12. Escreva uma função que conte o número de ocorrências de cada elemento em um array e retorne um objeto com os resultados.

/**
 * Essa função conta o número de ocorrências de cada um dos números presentes nu array.
 * @param {Array<Number>} array É o array a ser analisado.
 * @returns {Object}
*/

function countElementsInArray(array) {

    //  Esse trecho de código cria um objeto, nos usaremos ele de tabela para anotar as ocorrências.
    const objectTable = {};

    for (let index = 0; index < array.length; index++) {

        let elementInArray = array[index];
        let elementInTable = objectTable[elementInArray];

        if (elementInTable) {
            objectTable[elementInArray] += 1;
        } else {
            objectTable[elementInArray] = 1;
        }

    }

    return objectTable;
}