import { Card } from "../gameEngine/model/card";
import { CardType } from "../gameEngine/model/cardType";
import { gameBuilder } from '../utils/gameBuilder';
import { GameState } from '../gameEngine/model/gameState';
import { CardAbilityParameters } from '../gameEngine/cardAbility';

export interface AmericornAbilityParams
{
    cardNumber: number
}

const americorn: Card = {
    
    name: 'americorn',
    displayName: "Americorn",
    description: "When this card enters your Stable, choose any player. Pull a card from that player's hand.",
    cardType: CardType.UNICORN_MAGIC,

    enterStableAbility: {

        execute: (gameState: GameState, params: CardAbilityParameters): GameState => {
            return gameState
        }
    }
}

// Add card to game builder
gameBuilder.registerCardDefinition({
    countInDeck: 1,
    card: americorn
})