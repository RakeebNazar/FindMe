import level6EndView from "../views/level6EndView.js";

export default class level6EndController {
  #mainController;
  level6EndViewCls;

  constructor(Controller) {
    this.mainController = Controller;
    this.level6EndViewCls = new level6EndView();
    this.level6EndViewCls.addHandlerlevel6EndInit(this); //initializing the view
    //could have passed just the function - but have to bind this. and it would prevent it from being oop.
  }
  generatelevel6End(finalAnswers, smashTheCodeScore, imageArray) {
    this.level6EndViewCls._generatePageMarkup(
      finalAnswers,
      smashTheCodeScore,
      imageArray
    );
  }

  renderScoreboarddHandler = function(finalScore) {
    this.mainController.renderScoreboard(finalScore);
  };
}
