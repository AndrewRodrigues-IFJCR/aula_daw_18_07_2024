/**
 * Essa função troca dois elementos de lugar em um array.
 * @param {Array<Number>} array É o array que vamos manipular.
 * @param {Number} firstPosition É a posição do primeiro elemento que queremos permutar.
 * @param {Number} secondPosition É a posição do segundo elemento que queremos permutar.
*/

function swap(array, firstPosition, secondPosition) {
    let firstElement = array[firstPosition],
        secondElement = array[secondPosition];

    array[firstPosition] = secondElement;
    array[secondPosition] = firstElement;
}


/**
 * Essa função escolhe o último elemento do intervalo como pivot, 
 * então move todos os números maiores que o pivot para direita, 
 * e todos os números menores que o pivot para esquerda.
 * @param {Array<Number>} array É o array que queremos manipular/mexer.
 * @param {Number} start É o índice do inicio do intervalo que queremos analisar.
 * @param {Number} end É o índice do final do intervalo que queremos analisar.
 * @returns {Number}
*/

function partition(array, start, end) {

    // Esse trecho de código escolhe o último elemento do intervalo como pivot.
    let pivot = array[end];


    let smallerElementIndex = start - 1;

    for (let currentElementIndex = start; currentElementIndex <= end - 1; currentElementIndex++) {
        let currentElementValue = array[currentElementIndex];

        if (currentElementValue < pivot) {
            smallerElementIndex++;
            swap(array, smallerElementIndex, currentElementIndex);
        }
    }

    // Esse trecho de código pega o índice do pivot.
    let pivotIndex = smallerElementIndex + 1;

    // Esse trecho de código troca o pivot para a posição correta.
    swap(array, pivotIndex, end);

    // Nesse trecho de código retornamos o index do pivot.
    return pivotIndex;
}


/**
 * Essa função ordena um array numérico qualquer em ordem crescente.
 * @param {Array<Number>} array É o array que queremos ordenar.
 * @param {Number} [start=0]
 * @param {Number} [end=undefined]
*/

function quickSort(array, start = 0, end = undefined) {

    if (!end) {
        end = array.length - 1;
    }

    if (start < end) {
        let pivotIndex = partition(array, start, end);

        quickSort(array, start, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, end);
    }

    return array;
}
