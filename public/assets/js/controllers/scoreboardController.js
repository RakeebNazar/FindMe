import scoreboardView from "../views/scoreboardView.js";

export default class scoreboardController {
  #mainController;
  scoreboardViewCls;

  constructor(Controller) {
    this.mainController = Controller;
    this.scoreboardViewCls = new scoreboardView();
    this.scoreboardViewCls.addHandlerscoreboardInit(this); //initializing the view
    //could have passed just the function - but have to bind this. and it would prevent it from being oop.
  }
  generateScoreboard(myScore, globalScores) {
    this.scoreboardViewCls._generatePageMarkup(myScore, globalScores);
  }

  // renderScoreboarddHandler = function () {
  //   this.mainController.renderScoreboard();
  // };
}
