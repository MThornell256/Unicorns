import { Card } from "./card";


export interface Player
{
    name: string,
    hand: Card[],
    stable: Card[]

    requiredActions: PlayerActions
}

export interface PlayerActions {

    draw: number,
    drawNursery: number,
    play: number,

    discard: CardTypeOptions[],
    sacrifice: CardTypeOptions[],
    destroy: CardTypeOptions[]
}

export enum CardTypeOptions
{
    ERROR,

    UNICORN_BABY,
    UNICORN_BASIC,
    UNICORN_MAGIC,
    UPGRADE,
    DOWNGRADE,
    MAGIC,
    INSTANT,

    // AGGREGATE TYPES
    ANY,
    UNICORN,
    ANYGRADE,
}

export const PlayerDiscard = (player: Player, cardType: CardTypeOptions, count: number = 1) => {

    for (let i = 0; i < count; i++) {
        player.requiredActions.discard.push(cardType)
    }
}

export const PlayerSacrifice = (player: Player, cardType: CardTypeOptions, count: number = 1) => {

    for (let i = 0; i < count; i++) {
        player.requiredActions.sacrifice.push(cardType)
    }
}

export const PlayerDestroy = (player: Player, cardType: CardTypeOptions, count: number = 1) => {

    for (let i = 0; i < count; i++) {
        player.requiredActions.destroy.push(cardType)
    }
}