import _ from 'underscore';

/**
 * Esta función devuelve la ultima carta del deck y tb la elimina del mismo
 * @param {Array<string>} deck 
 * @returns {string}
 */

export const pedirCarta = (deck) => {
    if (!deck || deck.lenght === 0) throw new Error('No hay cartas en el deck o no existe')

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}