// 14. Escreva uma função que retorne a data atual no formato dd/mm/aaaa.

const DATA_STRING_FORMAT = 'dd/mm/yyyy';

/**
 * Essa função retorna uma string informando a data atual no formato: dia / mes / ano.
 * @returns {String} 
*/

function getDate() {
    // O trecho de código cria um objeto da classe Date passando o formato da data como argumento.
    // Depois converte a data para uma string.
    return new Date(DATA_STRING_FORMAT).toDateString();
}