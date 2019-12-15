import { GameApi } from "./gameEngine/gameApi";
import { GameState } from "./model/gameState";
import { TurnPhase } from "./model/turnPhase";


const gameState /*: GameState */ = {
    turn: 0,
    turnPhase: TurnPhase.TURN_START,
    
    players: [
        { name: 'player-1', hand: [102], stable: [] },
        { name: 'player-2', hand: [103], stable: [] },
        { name: 'player-3', hand: [100, 101], stable: [] },
    ],
    
    deck: [1,2,3,4,5,6,7,8,9,10],
    discard: [],
}

// attach the game api to window
const w = window as any
w.gameApi = GameApi
w.gs = gameState