import { gameBuilder } from './gameBuilder';
import { DrawBabyCard, DrawCard } from '../gameEngine/actions/drawActions';
//import { DiscardFromHand, DiscardFromStable } from '../gameEngine/actions/discardActions';
import { EndTurnPhase } from "../gameEngine/endTurnPhase";
import { NextPhase } from "../gameEngine/actions/nextPhaseAction";
import { PlayPhase } from "../gameEngine/playPhase";
import { StartTurnPhase } from "../gameEngine/startTurnPhase";
import { Discard, Destroy, Sacrifice } from '../gameEngine/actions/discardActions';

export const GameApi = {

    gameBuilder,

    startPhase: StartTurnPhase,
    //drawPhase: DrawPhase,
    playPhase: PlayPhase,
    endPhase: EndTurnPhase,

    drawDeck: DrawCard,
    drawNursery: DrawBabyCard,

    discard: Discard,
    destroy: Destroy,
    sacrifice: Sacrifice,

    //play

    nextPhase: NextPhase
}
