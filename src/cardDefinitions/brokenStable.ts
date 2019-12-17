import { Card } from "../gameEngine/model/card";
import { CardType } from "../gameEngine/model/cardType";
import { gameBuilder } from '../utils/gameBuilder';

const brokenStable: Card = {
    
    name: 'brokenStable',
    displayName: "Broken Stable",
    description: "You cannot play Upgrade cards.",
    cardType: CardType.DOWNGRADE,
}

// Add card to game builder
gameBuilder.registerCardDefinition({
    countInDeck: 1,
    card: brokenStable
})