import { Card } from "./card";
import { GameState } from "./gameState";
import { Player } from "./player";

export interface GameAction
{
    card: Card,
    cardOwner: Player,
    targetPlayer?: Player,
    gameState: GameState
}