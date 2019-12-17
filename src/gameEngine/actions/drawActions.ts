import { Card } from "../model/card";
import { GameState } from "../model/gameState";
import { getCurrentPlayerId, getPlayer } from '../../utils/gameStateUtils';

export const DrawCard = (gameState: GameState, playerId: number) => {

    const currentPlayer = getPlayer(gameState, getCurrentPlayerId(gameState))

    if(currentPlayer.requiredActions.draw < 0) {
        throw Error('Player Can Not Draw')
    }
    
    currentPlayer.requiredActions.draw--
    
    // Draw Card From Deck
    const newCard = gameState.deck.pop() as Card
    currentPlayer.hand.push(newCard)
}

export const DrawBabyCard = (gameState: GameState, playerId: number) => {

    const currentPlayer = getPlayer(gameState, getCurrentPlayerId(gameState))

    if(currentPlayer.requiredActions.drawNursery < 0) {
        throw Error('Player Can Not Draw From Nursery')
    }

    currentPlayer.requiredActions.drawNursery--

    // TODO: push baby card into hand
    //currentPlayer.hand.push(newCard)
}