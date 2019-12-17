import { Card } from "../gameEngine/model/card";
import { CardType } from "../gameEngine/model/cardType";
import { gameBuilder } from '../utils/gameBuilder';

const extraTail: Card = {
    
    name: 'extraTail',
    displayName: "Extra Tail",
    description: "This card can only enter a Stable if there is a Basic Unicorn card in that Stable. If this card is in your Stable at the beginning of your turn, you may DRAW an extra card.",
    cardType: CardType.UPGRADE,

}

// Add card to game builder
gameBuilder.registerCardDefinition({
    countInDeck: 1,
    card: extraTail
})