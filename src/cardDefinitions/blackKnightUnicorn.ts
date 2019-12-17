import { Card } from "../gameEngine/model/card";
import { CardType } from "../gameEngine/model/cardType";
import { gameBuilder } from '../utils/gameBuilder';

const blackKnightUnicorn: Card = {
    
    name: 'blackKnightUnicorn',
    displayName: "Black Knight Unicorn",
    description: "If 1 of your Unicorn cards would be destroyed, you may SACRIFICE this card instead.",
    cardType: CardType.UNICORN_MAGIC,

}

// Add card to game builder
gameBuilder.registerCardDefinition({
    countInDeck: 1,
    card: blackKnightUnicorn
})