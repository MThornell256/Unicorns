import { CardAbilityParameters } from "../gameEngine/cardAbility";
import { Card } from "../gameEngine/model/card";
import { CardType } from "../gameEngine/model/cardType";
import { GameState } from '../gameEngine/model/gameState';
import { CardTypeOptions, PlayerDiscard } from '../gameEngine/model/player';
import { gameBuilder } from '../utils/gameBuilder';
import { getCurrentPlayerId, getPlayer } from '../utils/gameStateUtils';

const unicornOnTheCob: Card = {
    
    name: 'unicornOnTheCob',
    displayName: "Unicorn On The Cob",
    description: 'When this card enters your Stable, DRAW 2 cards and DISCARD a card.',
    cardType: CardType.UNICORN_MAGIC,

    enterStableAbility: {
        enforcePlay: true,

        execute: (gameState: GameState, params: CardAbilityParameters): GameState => {

            const currentPlayer = getPlayer(gameState, getCurrentPlayerId(gameState))

            currentPlayer.requiredActions.draw += 2
            PlayerDiscard(currentPlayer, CardTypeOptions.ANY)

            return gameState
        }
    }
}

// Add card to game builder
gameBuilder.registerCardDefinition({
    countInDeck: 1,
    card: unicornOnTheCob
})