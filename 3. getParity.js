// 3. Escreva uma função que verifique se um número é par ou ímpar.

/** Explicação da função modulo:
 *   > Ela retorna o resto de da divisão inteira de um número por outro.
 *     Para saber mais pesquise sobre divisão Euclidiana.
 *     Exemplos: 
 *      -> 5 / 2 = 2 resto 1. Alternativamente 5 mod 2 = 1.
 *      -> 5 / 3 = 1 resto 2. Alternativamente 5 mod 3 = 2.
 *
 *     Referencia:
 *      -> Khan Academy, Ciência da Computação, Criptografia: <https://pt.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/what-is-modular-arithmetic>
*/


/** 
 * Essa função retorna a paridade de um número inteiro qualquer.
 * @param {Number} number É o número que desejamos saber a paridade.
 * @returns {String} O valor 'even' corresponde à 'par' e 'odd' à 'ímpar'.
*/

function getParity(number) {
    // O IF compara o valor do modulo do número por 2 e verifica se é 0.
    if(number % 2 == 0) {
        // Caso sim, retornamos even/par, isso pois quando um número é divisível por 2 ele sempre deixara resto 0.
        return 'even';
    }else{
        // Caso não, retornamos odd/ímpar, isso pois quando um número não é divisível por 2 ele sempre deixara resto 1.
        return 'odd';
    }
}
