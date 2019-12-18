import { Discard } from "../gameEngine/actions/discardActions";
import { CardAbilityParameters } from '../gameEngine/cardAbility';
import { Card } from "../gameEngine/model/card";
import { CardType } from "../gameEngine/model/cardType";
import { GameState } from '../gameEngine/model/gameState';
import { gameBuilder } from '../utils/gameBuilder';
import { getCurrentPlayer, getPlayer } from "../utils/gameStateUtils";

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

        requiresTargetPlayer: true,

        execute: (gameState: GameState, params: CardAbilityParameters): GameState => {
            
            const { targetPlayerId } = params 
            // Generate a random number between 
            const targetPlayer = getPlayer(gameState, targetPlayerId as number)
            const randomNumber = 123 % targetPlayer.hand.length

            const cardResult = targetPlayer.hand[randomNumber]

            Discard(gameState, targetPlayerId as number, cardResult.id as number)
            const currentPlayer = getCurrentPlayer(gameState)
            currentPlayer.hand.push(cardResult)

            return gameState
        }
    }
}

// Add card to game builder
gameBuilder.registerCardDefinition({
    countInDeck: 1,
    card: americorn
})