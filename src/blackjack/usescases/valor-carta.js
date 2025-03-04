/**
 * Esta funcion calcula el valor de la carta
 * @param {string} carta 
 * @returns {number} su valor
 */


export const valorCarta = ( carta ) => {
    if (!carta || carta.lenght === 0) throw new Error('La carta debe existir o al menos tener un char')

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}