import { Card } from "../model/card";
import { GameState } from "../model/gameState";
import { getCardInHand, getCardInStable, getPlayer } from '../utils/gameStateUtils';

export const DrawCard = (gameState: GameState, playerId: number) => {

    gameState.turnState.cardsDrawn++;
    
    // Draw Card From Deck
    const newCard = gameState.deck.pop() as Card
    gameState.players[playerId].hand.push(newCard)
}

export const DiscardCard = (gameState: GameState, playerId: number, cardId: number) => {
    gameState.turnState.cardsDiscarded++;

    const card = getCardInHand(gameState, playerId, cardId, true) || getCardInStable(gameState, playerId, cardId, true)

    if(!card) {
        throw Error('Player Does Not Have Card')
    } 

    gameState.discard.push(card)
}

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