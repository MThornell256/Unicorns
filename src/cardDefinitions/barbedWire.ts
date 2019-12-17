import { Card } from "../gameEngine/model/card";
import { CardType } from "../gameEngine/model/cardType";
import { gameBuilder } from '../utils/gameBuilder';

const barbedWire: Card = {
    
    name: 'barbedWire',
    displayName: "Barbed Wire",
    description: "Each time a Unicorn card enters or leaves your stable, DISCARD a card.",
    cardType: CardType.DOWNGRADE,

}

// Add card to game builder
gameBuilder.registerCardDefinition({
    countInDeck: 1,
    card: barbedWire
})