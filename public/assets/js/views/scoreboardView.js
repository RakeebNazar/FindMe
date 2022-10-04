import view from "../views/view.js";

export default class scoreboardView extends view {
  parentElement = "";
  scoreboardController;
  myScore;
  globalScores;
  constructor() {
    super();
  }

  _generatePageMarkup(myScore, globalScores) {
    this.myScore = myScore;
    this.globalScores = globalScores;

    // method overriding
    this.data = `<section class="Scoreboard">
    <header>
      <div class="logo">
        <img src="assets/Logo.png" alt="" />
        <h2 class="gameName">ind Me</h2>
      </div>
    </header>
    <p class="Scoreboard__title">Scoreboard</p>
    <div class="global__scoredboard">
      <p class="global__scoredboard--title">Global Scoreboard</p>
      <div class="globalScoreboard__statistics">
        <p class="one">User</p>
        <p class="two">Highest Score</p>
        ${this.renderGlobalScore().join("")}
  
     
      </div>
    </div>
    <div class="My__scoredboard">
      <p class="My__scoredboard--title">My Scoreboard</p>
      <div class="MyScoreboard__statistics">
        <p class="one">Rank</p>
        <p class="two">Highest Score</p>
      
  
        <p class="my rank">${this.getMyScore(0)}</p>
        <p class="my highScore">${this.getMyScore(1)}</p>
      
      </div>
    </div>
  </section> 
      `;
    super._generatePageMarkup();
    super.logo();
  }

  getMyScore(score) {
    if (Object.keys(this.myScore).length === 0) {
      return "";
    }

    if (score) {
      return this.myScore.highScore;
    } else return this.myScore.rank;
  }

  renderGlobalScore() {
    let globalScoresArray = new Array(this.globalScores.length);

    this.globalScores.forEach(function(currentUserScore) {
      if (Object.keys(currentUserScore).length !== 0) {
        globalScoresArray[
          currentUserScore.rank - 1
        ] = `<p class="user1 user">${currentUserScore.email}</p>
          <p class="user1 highScore">${currentUserScore.highScore}</p>`;
      }
    });

    return globalScoresArray;
  }
  addHandlerscoreboardInit(scoreboardController) {
    this.scoreboardController = scoreboardController;
  }
}
