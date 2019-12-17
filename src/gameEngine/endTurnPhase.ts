import { GameState } from "../model/gameState";
import { TurnPhase } from "../model/turnPhase";
import { getPlayer, getCurrentPlayerId } from '../utils/gameStateUtils';

export const EndTurnPhase = (gameState: GameState): GameState => {

    // Validate Phase
    if(gameState.turnPhase !== TurnPhase.TURN_END) {
        throw Error('Invalid Phase')
    }

    // check hand size
    const currentPlayer = getPlayer(gameState, getCurrentPlayerId(gameState))
    if(currentPlayer.hand.length > 7) {
        throw Error('Too many cards in hand to end turn')
    }

    return gameState
}