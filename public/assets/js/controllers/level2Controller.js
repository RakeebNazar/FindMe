import level2View from "../views/level2View.js";

export default class level2Controller {
  #mainController;
  level2ViewCls;

  constructor(Controller) {
    this.mainController = Controller;
    this.level2ViewCls = new level2View();
    this.level2ViewCls.addHandlerlevel2Init(this); //initializing the view
    //could have passed just the function - but have to bind this. and it would prevent it from being oop.
  }
  generateLevel2() {
    this.level2ViewCls._generatePageMarkup();
    this.level2ViewCls.startLevel2Game();
    this.level2ViewCls.startTimer();
  }

  renderLevel3Handler = function (smashTheCodeScore) {
    this.mainController.renderLevel3(smashTheCodeScore);
  };
}
