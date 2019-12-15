import { DrawPhase } from "./drawPhase";
import { EndTurnPhase } from "./endTurnPhase";
import { NextPhase } from "./phaseUtil";
import { PlayPhase } from "./playPhase";
import { StartTurnPhase } from "./startTurnPhase";

export const GameApi = {

    startPhase: StartTurnPhase,
    drawPhase: DrawPhase,
    playPhase: PlayPhase,
    endPhase: EndTurnPhase,

    nextPhase: NextPhase
}
