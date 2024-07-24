// 2. Escreva uma função que receba dois números como argumentos e retorne o maior deles

/** 
 * Essa função compara dois números quaisquer, então retorna o maior deles.
 * @param {Number} firstNumber É o primeiro número a ser comparado.
 * @param {Number} secondNumber É o segundo número a ser comparado.
 * @returns {Number} 
*/

function max(firstNumber, secondNumber) { 
    // o IF compara verifica se o primeiro número é menor que o segundo.
    if(firstNumber < secondNumber) {
        // Caso sim, isso significa que o segundo é o maior numero, portanto o que devemos devolver.
        return secondNumber;
    } else {
        // Caso não, isso significa que o primeiro é o maior número, então devolvemos ele.
        return firstNumber; 
    }
}