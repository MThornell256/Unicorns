import { GameState } from "../model/gameState";
import { TurnPhase } from "../model/turnPhase";
import { Card } from "../model/card";
import { getCurrentPlayer } from "../utils/gameStateUtils";

export const DrawPhase = (gameState: GameState): GameState => {

    // Validate Phase
    if(gameState.turnPhase !== TurnPhase.DRAW) {
        throw Error('Invalid Phase')
    }
    
    // Draw Card From Deck
    const newCard = gameState.deck.pop() as Card

    // Add To Current Players Hand
    const currentPlayer = getCurrentPlayer(gameState)
    console.log('currentPlayer', currentPlayer)

    currentPlayer.hand.push(newCard)

    return gameState
}