// 15. Escreva uma função que implemente o algoritmo de busca binária em um array ordenado e retorne o índice do elemento encontrado, ou -1 se não for encontrado.

/** 
 * Essa função implementa uma busca binaria.
 * @param {Array<Number>} array É um array numérico ordenado, do qual queremos achar um elemento.
 * @param {Number} element É o elemento que desejamos buscar.
 * @returns {Number} 
*/

function binarySearch(array, element) {

    let maxIndex = array.length;
    let minIndex = 0;

    while (maxIndex - minIndex) {

        let guessIndex = Math.floor((maxIndex + minIndex) / 2);
        let guessElement = array[guessIndex];

        if (guessElement == element) {
            return guessIndex;

        }

        if (guessElement < element) {
            minIndex = guessIndex;

        } else {
            maxIndex = guessIndex;

        }
    }

    return -1;
}