import level4ClueView from "../views/level4ClueView.js";

export default class level4ClueController {
  #mainController;
  level4ClueViewCls;

  constructor(Controller) {
    this.mainController = Controller;
    this.level4ClueViewCls = new level4ClueView();
    this.level4ClueViewCls.addHandlerlevel4ClueInit(this); //initializing the view
    //could have passed just the function - but have to bind this. and it would prevent it from being oop.
  }
  generatelevel4Clue(smashTheCodeScore, imageArray) {
    this.level4ClueViewCls._generatePageMarkup(smashTheCodeScore, imageArray);
  }

  renderlevel5SubmitAnswerHandler = function () {
    this.mainController.renderLevel5();
  };
}
