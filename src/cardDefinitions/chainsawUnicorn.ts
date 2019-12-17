import { Card } from "../gameEngine/model/card";
import { CardType } from "../gameEngine/model/cardType";
import { gameBuilder } from '../utils/gameBuilder';

const chainsawUnicorn: Card = {
    
    name: 'chainsawUnicorn',
    displayName: "Chainsaw Unicorn",
    description: "When this card enters your Stable, you may SACRIFICE or DESTROY an Upgrade or Downgrade card.",
    cardType: CardType.UNICORN_MAGIC,

}

// Add card to game builder
gameBuilder.registerCardDefinition({
    countInDeck: 1,
    card: chainsawUnicorn
})