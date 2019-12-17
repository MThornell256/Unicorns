import { Card } from "../gameEngine/model/card";
import { CardType } from "../gameEngine/model/cardType";
import { gameBuilder } from '../utils/gameBuilder';

const backKick: Card = {
    
    name: 'backKick',
    displayName: "Back Kick",
    description: "Choose any player. Return a card in that player's Stable to their hand. That player must DISCARD a card.",
    cardType: CardType.MAGIC,

}

// Add card to game builder
gameBuilder.registerCardDefinition({
    countInDeck: 1,
    card: backKick
})