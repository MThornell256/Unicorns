import { CardType } from '../model/cardType';
import { GameState } from "../model/gameState";
import { TurnPhase } from "../model/turnPhase";
import { getCardInHand, getCurrentPlayerId, getPlayer, isUnicorn, isUpgradeDowngrade } from '../utils/gameStateUtils';
import { CardAbilityParameters, ExecuteAbility, ValidateAbiltiyParams } from './cardAbility';

export const PlayPhase = (gameState: GameState, cardId: number, actionParams: CardAbilityParameters): GameState => {

    const { targetPlayerId } = actionParams
    const playerId = getCurrentPlayerId(gameState)

    // Validate Phase
    if(gameState.turnPhase !== TurnPhase.PLAY) {
        throw Error('Invalid Phase')
    }

    const card = getCardInHand(gameState, playerId, cardId)

    if(!card) {
        throw Error("Unable To Play Card; Card Is Not In Players Hand")
    }

    if(isUnicorn(card) || isUpgradeDowngrade(card)) {

        // put the card into the stable
        const targetPlayer = targetPlayerId
            ? getPlayer(gameState, targetPlayerId)
            : getPlayer(gameState, playerId)

        targetPlayer.stable.push(card)

        if(card.enterStableAbility && (actionParams.playAbility || card.enterStableAbility.enforcePlay)) {

            if(!ValidateAbiltiyParams(card.enterStableAbility, actionParams)) {
                throw Error("Enter stable ability params did not validate")
            }
            ExecuteAbility(gameState, card.enterStableAbility, actionParams)
        }

    } else if (card.cardType === CardType.MAGIC) {

        if(!card.magicAbility) {
            throw Error("Magic card has no magic ability?")
        }
        
        if(!ValidateAbiltiyParams(card.magicAbility, actionParams)) {
            throw Error("Magic ability params did not validate")
        }

        ExecuteAbility(gameState, card.magicAbility, actionParams)
        gameState.discard.push(card)
    }
    else 
    {
        throw Error("This Card Type Can Not Be Played At This Time")
    }

    // TODO: Remove card from hand
    //getCardInHand(gameState, playerId, cardId, true)

    return gameState
}