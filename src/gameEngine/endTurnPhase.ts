import { GameState } from "../model/gameState";
import { TurnPhase } from "../model/turnPhase";

export const EndTurnPhase = (gameState: GameState): GameState => {

    // Validate Phase
    if(gameState.turnPhase !== TurnPhase.TURN_END) {
        throw Error('Invalid Phase')
    }
    
    return gameState
}