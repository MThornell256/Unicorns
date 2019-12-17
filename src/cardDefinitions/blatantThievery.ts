import { Card } from "../gameEngine/model/card";
import { CardType } from "../gameEngine/model/cardType";
import { gameBuilder } from '../utils/gameBuilder';

const blatantThievery: Card = {
    
    name: 'blatantThievery',
    displayName: "Blatant Thievery",
    description: "Choose any player and look at that player's hand. Choose a card from that player's hand and add it to your hand.",
    cardType: CardType.MAGIC,

}

// Add card to game builder
gameBuilder.registerCardDefinition({
    countInDeck: 1,
    card: blatantThievery
})