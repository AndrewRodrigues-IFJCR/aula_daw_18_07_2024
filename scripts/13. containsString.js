// 13. Escreva uma função que verifique se uma string contém outra string (substring).

/** 
 * Essa função verifica se uma string qualquer contentem uma substring qualquer.
 * @param {String} string É a string que queremos verificar se contem uma determinada substring.
 * @param {String} substring É a substring que buscamo entro da primeira string.
 * @returns {Boolean} 
*/

function containsSubstring(string, substring) {
    let initialPositionsInString = string.length - substring.length;

    for (let indexInString = 0; indexInString < initialPositionsInString; indexInString++) {
        let matchSubstring = true;

        for (let indexInSubstring = 0; indexInSubstring < substring.length; indexInSubstring++) {
            if (string[indexInString + indexInSubstring] != substring[indexInSubstring]) {
                matchSubstring = false;
                break;
            }
        }

        if (matchSubstring) {
            return true;
        }
    }

    return false;
}