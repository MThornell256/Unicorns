import { Card, isUnicorn } from "../model/card";
import { CardType } from "../model/cardType";
import { GameAction } from "../model/gameAction";
import { getCurrentPlayer } from "../utils/gameStateUtils";

const tinyStable: Card = {
    
    cardId: 'tinyStable',
    name: "Tiny Stable",
    cardType: CardType.DOWNGRADE,
    
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
    }
}

export default tinyStable