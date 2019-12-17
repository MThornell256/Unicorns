import { GameState } from "../model/gameState";
import { getCardInHand, getCardInStable, getCurrentPlayerId, getPlayer } from '../../utils/gameStateUtils';

const Discard = (gameState: GameState, playerId: number, cardId: number, fromHand: boolean) => {

    const currentPlayer = getPlayer(gameState, getCurrentPlayerId(gameState))

    if(currentPlayer.requiredActions.discard.length < 0) {
        throw Error('Player Can Not Discard')
    }

    const card = fromHand
        ? getCardInHand(gameState, playerId, cardId)
        : getCardInStable(gameState, playerId, cardId)

    if(!card) {
        throw Error('Player Does Not Have Card In Hand')
    } 

    //TODO discard Type -- at the moment types are not enforced
    currentPlayer.requiredActions.discard.pop()

    gameState.discard.push(card)
}

// Discard: Send a card from 'your hand' to the discard pile
export const DiscardFromHand = (gameState: GameState, playerId: number, cardId: number) => {

    return Discard(gameState, playerId, cardId, true)
}

// Sacrifice: Send a card in 'your Stable' to the discard pile.
// Destroy: Send a card from 'another players stable' to the discard pile.
export const DiscardFromStable = (gameState: GameState, playerId: number, cardId: number) => {

    return Discard(gameState, playerId, cardId, false)
}

