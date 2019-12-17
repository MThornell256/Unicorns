import { Card } from "../gameEngine/model/card";
import { CardType } from "../gameEngine/model/cardType";
import { gameBuilder } from '../utils/gameBuilder';

const alluringNarwhal: Card = {
    
    name: 'alluringNarwhal',
    displayName: "Alluring Narwhal",
    description: 'When this card enters your Stable, you may STEAL an Upgrade card.',
    cardType: CardType.UNICORN_MAGIC,

}

// Add card to game builder
gameBuilder.registerCardDefinition({
    countInDeck: 1,
    card: alluringNarwhal
})