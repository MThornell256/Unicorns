import { CardAbilityParameters } from '../gameEngine/cardAbility';
import { Card } from "../gameEngine/model/card";
import { CardType } from "../gameEngine/model/cardType";
import { GameState } from '../gameEngine/model/gameState';
import { gameBuilder } from '../utils/gameBuilder';
import { getCardInHand, getCurrentPlayer, removeCardInHand } from '../utils/gameStateUtils';

const alluringNarwhal: Card = {
    
    name: 'alluringNarwhal',
    displayName: "Alluring Narwhal",
    description: 'When this card enters your Stable, you may STEAL an Upgrade card.',
    cardType: CardType.UNICORN_MAGIC,

    enterStableAbility: {

        requiresTargetCards: 1,
        requiresTargetPlayer: true,

        execute: (gameState: GameState, params: CardAbilityParameters): GameState => {

            const { targetPlayerId } = params
            const targetCardId = params.targetCardId?.[0]

            const card = getCardInHand(gameState, targetPlayerId as number, targetCardId as number)

            if(!card) {
                throw Error('Player does not have card')
            }

            if(card.cardType !== CardType.UPGRADE) {
                throw Error('Upgrade Cards Only')
            }

            removeCardInHand(gameState, targetPlayerId as number, targetCardId as number)
            getCurrentPlayer(gameState).stable.push(card)

            return gameState
        }
    }

}

// Add card to game builder
gameBuilder.registerCardDefinition({
    countInDeck: 1,
    card: alluringNarwhal
})