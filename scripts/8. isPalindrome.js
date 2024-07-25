// 8. Escreva uma função que verifique se uma string é um palíndromo.

/** 
 * Essa função diz se uma string qualquer é um palindrome.
 * @param {String} string É a string a ser analisada.
 * @returns {Boolean} 
*/

function isPalindrome(string) {

    // Esse trecho de código pega o último índice da string.
    let lastIndex = string.length - 1;

    // Esse trecho de código pega o índice do meio da string.
    let halfIndex = Math.floor(string.length / 2);

    // Esse laço itera até o meio da string, sempre verificando se os extremos possuem letras distintas: 
    // verifica se a primeira e a última letra são diferentes, depois verifica se a segundo e a penúltima letra são diferentes, ...
    for (let indexLeft = 0; indexLeft < halfIndex; indexLeft++) {
        let indexRight = lastIndex - indexLeft;

        // Caso encontrarmos uma letra que seja diferente entre os extremos paramos o programa, 
        // a string não é um palindrome, por isso retornamos falso.
        if (string[indexLeft] != string[indexRight]) {
            return false;
        }

    }

    // Caso já iteramos por toda a string e não encontramos nenhuma letra diferente entre os extremos, 
    // só nos resta a possibilidade da string ser um palindrome.
    return true;
}