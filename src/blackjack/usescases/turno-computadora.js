import { crearCartaHTML, pedirCarta, valorCarta } from "./index";

/**
 * 
 * @param {number} puntosMinimos puntos mínimos que la compu necesita para ganar 
 * @param {HTMLElement>} puntosHTML
 * @param {HTMLElement>} divCartasComputadora 
 * @param {Array<string>} deck 
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora , deck ) => {

    if (!puntosMinimos) throw new Error('Puntos mínimos son necesarios');
    if (!puntosHTML) throw new Error('PuntosHTML son necesarios');
    if (!deck) throw new Error('Deck es necesario');
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
