// 7. Escreva uma função que calcule o fatorial de um número.

/** Explicação do que é recorrência/recursão:
 *  > Chamamos de função recursiva toda função definida em termos de si própria.
 *    Exemplos:
 *      -> f(xn) = f(x(n-1)) + 1
 *         f(xn) = ( ( ( ... f(x - n) ... +1 ) +1 ) +1 )
 * 
 *    Referencia:
 *      -> Khan Academy, Ciência da Computação, Algoritmos: <https://pt.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/recursion>
*/


/**
 * Essa função calcula o fatorial de um número natural qualquer.
 * @param {Number} number É o número natural que desejamos calcular o fatorial.
 * @returns {Number}
*/

function fatorial(number) {
    // O IF verifica se o número é igual a 0.
    if (number == 0) {
        // Caso sim, o fatorial de 0 é 1, então retornamos 1.
        // Esse é também o nosso caso base, onde a recursão para.
        return 1;
    } else {
        // Caso não, o fatorial de um número n qualquer é n multiplicado pelo fatorial do anterior.
        return number*fatorial(number-1); // n! = n*(n-1)!
    }
}