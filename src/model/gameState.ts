import { Player } from "./player";
import { Card } from "./card";
import { TurnPhase } from "./turnPhase";

export interface GameState
{
    turn: number,
    turnPhase: TurnPhase,
    //turnState: TurnState,

    isModified: boolean,

    players: Player[],
    deck: Card[],
    discard: Card[]
}

// export interface TurnState
// {
//     requiresPlays: number,

//     requiresDraw: number,

//     requiresDiscards: number,
//     requiresDestroy: number,
//     requiresSacrifice: number,
// }