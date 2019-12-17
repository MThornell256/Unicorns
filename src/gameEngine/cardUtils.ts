import { GameState } from '../model/gameState'
import { CardData, Card } from '../model/card'
import { getPlayer } from '../utils/gameStateUtils'
import { CardAbilityData } from './cardAbility'

export const getHand = (gameState: GameState, playerId: number): CardData[] => {

    return getPlayer(gameState, playerId).hand.map((card) => ({
        id: card.id,
        name: card.name,
        cardType: card.cardType,
        displayName: card.displayName,
        description: card.description,
    }) )
}

export const getStable = (gameState: GameState, playerId: number): CardData[] => {

    return getPlayer(gameState, playerId).stable.map((card) => ({
        id: card.id,
        name: card.name,
        cardType: card.cardType,
        displayName: card.displayName,
        description: card.description,
    }) )
}

export const getCardStartOfTurnAbilityRequirements = (gameState: GameState, playerId: number, cardId: number): CardAbilityData | null => {

    //getPlayer(gameState, playerId).getCard(cardId)
    return null
}

