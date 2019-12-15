import { Card } from "../model/card";
import { CardType } from "../model/cardType";
import { GameState } from "../model/gameState";
import { Player } from "../model/player";

export const getCurrentPlayer = (gameState: GameState): Player => {

    const playerIndex = gameState.turn % gameState.players.length
    return gameState.players[playerIndex]
}

export const getCardInStable = (player: Player, cardName: string): Card | null => {

    const results = player.stable.filter(c => c.name === cardName)
    if(results.length)
      return results[0]

    return null
}

export const getCardCountInStable = (player: Player, cardName: string): number => {

    return player.stable.filter(c => c.name === cardName).length
}

export const getCardInHand = (player: Player, cardName: string): Card | null => {

    const results = player.hand.filter(c => c.name === cardName)
    if(results.length)
      return results[0]

    return null
}

export const removeCardHand = (player: Player, cardName: string) => {
    
    const index = player.hand.findIndex(card => card.name === cardName)
    player.hand.splice(index, 1)
}

export const removeCardStable = (player: Player, cardName: string) => {
    
    const index = player.stable.findIndex(card => card.name === cardName)
    if(index > -1)
        player.hand.splice(index, 1)
}

export const getCardCountInHand = (player: Player, cardName: string): number => {

    return player.hand.filter(c => c.name === cardName).length
}

export const isUnicorn = (card: Card): boolean => {

    return card.cardType === CardType.UNICORN_BABY  ||
           card.cardType === CardType.UNICORN_BASIC ||
           card.cardType === CardType.UNICORN_MAGIC 
}
