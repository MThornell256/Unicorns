import { CardAbility } from '../gameEngine/cardAbility';
import { CardType } from "./cardType";
import { GameState } from "./gameState";

export interface CardData
{
    id?: number,         // unique for each card in the deck
    name: string,       // unique for each card in the deck with the same name
    cardType: CardType, // cardType: the category of this card

    displayName: string,
    description: string,
}

export interface Card extends CardData
{
    // Magic Unicorn Abilities
    startOfTurnAbility?: CardAbility,
    enterStableAbility?: CardAbility,

    // Magic Card Ability
    magicAbility?: CardAbility

    // Instant Ability
    instantAbility?: CardAbility

    // Upgrade/Downgrade Modifier
    modifier?: Modifier
}

export interface Modifier
{
    enforcePlay: boolean,                        // This ability must be played; there is no opt-out
    validate: (gameState: GameState) => boolean, // can this modifier be applied
    apply: (gameState: GameState) => GameState   // apply the modifier
}