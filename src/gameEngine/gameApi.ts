import { gameBuilder } from '../utils/gameBuilder';
import { DiscardFromHand, DiscardFromStable, DrawBabyCard, DrawCard } from './basicActions';
import { EndTurnPhase } from "./endTurnPhase";
import { NextPhase } from "./phaseUtil";
import { PlayPhase } from "./playPhase";
import { StartTurnPhase } from "./startTurnPhase";

export const GameApi = {

    gameBuilder,

    startPhase: StartTurnPhase,
    //drawPhase: DrawPhase,
    playPhase: PlayPhase,
    endPhase: EndTurnPhase,

    drawDeck: DrawCard,
    drawNursery: DrawBabyCard,
    discardFromHand: DiscardFromHand,
    discardFromStable: DiscardFromStable,

    //play

    nextPhase: NextPhase
}
