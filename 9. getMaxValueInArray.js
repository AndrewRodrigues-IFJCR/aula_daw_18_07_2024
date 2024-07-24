// 9. Escreva uma função que encontre o maior número em um array de números.

/** 
 * Essa função retorna o maior número de um array numérico qualquer.
 * @param {Array<Number>} array É o array que contem os números a serem analisados.
 * @returns {Number}
*/

function getMaxValueInArray(array) {

    // Esse trecho de código pega o primeiro número do array.
    let max = array[0];

    // Esse laço itera sobre o array armazenando o número atual na variável numberCurrent.
    for (let index = 0; index < array.length; index++) {
        let numberCurrent = array[index];

        // O IF verifica se o número atual é maior que o maior número salvo.
        if(numberCurrent > max) {
            // Caso sim, ele passa a ser o maior número salvo agora.
            max = numberCurrent;
        }
        // Caso não, não faça nada.
    }

    // Esse trecho retorna o maior número que conseguimos achar no array.
    return max; 
}