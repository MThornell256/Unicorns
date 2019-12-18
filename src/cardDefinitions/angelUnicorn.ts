import { Sacrifice } from "../gameEngine/actions/discardActions";
import { CardAbilityParameters } from "../gameEngine/cardAbility";
import { Card } from "../gameEngine/model/card";
import { CardType } from "../gameEngine/model/cardType";
import { GameState } from "../gameEngine/model/gameState";
import { gameBuilder } from '../utils/gameBuilder';
import { getCurrentPlayer, getCurrentPlayerId } from "../utils/gameStateUtils";

const angelUnicorn: Card = {
    
    name: 'angelUnicorn',
    displayName: "Angel Unicorn",
    description: 'If this card is in your Stable at the beginning of your turn, you may SACRIFICE this card. If you do, choose a Unicorn card from the discard pile and bring it directly into your Stable.',
    cardType: CardType.UNICORN_MAGIC,

    startOfTurnAbility: {
        requiresTargetCardsToSacrifice: 1,
        requiresTargetCards: 1,

        execute: (gameState: GameState, params: CardAbilityParameters): GameState => {

            const { targetCardsToSacrifice } = params
            const currentPlayer = getCurrentPlayer(gameState)
            Sacrifice(gameState, getCurrentPlayerId(gameState), targetCardsToSacrifice?.[0] as number)

            //gameState.discard.filter()
            //currentPlayer

            return gameState
        }
    }
}

// Add card to game builder
gameBuilder.registerCardDefinition({
    countInDeck: 1,
    card: angelUnicorn
})