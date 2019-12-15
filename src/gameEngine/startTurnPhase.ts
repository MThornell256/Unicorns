import { GameState } from "../model/gameState";
import { TurnPhase } from "../model/turnPhase";
import { getCurrentPlayer, getCardInStable } from "../utils/gameStateUtils";
import { Card } from "../model/card";

export interface StartTurnPhaseAction {
    cardName: string
}

export const StartTurnPhase = (gameState: GameState, startTurnPhaseAction:StartTurnPhaseAction): GameState => {

    // Validate Phase
    if(gameState.turnPhase !== TurnPhase.TURN_START) {
        throw Error('Invalid Phase')
    }

    const currentPlayer = getCurrentPlayer(gameState)
    const card = getCardInStable(currentPlayer, startTurnPhaseAction.cardName)

    if(!card) {
        throw Error('Invalid Move: Player Does Not Have Card In Stable')
    }

    if(!card.startOfTurnAbility) {
        throw Error('Invalid Move: Card Does Not Have Start Of Turn Ability')
    }

    return card.startOfTurnAbility(gameState)
}