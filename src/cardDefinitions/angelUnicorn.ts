import { Card } from "../gameEngine/model/card";
import { CardType } from "../gameEngine/model/cardType";
import { gameBuilder } from '../utils/gameBuilder';

const angelUnicorn: Card = {
    
    name: 'angelUnicorn',
    displayName: "Angel Unicorn",
    description: 'If this card is in your Stable at the beginning of your turn, you may SACRIFICE this card. If you do, choose a Unicorn card from the discard pile and bring it directly into your Stable.',
    cardType: CardType.UNICORN_MAGIC,
}

// Add card to game builder
gameBuilder.registerCardDefinition({
    countInDeck: 1,
    card: angelUnicorn
})