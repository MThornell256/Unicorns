import { Card } from "../model/card";
import { CardType } from "../model/cardType";

const yay: Card = {
    
    name: 'yay',
    displayName: "Yay",
    description: "",
    cardType: CardType.UPGRADE,
    /*
    validateAction: (action: GameAction): boolean => {

        // if the card is an instant and the action has a target player
        if(!action.targetPlayer || action.card.cardType !== CardType.INSTANT) {
            return true
        }

        // does the target player own this card in there stable
        return !hasCardInStable(action.targetPlayer, yay)
    }*/
}

export default yay