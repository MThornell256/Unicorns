import { GameState } from "../model/gameState";
import { TurnPhase } from "../model/turnPhase";
import { getPlayer, getCurrentPlayerId } from '../utils/gameStateUtils';

export const NextPhase = (gameState: GameState): GameState => {

    validateEndOfPhase(gameState)
    const currentPlayer = getPlayer(gameState, getCurrentPlayerId(gameState))

    switch(gameState.turnPhase)
    {
        default:
            throw Error('invalid turn phase')
            break

        case TurnPhase.TURN_START:
            currentPlayer.requiredActions.draw = 1
            gameState.turnPhase = TurnPhase.DRAW
            break

        case TurnPhase.DRAW:
            currentPlayer.requiredActions.play = 1
            gameState.turnPhase = TurnPhase.PLAY
            break

        case TurnPhase.PLAY:
            gameState.turnPhase = TurnPhase.TURN_END
            if(currentPlayer.hand.length > 7) {
                //gameState.turnState.requiresDiscards = currentPlayer.hand.length - 7
            }
            break

        case TurnPhase.TURN_END:
            gameState.turnPhase = TurnPhase.TURN_START
            gameState.turn++
            break
    }

    return gameState
}

const validateEndOfPhase = (gameState: GameState) => {

    if(gameState.players.some(player => player.requiredActions.draw > 0)) {
        throw Error('A Player Needs To Draw A Card')
    }

    if(gameState.players.some(player => player.requiredActions.discard.length > 0)) {
        throw Error('A Player Needs To Discard A Card')
    }

    if(gameState.players.some(player => player.requiredActions.sacrifice.length > 0)) {
        throw Error('A Player Needs To Sacrifice A Card')
    }

    if(gameState.players.some(player => player.requiredActions.destroy.length > 0)) {
        throw Error('A Player Needs To Destroy A Card')
    }
}

