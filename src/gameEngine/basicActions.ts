import { Card } from "../model/card";
import { GameState } from "../model/gameState";
import { getCardInHand, getCardInStable, getPlayer, getCurrentPlayerId } from '../utils/gameStateUtils';

export const DrawCard = (gameState: GameState, playerId: number) => {

    const currentPlayer = getPlayer(gameState, getCurrentPlayerId(gameState))

    if(currentPlayer.requiredActions.draw < 0) {
        throw Error('Player Can Not Draw')
    }
    
    currentPlayer.requiredActions.draw--
    
    // Draw Card From Deck
    const newCard = gameState.deck.pop() as Card
    currentPlayer.hand.push(newCard)
}

export const DrawBabyCard = (gameState: GameState, playerId: number) => {

    const currentPlayer = getPlayer(gameState, getCurrentPlayerId(gameState))

    if(currentPlayer.requiredActions.drawNursery < 0) {
        throw Error('Player Can Not Draw From Nursery')
    }

    currentPlayer.requiredActions.drawNursery--

    // TODO: push baby card into hand
    //currentPlayer.hand.push(newCard)
}

const Discard = (gameState: GameState, playerId: number, cardId: number, fromHand: boolean) => {

    const currentPlayer = getPlayer(gameState, getCurrentPlayerId(gameState))

    if(currentPlayer.requiredActions.discard.length < 0) {
        throw Error('Player Can Not Discard')
    }

    const card = fromHand
        ? getCardInHand(gameState, playerId, cardId)
        : getCardInStable(gameState, playerId, cardId)

    if(!card) {
        throw Error('Player Does Not Have Card In Hand')
    } 

    //TODO discard Type -- at the moment types are not enforced
    currentPlayer.requiredActions.discard.pop()

    gameState.discard.push(card)
}

// Discard: Send a card from 'your hand' to the discard pile
export const DiscardFromHand = (gameState: GameState, playerId: number, cardId: number) => {

    return Discard(gameState, playerId, cardId, true)
}

// Sacrifice: Send a card in 'your Stable' to the discard pile.
// Destroy: Send a card from 'another players stable' to the discard pile.
export const DiscardFromStable = (gameState: GameState, playerId: number, cardId: number) => {

    return Discard(gameState, playerId, cardId, false)
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