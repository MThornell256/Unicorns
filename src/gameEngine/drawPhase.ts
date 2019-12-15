import { GameState } from "../model/gameState";
import { TurnPhase } from "../model/turnPhase";
import { DrawCard } from './basicActions';
import { getCurrentPlayerId } from '../utils/gameStateUtils';

export const DrawPhase = (gameState: GameState): GameState => {

    // Validate Phase
    if(gameState.turnPhase !== TurnPhase.DRAW) {
        throw Error('Invalid Phase')
    }

    const currentPlayerId = getCurrentPlayerId(gameState)
    DrawCard(gameState, currentPlayerId)

    return gameState
}