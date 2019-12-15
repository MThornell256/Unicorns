import { Card } from "../model/card";
import { CardType } from "../model/cardType";
import { GameState } from "../model/gameState";
import { Player } from "../model/player";

export const getCurrentPlayerId = (gameState: GameState): number => {

    return gameState.turn % gameState.players.length
}

export const getPlayer = (gameState: GameState, playerId: number): Player => {
    return gameState.players[playerId]
}

export const getCardInHand = (gameState: GameState, playerId: number, cardId: number, remove = false): Card | undefined => {

    const card = getPlayer(gameState, playerId).hand.find(card => card.id === cardId)

    if(card && remove) {
        getPlayer(gameState, playerId).hand = getPlayer(gameState, playerId).hand.filter(card => card.id !== cardId)
    }

    return card
}

export const getCardInStable = (gameState: GameState, playerId: number, cardId: number, remove = false): Card | undefined => {

    const card = getPlayer(gameState, playerId).stable.find(card => card.id === cardId)

    if(card && remove) {
        getPlayer(gameState, playerId).stable = getPlayer(gameState, playerId).stable.filter(card => card.id !== cardId)
    }

    return card
}

export const isUnicorn = (card: Card): boolean => {

    return card.cardType === CardType.UNICORN_BABY  ||
           card.cardType === CardType.UNICORN_BASIC ||
           card.cardType === CardType.UNICORN_MAGIC 
}

export const isUpgradeDowngrade = (card: Card): boolean => {

    return card.cardType === CardType.UPGRADE ||
           card.cardType === CardType.DOWNGRADE
}