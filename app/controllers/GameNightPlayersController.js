import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";


function _drawGameNightPlayers() {
    const gameNightPlayers = AppState.GameNightPlayers
    let content = ''
    gameNightPlayers.forEach(player => content += player.playerCard)

    setHTML('gameNightPlayers', content)
}





export class GameNightPlayersController {
    constructor() {
        _drawGameNightPlayers()
        // console.log(AppState.GameNightPlayers)
    }
    scorePoint(gameNightPlayers) {
        console.log('button was clicked', gameNightPlayers)
    }
}