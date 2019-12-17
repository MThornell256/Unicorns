import { GameState } from '../model/gameState'

export const MergeDiscardPileIntoDeck = (gameState: GameState, playerId: number, cardId: number) => {

    gameState.deck = [...gameState.deck, ...gameState.discard]
    gameState.discard = []
}

export const ShuffleDeck = (gameState: GameState) => {
    // TODO
}

export const ApplyModifiers = (gameState: GameState) => {
    
    gameState.isModified = true

    // TODO
}