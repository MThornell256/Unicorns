import { Player } from "./player";
import { Card } from "./card";
import { TurnPhase } from "./turnPhase";

export interface GameState
{
    turn: number,
    turnPhase: TurnPhase,

    players: Player[],
    deck: Card[],
    discard: Card[]
}