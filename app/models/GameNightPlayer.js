export class GameNightPlayer {
    constructor(name, nickName, imgUrl) {
        this.name = name
        this.nickName = nickName
        this.imgUrl = imgUrl
        this.score = 0
    }
    get player() {
        return `
        <div class="col-12 text-center">
        <img class="player-img img-fluid"
          src="${this.imgUrl}"
          alt="${this.name}">
        <p class="fs-2 text-light">${this.name}</p>
        <p class="fs-2 text-light">"${this.nickName}"</p>
        <button onclick="app.GameNightPlayersController.scorePoint('${this.name}')" class="btn btn-primary">+</button>
        <p class="fs-2 text-light">${this.score}</p>
        <button class="btn btn-danger">-</button>
      </div>
      `
    }
}
