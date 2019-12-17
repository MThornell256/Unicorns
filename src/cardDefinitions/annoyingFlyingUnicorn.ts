import { Card } from "../gameEngine/model/card";
import { CardType } from "../gameEngine/model/cardType";
import { gameBuilder } from '../utils/gameBuilder';

const annoyingFlyingUnicorn: Card = {
    
    name: 'annoyingFlyingUnicorn',
    displayName: "Annoying Flying Unicorn",
    description: 'When this card enters your Stable, you may choose any player. That player must DISCARD a card. If this card would be sacrificed or destroyed, return it to your hand instead.',
    cardType: CardType.UNICORN_MAGIC,
}

// Add card to game builder
gameBuilder.registerCardDefinition({
    countInDeck: 1,
    card: annoyingFlyingUnicorn
})