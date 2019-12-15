import { GameState } from "../model/gameState";
import { TurnPhase } from "../model/turnPhase";
import { getCardInStable, getCurrentPlayerId } from '../utils/gameStateUtils';
import { CardAbilityParameters, ExecuteAbility, ValidateAbiltiyParams } from './playAbility';

export const StartTurnPhase = (gameState: GameState, cardId: number, actionParams: CardAbilityParameters): GameState => {

    //const { targetPlayerId } = actionParams
    const playerId = getCurrentPlayerId(gameState)
    
    // Validate Phase
    if(gameState.turnPhase !== TurnPhase.TURN_START) {
        throw Error('Invalid Phase')
    }

    const card = getCardInStable(gameState, playerId, cardId)

    if(!card) {
        throw Error("Unable To Play Card; Card Is Not In Players Stable")
    }

    if(card.startOfTurnAbility && (actionParams.playAbility || card.startOfTurnAbility.enforcePlay)) {

        if(!ValidateAbiltiyParams(card.startOfTurnAbility, actionParams)) {
            throw Error("Start of turn ability params did not validate")
        }

        ExecuteAbility(gameState, card.startOfTurnAbility, actionParams)
    }

    return gameState
}