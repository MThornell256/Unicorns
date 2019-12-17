import { Card } from "../gameEngine/model/card";
import { CardType } from "../gameEngine/model/cardType";
import { gameBuilder } from '../utils/gameBuilder';

const tinyStable: Card = {
    
    name: 'tinyStable',
    displayName: "Tiny Stable",
    description: '',
    cardType: CardType.DOWNGRADE,

    /*
    validateAction: (action: GameAction): boolean => {

        // get the current player
        const currentPlayer = getCurrentPlayer(action.gameState)

        // is the current player the card owner
        if(action.cardOwner !== currentPlayer) {
            return true
        }
        
        // count unicorns for current player
        const unicornCount = currentPlayer.stable.filter(card => isUnicorn(card)).length
        return unicornCount < 5
    }*/
}

// Add card to game builder
gameBuilder.registerCardDefinition({
    countInDeck: 1,
    card: tinyStable
})