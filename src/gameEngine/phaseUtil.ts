import { GameState } from "../model/gameState";
import { TurnPhase } from "../model/turnPhase";

export const NextPhase = (gameState: GameState): GameState => {

    switch(gameState.turnPhase)
    {
        default:
            throw Error('invalid turn phase')
            break

        case TurnPhase.TURN_START:
            gameState.turnPhase = TurnPhase.DRAW
            break

        case TurnPhase.DRAW:
            gameState.turnPhase = TurnPhase.PLAY
            break

        case TurnPhase.PLAY:
            gameState.turnPhase = TurnPhase.TURN_END
            break

        case TurnPhase.TURN_END:
            gameState.turnPhase = TurnPhase.TURN_START
            gameState.turn++
            break
    }

    return gameState
}