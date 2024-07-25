// 6. Escreva uma função que reverta uma string.

/** 
 * Essa função inverte o conteúdo de uma string qualquer.
 * @param {String} string É a string a ser invertida.
 * @returns {String} 
*/

function reverseString(string) {

    // Esse trecho de código converte a string em um array.
    let array = string.split();

    // Esse trecho de código pega o último índice do array.
    let lastIndex = array.length - 1;

    // Esse trecho de código pega o índice do meio do array.
    let halfIndex = Math.floor(array.length / 2);

    // Esse laço itera até o meio do array, sempre trocando os extremos de posição: o primeiro vira o último, o segundo o penúltimo, ... 
    for (let indexLeft = 0; indexLeft < halfIndex; indexLeft++) {

        let indexRight = lastIndex - indexLeft;

        let letterRight = array[indexRight];
        let letterLeft = array[indexLeft];

        array[indexRight] = letterLeft;
        array[indexLeft] = letterRight;

    }

    // Esse trecho apenas junta todas as letras do array em uma única string.
    return ''.concat(array);
}
