import level5SubmitAnswerView from "../views/level5SubmitAnswerView.js";

export default class level5SubmitAnswerController {
  #mainController;
  level5SubmitAnswerViewCls;

  constructor(Controller) {
    this.mainController = Controller;
    this.level5SubmitAnswerViewCls = new level5SubmitAnswerView();
    this.level5SubmitAnswerViewCls.addHandlerlevel5SubmitAnswerInit(this); //initializing the view
    //could have passed just the function - but have to bind this. and it would prevent it from being oop.
  }
  generatelevel5SubmitAnswer() {
    this.level5SubmitAnswerViewCls._generatePageMarkup();
  }

  renderlevel6EndHandler = function (finalAnswers) {
    this.mainController.renderLevel6(finalAnswers);
  };
}
