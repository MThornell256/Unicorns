import { CardType } from "./cardType";
import { GameAction } from "./gameAction";
import { GameState } from "./gameState";

export interface Card
{
    cardId: string,
    cardType: CardType,

    name: string,
    description: string,

    // Unicorn Ability
    startOfTurnAbility?: (gameState: GameState) => GameState,
    
    enterStableAbility?: (gameState: GameState) => GameState,
    //activatedAbility?: (gameState: GameState) => GameState,
    

    // Given an action; is it allowed to be played?
    validateAction?: (gameAction: GameAction) => boolean,

    // Apply any modifiers to the game state
    applyModifiers?: (gameState: GameState) => GameState,
    
    // Play the action on this card
    playAction?: (gameState: GameState) => GameState,
}