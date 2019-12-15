import { CardType } from "../model/cardType";
import { GameState } from "../model/gameState";
import { TurnPhase } from "../model/turnPhase";
import { getCardInHand, getCurrentPlayer, isUnicorn, removeCardHand } from "../utils/gameStateUtils";

export interface PlayPhaseAction {
    cardName: string,
    targetPlayerId?: number,
    targetCardId: string
}

export const PlayPhase = (gameState: GameState, playPhaseAction: PlayPhaseAction): GameState => {

    // Validate Phase
    if(gameState.turnPhase !== TurnPhase.PLAY) {
        throw Error('Invalid Phase')
    }

    const currentPlayer = getCurrentPlayer(gameState)
    const card = getCardInHand(currentPlayer, playPhaseAction.cardName)

    if(!card) {
        throw Error('Invalid Move: Player Does Not Have Card In Hand')
    }

    if(!card.startOfTurnAbility) {
        throw Error('Invalid Move: Card Does Not Have Start Of Turn Ability')
    }

    removeCardHand(currentPlayer, playPhaseAction.cardName)

    if(isUnicorn(card)) {
        currentPlayer.stable.push(card)
    }
    else if(card.cardType === CardType.UPGRADE || card.cardType === CardType.DOWNGRADE) {

        if(playPhaseAction.targetPlayerId) {
            gameState.players[playPhaseAction.targetPlayerId].stable.push(card)
        } else {
            currentPlayer.stable.push(card)
        }
    }

    // Play The Enter Stable Ability
    if(card.enterStableAbility) {
        card.enterStableAbility(gameState)
    }

    return gameState
}