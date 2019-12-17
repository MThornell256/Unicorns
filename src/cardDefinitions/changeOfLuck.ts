import { Card } from "../gameEngine/model/card";
import { CardType } from "../gameEngine/model/cardType";
import { gameBuilder } from '../utils/gameBuilder';

const changeOfLuck: Card = {
    
    name: 'changeOfLuck',
    displayName: "Change Of Luck",
    description: "DRAW 2 cards and DISCARD 3 cards, then take another turn.",
    cardType: CardType.MAGIC,

}

// Add card to game builder
gameBuilder.registerCardDefinition({
    countInDeck: 1,
    card: changeOfLuck
})