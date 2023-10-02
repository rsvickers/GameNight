import { AppState } from "../AppState.js";

export class GameNightPlayersController {
    constructor() {
        // console.log(AppState.GameNightPlayers)
    }
    scorePoint(GameNightPlayers) {
        console.log('button was clicked', GameNightPlayers)
    }
}