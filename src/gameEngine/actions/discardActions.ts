import { TransferCard } from "../../utils/cardCollection";
import { matchCardTypeOptions } from "../../utils/cardTypeOptionsCollection";
import { getCardInHand, getCardInStable, getPlayer } from '../../utils/gameStateUtils';
import { GameState } from "../model/gameState";

export const Discard = (gameState: GameState, playerId: number, cardId: number) => {

    const player = getPlayer(gameState, playerId)
    const targetCard = getCardInHand(gameState, playerId, cardId)

    if(!targetCard) {
        throw Error('Player does not have card')
    }

    // Does Player Have Discards Allowed
    const match = matchCardTypeOptions(player.requiredActions.discard, targetCard.cardType)
    if(!match) {
        throw Error('Player can not remove this card type')
    }

    // remove the action requirement
    const index = player.requiredActions.discard.findIndex(op => op == match)
    player.requiredActions.discard.splice(index, 1)

    TransferCard(player.hand, gameState.discard, targetCard.id as number)
}

export const Sacrifice = (gameState: GameState, playerId: number, cardId: number) => {

    const player = getPlayer(gameState, playerId)
    const targetCard = getCardInStable(gameState, playerId, cardId)

    if(!targetCard) {
        throw Error('Player does not have card')
    }

    // Does Player Have Discards Allowed
    const match = matchCardTypeOptions(player.requiredActions.sacrifice, targetCard.cardType)
    if(!match) {
        throw Error('Player can not remove this card type')
    }

    // remove the action requirement
    const index = player.requiredActions.sacrifice.findIndex(op => op == match)
    player.requiredActions.sacrifice.splice(index, 1)

    TransferCard(player.stable, gameState.discard, targetCard.id as number)
}

export const Destroy = (gameState: GameState, playerId: number, targetPlayerId: number, cardId: number) => {

    const player = getPlayer(gameState, playerId)
    const targetPlayer = getPlayer(gameState, targetPlayerId)
    const targetCard = getCardInStable(gameState, targetPlayerId, cardId)

    if(!targetCard) {
        throw Error('Player does not have card')
    }

    // Does Player Have Discards Allowed
    const match = matchCardTypeOptions(player.requiredActions.destroy, targetCard.cardType)
    if(!match) {
        throw Error('Player can not remove this card type')
    }

    // remove the action requirement
    const index = player.requiredActions.destroy.findIndex(op => op == match)
    player.requiredActions.destroy.splice(index, 1)

    TransferCard(targetPlayer.stable, gameState.discard, targetCard.id as number)
}