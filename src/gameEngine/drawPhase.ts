// import { GameState } from "../model/gameState";
// import { getCurrentPlayerId } from '../utils/gameStateUtils';
// import { DrawCard, DiscardCard } from './basicActions';
/*
export const Draw = (gameState: GameState): GameState => {

    if(gameState.turnState.requiresDraw <= 0) {
        throw Error('Unable To Draw')
    }

    const currentPlayerId = getCurrentPlayerId(gameState)
    DrawCard(gameState, currentPlayerId)

    return gameState
}

export const Discard = (gameState: GameState, cardId: number): GameState => {

    if(gameState.turnState.requiresDiscards <= 0) {
        throw Error('Unable To Discard')
    }

    const currentPlayerId = getCurrentPlayerId(gameState)
    DiscardCard(gameState, currentPlayerId)

    return gameState
}*/