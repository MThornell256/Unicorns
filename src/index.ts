import { GameApi } from "./utils/gameApi";

// attach the game api to window
const w = window as any
w.gameApi = GameApi