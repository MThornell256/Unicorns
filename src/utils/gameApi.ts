import { gameBuilder } from './gameBuilder';
import { DrawBabyCard, DrawCard } from '../gameEngine/actions/drawActions';
import { DiscardFromHand, DiscardFromStable } from '../gameEngine/actions/discardActions';
import { EndTurnPhase } from "../gameEngine/endTurnPhase";
import { NextPhase } from "../gameEngine/actions/nextPhaseAction";
import { PlayPhase } from "../gameEngine/playPhase";
import { StartTurnPhase } from "../gameEngine/startTurnPhase";

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
