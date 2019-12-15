import { GameState } from '../model/gameState'

export interface CardAbility
{
    enforcePlay: boolean,             // This ability must be played; there is no opt-out
    requiresTargetPlayers?: boolean,   // This ability requires a target player
    
    requiresTargetCards?: number,
    requiresTargetCardsToDestroy: number,
    requiresTargetCardsToSacrifice: number,

    execute: (gameState: GameState, params: CardAbilityParameters) => GameState
}

export interface CardAbilityParameters
{
    playAbility: boolean,
    targetPlayerId?: number,
    targetCardId?: number[]

    targetCardsToDestroy?: number[],
    targetCardsToSacrifice?: number[],
}

export const ValidateAbiltiyParams = (ability: CardAbility, params: CardAbilityParameters): boolean =>  {

    if(ability.requiresTargetPlayers && params.targetPlayerId === undefined) {
        return false
    }

    if(ability.requiresTargetCards && ability.requiresTargetCards !== params.targetCardId?.length) {
        return false
    }

    if(ability.requiresTargetCardsToDestroy && ability.requiresTargetCardsToDestroy !== params.targetCardsToDestroy?.length) {
        return false
    }

    if(ability.requiresTargetCardsToSacrifice && ability.requiresTargetCardsToSacrifice !== params.targetCardsToSacrifice?.length) {
        return false
    }

    return true
}

export const ExecuteAbility = (gameState: GameState, ability: CardAbility, params: CardAbilityParameters) => {

}