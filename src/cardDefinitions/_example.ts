import { Card } from "../gameEngine/model/card";
import { CardType } from "../gameEngine/model/cardType";
import { gameBuilder } from '../utils/gameBuilder';
//https://www.unicornsdatabase.com/
const cardName: Card = {
    
    name: 'cardName',
    displayName: "CardName",
    description: "",
    cardType: CardType.DOWNGRADE,

}

// Add card to game builder
gameBuilder.registerCardDefinition({
    countInDeck: 1,
    card: cardName
})