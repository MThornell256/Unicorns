import { Card } from "../gameEngine/model/card";
import { CardType } from "../gameEngine/model/cardType";
import { gameBuilder } from '../utils/gameBuilder';

const classyNarwhal: Card = {
    
    name: 'classyNarwhal',
    displayName: "Classy Narwhal",
    description: "When this card enters your Stable, you may search the deck for an Upgrade card and add it to your hand. Shuffle the deck.",
    cardType: CardType.UNICORN_MAGIC,

}

// Add card to game builder
gameBuilder.registerCardDefinition({
    countInDeck: 1,
    card: classyNarwhal
})